
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import LogIn from './Components/LogIn'
import Main from './Main'
import Notes from './Components/Notes';
import SignUp from "./Components/SignUp";


const Rutas = ({adentro, handleSetLogin, handleSetSignUp}) => {
  return (
    <Router>
      {/* <div claasname= "Nav-bar">
        <Link to="/LogIn"> LogIn </Link>
        <Link to="/Main">Todas las Notas</Link>
        <Link to="/NotesForm">Crear tus Nota</Link>
      </div> */}
       {adentro? <Switch>
          <Route exact path="/">
            <Main/>
          </Route>
          <Route path= "/Notes">
          <Notes/>
          </Route>
        </Switch>:<Switch>
          <Route exact path="/">
           <LogIn handleSetLogin={handleSetLogin}/>
           <SignUp handleSetSignUp= {handleSetSignUp}/>
          </Route>
        </Switch>}
      </Router>
  );

}



export default Rutas