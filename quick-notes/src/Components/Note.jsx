import React from 'react';
//import DeleteButton from './Delete';


const Note = ({noter, deleteNoteHandle, setCurrentId}) => {
     
    const {id,title,body} = noter;

    return (
        <div className="card" >
            <h4>{title}</h4>
            <p>{body}</p>
            <button onClick={() => deleteNoteHandle(id)}>Borrar</button>            
            <button onClick={() => setCurrentId(id)}>Editar</button>
              
        </div>
    )
}

export default Note;