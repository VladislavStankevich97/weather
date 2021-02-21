import "./App.css";
import { useSelector } from "react-redux";
import Сontainer from "../UI/container/Сontainer";
import Weather from "../ShowWeather/Weather";
import CircularProgress from "@material-ui/core/CircularProgress";

function App() {
  const loading = useSelector((state) => state.loader.loading);
  return (
    <div className="App">
      <Сontainer />
      {loading ? <CircularProgress /> : <Weather />}
    </div>
  );
}

export default App;
