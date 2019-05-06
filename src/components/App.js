import React from "react";

import { Provider } from "react-redux";
import store from "../store";

import SearchBar from "./SearchBar";

const App = () => {
  return (
    <Provider store={store}>
      <SearchBar />
    </Provider>
  );
};

export default App;
