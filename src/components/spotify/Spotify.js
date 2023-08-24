import querystring from "querystring";
import { Buffer } from "buffer";

window.Buffer = window.Buffer || Buffer;

const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;

const MAX_FAILED_ATTEMPTS = 3; // Define the maximum failed attempts before stopping

const client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const client_secret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.REACT_APP_SPOTIFY_REFRESH_TOKEN;

let failedAttempts = 0;

const getAccessToken = async () => {
  const basic = Buffer.from(`${client_id}:${client_secret}`, 'binary').toString("base64");

  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: querystring.stringify({
      grant_type: "refresh_token",
      refresh_token,
    }),
  });

  const responseData = await response.json();
  return responseData.access_token;
};

export const getNowPlayingItem = async () => {
  if (failedAttempts >= MAX_FAILED_ATTEMPTS) {
    console.log("Max failed attempts reached. Stopping data fetching.");
    return null;
  }

  const access_token = await getAccessToken();

  try {
    const response = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    if (response.status === 204 || response.status > 400) {
      failedAttempts++;
      console.log("API request failed. Failed attempts:", failedAttempts);
      return null;
    }

    failedAttempts = 0; 

    const song = await response.json();
    const artist = song.item.artists.map((_artist) => _artist.name).join(", ");
    const isPlaying = song.is_playing;
    const songUrl = song.item.external_urls.spotify;
    const title = song.item.name;

    return {
      artist,
      isPlaying,
      songUrl,
      title,
    };
  } catch (error) {
    failedAttempts++;
    console.error("API Request Error:", error);
    console.log("Failed attempts:", failedAttempts);
    return null;
  }
};
