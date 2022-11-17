import React from "react";
import Cards from "../components/Minting/PresidentMinting/Cards/cards";
import Details from "../components/Minting/PresidentMinting/Details/details";

import Footer from "../layout/Footer/footer";
import Navbar from "../layout/NavBar/navbar";

const PresidentMinting = () => {
  return (
    <div>
      <Navbar />
      <Cards />
      <Details />
      <Footer />
    </div>
  );
};

export default PresidentMinting;
