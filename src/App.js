import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Gallery from './components/Gallery/Gallery';
import About from './components/About/About';

function App() {
  const [currentPage, setPage] = useState('About');
  return (
    <div>
      <Nav setPage={setPage} currentPage={currentPage}></Nav>
      <main>
        <About></About>
        <Gallery setPage={setPage} currentPage={currentPage}></Gallery>
      </main>
    </div>
  );
}

export default App;
