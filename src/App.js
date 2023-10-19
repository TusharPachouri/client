// client/src/App.js
import React from 'react';
import Button from './components/Button';
import HomePage from './pages/HomePage';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <HomePage />
      <Button onClick={() => alert('Button clicked!')}>Click Me!</Button>
    </div>
  );
};

export default App;