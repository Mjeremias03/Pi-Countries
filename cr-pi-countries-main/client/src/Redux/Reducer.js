import {
  GET_ALL_CHARACTER,
  GET_FOR_ID,
  GET_FOR_NAME,
  FILTER_FOR_CONTINENT,
  ORDER,
  SET_PAGE,
  RESET,
} from "./ActionTypes";

const initialState = {
  countries: [],
  allcountries: [],
  detail: [],
  currentPage: 1,
  countriesPerPage: 10,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_CHARACTER:
      return {
        ...state,
        countries: action.payload,
        allcountries: action.payload,
      };
    case GET_FOR_ID:
      return {
        ...state,
        detail: action.payload,
      };
    case GET_FOR_NAME:
      return {
        ...state,
        countries: Array.isArray(action.payload)
          ? action.payload
          : [action.payload],
      };
    case FILTER_FOR_CONTINENT:
      return {
        ...state,
        countries: state.allcountries.filter(
          (elemento) => elemento.continente === action.payload
        ),
      };
    case ORDER:
      const copycountries = [...state.countries];
      return {
        ...state,
        countries:
          action.payload === "A"
            ? copycountries.sort((a, b) => a.name.localeCompare(b.name))
            : copycountries.sort((a, b) => b.name.localeCompare(a.name)),
      };

    case SET_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
      case RESET:
        return{
          ...state,
          countries: state.allcountries
        }
    default:
      return state;
  }
}
