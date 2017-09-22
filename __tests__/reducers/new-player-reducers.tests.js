import c from './../../src/constants';
import playerList from './../../src/reducers/new-player-reducers';

describe("New Player reducer", () => {
  let action;
  const playerName = {
    name : [
      'bob'],
    id: 0
  };

  test('should return same state if no action is prefomred', () => {
    action = { type: null };
    expect(playerList([], action)).toEqual([]);
  });

  test('should add name to name array', () => {
    const { name, id} = playerName;
    action = {
      type: c.ADD_NAME,
      name: name,
      id: id
    };
    const newState = [ playerName ];
    expect(playerList([], action)).toEqual([playerName]);
  });

});
