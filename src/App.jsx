import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  return (
    <>
    <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
    </Router>
    </>
  );
}

export default App;
