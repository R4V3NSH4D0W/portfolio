import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/home/Home";
import Aboutme from "./components/Aboutme/Aboutme";
import Skills from "./components/Skills/Skills";
import Qualification from "./components/Qualification/Qualification";
import Works from "./components/work/Works";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <Aboutme />
        <Skills />
        <Qualification />
        <Works />
        <Contact />
      </main>
    </>
  );
};

export default App;
