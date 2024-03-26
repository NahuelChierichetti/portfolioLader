import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import ProjectDetailContainer from './components/ProjectDetailContainer/ProjectDetailContainer';
import ProjectListContainer from './components/ProjectListContainer/ProjectListContainer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Admin from './components/Admin/Admin';
import Panel from './components/Panel/Panel';
import WhatsAppLink from './components/WhatsAppLink/WhatsAppLink';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/panel" element={<Panel />} />
          <Route path="/categoria/:categoryId" element={<ProjectListContainer />} />
          <Route path="/project/:id" element={<ProjectDetailContainer />} />
        </Routes>
        <WhatsAppLink phoneNumber="541124904374" message="Hola! Vi tu portafolio y me gustó, me podrías dar más información?" />
      </div>
    </Router>
  );
}

export default App;