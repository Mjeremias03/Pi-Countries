import React from "react";


const CountryList = ({ countries }) => {
  return (
    <div >
      {countries.map((country) => (
        <div key={country.id}>
          {/* Contenido de cada tarjeta de país */}
          <h3>{country.name}</h3>
          {/* Otros detalles del país */}
        </div>
      ))}
    </div>
  );
};

export default CountryList;


