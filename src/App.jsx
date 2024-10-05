import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import HeraTrial from './events/HeraTrial';
import NotFound from './pages/NotFound'; // Create this component
import Home2 from './pages/Home2';
import Surprise from './events/Surprise';
import { Capture } from './events/Capture';
import Coding from './events/coding';
import Hackathon from './events/Hackathon';
import { Iot } from './events/Iot';
import Itmanager from './events/Itmanager';
import Itquiz from './events/Itquiz';
import Photography from './events/Photography';
import Treasure from './events/Treasure';
import Uiux from './events/Uiux';
import Gaming from './events/Gaming';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home2 />} />
        <Route path="/events" element={<HeraTrial />} />
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
  );
}

export default App;
