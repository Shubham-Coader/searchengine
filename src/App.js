import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import News from './components/News';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <Header/>
      <Search/>
      <News/>
      <Footer/>
    </div>
  );
}

export default App;
