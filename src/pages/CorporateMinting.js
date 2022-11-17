import React from "react";
import Cards from "../components/Minting/CorporateMinting/Cards/cards";
import Details from "../components/Minting/CorporateMinting/Details/details";

import Footer from "../layout/Footer/footer";
import Navbar from "../layout/NavBar/navbar";

const CorporateMinting = () => {
  return (
    <div>
      <Navbar />
      <Cards />
      <Details />
      <Footer />
    </div>
  );
};

export default CorporateMinting;
