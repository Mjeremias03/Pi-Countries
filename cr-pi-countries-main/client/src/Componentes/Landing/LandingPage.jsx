import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";

const LandingPage = () => {
  return (
    <>
      <div className="div">
        <h1>Bienvenidos!</h1>
        <p className="welcome-text">
          ¿Listo para embarcarte en un viaje asombroso alrededor de nuestro
          Planeta Tierra?
          <br />
          ¡Ven conmigo y disfrutemos de un viaje que nunca olvidarás!
        </p>

        <div>
          <Link to="/Home">
            <button className="button">Exploremos juntos!</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
