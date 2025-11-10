import React, { useEffect } from "react";
import Header from "./components/Header";
import About from "./components/About";
import { initParallax } from "./components/Parallax";
import Menu from "./components/Menu";
import Gallery from "./components/Gallery";
import Location from "./components/Location";
import Footer from "./components/Footer";

const App = () => {
  useEffect(() => {
    initParallax();
  }, []);

  return (
    <>
      <Header />
      <About />
      <Menu />
      <Gallery />
      <Location />
      <Footer />
    </>
  );
};

export default App;
