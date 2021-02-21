import {
  ERR_MESSAGE,
  PUT_WEATHER_SERVER_WEATHERBIT,
  PUT_WEATHER_SERVER_OPENWEATHERMAP,
} from "../actions/constants";

const initialState = {
  countryCode: localStorage.getItem("countryCode") || "",
  city: localStorage.getItem("city") || "",
  temp: localStorage.getItem("temp") || "",
  description: localStorage.getItem("description") || "",
  windSpeed: localStorage.getItem("windSpeed") || "",
  errMessage: "",
};

const putWeatherServer = (state = initialState, action) => {
  switch (action.type) {
    case PUT_WEATHER_SERVER_OPENWEATHERMAP:
      const tempServer1 = `${action.payload.main.temp.toPrecision(2)} °C`;
      const windSpeedServer1 = `${action.payload.wind.speed.toFixed(2)} m/s`;
      localStorage.setItem("countryCode", action.payload.sys.country);
      localStorage.setItem("city", action.payload.name);
      localStorage.setItem("temp", tempServer1);
      localStorage.setItem(
        "description",
        action.payload.weather[0].description
      );
      localStorage.setItem("windSpeed", windSpeedServer1);
      return {
        ...state,
        countryCode: action.payload.sys.country,
        city: action.payload.name,
        temp: tempServer1,
        description: action.payload.weather[0].description,
        windSpeed: windSpeedServer1,
        errMessage: "",
      };
    case PUT_WEATHER_SERVER_WEATHERBIT:
      const tempServer2 = `${action.payload.data[0].temp.toPrecision(2)} °C`;
      const windSpeedServer2 = `${action.payload.data[0].wind_spd.toFixed(
        2
      )} m/s`;
      localStorage.setItem("countryCode", action.payload.data[0].country_code);
      localStorage.setItem("city", action.payload.data[0].city_name);
      localStorage.setItem("temp", tempServer2);
      localStorage.setItem(
        "description",
        action.payload.data[0].weather.description
      );
      localStorage.setItem("windSpeed", windSpeedServer2);
      return {
        ...state,
        countryCode: action.payload.data[0].country_code,
        city: action.payload.data[0].city_name,
        temp: tempServer2,
        description: action.payload.data[0].weather.description,
        windSpeed: windSpeedServer2,
        errMessage: "",
      };
    case ERR_MESSAGE:
      return {
        ...state,
        errMessage: action.err.error || action.err.message,
      };
    default:
      return state;
  }
};

export default putWeatherServer;
