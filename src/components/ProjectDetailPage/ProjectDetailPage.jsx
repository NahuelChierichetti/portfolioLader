import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProjectDetail from '../ProjectDetail/ProjectDetail';
import { db } from '../../main';

const ProjectDetailPage = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);
  const [relatedProjects, setRelatedProjects] = useState([]);

  useEffect(() => {
    const fetchProjectDetail = async () => {
      try {
        const projectRef = db.collection('proyectos').doc(projectId);
        const projectDoc = await projectRef.get();
        if (projectDoc.exists) {
          setProject(projectDoc.data());
        } else {
          console.log('El proyecto no fue encontrado');
        }
      } catch (error) {
        console.error('Error al obtener el detalle del proyecto:', error);
      }
    };

    const fetchRelatedProjects = async () => {
      // Lógica para obtener proyectos relacionados
      // Por ejemplo, puedes consultar proyectos con la misma categoría
      try {
        const relatedProjectsSnapshot = await db.collection('proyectos').where('categoria', '==', project.categoria).limit(3).get();
        const relatedProjectsData = relatedProjectsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setRelatedProjects(relatedProjectsData);
      } catch (error) {
        console.error('Error al obtener proyectos relacionados:', error);
      }
    };

    if (projectId) {
      fetchProjectDetail();
    }

    return () => {
      // Limpiar el estado al desmontar el componente si es necesario
      setProject(null);
      setRelatedProjects([]);
    };
  }, [projectId]);

  return (
    <div>
      {project && (
        <ProjectDetail
          imagen={project.imagen}
          nombre={project.nombre}
          servicio={project.servicio}
          fechaFinalizacion={project.fechaFinalizacion}
          descripcion={project.descripcion}
          imagenes={project.imagenes}
          link={project.link}
          tipoProyecto={project.tipoProyecto}
          cliente={project.cliente}
          relatedProjects={relatedProjects}
        />
      )}
    </div>
  );
};

export default ProjectDetailPage;