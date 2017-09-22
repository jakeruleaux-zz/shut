import React from "react";
import PropTypes from "prop-types";

function Player(props) {
  return (
    <div>
      <p>Player One: {props.name}</p>
      <p>Player Two: {props.name2}</p>
    </div>
  );
}

Player.propTypes ={
  name: PropTypes.string,
  id: PropTypes.string
};

export default Player;
