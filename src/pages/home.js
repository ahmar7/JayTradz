import React from "react";
import Details from "../components/Home/Details/details";
import Header from "../components/Home/Header/header";
import Mission from "../components/Home/Mission/mission";
import Navbar from "../layout/NavBar/navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Details />
      <Mission />
    </div>
  );
};

export default Home;
