import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './components/theme';
import Login from './components/Login';
import Home from './components/Home';
import SignupStep1 from './components/SignupStep1';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignupStep1 />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;