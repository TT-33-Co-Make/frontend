
import React, {useState} from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';

import './App.css';
import Signup from './components/Signup';

// Contexts
import {AuthContext} from './contexts/AuthContext';

// Componenets
import Home from './components/Home'
import NavBar from './components/NavBar'
import Login from './components/Login'
import Developers from './components/Developers';

function App() {

  return (
    <div className="App">
      <AuthContext.Provider value={{}}>
        <h1>Hello, React!</h1>
        <NavBar />

        <Switch>
          <Route path='/developers'>
            <Developers />
          </Route>
          <Route path='/login' component={Login}/>
          <Route path='/signup' component={Signup} />
          <Route path='/' component={Home} />
        </Switch>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
