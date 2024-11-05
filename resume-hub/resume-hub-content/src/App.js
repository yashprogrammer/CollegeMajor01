// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ResumeBuilder from "./components/ResumeBuilder";
import ResumeAnalyzer from "./components/ResumeAnalyzer";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume-builder" element={<ResumeBuilder />} />
          <Route path="/resume-analyzer" element={<ResumeAnalyzer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
