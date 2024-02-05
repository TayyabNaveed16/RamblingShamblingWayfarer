import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './screens/Landing';
import Poetry from './screens/Poetry';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';

function App() {

  return (
    <Router>
      <NavigationBar/> 
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Poetry" element={<Poetry />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;