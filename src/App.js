import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom'

import Login from './components/login/Login'
import Home from './components/home/Home'
import Galery from './components/galery/Galery'
import Live from './components/live/Live'
import Settings from './components/settings/Settings'

import Carrusel from './components/home/Carrusel'
import Test from './components/home/old_test'

function App() {
  return (
    <Router>
      <Route path="/" exact component={Login} />
      <Route path="/home" component={Home} />
      <Route path="/test" component={Test} />
      <Route path="/galery" component={Galery} />
      <Route path="/live" component={Live} />
      <Route path="/settings" component={Settings} />
    </Router>
  );
}

export default App;
