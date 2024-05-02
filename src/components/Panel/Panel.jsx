import React, { useEffect, useState } from 'react'
import './Panel.css'
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore'
import { db } from '../../main'
import { Link } from 'react-router-dom'
import { HiOutlineTrash } from "react-icons/hi2";
import { motion } from 'framer-motion';
import { getAuth, signOut } from 'firebase/auth'

import { auth } from '../../main';

const Panel = ({correoUsuario}) => {
    const [proyectos, setProyectos] = useState([])

    useEffect(() => {
        const obtenerProyectos = async () => {
            const proyectosRef = collection(db, 'proyectos')
            const proyectosSnapshot = await getDocs(proyectosRef)
            const listaProyectos = proyectosSnapshot.docs.map(doc => ({
                ...doc.data(),
                id: doc.id
            }))
            setProyectos(listaProyectos)
        }
        obtenerProyectos()
    }, [])

    const handleDelete = async (id) => {
        try {
            await deleteDoc(doc(db, 'proyectos', id));
            const nuevosProyectos = proyectos.filter(proyecto => proyecto.id !== id);
            setProyectos(nuevosProyectos);
        } catch (error) {
            console.error('Error al eliminar el proyecto:', error);
        }
    };

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className='msj-bienvenido col-12'>
                        <p>¡Bienvenido {correoUsuario}!</p>
                        <button className='btn-logout' onClick={()=>signOut(auth)}>Cerrar sesión</button>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className='title-proyectos'>
                            <motion.h2
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
                                Proyectos
                            </motion.h2>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 text-end btnAdd">
                        <Link to='/admin'>Crear proyecto</Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11 mx-auto">
                        <div className="table-responsive">
                            <table className="table table-hover table-secondary">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Proyecto</th>
                                        <th scope="col">Servicio</th>
                                        <th scope="col">Fecha de Finalización</th>
                                        <th scope="col">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {proyectos.map((proyecto, index) => (
                                        <tr key={index}>
                                            <th scope="row">{index + 1}</th>
                                            <td style={{ minWidth: '150px' }}>{proyecto.nombre}</td>
                                            <td style={{ minWidth: '300px' }}>
                                                {Array.isArray(proyecto.servicio) ? (
                                                    proyecto.servicio.map((servicio, index) => (
                                                        <span key={index} className="etiqueta-servicio">{index !== 0 ? ' ' : ''}{servicio}</span>
                                                    ))
                                                ) : (
                                                    proyecto.servicio
                                                )}
                                            </td>
                                            <td style={{ minWidth: '150px' }}>{proyecto.fechaFinalizacion}</td>
                                            <td style={{ minWidth: '100px' }}>
                                                <button className="btn btnDelete" onClick={() => handleDelete(proyecto.id)}><HiOutlineTrash /></button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Panel
