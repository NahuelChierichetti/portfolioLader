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
            
                <div className='title-proyectos'>
                    <h2>Proyectos realizados</h2>
                </div>
                <div className='container-heading-proyectos'>
                <div className='heading-proyectos'>
                    
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ex esse sit alias minima, repellendus cum dicta nobis dolor doloremque, laboriosam quasi dolore facilis deserunt accusantium at libero numquam tenetur.</p>
                </div>
                <div className="container-buttons">
                    <button onClick={() => handleServiceClick('')}>Todos</button>
                    <button onClick={() => handleServiceClick('Desarrollo Web')}>Desarrollo Web</button>
                    <button onClick={() => handleServiceClick('Diseño UX/UI')}>Diseño UX/UI</button>
                    <button onClick={() => handleServiceClick('Diseño Gráfico')}>Diseño Gráfico</button>
                    <button onClick={() => handleServiceClick('Paid Media')}>Paid Media</button>
                    <button onClick={() => handleServiceClick('Redes Sociales')}>Redes Sociales</button>
                </div>
            </div>
            <ProjectList data={data} />
        </div>
    );
}

export default ProjectListContainer;