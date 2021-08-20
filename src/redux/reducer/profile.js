import {PROFILE_DETAILS} from '../actions/profile';

const initialState = {};

function profileDetailsReducer(state = initialState, action) {
  switch (action.type) {
    case PROFILE_DETAILS:
      return {
        ...state,
        details: action.details,
      };
    default:
      return state;
  }
}

export default profileDetailsReducer;
