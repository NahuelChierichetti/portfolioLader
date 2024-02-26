import React from 'react'
import './Project.css'
import { Link } from 'react-router-dom';

const Project = ({ id, nombre, imagen }) => {
    const divStyle = {
      backgroundImage: `url(${imagen})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    };
  
    return (
      <div className='card-proyecto' style={divStyle}>
        <p className='title-proyecto'>{nombre}</p>
        <Link to={`/project/${id}`} className='link-proyecto'>Ver proyecto</Link>
      </div>
    );
};

export default Project
