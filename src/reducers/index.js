import { combineReducers } from "redux";

import placesReducer from "./placesReducer";
import selectedPlaceReducer from "./selectedPlaceReducer";

export default combineReducers({
  places: placesReducer,
  selectedPlace: selectedPlaceReducer
});
