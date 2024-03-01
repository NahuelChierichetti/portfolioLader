import React, { useEffect, useState, useRef } from 'react';
import { db } from '../../main';
import { collection, where, query, getDocs } from 'firebase/firestore';
import ProjectList from '../ProjectList/ProjectList';
import './ProjectListContainer.css'
import { motion, useInView } from 'framer-motion'
import { useParams } from 'react-router-dom';

const ProjectListContainer = () => {
    const [data, setData] = useState([]);
    const [selectedService, setSelectedService] = useState(null);
    const { categoryId } = useParams()

    useEffect(() => {
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
            
            setData(projects);
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
                            opacity: 1n,
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