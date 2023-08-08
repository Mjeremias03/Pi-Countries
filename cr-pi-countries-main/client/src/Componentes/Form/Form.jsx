import React, { useState } from "react";
import style from "../Form/Form.module.css";
import { useDispatch, useSelector } from "react-redux";
import { createActivity } from "../../Redux/Actions";

const Form = () => {
  const dispatch = useDispatch();
  const countriess = useSelector((state) => state.countries);
  const [formData, setFormData] = useState({
    name: "",
    temporada: "",
    dificultad: "",
    duracion: 1,
    countries: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    temporada: "",
    dificultad: "",
    duracion: "",
    countries: "",
  });

  const validate = () => {
    let newErrors = {
      name: "",
      temporada: "",
      dificultad: "",
      duracion: "",
      countries: "",
    };

    if (formData.duracion < 1 || formData.duracion > 24) {
      newErrors.duracion = "La duración debe estar entre 1 y 24 horas";
    }

    if (formData.name === "0") {
      newErrors.name = "Debe tener mas de un caracter";
    }

    setErrors(newErrors);
  };
  const handleChange = (event) => {
    const { name, value, options } = event.target;
  
    if (name === "countries") {
      const selectedCountries = Array.from(options)
        .filter((option) => option.selected)
        .map((option) => option.value);
  
      setFormData({
        ...formData,
        [name]: selectedCountries,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  
    // Resto del código de validación y actualización
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    validate();

    if (Object.values(errors).every((error) => error === "")) {
      try {
        await dispatch(createActivity(formData));
      } catch (error) {
        console.error("Error al crear la actividad:", error);
      }
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div className={style.form}>
        <label className={style.label}>Name: </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={style.input}
        />
        <span>{errors.name}</span>

        <label>Dificultad:</label>
        <input
          className={style.dificultad}
          type="range"
          id="DificultadSlider"
          name="dificultad"
          min="1"
          max="5"
          value={formData.dificultad}
          onChange={handleChange}
        />
        <span>{errors.dificultad}</span>

        <label className={style.label}>Duracion(horas):</label>
        <input
          type="number"
          name="duracion"
          value={formData.duracion}
          onChange={handleChange}
          min="1"
          max="24"
          className={style.input}
        />
        <span>{errors.duracion}</span>

        
          <label className={style.label}>Temporada:</label>
          <div>
            <label  htmlFor="Otoño">Otoño</label>
            <input
              type="radio"
              id="Otoño"
              name="temporada"
              value="Otoño"
              checked={formData.temporada === "Otoño"}
              onChange={handleChange}
            />

            <label  htmlFor="Verano">Verano</label>
            <input
              type="radio"
              id="Verano"
              name="temporada"
              value="Verano"
              checked={formData.temporada === "Verano"}
              onChange={handleChange}
            />

            <label htmlFor="Primavera">Primavera</label>
            <input
              type="radio"
              id="Primavera"
              name="temporada"
              value="Primavera"
              checked={formData.temporada === "Primavera"}
              onChange={handleChange}
            />

            <label htmlFor="Invierno">Invierno</label>
            <input
              type="radio"
              id="Invierno"
              name="temporada"
              value="Invierno"
              checked={formData.temporada === "Invierno"}
              onChange={handleChange}
              
            />
          </div>
          <span>{errors.temporada}</span>
     

        <label className={style.label}>País:</label>
        <div className={style.select}>
          <select
            name="countries"
            value={formData.countries}
            onChange={handleChange}
         
          >
            {countriess.map((country) => (
              <option key={country.name} value={country.name}>
                {country.name}
              </option>
            ))}
          </select>
          <span>{errors.pais}</span>
        </div>

        <button className={style.submitBtn} type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
