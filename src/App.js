import React from 'react';
import Navbar from './components/sub/Navbar'
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Navbar titles={"test", "test2"} />
      <Home/>
    </div>
  );
}

export default App;
