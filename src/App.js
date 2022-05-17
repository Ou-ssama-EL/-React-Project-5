import React from 'react';
import './App.css';
import Home from './Components/pages/HomePage/Home';
import Services from './Components/pages/Services/Services';
import Products from './Components/pages/Products/Products';
import SignUp from './Components/pages/SignUp/SignUp';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/pages/Footer/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/-React-Project-5/' exact element={<Home />} />
        <Route path='/-React-Project-5/services' element={<Services />} />
        <Route path='/-React-Project-5/products' element={<Products />} />
        <Route path='/-React-Project-5/sign-up' element={<SignUp />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
