import React from "react";
import Navbar from "./components/Navbar/Navbar";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import CardContainer from "./components/CardContainer/CardContainer";
import Trends from "./components/Trends/Trends";
import Articles from "./components/Articles/Articles";
import Cal from "./components/CAL/Cal";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroBanner />
      <CardContainer title={"Featured Homes"} />
      <CardContainer title={"Browse homes near you"} />
      <CardContainer title={"Featured Agents"} />
      <CardContainer title={"Browse homes near you"} />
      <Trends />
      <Articles />
      <Cal />
      <Footer />
    </div>
  );
};

export default App;
