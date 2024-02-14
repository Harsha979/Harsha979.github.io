import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from "./App";
import RegisterPage from "./RegisterPage";

function Navigation(){

    <Router>
        <App />
    <Routes>
      <Route path="/" element={<App />}/>
    <Route path="/register" element={<RegisterPage />} />
    </Routes>
  </Router>
}

export default Navigation;