import React, { useState } from 'react';
import { Route, Switch, Redirect, } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';

// Contexts
import { AuthContext } from './contexts/AuthContext';

// Components

import Signup from './components/Signup';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Login from './components/Login';
import IssueList from './components/IssueList';
import Developers from './components/Developers';

function App() {

  return (
    <div className="App">
      <AuthContext.Provider value={{}}>
        <Switch>

          {/* <a href="/issues">Issue List</a> */}
          <Route path="/issues" component={IssueList} />
          <Route path='/developers'>
            <Developers />
          </Route>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/" component={Home} />

        </Switch>
        <Footer/>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
