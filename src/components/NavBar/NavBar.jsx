import LogoLader from '../../assets/img/logo-lader.png'
import './NavBar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="container-fluid mx-auto navbar-container">
        <header className="top-0 z-50 container mx-auto">
            <nav className="flex items-center justify-between p-4 lg:px-8 bg-transparent">
                <div className="flex items-center">
                    <a href="#" aria-label="Homepage">
                        <img src={LogoLader} alt="Agencia Lader" className='w-[150px] h-[60px]'/>
                    </a>
                </div>
                <div className='flex items-center lg:flex-3'>
                    <ul className='flex space-x-12'> 
                        <li className='uppercase'><a href="#proyectos" smooth={true} duration={1000}>Proyectos</a></li>
                        <li className='uppercase'>Clientes</li>
                        <li className='uppercase'>Contacto</li>
                    </ul>
                </div>
                <div className="flex">
                    <button type="button" className="bg-transparent hover:bg-verde text-bgBlanco hover:text-bgVioleta py-2 px-6 border-[1px] border-solid border-bgWhite hover:border-bgVioleta rounded-[20px]">Hablemos</button>
                </div>
            </nav>
        </header>
    </div>
  )
}

export default NavBar