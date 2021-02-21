import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { definitionOfGeodata } from "../../../redux/actions/definitionOfGeodata";

function UserGeolocation(props) {
  const { onDefinitionOfGeodata } = props;
  const [lat, setLat] = useState(localStorage.getItem("latitude") || null);
  const [lon, setLon] = useState(localStorage.getItem("longitude") || null);

  useEffect(() => {
    if (lat && lon) {
      onDefinitionOfGeodata(lat, lon);
    }
  }, [lat, lon, onDefinitionOfGeodata]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      localStorage.setItem("latitude", position.coords.latitude)
      setLat(position.coords.latitude);
      localStorage.setItem("longitude", position.coords.longitude)
      setLon(position.coords.longitude);
    });
  }, []);

  return <div></div>;
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDefinitionOfGeodata: (latitude, longitude) =>
      dispatch(definitionOfGeodata(latitude, longitude)),
  };
};

export default connect(null, mapDispatchToProps)(UserGeolocation);
