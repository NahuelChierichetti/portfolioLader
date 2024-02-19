import React from 'react'
import './Project.css'

const Project = ({ nombre, imagen }) => {
    const divStyle = {
      backgroundImage: `url(${imagen})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    };
  
    return (
      <div className='card-proyecto' style={divStyle}>
        <p>{nombre}</p>
      </div>
    );
};

export default Project
