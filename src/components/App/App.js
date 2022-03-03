import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
import FavsPage from '../FavsPage/FavsPage';
import SearchPage from '../SearchPage/SearchPage';

function App(props) {
  return (
    <Router>
      <div className='links'>
        <ul>
          <li>
            <Link to='/api/category'>Search</Link>
          </li>
          <li>
            <Link to='/api/favorites'>Favorites</Link>
          </li>
        </ul>
      </div>


      <div>
        <h1>Giphy Search!</h1>
      </div>

      <Route path="/api/category" exact>
        <SearchPage />
      </Route>
      <Route path="/api/favorites">
        <FavsPage />
      </Route>
    </Router>
  );
}

export default App;
