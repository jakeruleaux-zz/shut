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
        </form>
      </div>
    );
  }

}


NewPlayer = connect()(NewPlayer);

NewPlayer.propTypes = {

}
export default NewPlayer;
