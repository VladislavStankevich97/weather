import React from "react";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import { loadWeatherServerWeatherbit } from "../../../redux/actions/serverWeatherbit_saga";
import { loadWeatherServerOpenweathermap } from "../../../redux/actions/serverOpenweathermap_thunk";
import "./buttonShowWeather.css";

function ShowWeather(props) {
  const {
    city,
    country,
    isCheckboxServerWeatherbit,
    isCheckboxServerOpenweathermap,
    onLoadWeatherServerWeatherbit,
    onLoadWeatherServerOpenweathermap,
  } = props;

  const inactiveСheckboxes =
    !isCheckboxServerOpenweathermap && !isCheckboxServerWeatherbit;

  return (
    <div className="userButton">
      <Button
        variant="contained"
        color={inactiveСheckboxes ? "secondary" : "primary"}
        disabled={inactiveСheckboxes}
        onClick={
          isCheckboxServerOpenweathermap
            ? onLoadWeatherServerOpenweathermap(city, country)
            : onLoadWeatherServerWeatherbit(city, country)
        }
      >
        {inactiveСheckboxes ? "select server" : "show weather"}
      </Button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    city: state.ui.city,
    country: state.ui.country,
    isCheckboxServerWeatherbit: state.ui.checkboxServerWeatherbit,
    isCheckboxServerOpenweathermap: state.ui.checkboxServerOpenweathermap,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadWeatherServerOpenweathermap: (city, country) => () =>
      dispatch(loadWeatherServerOpenweathermap(city, country)),
    onLoadWeatherServerWeatherbit: (city, country) => () =>
      dispatch(loadWeatherServerWeatherbit(city, country)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowWeather);
