import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
import FavsPage from '../FavsPage/FavsPage';
import SearchPage from '../SearchPage/SearchPage';
import Buttons from '../Buttons/Buttons';

function App(props) {
  return (
    <Router>
      <div className='links'>
        <ul>
          <li>
            <Link to='/'>Search</Link>
          </li>
          <li>
            <Link to='/api/favorites'>Favorites</Link>
          </li>
        </ul>
      </div>


      <div>
        <h1>Giphy Search!</h1>
      </div>

      <Route path="/" exact>
        <SearchPage />
        <Buttons />
      </Route>
      <Route path="/api/favorites">
        <FavsPage />
      </Route>
    </Router>
  );
}

export default App;
