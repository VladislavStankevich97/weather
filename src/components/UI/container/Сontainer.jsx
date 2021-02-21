import React from "react";
import ShowWeather from "../buttonShowWeather/ButtonShowWeather";
import UserGeolocation from "../geolocation/UserGeolocation";
import InputField from "../inputFields/InputFields";
import Checkboxs from "../checkboxes/Checkboxes";
import "./container.css";

function Header() {
  return (
    <div className="container">
      <Checkboxs />
      <InputField />
      <ShowWeather />
      <UserGeolocation />
    </div>
  );
}

export default Header;
