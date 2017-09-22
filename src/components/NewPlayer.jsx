import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import c from './../constants';

class NewPlayer extends React.Component {

  constructor(props) {
    super(props);

    this.handleNewPlayer = this.handleNewPlayer.bind(this);
  }

  handleNewPlayer(event) {
    event.preventDefault();
    const { _name } = this.refs;
    const { dispatch } =this.props;
    const { action } = {
      type: c.ADD_NAME,
        name: _name.value
    }
    console.log(action);
    dispatch(action);
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
          <button type="submit">Enter</button>
        </form>
      </div>
    );
  }

}


NewPlayer = connect()(NewPlayer);


export default NewPlayer;
