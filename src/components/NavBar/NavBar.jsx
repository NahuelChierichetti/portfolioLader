import React, { useState } from 'react';
import LogoLader from '../../assets/img/logo-lader.png';
import './NavBar.css';
import { Link } from 'react-router-dom';
import { RiMenu3Line } from 'react-icons/ri';
import { motion, AnimatePresence } from 'framer-motion';
import { MdClose } from "react-icons/md";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const menuVariants = {
    hidden: {
      opacity: 0,
      y: '-100vh',
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <div className="container-fluid mx-auto navbar-container">
      <header className="top-0 z-50 container mx-auto">
        <nav className="flex items-center justify-between p-4 lg:px-8 bg-transparent navBar-menu">
          <div className="flex items-center">
            <Link to={'/'} aria-label="Homepage" className="logo-img">
              <img src={LogoLader} alt="Agencia Lader" className="w-[170px] h-[62px]" />
            </Link>
          </div>
          <div className="hidden lg:flex items-center lg:flex-3">
            <ul className="flex space-x-12">
              <li className="uppercase link-menu">
                <Link to={'/categoria/DesarrolloWeb'}>Desarrollo Web</Link>
              </li>
              <li className="uppercase link-menu">
                <Link to={'/categoria/DiseñoUXUI'}>Diseño UX/UI</Link>
              </li>
              <li className="uppercase link-menu">
                <Link to={'/categoria/DiseñoGrafico'}>Diseño Gráfico</Link>
              </li>
              <li className="uppercase link-menu">
                <Link to={'/categoria/RedesSociales'}>Redes Sociales</Link>
              </li>
            </ul>
          </div>
          <div className="hidden lg:flex">
            <button type="button" className="btn-hablemos bg-transparent hover:bg-verde text-bgBlanco hover:text-bgVioleta py-2 px-6 border-[1px] border-solid border-bgWhite hover:border-bgVioleta rounded-[20px]">
              Hablemos
            </button>
          </div>
          <div className="lg:hidden">
            <RiMenu3Line className="text-3xl text-bgBlanco cursor-pointer" onClick={toggleMenu} />
          </div>
        </nav>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="fixed top-0 left-0 w-full h-full bg-bgVioleta text-bgBlanco flex flex-col menuMobile"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
                <button className="text-bgBlanco" onClick={closeMenu}><MdClose /></button>  
                <ul className="flex flex-col space-y-4 content-menu">
                    <li className="uppercase link-menu">
                    <Link to={'/categoria/DesarrolloWeb'} onClick={closeMenu}>Desarrollo Web</Link>
                    </li>
                    <li className="uppercase link-menu">
                    <Link to={'/categoria/DiseñoUXUI'} onClick={closeMenu}>Diseño UX/UI</Link>
                    </li>
                    <li className="uppercase link-menu">
                    <Link to={'/categoria/DiseñoGrafico'} onClick={closeMenu}>Diseño Gráfico</Link>
                    </li>
                    <li className="uppercase link-menu">
                    <Link to={'/categoria/RedesSociales'} onClick={closeMenu}>Redes Sociales</Link>
                    </li>
                </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
};

export default NavBar;