import React, {useEffect, useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import './App.css';
import Content from './components/Content/Content';
import Dashboard from './components/Dashboard/Dashboard';
import Posts from './components/Posts/Posts';
// import axios from 'axios';

const App = () => {
  // const {state, setState} = useState('');

  // useEffect(() => {
  //   fetchSomething();
  // }, []);

  // const fetchSomething = () => {
  //   const result = axios.get('http://localhost:8080/ping');
  //   console.log(result);
  // }

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={Content} />
          <Route path='/admin_dashboard' component={Dashboard} />
          <Route path='/posts' component={Posts} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
