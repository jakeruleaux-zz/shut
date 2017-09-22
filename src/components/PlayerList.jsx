import React from "react";
import Player from './Player';
import PropTypes from 'prop-types';

function PlayerList(props) {
  console.log(props.playerList);
  return (
    <div>

      <Player/>

    </div>
  );
}



export default PlayerList;
