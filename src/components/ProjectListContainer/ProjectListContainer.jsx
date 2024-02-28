import React, { useEffect, useState, useRef } from 'react';
import { db } from '../../main';
import { collection, where, query, getDocs } from 'firebase/firestore';
import ProjectList from '../ProjectList/ProjectList';
import './ProjectListContainer.css'
import { motion, useInView } from 'framer-motion'

const ProjectListContainer = () => {
    const [data, setData] = useState([]);
    const [selectedService, setSelectedService] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let queryRef = collection(db, 'proyectos');
                if (selectedService) {
                    queryRef = query(collection(db, 'proyectos'), where('servicio', 'array-contains', selectedService));
                }

                const querySnapshot = await getDocs(queryRef);
                const projects = querySnapshot.docs.map(doc => ({
                    ...doc.data(),
                    id: doc.id
                }));
                setData(projects);
            } catch (error) {
                console.error("Error fetching documents: ", error);
            }
        };
        fetchData();
    }, [selectedService]);

    const handleServiceClick = (service) => {
        setSelectedService(service);
    };

    const ref = useRef(null)
    const enVista = useInView(ref, {
        once: true
    })

    return (
        <div id="proyectos">
                <div className='title-proyectos'>
                    <motion.h2
                        ref={ref}
                        initial = {{
                            opacity: 0,
                        }}
                        animate = {{
                            opacity: 1,
                            transition: {
                                duration: 1.5,
                                delay: .5
                            }
                        }}
                    >
                        Proyectos realizados
                    </motion.h2>
                </div>
                <div className='container-heading-proyectos'>
                <div className='heading-proyectos'>
                    <motion.p
                        ref={ref}
                        initial = {{
                            opacity: 0,
                        }}
                        animate = {{
                            opacity: 1,
                            transition: {
                                duration: 1.5,
                                delay: .5
                            }
                        }}
                    >Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ex esse sit alias minima, repellendus cum dicta nobis dolor doloremque, laboriosam quasi dolore facilis deserunt accusantium at libero numquam tenetur.
                    </motion.p>
                </div>
                <div className="container-buttons">
                    <motion.button
                        ref={ref}
                        initial = {{
                            opacity: 0,
                        }}
                        animate = {{
                            opacity: 1,
                            transition: {
                                duration: 1.5,
                                delay: .5
                            }
                        }}
                        onClick={() => handleServiceClick('')}>Todos</motion.button>
                    <motion.button
                        ref={ref}
                        initial = {{
                            opacity: 0,
                        }}
                        animate = {{
                            opacity: 1,
                            transition: {
                                duration: 1.5,
                                delay: .5
                            }
                        }}
                        onClick={() => handleServiceClick('Desarrollo Web')}>Desarrollo Web</motion.button>
                    <motion.button
                        ref={ref}
                        initial = {{
                            opacity: 0,
                        }}
                        animate = {{
                            opacity: 1,
                            transition: {
                                duration: 1.5,
                                delay: .5
                            }
                        }}
                        onClick={() => handleServiceClick('Diseño UX/UI')}>Diseño UX/UI</motion.button>
                    <motion.button
                        ref={ref}
                        initial = {{
                            opacity: 0,
                        }}
                        animate = {{
                            opacity: 1,
                            transition: {
                                duration: 1.5,
                                delay: .5
                            }
                        }}
                        onClick={() => handleServiceClick('Diseño Gráfico')}>Diseño Gráfico</motion.button>
                    <motion.button
                        ref={ref}
                        initial = {{
                            opacity: 0,
                        }}
                        animate = {{
                            opacity: 1,
                            transition: {
                                duration: 1.5,
                                delay: .5
                            }
                        }}
                        onClick={() => handleServiceClick('Paid Media')}>Paid Media</motion.button>
                    <motion.button
                        ref={ref}
                        initial = {{
                            opacity: 0,
                        }}
                        animate = {{
                            opacity: 1,
                            transition: {
                                duration: 1.5,
                                delay: .5
                            }
                        }}
                        onClick={() => handleServiceClick('Redes Sociales')}>Redes Sociales</motion.button>
                </div>
            </div>
            {data.length === 0 ? (
                <div className='container-vacio'>
                    <motion.h3
                        ref={ref}
                        initial = {{
                            opacity: 0,
                        }}
                        animate = {{
                            opacity: 1,
                            transition: {
                                duration: 1.5,
                                delay: .5
                            }
                        }}
                    >No hay proyectos de este servicio</motion.h3>
                </div>
            ) : (
                <ProjectList data={data} />
            )}
        </div>
    );
}

export default ProjectListContainer;