export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_NAME':
      const { name, name2, id } = action;
      return [
        ...state,
        {
          name: name,
          name2: name2,
          id: id
        }
      ]
      default:
        return state;
  }
}
