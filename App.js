import React from 'react';
import { Redirect } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import MapScreen from './components/MapScreen';
import DetailsScreen from './components/DetailsScreen';
import MoviesScreen from './components/MoviesScreen';

const App = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn');

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {isLoggedIn ? <Redirect to="/map" /> : <Login />}
        </Route>
        <Route path="/map" component={MapScreen} />
        <Route path="/details/:id" render={(props) => <DetailsScreen {...props} />} />
        <Route path="/movies" component={MoviesScreen} />
      </Switch>
    </Router>
  );
};

export default App;
