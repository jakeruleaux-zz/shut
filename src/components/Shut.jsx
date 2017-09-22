import React from 'react';
import NewPlayer from './NewPlayer';
import {connect} from 'react-redux';
import Player from "./Player";

class Shut extends React.Component {

  constructor(props) {
    super(props);
    }

    render() {
      return (
        <div>
          <NewPlayer/>
        </div>
      )
    }
}

export default Shut;
