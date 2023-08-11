let Validate = (data) => {
  const error = {};
  if (!data.name) {
    error.name = "Porfavor escriba su actividad";
  } else if (data.name.length > 20) {
    error.name = "Menos caracters";
  } else if (/\d/.test(data.name)) {
    error.name = "Activities name can not contain numbers";
  } else error.name = "";

  if (data.duracion < 1) {
    error.duracion = "Duracion debe ser mayor a 1";
  } else if (data.duracion > 24) {
    error.duracion = "Duracion debe ser menor a 24";
  } else error.duracion = "";

  if (/\d/.test(data.countries)) {
    error.countries = "No puede haber numeros";
  } else if (!data.countries) {
    error.countries = "Seleccione su pais";
  } else error.countries = "";

  if (data.temporada === "0") {
    error.temporada = "Porfavor seleccione su temporada";
  } else error.temporada= "";

  return error;
};

export default Validate;
