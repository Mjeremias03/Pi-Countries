// Card.jsx
import React from "react";
import style from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ imagen, name, poblacion, subregion, area, continente, capital, id }) => {
  return (
    <div className={style.Card}>
      <div className={style.front}>
        <Link to={`/Detail/${id}`}>
          <img src={imagen} alt={name} className={style.CardImage} />
        </Link>
      </div>
      <div className={style.back}>
        <h2>Name: {name}</h2>
        <h2>Continent: {continente}</h2>
        <h2>Capital: {capital}</h2>
        <h2>Area: {area}</h2>
        <h2>Subregion: {subregion}</h2>
        <h2>Population: {poblacion}</h2>
      </div>
    </div>
  );
};

export default Card;




