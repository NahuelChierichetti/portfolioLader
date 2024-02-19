import React, { useEffect, useState } from 'react'
import { getProjects } from '../../data/asyncMock'
import ProjectList from '../ProjectList/ProjectList'

const ProjectListContainer = () => {
    const [ data, setData ] = useState([])

    useEffect(() => {
        getProjects()
            .then((proyecto) => {
                setData(proyecto)
            })
    }, [])
 
    return (
        <div>
            <ProjectList data={data} />
        </div>
    )
}

export default ProjectListContainer
