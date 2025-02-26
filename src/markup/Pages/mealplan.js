import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';

const BannerPage = () => {
  return (
    <>
    <Header />
    <div style={{ textAlign: "center", padding: "20px", position: "relative" }}>
      {/* Home Button */}
      {/* <Link
        to="/"
        style={{
          position: "absolute",
          right: "20px",
          top: "20px",
          padding: "10px",
          fontSize: "1.5rem",
          backgroundColor: "transparent",
          color: "#007bff",
          border: "none",
          cursor: "pointer",
          textDecoration: "none",
        }}
      >
        <FaHome />
      </Link> */}

      {/* Heading */}
      <h1 style={{ fontSize: "2rem", marginBottom: "10px" }}>Meal Plan</h1>

      <img
        src={require("./../../images/meals.jpg")}
        alt="Banner"
        style={{
          width: "100%",
          maxHeight: "400px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />

      {/* Additional Text */}
      <p
        style={{
          fontSize: "1.5rem",
          marginTop: "20px",
          fontWeight: "bold",
          color: "#a020f0",
        }}
      >
       Something Exciting is Coming Soon!<br/> We’re working behind the scenes to bring you a premium selection of healthy meals.
      </p>
    </div>
     <Footer />
     </>
  );
};

export default BannerPage;
