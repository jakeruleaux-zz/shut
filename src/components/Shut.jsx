import React from 'react';
import NewPlayer from './NewPlayer';
import {connect} from 'react-redux';
import PlayerList from "./PlayerList";
import Cover from './Cover';



class Shut extends React.Component {

  constructor(props) {
    super(props);
    }

  rollDice(sides = 6) {
    const randomRoll = Math.floor(Math.random() * sides) + 1;
    const { dispatch } = this.props;
    const action = {
      type: c.ROLL_DICE,
      die1: randomRoll(),
      die2: randomRoll()
    }
    console.log(randomRoll);
    dispatch(action);
  }

    render() {
      return (
        <div>
          <NewPlayer/>
          <PlayerList
            playerList = {this.props.masterPlayerList}/>
          <Cover
            onClick={this.rollDice}/>


        </div>
      );
    }


}
const mapStateToProps = state => {
  return {
    masterPlayerList : state
  }
}

export default connect(mapStateToProps)(Shut);
