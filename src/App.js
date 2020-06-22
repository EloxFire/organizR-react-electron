import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Navbar from './components/sub/Navbar'
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Route path="/" exact component={props =>
        <div>
          <Navbar titles={["Home", "Work", "Blog", "Blinxon"]} />
        </div>
      }/>
    </Router>
  );
}

export default App;
