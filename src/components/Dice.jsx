import React from 'react';
import PropTypes from 'prop-types';

function Dice(props) {

  return (
    <div>
      <button onClick={props.onClick}>Roll</button>
    </div>
  );
}

Dice.propTypes = {
  onClick: PropTypes.func,

}

export default Dice;
