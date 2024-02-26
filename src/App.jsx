import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import ProjectDetailContainer from './components/ProjectDetailContainer/ProjectDetailContainer'; // Importa el componente ProjectDetailContainer
import ProjectListContainer from './components/ProjectListContainer/ProjectListContainer'; // Importa el componente ProjectListContainer
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectListContainer />} /> {/* Agrega la ruta para la lista de proyectos */}
          <Route path="/project/:id" element={<ProjectDetailContainer />} /> {/* Agrega la ruta para el detalle del proyecto */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
