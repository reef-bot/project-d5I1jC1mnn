import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Dashboard from './components/Dashboard';
import RegistrationForm from './components/RegistrationForm';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/events' component={Events} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/register' component={RegistrationForm} />
      </Switch>
    </Router>
  );
};

export default App;