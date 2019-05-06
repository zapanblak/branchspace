import { RENDER_LIST } from "../actions/types";

const initialState = {
  places: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case RENDER_LIST:
      return {
        ...state
      };
    default:
      return state;
  }
}
