import React, { useEffect, useState, useRef } from 'react';
import { db } from '../../main';
import { collection, where, query, getDocs } from 'firebase/firestore';
import ProjectList from '../ProjectList/ProjectList';
import './ProjectListContainer.css'
import { motion, useInView } from 'framer-motion'
import { useParams } from 'react-router-dom';
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const ProjectListContainer = () => {
    const [data, setData] = useState([]);
    const [selectedService, setSelectedService] = useState(null);
    const { categoryId } = useParams()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const getData = async () => {
            let queryRef;
            if (!categoryId) {
                queryRef = collection(db, 'proyectos');
            } else {
                queryRef = query(collection(db, 'proyectos'), where('categoria', 'array-contains-any', [categoryId]));
            }
            
            const response = await getDocs(queryRef);
    
            const projects = response.docs.map((doc) => {
                const newProject = {
                    ...doc.data(),
                    id: doc.id
                };
                return newProject;
            });

            setTimeout(() => {
                setData(projects)
                setLoading(false)
              }, 1000)
        };
        getData();
    }, [categoryId]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             let queryRef = collection(db, 'proyectos');
    //             if (selectedService) {
    //                 queryRef = query(collection(db, 'proyectos'), where('servicio', 'array-contains', selectedService));
    //             }

    //             const querySnapshot = await getDocs(queryRef);
    //             const projects = querySnapshot.docs.map(doc => ({
    //                 ...doc.data(),
    //                 id: doc.id
    //             }));
    //             setData(projects);
    //         } catch (error) {
    //             console.error("Error fetching documents: ", error);
    //         }
    //     };
    //     fetchData();
    // }, [selectedService]);

    // const handleServiceClick = (service) => {
    //     setSelectedService(service);
    // };

    const ref = useRef(null)
    const enVista = useInView(ref, {
        once: true
    })

    return (
        <>
            {!loading ? (
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
            ) : (
                <div className='loader-container'>
                    <AiOutlineLoading3Quarters className='loader-icon'/>
                </div>
            )}
        </>
    );
}

export default ProjectListContainer;