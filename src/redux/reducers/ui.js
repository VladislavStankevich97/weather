import {
  CITY,
  COUNTRY,
  CHECKBOX_SERVER_WEATHERBIT,
  CHECKBOX_SERVER_OPENWEATHERMAP,
} from "../actions/constants";

const initialState = {
  city: localStorage.getItem("city") || "",
  country: localStorage.getItem("country") || "",
  checkboxServerOpenweathermap: false,
  checkboxServerWeatherbit: false,
};

const ui = (state = initialState, action) => {
  switch (action.type) {
    case CITY:
      localStorage.setItem("city", action.payload);
      return {
        ...state,
        city: action.payload,
      };
    case COUNTRY:
      localStorage.setItem("country", action.payload.toUpperCase().slice(0, 2));
      return {
        ...state,
        country: action.payload.toUpperCase().slice(0, 2),
      };
    case CHECKBOX_SERVER_OPENWEATHERMAP:
      return {
        ...state,
        checkboxServerOpenweathermap: true,
        checkboxServerWeatherbit: false,
      };
    case CHECKBOX_SERVER_WEATHERBIT:
      return {
        ...state,
        checkboxServerOpenweathermap: false,
        checkboxServerWeatherbit: true,
      };
    default:
      return state;
  }
};

export default ui;
