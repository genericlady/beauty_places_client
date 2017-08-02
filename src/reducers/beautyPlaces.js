export default (state = [], action) => {
  switch(action.type) {
    case 'RECEIVED_BEAUTY_PLACES':
      return action.beautyPlaces;
    default: 
      return state;
  }
};
