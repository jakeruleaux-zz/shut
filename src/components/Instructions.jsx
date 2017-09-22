import React from "react";

function Instructions (props) {
  return(
    <div>
      <h2> How to play shut the box-</h2>
      <p>Player One rolls the dice.</p>
      <p>After rolling the dice add the total and "shut" the covers in any combination of open numbers based upon the roll.</p>
      <p>For example, if the total rolled is seven than any covers maybe shut provided they equal seven:</p>
      <ul>
        <li>7</li>
        <li>1, 6</li>
        <li>2, 5</li>
        <li>3, 4</li>
      </ul>
      <p>If the player cannot "shut" a cover based upon their roll then the turn is over and the other player goes.</p>
      <h3>Scoring</h3>
      <p>At the end of each turn the player adds the total number of "open" covers (5 + 7 + 12 = 24) to get their score. The Player with the lowest score wins.</p>
      <p>If a player is able to shut the box by closing all the covers in their turn they automatically win.</p>
    </div>
  );
}

export default Instructions;
