import { RENDER_LIST, SELECT_PLACE } from "./types";

// Action creator
export const selectPlace = () => {
  return {
    type: SELECT_PLACE,
    payload: place
  };
};

export const renderList = () => {
  return {
    type: RENDER_LIST,
    payload: list
  };
};
