import React, { Component } from 'react';
import { connect } from 'react-redux';

import Filters from './Filters';
import Flights from './Flights';

export class SearchContainer extends Component {

  render() {
    return (
      <div className="container">
        <Filters />
        <Flights />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(SearchContainer);
