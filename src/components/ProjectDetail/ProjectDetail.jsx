import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectDetail.css';

const ProjectDetail = ({ imagen, nombre, servicio, fechaFinalizacion, descripcion, imagenes }) => {
    
    return (
        <div className='container-detail'>
            <div className="container-detail-heading">
                <div className="detail-title">
                    <h2>{nombre}</h2>
                    <p>{descripcion}</p>
                </div>
                <div className="detail-datos">
                    <p className='title-serv'>Servicios</p>
                    <p className='subtitle-serv'>
                        {Array.isArray(servicio) ? servicio.map((item, index) => (
                            // Agrega una coma y un espacio solo si no es el último elemento
                            index !== servicio.length - 1 ? `${item}, ` : item
                        )) : servicio}
                    </p>
                    <p className='title-serv'>Cliente</p>
                    <p className='subtitle-serv'>{nombre}</p>
                    <p className='title-serv'>Fecha de finalización</p>
                    <p className='subtitle-serv'>{fechaFinalizacion}</p>
                </div>
            </div>
            <div className='container-detail-images'>
                <img src={imagen} alt={nombre} /> 
                {Array.isArray(imagenes) ? (
                    imagenes.map((imagenItem, index) => (
                    <img src={imagenItem} key={index} alt="" />
                    ))
                ) : (
                    <p>No hay imágenes disponibles</p>
                )}
            </div>
            <div className='container-return-proyectos'>
                <Link to="/">Volver atrás</Link>
            </div>
        </div>
    );
}

export default ProjectDetail;