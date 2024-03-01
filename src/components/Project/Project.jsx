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
      delay: index*.1
    }
  })
}

const Project = ({ id, nombre, imagen, servicio, index }) => {
    const divStyle = {
      backgroundImage: `url(${imagen})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    };

    const ref = useRef(null)
    const estaVisto = useInView(ref, {
      once: true
    }) 
  
    return (
      <motion.div
        ref={ref}
        initial="inicial"
        animate={estaVisto ? "animate" : ""}
        variants={variants}
        custom={{index}}
        className='card-proyecto' 
        style={divStyle}
      >
        <Link to={`/project/${id}`} className='link-proyecto'><span className='ver-proyecto'>Ver Proyecto</span></Link>
        <p className='tag-proyecto'>{servicio.join(' | ')}</p>
        <p className='title-proyecto'>{nombre}</p>
      </motion.div>
    );
};

export default Project
