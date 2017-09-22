export default (state = [], action) => {

  switch (action.type) {
    case 'ROLL_DICE':
      const { rollDice } = action;
      console.log(rollDice);
      return rollDice;
      default:
      return state;
  }
}
