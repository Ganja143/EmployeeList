import React from 'react';
import Register from './Register';
import Login from './Login';
import LandingPage from './LandingPage';
import EmployeeList from './EmployeeList';
import Add from './Add';
import UpdateEmp from './UpdateEmp';
import Passwords from './Passwords';
import { BrowserRouter as Router, Route, Switch }  from 'react-router-dom';      

//import './App.css';

function App() {
  return (

    <div className="App">

      <Router>

                      <Switch>

                            <Route exact path='/'><Login/> </Route>
                            <Route exact path='/Register'><Register/></Route>
                            <Route exact path='./Login.js'><Login/></Route>
                            <Route exact path='/LandingPage'><LandingPage/></Route>
                            <Route exact path='/EmployeeList'><EmployeeList/></Route>
                            <Route exact path='/Add'><Add/> </Route>
                            <Route exact path='/UpdateEmp'><UpdateEmp/> </Route>
                            <Route exact path='/Passwords'><Passwords/> </Route>

                      </Switch>
  
      </Router>
  </div>
      
  );
}

export default App;
