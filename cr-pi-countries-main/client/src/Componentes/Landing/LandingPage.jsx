import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";

const LandingPage = () => {
  return (
    <>
      <div className="div">
        <h1>BIENVENIDO!!!</h1>
      <Link to="/Home">
        <button>Home</button>
      </Link>
      </div>
    </>
  );
};
export default LandingPage;
