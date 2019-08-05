import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  searchFlights,
  updateFrom,
  updateTo,
  updateRoundTrip,
  updateDepartDate,
  updateReturnDate,
  updatePassengers,
  fetchCities,
  updatePriceLow,
  updatePriceHigh,
} from '../actions';

import Filters from '../components/Filters';

export class FiltersContainer extends Component {

  static propTypes = {
    from: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    roundTrip: PropTypes.bool.isRequired,
    departDate: PropTypes.instanceOf(Date).isRequired,
    returnDate: PropTypes.instanceOf(Date).isRequired,
    passengers: PropTypes.number.isRequired,
    cities: PropTypes.array.isRequired,
    priceLow: PropTypes.number,
    priceHigh: PropTypes.number,
  }

  componentDidMount() {
    this.props.fetchCities();
  }

  handleSearch() {
    this.props.searchFlights(this.props.filters);
  }

  handleChange(prop, val) {
    console.debug(`${prop} changed to: ${val}`);
    switch (prop) {
      case 'from':
        return this.props.updateFrom(val);
      case 'to':
        return this.props.updateTo(val);
      case 'roundTrip':
        return this.props.updateRoundTrip(val);
      case 'departDate':
        return this.props.updateDepartDate(val);
      case 'returnDate':
        return this.props.updateReturnDate(val);
      case 'passengers':
        return this.props.updatePassengers(val);
      case 'priceLow':
        return this.props.updatePriceLow(val);
      case 'priceHigh':
        return this.props.updatePriceHigh(val);
      default:
        return
    }
  }

  render() {
    return (
      <Filters {...this.props}
        onSearch={this.handleSearch.bind(this)}
        onChange={this.handleChange.bind(this)} />
    )
  }
}

function mapStateToProps(state) {
  const {
    from,
    to,
    roundTrip,
    departDate,
    returnDate,
    passengers,
    priceHigh,
    priceLow
  } = state.filters;

  const {
    items: cities
  } = state.cities;

  return {
    from,
    to,
    roundTrip,
    departDate,
    returnDate,
    passengers,
    cities,
    priceHigh,
    priceLow,
    filters: state.filters
  };
}

const mapDispatchToProps = (dispatch) => ({
  fetchCities: () => dispatch(fetchCities()),
  searchFlights: (filters) => dispatch(searchFlights(filters)),
  updateFrom: (val) => dispatch(updateFrom(val)),
  updateTo: (val) => dispatch(updateTo(val)),
  updateRoundTrip: (val) => dispatch(updateRoundTrip(val)),
  updateDepartDate: (val) => dispatch(updateDepartDate(val)),
  updateReturnDate: (val) => dispatch(updateReturnDate(val)),
  updatePassengers: (val) => dispatch(updatePassengers(val)),
  updatePriceLow: (val) => dispatch(updatePriceLow(val)),
  updatePriceHigh: (val) => dispatch(updatePriceHigh(val))
});

export default connect(mapStateToProps, mapDispatchToProps)(FiltersContainer);
