import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Recipe from './components/Recipe/Recipe';
import AllRecipes from './components/AllRecipes/AllRecipes';
import Routes from './routes';
import './styles/foundation.min.css';
import './styles/custom.css';


function App() {

  return (
    <div>
      <Header />
      <Routes />


    </div>

  );
}

export default App;
