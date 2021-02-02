
import React from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';

import './App.css';
import Signup from './components/Signup';

// / / / / / Removed Reference to './logo.svg' as file doesn't exist / / / / / //
// / / / / / Rendered Signup below to test, can remove when needed / / / / / //

// Componenets
import Home from './components/Home'
import NavBar from './components/NavBar'
import Login from './components/Login'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/signup' component={Signup} />
        
        <Route exact path='/' component={Home} />
      </Switch>

    </div>
  );
}

export default App;
