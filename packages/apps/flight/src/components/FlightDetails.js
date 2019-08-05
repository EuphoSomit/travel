import React from 'react';
import moment from 'moment';
import { MdArrowForward, MdFlightTakeoff, MdFlightLand } from 'react-icons/md';

/**
 * Flight details component. Renders flight code, route, time etc.
 * @param  {Object} props
 * @return {Component}
 */
export default (props) => {
  let departure = moment(new Date(props.departure));
  let arrival = moment(new Date(props.arrival));

  return (
    <div className="flight-details">
      <div className="code">{props.code}</div>
      <div className="route">
        {props.from.short} <MdArrowForward /> {props.to.short}
      </div>
      <div className="times">
        <MdFlightTakeoff /> {departure.format('LT')}
        <br />
        <MdFlightLand /> {arrival.format('LT')}
      </div>
    </div>
  )
}