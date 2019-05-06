import { RENDER_LIST, ADD_TO_LIST } from "../actions/types";

const initialState = {
  places: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case RENDER_LIST:
      return {
        ...state,
        places: state.places
      };

    case ADD_TO_LIST:
      return {
        ...state,
        places: [...state.places, action.payload]
      };
    default:
      return state;
  }
}
