import React from "react";
import Discbursement from "../components/Admindashboard/Discbursement/discbursement";
import Header from "../components/Admindashboard/Header/header";
import Notification from "../components/Admindashboard/Notifications/notification";
import Footer from "../layout/Footer/footer";
import Navbar from "../layout/NavBar/navbar";

const AdminDashboard = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Discbursement />
      <Notification />
      <Footer />
    </div>
  );
};

export default AdminDashboard;
