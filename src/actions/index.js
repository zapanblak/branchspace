import { RENDER_LIST, SELECT_PLACE, ADD_TO_LIST } from "./types";

// Action creator
export const selectPlace = place => {
  return {
    type: SELECT_PLACE,
    payload: place
  };
};

export const renderList = list => {
  return {
    type: RENDER_LIST,
    payload: list
  };
};

export const addToList = query => {
  return {
    type: ADD_TO_LIST,
    payload: query
  };
};
