import { putWeatherServerWeatherbit } from "./serverWeatherbit_saga";
import {API_KEY_SERVER_WEATHERBIT} from './constantsApi'

export const definitionOfGeodata = (latitude, longitude) => (dispatch) => {
  fetch(
    `https://api.weatherbit.io/v2.0/current?lat=${latitude}&lon=${longitude}&key=${API_KEY_SERVER_WEATHERBIT}`
  )
    .then((respone) => respone.json())
    .then((json) => dispatch(putWeatherServerWeatherbit(json)));
};
