import React from 'react';
import PropTypes from 'prop-types';

function Dice(props) {

  return (
    <button onClick={props.onClick}>Roll</button>
    {props.value}
  );
}

Dice.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.sting
}

export default Dice;
