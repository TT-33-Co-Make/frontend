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
import Login from './components/Login';
import IssueList from './components/IssueList';
import EditForm from './components/EditForm';
import AddForm from './components/AddForm';
import Developers from './components/Developers';
import axiosWithAuth from './utils/axiosWithAuth';
import Logout from './components/Logout';

function App() {
  const [loginStatus, setLoginStatus] = useState(false);

  const onScroll = (e) => {
    console.log(e);
  };

  const [issuesList, setIssuesList] = useState([]);
  const [issue, setIssue] = useState({
    id: '',
    title: '',
    description: ''
  });

  const getIssuesList = () => {
    axiosWithAuth()
      .get('issues')
      .then((res) => {
        console.log('GET ISSUES APP Component', res);
        setIssuesList(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  function fetchIssue(id) {
    axiosWithAuth()
      .get(`issues/${id}`)
      .then((res) => {
        console.log('ISSUE OBJECT', res);
        setIssue(res.data);
        console.log('ISSUE STATE set at App.js', issue);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="App" onScroll={onScroll}>
      <AuthContext.Provider value={{ loginStatus, setLoginStatus }}>
        <IssuesContext.Provider
          value={{ issuesList, getIssuesList, issue, fetchIssue }}
        >
          <Switch>
            <Route exact path="/issues" component={IssueList} />
            <Route path="/issues/:id/edit" component={EditForm} />
            <Route path="/issues/add" component={AddForm} />
            <Route path="/issues/:id" component={Issue} />
            <Route path="/about" component={Developers} />
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
            <Route path="/signup" component={Signup} />
            <Route path="/" component={Home} />
          </Switch>
        </IssuesContext.Provider>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
