import React from "react";
import Player from './Player';
import PropTypes from 'prop-types';

function PlayerList(props) {
  console.log(props.playerList);
  return (
    <div>
          {props.playerList.map((player, index) =>
            <Player
              name={player.name}
              key={player.id}
              id={player.id}/>

        )}



    </div>
  );
}

PlayerList.propTypes = {
  playerList: PropTypes.array
}

export default PlayerList;
