import React from "react";
import Nav from "./components/layout/Nav";
import Home from "./components/layout/Home";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import "./styles/global.css";

function App() {
  return (
    <>
      <Nav />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
