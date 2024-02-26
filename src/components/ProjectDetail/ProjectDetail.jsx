import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectDetail.css';

const ProjectDetail = ({ imagen, nombre, servicio, fechaFinalizacion }) => {
    
    return (
        <div>
            <h2>{nombre}</h2>
            <img src={imagen} alt={nombre} />
            <p>Servicio: {servicio}</p>
            <p>Fecha de finalización: {fechaFinalizacion}</p>
            <Link to="/">Volver al listado de proyectos</Link>
        </div>
    );
}

export default ProjectDetail;