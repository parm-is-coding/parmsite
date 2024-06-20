import React from 'react';
import { BrowserRouter,Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './Pages/home';
import About from './Pages/about';
import Projects from './Pages/projects';
import Contact from './Pages/contact';
import Resume from './Pages/resume';





function App() {
  return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="/resume" element={<Resume/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;



