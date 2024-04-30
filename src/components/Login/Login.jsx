import React from 'react'
import imgLogin from './../../assets/img/bg-micuenta.jpg'
import './Login.css'
import { Navigate } from 'react-router-dom';

import { auth } from '../../main';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {

    const functAutentication = async(e) => {
        e.preventDefault();
        const correo = e.target.email.value;
        const password = e.target.password.value;
        console.log(correo)

        try {
            // Inicia sesión con el correo y la contraseña proporcionados
            await signInWithEmailAndPassword(auth, correo, password);
            console.log("Inicio de sesión exitoso");

            // Redirige al usuario al Panel después del inicio de sesión exitoso
            return <Navigate to="/panel" />;
        } catch (error) {
            console.error("Error al iniciar sesión:", error.message);
        }
    }

  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-md-6 bg-login">
                    
                </div>
                <div className="col-md-6 bg-formLogin">
                    <div className="padre">
                        <div className="card card-body">
                            <h3 className='title-login'>Iniciar sesión</h3>
                            <form onSubmit={functAutentication}>
                                <div className="form-group">
                                    <label className="labelForm label-form">Correo electrónico</label>
                                    <input type='email' placeholder='Correo electrónico' id="email" />
                                </div>
                                <div className="form-group">
                                    <label className="labelForm label-form">Contraseña</label>
                                    <input type='password' placeholder='Correo electrónico' id="password" />
                                </div>
                                <button className='btn btn-primary mt-3 form-control btnSubmit' type='submit'>Iniciar sesión</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login
