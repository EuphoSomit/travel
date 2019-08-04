import React from 'react';
import moment from 'moment';
import { Picker } from '@travel/components';

const CalendarPicker = ({ field, onChange, value, startDate }) => {
    if (value) {
        value = moment(value);
    }

    return (
        <Picker
            onChange={(value) => onChange(field, value)}
            value={value}
            startDate={startDate}
        />
    )
}

export default CalendarPicker