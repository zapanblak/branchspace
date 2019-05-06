import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { RENDER_LIST } from "../actions/types";
import { renderList } from "../actions";

export class List extends Component {
  constructor() {
    super();
    this.state = {
      places: []
    };

    //this.setState({ [this.state.places]: this.props.renderList() });
  }

  // static propTypes = {
  //   prop: PropTypes
  // };

  render() {
    return (
      <div class="ui list">
        {this.state.places.map(place => {
          return (
            <div className="item">
              <div className="header">{place.city}</div>
              {place.query}
            </div>
          );
        })}
      </div>
    );
  }
}

// const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  renderList: () => dispatch({ type: RENDER_LIST })
});

const mapStateToProps = state => {
  return { places: state.places };
};

// export default connect(
//   mapDispatchToProps,
//   { renderList }
// )(List);

export default connect(
  mapDispatchToProps,
  mapStateToProps
)(List);
