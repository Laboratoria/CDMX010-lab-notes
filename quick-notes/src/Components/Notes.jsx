import React from 'react'
import Note from './Note';

const Notes = ({notes, deleteNoteHandle, setCurrentId, currentId }) => {
    return  (
    <div>
        <h1>Debe haber notas</h1>
            <div className= "notes-list">
                {notes.map((note => (

                    <div  key={note.id}>
                         <Note 
                         noter={note}
                         deleteNoteHandle={deleteNoteHandle}
                         setCurrentId= {setCurrentId}
                         currentId= {currentId}
                         />
                    </div>
                )
                    ))}
            </div>
    </div>)

};
export default Notes;