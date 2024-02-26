import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProjectDetail from '../ProjectDetail/ProjectDetail';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../main';

const ProjectDetailContainer = () => {
    const [project, setProject] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const getProject = async () => {
            try {
                if (!id) {
                    console.error("Project ID is undefined");
                    return;
                }
        
                const queryRef = doc(db, 'proyectos', id);
                const response = await getDoc(queryRef);
                const newProject = {
                    ...response.data(),
                    id: response.id
                };
                setProject(newProject);
            } catch (error) {
                console.error("Error fetching project: ", error);
            }
        };
        getProject();
    }, [id]);

    return (
        <div>
            <ProjectDetail {...project} />
        </div>
    );
};

export default ProjectDetailContainer;