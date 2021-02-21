import {
  ERR_MESSAGE,
  PUT_WEATHER_SERVER_WEATHERBIT,
  LOAD_WEATHER_SERVER_WEATHERBIT,
} from "./constants";

export const putWeatherServerWeatherbit = (dataFromServer) => {
  return {
    type: PUT_WEATHER_SERVER_WEATHERBIT,
    payload: dataFromServer,
  };
};

export const loadWeatherServerWeatherbit = (city, country) => {
  return {
    type: LOAD_WEATHER_SERVER_WEATHERBIT,
    city,
    country,
  };
};

export const errMessage = (err) => {
  return {
    type: ERR_MESSAGE,
    err,
  };
};
