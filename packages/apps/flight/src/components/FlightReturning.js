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
export default props => {
	return (
		<Card className="flight return">
			<FlightDetails {...props.out} />
			<FlightDetails {...props.return} />
			<div className="price">
				<span>
					Rs
					{(props.out.price + props.return.price) *
						(props.passengers || 1)}
				</span>
			</div>
			<div className="actions">
				<Button success={true}>
					<MdFlight /> Book the flight
				</Button>
			</div>
		</Card>
	);
};
