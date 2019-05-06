import React from "react";

import { Provider } from "react-redux";
import store from "../store";

import SearchBar from "./SearchBar";

const App = () => {
  return (
    <Provider store={store}>
      <SearchBar />
      <div className="ui grid">
        <div className="five wide column">lista</div>
        <div className="eleven wide column">mapa</div>
      </div>
    </Provider>
  );
};

export default App;
