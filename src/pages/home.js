import React from "react";
import Details from "../components/Home/Details/details";
import Header from "../components/Home/Header/header";
import Navbar from "../layout/NavBar/navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Details />
    </div>
  );
};

export default Home;
