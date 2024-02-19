import React from 'react'
import Project from '../Project/Project'
import './ProjectList.css'

const ProjectList = ({data}) => {
  return (
    <div className='container-proyectos'>
      {data.map((proyectos) => (
        <div key={proyectos.id}>
          <Project {...proyectos}/>
        </div>
      ))}
    </div>
  )
}

export default ProjectList
