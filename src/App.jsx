"use client"

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useState } from 'react'

<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4800341716419272"
     crossorigin="anonymous"></script>

const App = () => (
  <Router>
    <Navbar />
    <AppRoutes />
    <Footer />
  </Router>
);

export default App;
