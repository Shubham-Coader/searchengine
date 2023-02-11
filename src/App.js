import React from 'react';
import './App.css';
import Header from './components/Header';
import News from './components/News';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <Header/>
      <Search/>
      <News/>
    </div>
  );
}

export default App;
