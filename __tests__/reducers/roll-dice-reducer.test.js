import c from './../../src/constants';
import rollDice from './../../src/reducers/roll-dice-reducer';

describe('Roll dice reducer', () => {
  let action;
  const rollTotal = {
    die1 : "1",
    die2 : "1"
  };

  test('should return change in state if action does not occur', () => {
    action ={type: null};
    expect(rollDice([], action)).toEqual([]);
  });

  test('should add roll to score', () => {
    const { die1, die2 } = rollTotal;
    action = {
      type: c.ROLL_DICE,
      die1: die1,
      die2: die2
    };
    const diceAdded = [ rollTotal ];
    expect(rollDice([], action)).toEqual([rollTotal]);
  });
});
