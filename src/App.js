import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Teams from "./Teams";
import Schedule from "./Schedule";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="navigation-menu">
        <Link to="/">Home</Link>
        <Link to="/schedule">Schedule</Link>
        <Link to="/teams">Teams</Link>
      </div>

      <Routes>
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
