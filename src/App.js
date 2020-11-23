import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Navbar from './components/navbar.component';
import ExerciseList from './components/exercise-list.component';
import EditExercise from './components/edit-exercise.component';
import CreateExercise from './components/create-exercise.component';
import CreateUser from './components/create-user.component';
 

function App() {
  return (

    <React.Fragment>
        <Router> 
          <div className = "container-fluid">
            <Navbar/>
            <br/>
            <Route path = "/" exact component = { ExerciseList } />            
            <Route path = "/edit/:id" component = { EditExercise } /> 
            <Route path = "/create"  component = { CreateExercise } /> 
            <Route path = "/user" component = { CreateUser } /> 
            
            
          </div>
        </Router>


    
    </React.Fragment>
  );
}

export default App;
