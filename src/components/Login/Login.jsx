import { React, useState} from 'react'
import imgLogin from './../../assets/img/bg-micuenta.jpg'
import './Login.css'
import { useNavigate  } from 'react-router-dom';
import { auth } from '../../main';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Toaster, toast } from 'react-hot-toast';
import { FaEyeSlash, FaEye } from 'react-icons/fa';

const Login = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const functAutentication = async(e) => {
        e.preventDefault();
        const correo = e.target.email.value;
        const password = e.target.password.value;

        try {
            await signInWithEmailAndPassword(auth, correo, password);
            navigate('/panel');
        } catch (error) {
            console.error("Error al iniciar sesión:", error.message);
            toast.error("Las credenciales incorrectas.")
        }
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-md-6 bg-login">
                    
                </div>
                <div className="col-md-6 col-12 bg-formLogin">
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
                                    <div className="password-group">
                                        <input type={showPassword ? 'text' : 'password'} placeholder="Contraseña" id="password" />
                                        <span onClick={togglePasswordVisibility}>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                                    </div> 
                                </div>
                                <button className='btn btn-primary mt-3 form-control btnSubmit' type='submit'>Iniciar sesión</button>
                            </form>
                            <Toaster
                                position="bottom-center"
                                reverseOrder={true}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login
