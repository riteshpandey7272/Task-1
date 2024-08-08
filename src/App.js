import React, { useRef, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import TopLoadingBar from 'react-top-loading-bar';
import Nav from './components/nav/Nav';
import Home from './components/home/Home';
import Auth from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import './App.css';

function App() {
  const loadingBarRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const startLoading = () => {
    setLoading(true);
    loadingBarRef.current.continuousStart();
    setTimeout(() => {
      loadingBarRef.current.complete();
      setLoading(false);
    }, 300);
  };

  return (
    <>
      <TopLoadingBar
        color="#ff0000"
        height={3}
        ref={loadingBarRef}
        visible={loading}
      />
      <Nav onNavigate={startLoading} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
