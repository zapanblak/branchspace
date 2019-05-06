import { SELECT_PLACE } from "../actions/types";

const initialState = {
  selectedPlace: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SELECT_PLACE:
      return {
        ...state
      };
    default:
      return state;
  }
}
