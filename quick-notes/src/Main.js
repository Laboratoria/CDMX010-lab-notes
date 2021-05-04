import React,{ useState, useEffect }  from 'react';
import Notes from './Components/Notes'
import NotesForm from './Components/NotesForm'
import {db} from './firebase'

function Main() {

  //va manejando los datos que cambian

  useEffect(() => {
    getNotes();
  }, []);

  const [notes, setNotes] = useState([]);

  const [currentId,setCurrentId]= useState('');

  // Esta funcion manda a ejecutar Firebase y guarda en firebase
  const addedNotesHandle = async (noteObject) => {
    if (currentId === '') {
      await db.collection('notes').doc().set(noteObject);
    } else {
       await db.collection('notes').doc(currentId).update(noteObject);
      setCurrentId('');
      }
  };
 //getLinks hacce la peticion a fb
 const getNotes = async () => {
  db.collection('notes').onSnapshot((querySnapshot) => {
    const docs = [];
    querySnapshot.forEach(doc => {
      docs.push({ ...doc.data(), id:doc.id });
    });
    setNotes(docs);
    //console.log(docs)
  });
};

  const deleteNoteHandle = id => {
    if(window.confirm ("Seguro de que quieres borrarla?")){
      db.collection("notes").doc(id).delete().then(() => {
        console.log("Document successfully deleted!");
      }).catch((error) => {
        console.error("Error removing document: ", error);
      });
    }
  }

/*   const editNoteHandle = (id) => {
    console.log(id) 
  }
 */
  //va manejando los datos que cambian


  return (
  <div>
      <NotesForm {... {addedNotesHandle, currentId , notes}} 
      />
      <Notes
            notes={notes}
            setNotes={setNotes}
            deleteNoteHandle={deleteNoteHandle}
            setCurrentId= {setCurrentId}
            curretnId = {currentId}
           // editNoteHandle= {editNoteHandle}
        />
  </div>
  );
}

export default Main;