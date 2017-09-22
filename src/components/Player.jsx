import React from "react";
import PropTypes from "prop-types";

function Player(props) {
  return (
    <div>
      <p>Player One: {props.name}</p>
      <p>Player Two: {props.name}</p>
    </div>
  );
}

Player.propTypes ={
  name: PropTypes.string.isRequired
};

export default Player;
