import { combineReducers } from "redux";
import putWeatherServer from "./putWeatherServer";
import loader from "./loader";
import ui from "./ui";

export default combineReducers({
  ui,
  loader,
  putWeatherServer,
});
