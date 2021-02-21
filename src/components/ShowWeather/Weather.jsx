import React from "react";
import { connect } from "react-redux";
import "./Weather.css";

function Weather(props) {
  const { cityName, temp, description, windSpeed, countryCode } = props;

  const world = "./pictures/world.png";
  const city = "./pictures/city.png";
  const wind = "./pictures/wind.png";
  const temperature =
    parseFloat(temp) > 0
      ? "./pictures/temperature.png"
      : "./pictures/temperature-outside.png";

  var preciptionObject = {
    rain: "./pictures/rain.png",
    snow: "./pictures/snow.png",
    clouds: "./pictures/clouds.png",
    sky: "./pictures/sun.png",
  };

  var entries = Object.entries(preciptionObject);
  var preciption = description
    ? entries
        .filter((el) => description.toLowerCase().includes(el[0]))
        .pop()
        .pop()
    : "";

  return (
    <div className="container">
      <div>
        <img className="icons" src={world} alt={"not found"} />
        <h2>{countryCode}</h2>
      </div>

      <div>
        <img className="icons" src={city} alt={"not found"} />
        <h2>{cityName}</h2>
      </div>

      <div>
        <div>
          <img className="icons" src={temperature} alt={"not found"} />
          <h2>{temp}</h2>
        </div>
      </div>

      <div>
        <img
          className="icons"
          src={preciption || preciptionObject.clouds}
          alt={"not found"}
        />
        <h2>{description}</h2>
      </div>

      <div>
        <img className="icons" src={wind} alt={"not found"} />
        <h2>{windSpeed}</h2>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    countryCode: state.putWeatherServer.countryCode,
    cityName: state.putWeatherServer.city,
    temp: state.putWeatherServer.temp,
    description: state.putWeatherServer.description,
    windSpeed: state.putWeatherServer.windSpeed,
  };
}

export default connect(mapStateToProps, null)(Weather);
