export default (state = [], action) => {

  const beforeRoll = {
    die1: null,
    die2: null
  };
console.log(rollDice);
  switch (action.type) {
    case 'RESET_DICE':
      return beforeRoll;

    case 'ROLL_DICE':
      const { rollDice } = action;
      console.log(rollDice);
      return rollDice;
      default:
      return state;
  }
}
