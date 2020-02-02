import * as actionTypes from '../actions/actions_index';

const photos = (state = [], action) => {
  switch(action.type) {
    case actionTypes.FETCH_PHOTOS:
      console.log('Action received', action);
      return [ action.payload.data.hits ];
    default:
      return state;
  }
}

export default photos;