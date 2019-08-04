import React from 'react';
import { searchAirports, searchDepartureFlights } from '../../actions';
import { connect } from 'react-redux';
import SearchResult from '../../components/searchResult';

class SearchContainer extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {}
    }

    onAirportChange = (event, value, isDeparture) => {
        const searchResultKey = isDeparture ? "departureAirports" : "arrivalAirports";

        if (value) {
            searchAirports(value, isDeparture).then(data => {
                this.setState({
                    [searchResultKey]: data
                })
            })
        }

        const inputKey = isDeparture ? "departureAirport" : "arrivalAirport";
        this.setState({
            [inputKey]: {
                ...this.state[inputKey],
                search: value
            }
        })
    }

    onAirportSelect = (event, { code, city, country }, isDeparture) => {
        const key = isDeparture ? "departureAirport" : "arrivalAirport";

        this.setState({
            [key]: {
                search: city + " - " + code,
                code, city, country
            }
        })
    }

    onSetField = (field, value) => {
        this.setState({
            [field]: value
        })
    }

    onSearchClick = () => {
        const isFormValid = this.validateForm()
        if (!isFormValid) {
            return;
        }

        // this.props.searchDepartureFlights(this.state);
    }

    validateForm = () => {
        if (this.state.departureAirport.code === '' || this.state.arrivalAirport.code === '') {
            this.setErrorMessage('Please select departure and arrival airports from auto complete list');
            return false;
        }

        if (!this.state.departureDate) {
            this.setErrorMessage('Please select departure date');
            return false;
        }

        if (this.state.isRoundTrip && !this.state.returnDate) {
            this.setErrorMessage('Please select return date');
            return false;
        }

        this.setErrorMessage(null);
        return true;
    }

    setErrorMessage = (message) => {
        this.setState({
            errorMessage: message
        })
    }

    componentWillUpdate = (nextProps, nextState) => {
        if (this.props.request !== nextProps.request) {
            this.setState({
                ...nextProps.request,
                errorMessage: null
            });
        }
    }

    componentWillMount = () => {
        if (this.props.request) {
            this.setState({
                ...this.props.request,
                errorMessage: null
            });
        }
    }

    render = () =>
        <SearchResult
            onSetField={this.onSetField}
            isRoundTrip={this.state.isRoundTrip}
            departureAirport={this.state.departureAirport.search}
            departureAirports={this.state.departureAirports}
            arrivalAirport={this.state.arrivalAirport.search}
            arrivalAirports={this.state.arrivalAirports}
            onAirportChange={this.onAirportChange}
            onAirportSelect={this.onAirportSelect}
            departureDate={this.state.departureDate}
            returnDate={this.state.returnDate}
            passengerCount={this.state.passengerCount}
            onSearchClick={this.onSearchClick}
            position={this.props.position}
            isLoading={this.props.isLoading}
            errorMessage={this.state.errorMessage}
        />
}

const mapStateToProps = state => {
    return {
        request: state.search.request,
        isLoading: state.search.isLoading
    }
}

const mapDispatchToProps = {
    // searchDepartureFlights
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);