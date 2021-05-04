import React, {useState, useEffect} from 'react'
import { db } from '../firebase';

const NotesForm = (props) => {

    const initialStateValues = {
      title:'',
      body:'',
    };

    
    const [values, setValues]= useState(initialStateValues);

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setValues({...values, [name]: value})
      };


     const handleSubmit = e => {
      e.preventDefault();
      props.addedNotesHandle(values);
      setValues({...initialStateValues});
     };

     const getNoteById= async (id)=> {
       const doc = await db.collection('notes').doc(id).get();
       setValues({...doc.data()})
      }

     useEffect(() => {
       if (props.currentId === '') {
         setValues({...initialStateValues});
       } else {
        getNoteById(props.currentId)
       }

     },[props.currentId]);




    return (
        <form className="createnote-form" onSubmit ={handleSubmit}>
        <label htmlFor="Titulo">Titulo</label> 
          <input className="note-title" 
          type="text"
          name="title"
          placeholder="Titulo"
          onChange= {handleInputChange}
          value= {values.title}
          >
          </input>
        <br></br>
        <label>Aqui tu texto</label> 
           <textarea className="note-text" rows="5" cols="60" name= "body" 
           placeholder="Escribe tu nota"
           onChange= {handleInputChange}
           value= {values.body}
           >   
           </textarea>
           <button>{props.currentId === ''? 'Crear': 'Guardar'}</button>       
        </form>
    )
};

export default NotesForm;