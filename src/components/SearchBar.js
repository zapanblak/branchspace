// import React, { Component } from "react";
// import Script from "react-load-script";

// class SearchBar extends Component {
//   constructor(props) {
//     super(props);

//     this.state = { term: "" };
//   }

//   handleScriptLoad() {
//     /*global google*/
//     var defaultBounds = new google.maps.LatLngBounds(
//       new google.maps.LatLng(-33.8902, 151.1759),
//       new google.maps.LatLng(-33.8474, 151.2631)
//     );

//     var input = document.getElementById("searchTextField");
//     var options = {
//       bounds: defaultBounds,
//       types: ["establishment"]
//     };
//     this.autocomplete = new google.maps.places.Autocomplete(input, options);
//   }
//   render() {
//     return (
//       // <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places"></script>
//       // return (
//       //   <Script
//       //     url="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"
//       //     onCreate={this.handleScriptCreate.bind(this)}
//       //     onError={this.handleScriptError.bind(this)}
//       //     onLoad={this.handleScriptLoad.bind(this)}
//       //   />
//       // )
//       <div>
//         <Script
//           type="text/javascript"
//           url="https://maps.googleapis.com/maps/api/js?key=AIzaSyAwExjXTLdx20XE0cKz02W14STV3j6XQyQ&libraries=places"
//           onLoad={this.handleScriptLoad.bind(this)}
//         />
//         <div className="ui segment">
//           <form className="ui big form">
//             <div className="field">
//               <label>Search for places!</label>
//               <input
//                 id="searchTextField"
//                 type="text"
//                 value={this.state.term}
//                 onChange={e => this.setState({ term: e.target.value })}
//               />
//             </div>
//             <div class="fluid ui teal big submit button">
//               Add place to your places list!
//             </div>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }

// export default SearchBar;

import React, { Component } from "react";
import Script from "react-load-script";
import { ADD_TO_LIST } from "../actions/types";
import { addToList } from "../actions";
import { connect } from "react-redux";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    // Declare State
    this.state = {
      city: "",
      query: ""
    };

    // Bind Functions - arrow function used instead
  }

  handleScriptLoad = () => {
    // Declare Options For Autocomplete
    var options = {
      types: ["(cities)"]
    }; // To disable any eslint 'google not defined' errors

    // Initialize Google Autocomplete
    /*global google*/ this.autocomplete = new google.maps.places.Autocomplete(
      document.getElementById("autocomplete"),
      options
    );

    // Fire Event when a suggested name is selected
    this.autocomplete.addListener("place_changed", this.handlePlaceSelect);
    this.autocompleteInitialized = true;
  };

  handlePlaceSelect = () => {
    // Extract City From Address Object
    let addressObject = this.autocomplete.getPlace();
    if (!addressObject) {
      alert("GOOGLE API NIE DZIALA!");
    } else {
      let address = addressObject.address_components;

      console.log("picked address: " + toString(address));

      // Check if address is valid
      if (address) {
        // Set State
        this.setState({
          city: address[0].long_name,
          query: addressObject.formatted_address
        });
      }
    }
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.addToList(this.state);
  };

  render() {
    return (
      <div>
        <Script
          url="https://maps.googleapis.com/maps/api/js?key=AIzaSyAQnb4dOkk9anfIN7QwXw7hjSmyyzKJxyQ&libraries=places"
          onLoad={this.handleScriptLoad}
        />
        <div className="ui segment">
          <form className="ui big form">
            <div className="field">
              <label>Search for places!</label>
              <input
                name="query"
                id="autocomplete"
                type="text"
                value={this.state.query}
                onChange={this.onChange}
              />
            </div>
            <button
              onClick={this.onSubmit}
              className="fluid ui teal big submit button"
            >
              Add place to your places list!
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addToList: place => dispatch({ type: ADD_TO_LIST, payload: place })
});

export default connect(
  mapDispatchToProps,
  { addToList }
)(SearchBar);
