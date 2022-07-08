  import React from "react";
import DownloadApp from "./Components/DownloadApp";
import Extra from "./Components/Extra";
import Features from "./Components/Features";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Sectionthree from "./Components/Sectionthree";
import Sectiontwo from "./Components/Sectiontwo";
import Work from "./Components/Work";
import Couple from "./Components/Couple";
import Faq from "./Components/Faq";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Sectiontwo/>
      <Sectionthree/>
      <Work/>
      <DownloadApp/>
      <Features/>
      <Extra/>
      <Couple/>
      <Faq/>
      <Footer/>

    </div>
  );
}

export default App;
