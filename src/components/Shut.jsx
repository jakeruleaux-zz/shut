import React from 'react';
import NewPlayer from './NewPlayer';
import {connect} from 'react-redux';
import PlayerList from "./PlayerList";
import Cover from './Cover';
import ReactDice from 'react-dice-complete';


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
    console.log(diceRoll);
  }

    render() {
      return (
        <div>
          <NewPlayer/>
          <PlayerList
            playerList = {this.props.masterPlayerList}/>
          <Cover
            onClick={this.rollDice}/>
            <ReactDice
               numDice="2"
               rollDone={this.rollDoneCallback}
               ref={dice => this.reactDice = dice}
       />

        </div>
      );
    }


rollAll() {
  this.reactDice.rollAll()
}

rollDoneCallback(num) {
  console.log(`You rolled a ${num}`)
}

}
const mapStateToProps = state => {
  return {
    masterPlayerList : state
  }
}

export default connect(mapStateToProps)(Shut);
