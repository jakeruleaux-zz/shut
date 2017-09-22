import c from './../../src/constants';
import rollDice from './../../src/reducers/roll-dice-reducer';

describe('Roll dice reducer', () => {
  let action;
  const rollTotal = {
    diceRoll : "1"
  };

  test('should return change in state if action does not occur', () => {
    action ={type: null};
    expect(rollDice([], action)).toEqual([]);
  });
});
