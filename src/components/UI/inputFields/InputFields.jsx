import React from "react";
import { TextField } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { connect } from "react-redux";
import {
  handleChangeInputCity,
  handleChangeInputCountry,
} from "../../../redux/actions/ui";
import "./inputFields.css";

function InputField(props) {
  const {
    city,
    country,
    errMessage,
    onHandleChangeInputCity,
    onHandleChangeInputCountry,
  } = props;

  return (
    <div className="container">
      <div className="city">
        <TextField
          error={errMessage ? true : false}
          id="outlined-er￼ror-helper-text"
          helperText={
            errMessage ? <Alert severity="error">{errMessage}</Alert> : null
          }
          label={errMessage ? "This city does not exist" : "Сity ​​name"}
          variant="outlined"
          value={city}
          onChange={onHandleChangeInputCity}
        />
      </div>
      <div className="city">
        <TextField
          id="outlined-basic"
          placeholder="For example: BY"
          label="Country code"
          variant="outlined"
          type="text"
          value={country}
          onChange={onHandleChangeInputCountry}
        />
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    city: state.ui.city,
    country: state.ui.country,
    errMessage: state.putWeatherServer.errMessage,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onHandleChangeInputCity: (value) =>
      dispatch(handleChangeInputCity(value.target.value)),
    onHandleChangeInputCountry: (value) =>
      dispatch(handleChangeInputCountry(value.target.value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InputField);
