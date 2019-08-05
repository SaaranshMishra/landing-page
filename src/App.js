import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/sign-in" component={LoginForm} />
      </Switch>
    </div>
  );
}

export default App;
