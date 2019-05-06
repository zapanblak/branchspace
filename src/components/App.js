import React from "react";

import { Provider } from "react-redux";
import store from "../store";

import SearchBar from "./SearchBar";
import List from "./List";

const App = () => {
  return (
    <Provider store={store}>
      <SearchBar />
      <div className="ui grid">
        <div className="five wide column">
          <List />
        </div>
        <div className="eleven wide column">mapa</div>
      </div>
    </Provider>
  );
};

export default App;
