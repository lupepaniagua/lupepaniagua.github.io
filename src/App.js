import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';
import Work from './components/work/Work';
import Play from './components/play/Play';
import About from './components/about/About';
import Error from './components/error404/Error';
import Emocha from './components/emochaPage/Emocha';
import Bfi from './components/bfiPage/Bfi';
import Sleep from './components/sleepPage/Sleep';
import WorkStudy from './components/workStudyPage/WorkStudy';
import SpotifyWidget from './components/spotifyPage/SpotifyWidget';
import Nectar  from './components/nectarPage/Nectar';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route exact path='work' element={<Work />}>
            </Route>
              <Route path='/work/emocha' element={<Emocha />}></Route>
              <Route path='/work/bfi' element={<Bfi />}></Route>
              <Route path='/work/sleep' element={<Sleep />}></Route>
              <Route path='/work/work-study' element={<WorkStudy />}></Route>
              <Route path='/work/spotify-miniplayer' element={<SpotifyWidget />}></Route>
              <Route path='/work/nectar' element={<Nectar />}></Route>
            <Route path='play' element={<Play />} />
            <Route path='about' element={<About />} />
            <Route path='*' element={<Error />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
