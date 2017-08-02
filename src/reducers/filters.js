export default (state = ['hair', 'skin', 'nails'], action) => {
  switch(action.type) {
    case 'CHANGED_FILTERS':
      return action.filters
    default: 
      return state;
  }
};
