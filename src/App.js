import React from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';
import './App.css';

// Componenets
import Home from './components/Home'
import NavBar from './components/NavBar'
import Login from './components/Login'

function App() {
  return (
    <div className="App">
      <p>Hello</p>
      <NavBar />

      <Switch>
        <Route path='/login' />
        <Route path='/signup' />
        
        <Route path='/' component={Home} />
      </Switch>
    </div>
  );
}

export default App;
