import React,{useState} from 'react'
import './App.css';
import Rutas from './Router'


function App() {
  const [adentro, setAdentro] = useState(false)

  const handleSetLogin =(email,password)=>{
    // los metodos de Firebase para autenticar
    console.log('workin')
        setAdentro(true) // esto lo debes poner en el then
    // en el catch puedes poner un console.log("usuaro o contraseñá invalido")
  }

  const handleSetSignUp =(newEmail,newPassword)=>{
    // los metodos de Firebase para autenticar
    console.log('workin')

  }

  return (
    <div className="App">
      <Rutas 
      adentro={adentro}
      handleSetLogin={handleSetLogin}
      handleSetSignUp={handleSetSignUp}
      />
    </div>
  );
}

export default App;
