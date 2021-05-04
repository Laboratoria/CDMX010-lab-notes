import React,{Fragment,useState} from 'react'
//import { auth } from '../firebase';

const SignUp = ({handleSetSignUp}) => {

    const [newPassword,setNewPassword]=useState("")
    const [newEmail,setNewEmail]=useState("")

    return (
        <Fragment>
<form className="logIn-form">
        <input
        type="email"
        name="newUserEmail"
        placeholder="Ingresa tu correo"
        required
        />
        <input
        type="password"
        name="NewUserPassword"
        placeholder=" Crea tu contraseña"
        required
         />
        <button onClick={()=>{handleSetSignUp(newEmail,newPassword)}}>Iniciar sesion</button>
        <br></br>
        <button>Google</button>
        <br></br>
        <button>Facebook</button>
        </form>
        </Fragment>
        
    )
};

export default SignUp