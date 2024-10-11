import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import NotFound from './pages/NotFound'; 
import Events from './pages/Events';
import Home2 from './pages/Home2';
import {Surprise} from './events/Surprise';
import { Capture } from './events/Capture';
import { Coding } from './events/Coding';
import {Hackathon} from './events/Hackathon';
import { Iot } from './events/Iot';
import {Itmanager} from './events/Itmanager';
import {Itquiz} from './events/Itquiz';
import {Photography} from './events/Photography';
import {Treasure} from './events/Treasure';
import {Uiux} from './events/Uiux';
import {Gaming} from './events/Gaming';
import {AnimatePresence} from 'framer-motion'
import './animation/Transition.css'
import "aos/dist/aos.css"
import  AOS from 'aos';
import { useEffect } from 'react';


function App() {
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <AnimatePresence mode='wait'>
      <BrowserRouter>
      <Routes location={location} key={location.pathname} >
        <Route path="/" element={<Home2 />} />
        <Route path="/events" element={<Events />} />
        <Route path="/about" element={<About />} />
        <Route path="/capture_the_flag" element={<Capture />} />
        <Route path="/coding_debugging" element={<Coding />} />
        <Route path="/hackathon" element={<Hackathon />} />
        <Route path="/iot" element={<Iot />} />
        <Route path="/it_manager" element={<Itmanager />} />
        <Route path="/it_quiz" element={<Itquiz />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/surprise" element={<Surprise />} />
        <Route path="/treasure" element={<Treasure />} />
        <Route path="/uiux" element={<Uiux />} />
        <Route path="/gaming" element={<Gaming />} />
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </BrowserRouter>
    </AnimatePresence>
  );
}

export default App;
