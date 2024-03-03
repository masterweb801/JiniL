import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import Navbar from "./components/Navbar";
import Home from "./pages/index";
import Work from "./pages/work";
import Settings from "./pages/settings";
import Login from './pages/login';
import Wish from './pages/wish';
import Help from './pages/help';
import Change from './pages/settings/change';

function App() {
  const [log, setlog] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("tokenflg") !== null) {
      setlog(true);
    }
  }, []);

  return (
    <BrowserRouter>
      {log === true ?
        <>
          <main>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/work" element={<Work />} />
              <Route exact path="/help" element={<Help />} />
              <Route exact path="/settings" element={<Settings stlog={setlog} />} />
              <Route path="/settings/:id" element={<Change />} />
              <Route path="/offer/:id" element={<Wish />} />
            </Routes>
          </main>
          <header>
            <Navbar />
          </header>
        </> :
        <Login stlog={setlog} log={log} />
      }
    </BrowserRouter>
  )
}

export default App
