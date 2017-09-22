import React from "react";
import Dice from './Dice';
import PropTypes from "prop-types";

class Cover extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
console.log(this.props.onClick);
    return (
      <div>
        <Dice
          onClick={() => this.props.onClick}/>
      </div>
    );
  }
}

Cover.propTypes = {
  onClick: PropTypes.func
}

export default Cover;
