import {
  CITY,
  COUNTRY,
  CHECKBOX_SERVER_WEATHERBIT,
  CHECKBOX_SERVER_OPENWEATHERMAP,
} from "./constants";

export const handleChangeInputCity = (value) => {
  return {
    type: CITY,
    payload: value,
  };
};

export const handleChangeInputCountry = (value) => {
  return {
    type: COUNTRY,
    payload: value,
  };
};

export const handleChangeCheckboxServerOpenweathermap = () => {
  return {
    type: CHECKBOX_SERVER_OPENWEATHERMAP,
  };
};

export const handleChangeCheckboxServerWeatherbit = () => {
  return {
    type: CHECKBOX_SERVER_WEATHERBIT,
  };
};
