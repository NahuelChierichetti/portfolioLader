import React, { useEffect, useState } from 'react';
import './Panel.css';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../main';
import { Link } from 'react-router-dom';
import { HiOutlineTrash } from "react-icons/hi2";
import { motion } from 'framer-motion';
import { getAuth, signOut } from 'firebase/auth';
import Swal from 'sweetalert2';
import { auth } from '../../main';

const Panel = ({ correoUsuario }) => {
    const [proyectos, setProyectos] = useState([]);
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todos');

    useEffect(() => {
        const obtenerProyectos = async () => {
            const proyectosRef = collection(db, 'proyectos');
            const proyectosSnapshot = await getDocs(proyectosRef);
            const listaProyectos = proyectosSnapshot.docs.map(doc => ({
                ...doc.data(),
                id: doc.id
            }));
            setProyectos(listaProyectos);
        };
        obtenerProyectos();
    }, []);

    const handleDelete = async (id) => {
        const confirmDelete = await Swal.fire({
            title: '¿Estás seguro?',
            text: 'Esta acción eliminará el proyecto de forma permanente.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar'
        });

        if (confirmDelete.isConfirmed) {
            try {
                await deleteDoc(doc(db, 'proyectos', id));
                const nuevosProyectos = proyectos.filter(proyecto => proyecto.id !== id);
                setProyectos(nuevosProyectos);
                Swal.fire(
                    '¡Eliminado!',
                    'El proyecto ha sido eliminado correctamente.',
                    'success'
                );
            } catch (error) {
                console.error('Error al eliminar el proyecto:', error);
                Swal.fire(
                    'Error',
                    'No se pudo eliminar el proyecto.',
                    'error'
                );
            }
        }
    };

    const categorias = ['Todos', 'Desarrollo Web', 'Diseño UX/UI', 'Diseño Gráfico', 'Redes Sociales'];

    const proyectosFiltrados = categoriaSeleccionada === 'Todos'
        ? proyectos
        : proyectos.filter(proyecto => proyecto.servicio.includes(categoriaSeleccionada));

    return (
        <div className="panel-container">
            <div className="sidebar">
                <div className="profile">
                    <img src="https://via.placeholder.com/150" alt="Profile" />
                    <p>{correoUsuario}</p>
                </div>
                <nav>
                    <ul>
                        {categorias.map((categoria, index) => (
                            <li key={index} onClick={() => setCategoriaSeleccionada(categoria)}>
                                {categoria}
                            </li>
                        ))}
                    </ul>
                </nav>
                <button className="btn-logout" onClick={() => signOut(auth)}>Cerrar sesión</button>
            </div>
            <div className="main-content">
                <div className="header">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 1.5, delay: .5 } }}
                    >
                        Proyectos
                    </motion.h2>
                    <Link to='/admin'>Crear proyecto</Link>
                </div>
                <div className="projects-table">
                    <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Proyecto</th>
                                <th>Servicio</th>
                                <th>Fecha de Finalización</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {proyectosFiltrados.map((proyecto, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{proyecto.nombre}</td>
                                    <td>
                                        {Array.isArray(proyecto.servicio) ? (
                                            proyecto.servicio.map((servicio, index) => (
                                                <span key={index} className="etiqueta-servicio">{index !== 0 ? ' ' : ''}{servicio}</span>
                                            ))
                                        ) : (
                                            proyecto.servicio
                                        )}
                                    </td>
                                    <td>{proyecto.fechaFinalizacion}</td>
                                    <td>
                                        <button className="btn btnDelete" onClick={() => handleDelete(proyecto.id)}>
                                            <HiOutlineTrash />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Panel;