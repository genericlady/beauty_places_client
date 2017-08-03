export default (state = {city: "", state: "", userInput: ""}, action) => {
  switch(action.type) {
    case 'USER_CHANGED_LOCATION':
      return action.currentLocation
    case 'RECEIVED_CURRENT_LOCATION':
      return action.currentLocation
    default: 
      return state;
  }
};
