import React from "react";
import Cards from "../components/Minting/ChairmanMinting/Cards/cards";
import Details from "../components/Minting/ChairmanMinting/Details/details";

import Footer from "../layout/Footer/footer";
import Navbar from "../layout/NavBar/navbar";

const ChairmanMinting = () => {
  return (
    <div>
      <Navbar />
      <Cards />
      <Details />
      <Footer />
    </div>
  );
};

export default ChairmanMinting;
