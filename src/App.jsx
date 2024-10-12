import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import CharacterList from './components/CharacterList';
import Header from './components/Header';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './components/ErrorFallback';

function App() {
  return (
    <>
<Router>
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => navigate('/')}>
        <Header />
        <Routes>
          <Route path='/' element={<CharacterList />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </ErrorBoundary>
    </Router>
    </>
  );
}

export default App;
