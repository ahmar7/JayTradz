import React from "react";
import Header from "../components/Memberdashboard/Header/header";
import RedeemPoints from "../components/Memberdashboard/RedeemPoints/redeemPoints";
import Rewardspoint from "../components/Memberdashboard/RewardsPoint/rewardspoint";
import Footer from "../layout/Footer/footer";
import Navbar from "../layout/NavBar/navbar";

const MemberDashboard = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Rewardspoint />
      <RedeemPoints />
      <Footer />
    </div>
  );
};

export default MemberDashboard;
