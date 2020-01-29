import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Welcome from './components/Welcome/Welcome';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Recipe from './components/Recipe/Recipe';
import AllRecipes from './components/AllRecipes/AllRecipes';
import NotFound from './components/NotFound/NotFound';
import './styles/foundation.min.css';
import './styles/custom.css';


function App() {
  return (
    <Router>

      <div className='App'>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/home' component={Home} />
          <Route path='/welcome' component={Welcome} />
          <Route path='/login' component={Login} />
          <Route path='/recipe' component={Recipe} />
          <Route path='/allrecipes' component={AllRecipes} />
          <Route path='*' component={NotFound} />
        </Switch>

      </div>

    </Router>
  );
}

export default App;
