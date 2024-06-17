import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProjectDetail.css';
import { motion, useInView } from 'framer-motion';

const ProjectDetail = ({ logo, usosLogo, imagen1, imagen2, nombre, servicio, fechaFinalizacion, descripcion, imagenes, link, tipoProyecto, colores, subtitulo }) => {
    
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

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const ref = useRef(null)
    const enVista = useInView(ref, {
        once: true
    })

    const isGraphicDesign = Array.isArray(servicio) ? servicio.includes("Diseño Gráfico") : servicio === "Diseño Gráfico";

    return (
        !isGraphicDesign ? (
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
        ) : (
            <div className='container-detail-design'>
                <div className="container-detail-logo-design">
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
                        className='logo-design'
                    >
                        <img src={logo} alt={nombre} />
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
                <div className="container-mockup">
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
                        className='img1-design'
                    >
                        <img src={usosLogo} alt={nombre} />
                    </motion.div>
                </div>
                <div className='container-design-description'>
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
                        Sobre la identidad
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
                                delay: 3.5
                            }
                        }}
                    >
                        {descripcion}
                    </motion.p>
                </div>
                <div className='container-design-colores'>
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
                        Paleta de colores
                    </motion.h2>
                    <motion.div
                        ref={ref}
                        initial="inicial"
                        animate="animate"
                        variants={variants}
                        className='itemsColores'
                    >
                        {Array.isArray(colores) ? (
                            colores.map((colorItem, index) => (
                                <div key={index} className='cardColor' >
                                    <div className="color" style={{ backgroundColor: colorItem, height: '180px', width: '180px' }}></div>
                                    <p>{colorItem}</p>
                                </div>
                            ))
                        ) : (
                           ''
                        )}
                    </motion.div>
                </div>
                <div className='container-design-tipografias'>
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
                        Tipografía
                    </motion.h2>
                    <motion.div
                        ref={ref}
                        initial="inicial"
                        animate="animate"
                        variants={variants}
                        className='img-tipografias'
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
                <div className="container-mockup">
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
                        className='img2-design'
                    >
                        <img src={imagen1} alt={nombre} />
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
                        className='img2-design'
                    >
                        <img src={imagen2} alt={nombre} />
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
                    {isGraphicDesign ? '' : <Link to={link} target='_blank' className='link-web'>Visitar web</Link>}
                </motion.div>
            </div>
        )
    );
}

export default ProjectDetail;