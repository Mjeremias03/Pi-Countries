import React from "react";
import style from "./About.module.css";
import Hola from "../../assets/Hola.jpg";
import linkedin from "../../assets/linkedin.png"; // Corrected the import filename
import instagram from '../../assets/instagram.jpg'
import { Link } from "react-router-dom";
const About = () => {
  const linkedinProfileUrl =
    "https://www.linkedin.com/in/jeremias-mingolla-867059245/"; // Replace with your LinkedIn profile URL

    const instagramProfileURL = "https://www.instagram.com/jeremingolla/"
  return (
    <div className={style.contenedor}>
      <div className={style.div}>
        <Link to="/Home">
        <button className={style.button}>Volver</button>
        </Link>
        <div className={style.imgCara}>
          <img className={style.imagen} src={Hola} alt="Hola" />
        </div>
        <div className={style.textContainer}>
          <h1>¡Hola, soy Jeremías!</h1>
          <p> 
            Soy un apasionado desarrollador web y entusiasta de la tecnología.
            Mi objetivo es aprovechar al máximo las posibilidades del mundo
            digital para crear soluciones creativas y funcionales.
          </p>
          <p>
            Mi viaje en el desarrollo web comenzó con la curiosidad de explorar
            cómo las cosas cobran vida en la pantalla. Desde entonces, he estado
            aprendiendo constantemente, mejorando mis habilidades en
            programación y diseño.
          </p>
          <div className={style.linkedin}>
            <a href={linkedinProfileUrl} target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn" className={style.linkedInImage} />
            </a>
            <a href={instagramProfileURL} target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="LinkedIn" className={style.linkedInImage} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

