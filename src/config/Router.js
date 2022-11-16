import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import AdminDashboard from "../pages/AdminDashboard";

import Home from "../pages/Home";
import Memberdashboard from "../pages/MemberDashboard";

const Routerapp = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Memberdashboard" element={<Memberdashboard />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Routerapp;
