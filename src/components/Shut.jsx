import React from 'react';
import NewPlayer from './NewPlayer';
import {connect} from 'react-redux';
import PlayerList from "./PlayerList";

class Shut extends React.Component {

  constructor(props) {
    super(props);
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
