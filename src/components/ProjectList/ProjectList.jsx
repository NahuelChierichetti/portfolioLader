import React from 'react'
import Project from '../Project/Project'
import './ProjectList.css'

const ProjectList = ({data}) => {
  return (
    <div className='container-proyectos'>
      {data.map((proyectos, index) => (
        <div key={proyectos.id}>
          <Project {...proyectos} index={index}/>
        </div>
      ))}
    </div>
  )
}

export default ProjectList
