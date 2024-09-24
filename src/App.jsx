import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CharacterList from './components/CharacterList';
import ErrorBoundary from './components/ErrorBoundary';
import ErrorComponent from './components/ErrorComponent';
import Header from './components/Header';

function App() {
  return (

    <Router>
      <ErrorBoundary> 
      <Header />
      <Routes>
        <Route path='/' element={<CharacterList/>} />
        <Route path="/error" element={<ErrorComponent />} /> 
      </Routes>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
