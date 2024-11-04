// src/components/Home.js
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Resume Hub</h1>
      <nav>
        <ul>
          <li>
            <Link to="/resume-builder">Resume Builder</Link>
          </li>
          <li>
            <Link to="/resume-analyzer">Resume Analyzer</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
