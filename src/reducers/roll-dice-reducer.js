export default () {
  switch (action.type) {
    case 'ROLL_DICE':
      const { rollDice } = action;
      return rollDice;
      default:
      return state;
  }
}
