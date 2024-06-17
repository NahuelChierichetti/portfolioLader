import React, { useRef } from 'react'
import './Project.css'
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { HiArrowTopRightOnSquare } from "react-icons/hi2";

const variants = {
  inicial: {
    opacity: 0,
    scale: 0
  },
  animate: ({index}) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      delay: index*.3
    }
  })
}

const Project = ({ id, nombre, imagen, servicio, index, tipoProyecto, link, subtitulo }) => {
    const divStyle = {
      backgroundImage: `url(${imagen})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    };

const isGraphicDesign = Array.isArray(servicio) ? servicio.includes("Diseño Gráfico") : servicio === "Diseño Gráfico";
console.log(isGraphicDesign)
  
    return (
      <>
      <motion.div
        initial="inicial"
        animate="animate"
        variants={variants}
        custom={{index}}
        className='card-proyecto' 
        style={divStyle}
      >
        <div className='container-visitar'>
          <Link to={`/project/${id}`} className='link-proyecto'><span className='ver-proyecto'>Ver Proyecto</span></Link>
          {!isGraphicDesign ? <Link to={link} className='link-proyecto' target='_blank'><span className='ver-proyecto'>Visitar web</span></Link> : '' }
        </div>
      </motion.div>
      <motion.div
        initial="inicial"
        animate="animate"
        variants={variants}
        custom={{index}}
        className='subtitle-proyecto'
      >
        {tipoProyecto ? <p className='tipo-proyecto'>{tipoProyecto}</p> : ''}
        <p className='tag-proyecto'>{servicio.join(' | ')}</p>
        <p className='title-proyecto'>{nombre} {subtitulo}</p>
      </motion.div>
      </>
    );
};

export default Project
