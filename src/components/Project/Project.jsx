import React from 'react'
import './Project.css'
import { Link } from 'react-router-dom';

const Project = ({ nombre, imagen }) => {
    const divStyle = {
      backgroundImage: `url(${imagen})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    };
  
    return (
      <div className='card-proyecto' style={divStyle}>
        <p className='title-proyecto'>{nombre}</p>
        <Link className='link-proyecto'>Ver proyecto</Link>
      </div>
    );
};

export default Project
