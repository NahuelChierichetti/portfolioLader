import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './ProjectDetail.css';
import { motion, useInView } from 'framer-motion';

const ProjectDetail = ({ imagen, nombre, servicio, fechaFinalizacion, descripcion, imagenes, link, tipoProyecto, cliente }) => {
    
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
                                delay: 1.5
                            }
                        }}
                    >
                        {descripcion}
                    </motion.p>
                </div>
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
            </div>
            <div className='container-detail-images'>
                <motion.div
                    ref={ref}
                    initial="inicial"
                    animate="animate"
                    variants={variants}
                >
                    <img src={imagen} alt={nombre} />
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