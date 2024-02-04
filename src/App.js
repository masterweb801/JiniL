import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/index";
import Work from "./pages/work";
import User from "./pages/user";
import Settings from "./pages/settings";
import Login from './pages/login';

function App() {
  const [log, setlog] = useState(false);


  useEffect(() => {
    setlog(true);
  }, [])

  return (
    <BrowserRouter>
      {log === true ?
        <>
          <main>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/work" element={<Work />} />
              <Route exact path="/user" element={<User />} />
              <Route exact path="/settings" element={<Settings stlog={setlog} />} />
            </Routes>
          </main>
          <header>
            <Navbar />
          </header>
        </> :
        <Login />
      }
    </BrowserRouter>
  );
}

export default App;
