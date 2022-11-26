import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";

import Home from './Home'

import Login from './components/Signin/index';
import Signup from './components/SignUp/index';
function App() {
  const auth = localStorage.getItem('token');
  return (
    <div className="App">
  
      <Router>
      <div>
        

       
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
		  <Route path="/Signup">
            <Signup/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
      
    

    </div>
  );
}

export default App;