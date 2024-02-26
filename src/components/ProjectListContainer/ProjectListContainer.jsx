import React, { useEffect, useState } from 'react';
import { db } from '../../main';
import { collection, where, query, getDocs } from 'firebase/firestore';
import ProjectList from '../ProjectList/ProjectList';
import './ProjectListContainer.css'

const ProjectListContainer = () => {
    const [data, setData] = useState([]);
    const [selectedService, setSelectedService] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let queryRef = collection(db, 'proyectos');
                if (selectedService) {
                    queryRef = query(collection(db, 'proyectos'), where('servicio', 'array-contains', selectedService));
                }

                const querySnapshot = await getDocs(queryRef);
                const projects = querySnapshot.docs.map(doc => ({
                    ...doc.data(),
                    id: doc.id
                }));
                setData(projects);
            } catch (error) {
                console.error("Error fetching documents: ", error);
            }
        };
        fetchData();
    }, [selectedService]);

    const handleServiceClick = (service) => {
        setSelectedService(service);
    };

    return (
        <div>
            <div className="container-buttons">
                <button onClick={() => handleServiceClick('Desarrollo Web')}>Desarrollo Web</button>
                <button onClick={() => handleServiceClick('Diseño UX/UI')}>Diseño UX/UI</button>
                <button onClick={() => handleServiceClick('Paid Media')}>Paid Media</button>
            </div>
            <ProjectList data={data} />
        </div>
    );
}

export default ProjectListContainer;