import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import c from './../constants';
import { v4 } from 'uuid';

class NewPlayer extends React.Component {

  constructor(props) {
    super(props);

    this.handleNewPlayer = this.handleNewPlayer.bind(this);
  }

  handleNewPlayer(event) {
    event.preventDefault();
    const { _name, _name2 } = this.refs;
    const { dispatch } =this.props;
    const action = {
      type: c.ADD_NAME,
      id: v4(),
      name: _name.value,
      name2: _name2.value

    }
    console.log(action);
    dispatch(action);
    _name.value = "";
    _name2.value = "";
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleNewPlayer}>
          <input
            ref="_name"
            type="text"
            id="name"
            placeholder="Player Name"/>
        
          <input
            ref="_name2"
            type="text"
            id="name2"
            placeholder="Player Two Name"/>
          <button type="submit">Enter</button>
        </form>
      </div>
    );
  }

}


NewPlayer = connect()(NewPlayer);


export default NewPlayer;
