import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useParams, useLocation } from 'react-router-dom';
import { db } from '../../main';
import { collection, where, query, getDocs } from 'firebase/firestore';
import ProjectList from '../ProjectList/ProjectList';
import './ProjectListContainer.css';

const ProjectListContainer = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const { categoryId } = useParams();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const type = queryParams.get('type');

    useEffect(() => {
        setLoading(true);
        const getData = async () => {
            let queryRef;
            if (!categoryId) {
                queryRef = collection(db, 'proyectos');
            } else {
                if (type) {
                    queryRef = query(collection(db, 'proyectos'), where('categoria', 'array-contains-any', [categoryId]), where('tipoProyecto', '==', type));
                } else {
                    queryRef = query(collection(db, 'proyectos'), where('categoria', 'array-contains-any', [categoryId]));
                }
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
            setLoading(false);
        };
        getData();
    }, [categoryId, type]);

    const isDesarrolloWeb = location.pathname === '/categoria/DesarrolloWeb';

    return (
        <>
            {!loading ? (
                <div id="proyectos">
                    <div className='title-proyectos-home'>
                        <motion.h2
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: { duration: 1.5, delay: .5 } }}
                        >
                            Proyectos
                        </motion.h2>
                        <motion.h3
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: { duration: 1.5, delay: .8 } }}
                        >
                            Realizados
                        </motion.h3>
                    </div>
                    {isDesarrolloWeb && (
                        <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 1.5, delay: .5 } }}
                        className='tipo-proyecto-desarrollo'
                        >
                            <ul className="submenu">
                                <li><Link to={'/categoria/DesarrolloWeb'} className={type === null ? 'active' : ''}>Todos</Link></li>
                                <li><Link to={'/categoria/DesarrolloWeb?type=Web Institucional'} className={type === 'Web Institucional' ? 'active' : ''}>Web Institucional</Link></li>
                                <li><Link to={'/categoria/DesarrolloWeb?type=Ecommerce'} className={type === 'Ecommerce' ? 'active' : ''}>E-commerce</Link></li>
                                <li><Link to={'/categoria/DesarrolloWeb?type=E-learning'} className={type === 'E-learning' ? 'active' : ''}>E-learning</Link></li>
                                <li><Link to={'/categoria/DesarrolloWeb?type=Landing Page'} className={type === 'Landing Page' ? 'active' : ''}>Landing Page</Link></li>
                            </ul>
                        </motion.div>
                    )}

                    {data.length === 0 ? (
                        <div className='container-vacio'>
                            <motion.h3
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, transition: { duration: 1.5, delay: .5 } }}
                            >
                                No hay proyectos de este servicio
                            </motion.h3>
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
