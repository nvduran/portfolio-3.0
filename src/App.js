import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Gallery from './components/Gallery/Gallery';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

function App() {
  const [currentPage, setPage] = useState('About');
  return (
    <div>
      <Nav setPage={setPage} currentPage={currentPage}></Nav>
      <main>
        <About setPage={setPage} currentPage={currentPage}></About>
        <Gallery setPage={setPage} currentPage={currentPage}></Gallery>
        <Contact setPage={setPage} currentPage={currentPage}></Contact>
      </main>
    </div>
  );
}

export default App;
