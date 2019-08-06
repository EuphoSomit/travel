import React from 'react';
import {MdFlight} from 'react-icons/md';
import Card from './Card';
import FlightDetails from './FlightDetails';
import Button from './Button';

/**
 * Flight component. Renders a single flight or a pair of out/return flights.
 * @param  {Object} props
 * @return {Component}
 */
const Flight = props => {
	const {price, passengers} = props;
	return (
		<Card className="flight">
			<FlightDetails {...props} />
			<div className="price">
				<span>Rs{price * (passengers || 1)}</span>
			</div>
			<div className="actions">
				<Button success>
					<MdFlight /> Book the flight
				</Button>
			</div>
		</Card>
	);
};

export default Flight;
