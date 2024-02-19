import imgAracama from '../assets/img/aracama600x600.png'

export const proyectos = [
    {
        "id": 1,
        "nombre": "Aracama Propiedades",
        "servicio": ["Desarrollo Web", "Diseño UX/UI"],
        "fechaFinalizacion": "Enero 2024",
        "imagen": imgAracama
    },
    {
        "id": 2,
        "nombre": "We Are",
        "servicio": ["Desarrollo Web"],
        "fechaFinalizacion": "Agosto 2023",
        "imagen": imgAracama
    }
]

export const getProjects = () => {
    return new Promise ((resolve) =>{
        setTimeout(() => {
            resolve(proyectos)
        }, 2000)
    })
}