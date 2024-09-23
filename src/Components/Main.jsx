import React from "react";
import Home from "./Home";
import Menu from "./Menu";
import About from "./About";
import Footer from "./Footer";
import AboutRestro from "./AboutRestro";
import AboutPage from "./AboutPage";
import MenuPage from "../Pages/MenuPage";

const Main = () => {
  return (
    <>
      <div className="w-full relative bg-black text-white">
        <Home />
        <MenuPage />
        <AboutPage />
        {/* <About/>
    <AboutRestro/> */}
        <Footer />
      </div>
    </>
  );
};

export default Main;
