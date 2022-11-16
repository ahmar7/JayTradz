import React from "react";
import Header from "../components/Memberdashboard/Header/header";
import Rewardspoint from "../components/Memberdashboard/RewardsPoint/rewardspoint";
import Footer from "../layout/Footer/footer";
import Navbar from "../layout/NavBar/navbar";

const MemberDashboard = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Rewardspoint />
      <Footer />
    </div>
  );
};

export default MemberDashboard;
