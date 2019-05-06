import { RENDER_LIST, SELECT_PLACE, ADD_TO_LIST } from "./types";

// Action creator
export const selectPlace = place => {
  return {
    type: SELECT_PLACE,
    payload: place
  };
};

export const renderList = () => {
  return {
    type: RENDER_LIST
  };
};

export const addToList = query => {
  return {
    type: ADD_TO_LIST,
    payload: query
  };
};
