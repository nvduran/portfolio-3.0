import React from "react";
import './App.css';
import Nav from './components/Nav/Nav';
import Gallery from './components/Gallery/Gallery';
import About from './components/About/About';

function App() {
  return (
    <div>
      <Nav />
      <main>
        <About />
        <Gallery />
      </main>
    </div>
  );
}

export default App;
