import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Issue from './components/Issue';
// import Footer from './components/Footer';

// Contexts
import { AuthContext } from './contexts/AuthContext';
import { IssuesContext } from './contexts/IssuesContext';

// Components

import Signup from './components/Signup';
import Home from './components/Home';
// import NavBar from './components/NavBar';
import Login from './components/Login';
import IssueList from './components/IssueList';
import EditForm from './components/EditForm';
import AddForm from './components/AddForm';
import Developers from './components/Developers';
import axiosWithAuth from './utils/axiosWithAuth';

function App() {
  const onScroll = (e) => {
    console.log(e);
  };

  const [issuesList, setIssuesList] = useState([]);

  const getIssues = () => {
    axiosWithAuth()
      .get('issues')
      .then((res) => {
        // console.log('GET ISSUES', res);
        setIssuesList(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="App" onScroll={onScroll}>
      <AuthContext.Provider value={{}}>
        <IssuesContext.Provider value={{ issuesList, getIssues }}>
          <Switch>
            {/* <a href="/issues">Issue List</a> */}
            <Route path="/issues/:id/edit" component={EditForm} />
            <Route path="/issues/add" component={AddForm} />
            <Route path="/issues/:id" component={Issue} />
            <Route exact path="/issues" component={IssueList} />
            <Route path="/about">
              <Developers />
            </Route>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/" component={Home} />
          </Switch>
          {/* <Footer/> */}
        </IssuesContext.Provider>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
