import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Features from "./pages/Features";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Features" element={<Features />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />}/>
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
