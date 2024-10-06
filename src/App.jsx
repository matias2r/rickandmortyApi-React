import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CharacterList from './components/CharacterList';
import Header from './components/Header';
import NotFound from './components/NotFound';
import Footer from './components/Footer';

function App() {
  return (

    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<CharacterList/>} />
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
