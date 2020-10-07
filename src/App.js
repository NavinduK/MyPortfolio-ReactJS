import React from 'react';
import './App.css';
import "./components/assets/css/styles.css";
import "./components/assets/bootstrap/css/bootstrap.css";
import "./components/assets/css/Lightbox-Gallery.css";
import Navigation from './components/Navigation';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Home/>
    </div>
  );
}

export default App;
