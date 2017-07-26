import BeautyPlaceService from '../services/BeautyPlaceService';

export default function manageBeautyPlace(
  state = { beautyPlaces: [], }, action
) {
  switch (action.type) {
    case 'FETCH_PLACES':
      return Object.assign({}, state, 
        { beautyPlaces: BeautyPlaceService.fetchPlaces(action.place) }
      );
    default:
      return state;
  }
};
