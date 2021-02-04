import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Issue from './components/Issue';

// import Footer from './components/Footer';

// Contexts
import { AuthContext } from './contexts/AuthContext';

// Components

import Signup from './components/Signup';
import Home from './components/Home';
// import NavBar from './components/NavBar';
import Login from './components/Login';
import IssueList from './components/IssueList';
import EditForm from './components/EditForm';
import Developers from './components/Developers';
import Logout from './components/Logout';

function App() {

  const [loginStatus, setLoginStatus] = useState(false)

const onScroll = e => {
  console.log(e);
}

  return (
    <div className="App" onScroll={onScroll}>
      <AuthContext.Provider value={{loginStatus, setLoginStatus}}>
        <Switch>
          {/* <a href="/issues">Issue List</a> */}
          <Route exact path="/issues" component={IssueList} />
          <Route path="/issues/:id" component={Issue} />
          <Route path="/issues/:id/edit" component={EditForm} />
          <Route path="/about">
            <Developers />
          </Route>
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout}/>
          <Route path="/signup" component={Signup} />
          <Route path="/" component={Home} />
        </Switch>
        {/* <Footer/> */}
      </AuthContext.Provider>
    </div>
  );
}

export default App;
