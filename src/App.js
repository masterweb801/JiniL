import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/index";
import Work from "./pages/work";
import User from "./pages/user";
import Settings from "./pages/settings";

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/work" element={<Work />} />
          <Route exact path="/user" element={<User />} />
          <Route exact path="/settings" element={<Settings />} />
        </Routes>
      </main>
      <header>
        <Navbar />
      </header>
    </Router>
  );
}

export default App;
