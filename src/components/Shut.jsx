import React from 'react';
import NewPlayer from './NewPlayer';
import {connect} from 'react-redux';
import PlayerList from "./PlayerList";

class Shut extends React.Component {

  constructor(props) {
    super(props);
    }

  rollDice() {
    let maxRoll = 12;
    const diceRoll = Math.floor((Math.random() * maxRoll) + 1);
    const { dispatch } = this.props;
    const action = {
      type: c.ROLL_DICE,
      diceRoll: diceRoll
    }
    dispatch(action);
  }

    render() {
      return (
        <div>
          <NewPlayer/>
          <PlayerList
            playerList = {this.props.masterPlayerList}/>
        </div>
      )
    }
}

const mapStateToProps = state => {
  return {
    masterPlayerList : state
  }
}

export default connect(mapStateToProps)(Shut);
