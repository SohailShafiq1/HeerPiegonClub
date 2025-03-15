import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Navbar from "./pages/home/components/NavBar/Navbar";
import Weather from "./pages/Weather/Weather";
import Tournament from "./pages/Tournament/Tournament";
import Contact from "./pages/Contact/Contact";
import Events from "./pages/home/components/Events/Events";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Events/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/tournament" element={<Tournament />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
