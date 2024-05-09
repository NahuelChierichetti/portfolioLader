import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './ProjectDetail.css';
import { motion, useInView } from 'framer-motion';

const ProjectDetail = ({ imagen, imagen1, imagen2, nombre, servicio, fechaFinalizacion, descripcion, imagenes, link, tipoProyecto, subtitulo }) => {
    
    const variants = {
        inicial: {
            opacity: 0,
            scale: .5
        },
        animate: () => ({
            opacity: 1,
            scale: 1,
            transition: {
                duration: 1.5,
                delay: 2.5
            }
        })
    };

    const ref = useRef(null)
    const enVista = useInView(ref, {
        once: true
    })

    return (
        <div className='container-detail'>
            <div className="container-detail-heading">
                <motion.div 
                    initial = {{
                        opacity: 0,
                        y: 50
                    }}
                    animate = {{
                        opacity: 1, 
                        y: 0,
                        transition: {
                            duration: 1.5,
                            delay: 1.8
                        }
                    }}
                    className='img1'
                >
                    <img src={imagen1} alt={nombre} />
                </motion.div>
                <div className="detail-title">
                    <motion.h2
                        initial = {{
                            opacity: 0, 
                            y: 50
                        }}
                        animate = {{
                            opacity: 1, 
                            y: 0,
                            transition: {
                                duration: 1.5,
                                delay: 1.5
                            }
                        }}
                    >
                        {nombre}
                    </motion.h2>
                    <motion.h3
                        initial = {{
                            opacity: 0, 
                            y: 50
                        }}
                        animate = {{
                            opacity: 1, 
                            y: 0,
                            transition: {
                                duration: 1.5,
                                delay: 1.5
                            }
                        }}
                        className='subtitle-detail'
                    >
                        {subtitulo}
                    </motion.h3>
                    <motion.div 
                        initial = {{
                            opacity: 0,
                            y: 50
                        }}
                        animate = {{
                            opacity: 1, 
                            y: 0,
                            transition: {
                                duration: 1.5,
                                delay: 1.7
                            }
                        }}
                    >
                        <Link to={link} target='_blank' className='link-visitar-web'>Visitar Sitio Web</Link>
                    </motion.div>
                </div>
            </div>
            <div className="container-detail-subheading">
                <motion.div
                    initial = {{
                        opacity: 0, 
                        y: 50
                    }}
                    animate = {{
                        opacity: 1, 
                        y: 0,
                        transition: {
                            duration: 1.5,
                            delay: 1.5
                        }
                    }}
                    className="detail-datos"
                >
                    <p className='title-serv'>Servicios</p>
                    <p className='subtitle-serv'>
                        {Array.isArray(servicio) ? servicio.map((item, index) => (
                            index !== servicio.length - 1 ? `${item}, ` : item
                        )) : servicio}
                    </p>
                    {tipoProyecto ? <p className='title-serv'>Tipo de Proyecto</p> : ''}
                    {tipoProyecto ? <p className='subtitle-serv'>{tipoProyecto}</p> : ''}
                    <p className='title-serv'>Fecha de finalización</p>
                    <p className='subtitle-serv'>{fechaFinalizacion}</p>
                </motion.div>
                <motion.div 
                    initial = {{
                        opacity: 0,
                        y: 50
                    }}
                    animate = {{
                        opacity: 1, 
                        y: 0,
                        transition: {
                            duration: 1.5,
                            delay: 1.8
                        }
                    }}
                    className='img2'
                >
                    <img src={imagen2} alt={nombre} />
                </motion.div>
            </div>
            <div className='container-detail-description'>
                <motion.p
                    initial = {{
                        opacity: 0, 
                        y: 50
                    }}
                    animate = {{
                        opacity: 1, 
                        y: 0,
                        transition: {
                            duration: 1.5,
                            delay: 3.5
                        }
                    }}
                >
                    {descripcion}
                </motion.p>
            </div>
            <div className='container-detail-images'>
                <motion.div
                    ref={ref}
                    initial="inicial"
                    animate="animate"
                    variants={variants}
                >
                    {Array.isArray(imagenes) ? (
                        imagenes.map((imagenItem, index) => (
                            <img src={imagenItem} key={index} alt="" />
                        ))
                    ) : (
                       ''
                    )}
                </motion.div>
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ 
                    opacity: 1,
                    transition: {
                        duration: 5
                    }
                }}
                className='container-return-proyectos'>
                <Link to="/" className='link-return'>Volver atrás</Link>
                <Link to={link} target='_blank' className='link-web'>Visitar web</Link>
            </motion.div>
        </div>
    );
}

export default ProjectDetail;