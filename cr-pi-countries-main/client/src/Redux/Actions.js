import axios from "axios";
import {
  GET_ALL_CHARACTER,
  GET_FOR_ID,
  GET_FOR_NAME,
  FILTER_FOR_CONTINENT,
  ORDER,
  SET_PAGE,
  CREATE_ACTIVITY,
  CREATE_ACTIVITY_FAILURE,
  RESET,
  ORDER_POBLACION,
  GET_ACTIVITY
} from "./ActionTypes";

export const getcharacter = () => {
  return async function (dispatch) {
    try {
      const { data } = await axios.get("http://localhost:3001/countries");
      dispatch({
        type: GET_ALL_CHARACTER,
        payload: data,
      });
    } catch (error) {
      console.error("Error while fetching data:", error);
    }
  };
};

export const getCountriesForId = (id) => {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(`http://localhost:3001/countries/${id}`);
      console.log(data);
      dispatch({
        type: GET_FOR_ID,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const getCountriesForName = (name) => {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(`http://localhost:3001/countries`, {
        params: { name: name.toLowerCase() },
      });

      // Si data es null o no es un array, establecerlo como un array vacío
      const countries = Array.isArray(data) ? data : [];

      dispatch({
        type: GET_FOR_NAME,
        payload: countries,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const filterforcontinent = (continente) => {
  return {
    type: FILTER_FOR_CONTINENT,
    payload: continente,
  };
};

export const orderCountries = (order) => {
  return {
    type: ORDER,
    payload: order,
  };
};

export const setPage = (page) => {
  return {
    type: SET_PAGE,
    payload: page,
  };
};

export const reset = () => {
  return {
    type: RESET,
  };
};

export const createActivity = (activityData) => {
  return async (dispatch) => {
    try {
      // Realizar la solicitud POST a la API para crear la actividad
      const response = await axios.post(
        "http://localhost:3001/activity",
        activityData
      );
      // Si la solicitud es exitosa, enviar la respuesta al store
      dispatch({
        type: CREATE_ACTIVITY,
        payload: response.data, // Puedes ajustar esto según la estructura de la respuesta de tu API
      });
    } catch (error) {
      // Si la solicitud falla, manejar el error
      dispatch({
        type: CREATE_ACTIVITY_FAILURE,
        payload: error.message, // Puedes ajustar esto para obtener más información del error si es necesario
      });
    }
  };
};
 
export const orderForPoblacion = (num) =>{
  return{
    type: ORDER_POBLACION,
    payload: num
  }
}

export const getactivity = () =>{
return async (dispatch)=>{
const {data} = await axios.get("http://localhost:3001/activity")
dispatch({
type:GET_ACTIVITY,
payload:data
})
}
}