export default (state = {city: "", state: ""}, action) => {
  switch(action.type) {
    case 'RECEIVED_CURRENT_LOCATION':
      return action.currentLocation
    default: 
      return state;
  }
};
