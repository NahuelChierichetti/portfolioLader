import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../../main';
import './Admin.css';

const serviciosDisponibles = ["Desarrollo Web", "Diseño UX/UI", "Diseño Gráfico", "Redes Sociales"];
const categoriasDisponibles = ["DesarrolloWeb", "DiseñoUXUI", "DiseñoGrafico", "RedesSociales"];

const Admin = () => {
    const [categoriasSeleccionadas, setCategoriasSeleccionadas] = useState([]);
    const [serviciosSeleccionados, setServiciosSeleccionados] = useState([]);
    const [urlImagen, setUrlImagen] = useState('');
    const [urlImagen1, setUrlImagen1] = useState('');
    const [urlImagen2, setUrlImagen2] = useState('');
    const [urlImagenes, setUrlImagenes] = useState([])

    const handleCategoriaChange = (event) => {
        const categoriaSeleccionada = event.target.value;
        const isChecked = event.target.checked;

        if (isChecked) {
            setCategoriasSeleccionadas([...categoriasSeleccionadas, categoriaSeleccionada]);
        } else {
            const updatedCategorias = categoriasSeleccionadas.filter(categoria => categoria !== categoriaSeleccionada);
            setCategoriasSeleccionadas(updatedCategorias);
        }
    };

    const handleServicioChange = (event) => {
        const servicioSeleccionado = event.target.value;
        const isCheck = event.target.checked;

        if (isCheck) {
            setServiciosSeleccionados([...serviciosSeleccionados, servicioSeleccionado]);
        } else {
            const updatedServicios = serviciosSeleccionados.filter(servicio => servicio !== servicioSeleccionado);
            setServiciosSeleccionados(updatedServicios);
        }
    };

    const guardarInfo = async (e) => {
        e.preventDefault();
        const nombre = e.target.nombre.value;
        const subtitulo = e.target.subtitulo.value;
        const descripcion = e.target.descripcion.value;
        const fechaFinalizacion = e.target.fechaFinalizacion.value;
        const link = e.target.link.value;
        const tipoProyecto = e.target.tipoProyecto.value;
    
        const newProyecto = {
            nombre: nombre,
            subtitulo: subtitulo,
            descripcion: descripcion,
            fechaFinalizacion: fechaFinalizacion,
            link: link,
            tipoProyecto: tipoProyecto,
            categoria: categoriasSeleccionadas || [],
            servicio: serviciosSeleccionados || [],
            imagen: urlImagen,
            imagen1: urlImagen1,
            imagen2: urlImagen2,
            imagenes: urlImagenes || []
        };
    
        try {
            await addDoc(collection(db, 'proyectos'), newProyecto);
            e.target.reset();
            window.location.href = '/panel';
        } catch (error) {
            console.log('Error al guardar el proyecto:', error);
        }
    };

    const fileHandler = async (e) => {
        const archivo = e.target.files[0];
        const refArchivo = ref(storage, `documentos/${archivo.name}`);
        console.log(refArchivo)
        
        try {
            await uploadBytes(refArchivo, archivo);
            const urlImagen = await getDownloadURL(refArchivo);
            setUrlImagen(urlImagen);
        } catch (error) {
            console.error('Error al subir el archivo:', error);
        }
    };

    const fileHandler1 = async (e) => {
        const archivo1 = e.target.files[0];
        const refArchivo1 = ref(storage, `documentos/${archivo1.name}`);        
        try {
            await uploadBytes(refArchivo1, archivo1);
            const urlImagen1 = await getDownloadURL(refArchivo1);
            setUrlImagen1(urlImagen1);
        } catch (error) {
            console.error('Error al subir el archivo:', error);
        }
    };

    const fileHandler2 = async (e) => {
        const archivo2 = e.target.files[0];
        const refArchivo2 = ref(storage, `documentos/${archivo2.name}`);        
        try {
            await uploadBytes(refArchivo2, archivo2);
            const urlImagen2 = await getDownloadURL(refArchivo2);
            setUrlImagen2(urlImagen2);
        } catch (error) {
            console.error('Error al subir el archivo:', error);
        }
    };

    const filesHandler = async (e) => {
        const archivos = e.target.files; // Acceder a e.target.files
        const urls = [];
        // Iterar sobre cada archivo
        for (let i = 0; i < archivos.length; i++) {
            const archivo = archivos[i];
            const refArchivo = ref(storage, `documentos/${archivo.name}`);
            try {
                await uploadBytes(refArchivo, archivo);
                const urlImagen = await getDownloadURL(refArchivo);
                urls.push(urlImagen);
            } catch (error) {
                console.error('Error al subir los archivos:', error);
            }
        }
    
        setUrlImagenes(urls); // Establecer todas las URLs de imágenes
    };
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                <h3 className='add-title'>Agregar Proyecto</h3>
                    <div className="contenedor-form">
                        <form onSubmit={guardarInfo} className='formulario-create'>
                            <div className="form-group">
                                <label className="labelForm" htmlFor="nombre">Nombre</label>
                                <input type="text" id="nombre" name="nombre" placeholder="Nombre del proyecto" />
                            </div>
                            <div className="form-group">
                                <label className="labelForm" htmlFor="subtitulo">Subtitulo</label>
                                <input type="text" id="subtitulo" name="subtitulo" placeholder="Subtitulo" />
                            </div>
                            <div className="form-group">
                                <label className="labelForm">Fecha de finalización</label>
                                <input type="text" id="fechaFinalizacion" name="fechaFinalizacion" placeholder="Marzo 2024" />
                            </div>
                            <div className="form-group">
                                <label className="labelForm">Descripción</label>
                                <textarea placeholder='Descripción del proyecto' id="descripcion" name='descripcion'  rows="3"/>
                            </div>
                            <div className="form-group">
                                <label className="labelForm">Categoría</label>
                                {categoriasDisponibles.map(categoria => (
                                    <div key={categoria}>
                                        <input
                                            type="checkbox"
                                            value={categoria}
                                            onChange={handleCategoriaChange}
                                            checked={categoriasSeleccionadas.includes(categoria)}
                                        />
                                        <label>{categoria}</label>
                                    </div>
                                ))}
                            </div>
                            <div className="form-group">
                                <label className="labelForm">Servicios</label>
                                {serviciosDisponibles.map(servicio => (
                                    <div key={servicio}>
                                        <input
                                            type="checkbox"
                                            value={servicio}
                                            onChange={handleServicioChange}
                                            checked={serviciosSeleccionados.includes(servicio)}
                                        />
                                        <label>{servicio}</label>
                                    </div>
                                ))}
                            </div>
                            <div className="form-group">
                                <label className="labelForm">Imágen principal</label>
                                <input type="file" id="imagen" placeholder='Imagen del proyecto' className='form-control' onChange={fileHandler} />
                            </div>
                            <div className="form-group">
                                <label className="labelForm">Imágen detalle 1</label>
                                <input type="file" id="imagen1" placeholder='Imagen del proyecto' className='form-control' onChange={fileHandler1} />
                            </div>
                            <div className="form-group">
                                <label className="labelForm">Imágen detalle 2</label>
                                <input type="file" id="imagen2" placeholder='Imagen del proyecto' className='form-control' onChange={fileHandler2} />
                            </div>                            
                            <div className="form-group">
                                <label className="labelForm">Imágenes del proyecto</label>
                                <input type="file" id="imagenes" placeholder='Imágenes del proyecto' className='form-control' multiple onChange={filesHandler} />
                            </div>
                            <div className="form-group">
                                <label className="labelForm">Link del sitio web (opcional)</label>
                                <input type="text" id="link" name="link" placeholder="Link del proyecto" />
                            </div>
                            <div className="form-group">
                                <label className="labelForm">Tipo de proyecto (opcional)</label>
                                <input type="text" id="tipoProyecto" name="tipoProyecto" placeholder="Web Institucional | Ecommerce | E-learning" />
                            </div>
                            <button className='btn btn-primary mt-3 form-control btnEnviar' type="submit">Guardar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Admin;