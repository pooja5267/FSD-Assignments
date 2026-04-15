import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Admin from "./components/Admin";

function App() {
  const [showAdmin, setShowAdmin] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:5000/api/portfolio")
      .then(res => console.log(res.data))
      .catch(err => console.log(err));

    // Check for admin hash
    const handleHashChange = () => {
      setShowAdmin(window.location.hash === '#admin');
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (showAdmin) {
    return <Admin />;
  }

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}

export default App;