import React,{Fragment,useState} from 'react'
//import { auth } from '../firebase';
import SignUp from './SignUp';


const LogIn = ({handleSetLogin}) => {
    const [password,setPassword]=useState("")
    const [email,setEmail]=useState("")
    return (
        <Fragment>
<form className="logIn-form">
        <input
        type="email"
        name="email"
        placeholder="Tu correo"
        required
        />
        <input
        type="password"
        name="password"
        placeholder="Contraseña"
        required
         />
        <button onClick={()=>{handleSetLogin(email,password)}}>Iniciar sesion</button>
        <br></br>
        <button>Google</button>
        <br></br>
        <button>Facebook</button>
        </form>
        <SignUp></SignUp>
        </Fragment>
        
    )
};

export default LogIn;