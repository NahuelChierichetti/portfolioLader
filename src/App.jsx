import './App.css'
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
 
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
