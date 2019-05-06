import React, { Component } from "react";
import Script from "react-load-script";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };
  }

  handleScriptLoad() {
    /*global google*/
    var defaultBounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(-33.8902, 151.1759),
      new google.maps.LatLng(-33.8474, 151.2631)
    );

    var input = document.getElementById("searchTextField");
    var options = {
      bounds: defaultBounds,
      types: ["establishment"]
    };
    this.autocomplete = new google.maps.places.Autocomplete(input, options);
  }
  render() {
    return (
      // <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places"></script>
      // return (
      //   <Script
      //     url="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"
      //     onCreate={this.handleScriptCreate.bind(this)}
      //     onError={this.handleScriptError.bind(this)}
      //     onLoad={this.handleScriptLoad.bind(this)}
      //   />
      // )
      <div>
        <Script
          type="text/javascript"
          url="https://maps.googleapis.com/maps/api/js?key=AIzaSyAwExjXTLdx20XE0cKz02W14STV3j6XQyQ&libraries=places"
          onLoad={this.handleScriptLoad.bind(this)}
        />
        <div className="ui segment">
          <form className="ui form">
            <div className="field">
              <label>Search for places!</label>
              <input
                id="searchTextField"
                type="text"
                value={this.state.term}
                onChange={e => this.setState({ term: e.target.value })}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
