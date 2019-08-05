import moment from 'moment';
/**
 * Search in flight results based on filters.
 * @param  {Array}  results   All flights.
 * @param  {Object} filters   Filters
 * @param  {Boolean} isReturn Whether this search is for return flights.
 * @return {Array}            Search results (filtered flights).
 */
export function _search(results, filters, isReturn) {
    let departDate;
    let cFrom;
    let cTo;
    if (isReturn) {
        departDate = filters.returnDate;
        cFrom = filters.to;
        cTo = filters.from;
    } else {
        departDate = filters.departDate;
        cFrom = filters.from;
        cTo = filters.to;
    }

    let departDayStart = moment(departDate).startOf('day');
    let departDayEnd = moment(departDate).endOf('day');

    return results.filter(flight => {
        const flightDepartDate = new Date(flight.departure);
        return (
            flight.from.full.indexOf(cFrom) >= 0 &&
            flight.to.full.indexOf(cTo) >= 0 &&
            (flightDepartDate > departDayStart.toDate() &&
                flightDepartDate < departDayEnd.toDate())
        );
    });
}