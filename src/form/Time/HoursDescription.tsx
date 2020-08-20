import React, { useContext } from 'react';
import { TimeFieldContext } from './TimeFieldContext';

export default function HoursDescription() {
    const { id, readOnly, hour, minutes, meridiem } = useContext(TimeFieldContext);

    return (
        <div id={'hours-description-' + id} className='sr-only'>
            {readOnly && <span>This field is disabled. </span>}
            {!hour &&
                <span>You have not yet selected an hour. </span>
            }
            {hour &&
                <span>{hour} hour selected. </span>
            }
            {minutes &&
                <span>{minutes} minutes selected. </span>
            }
            {meridiem &&
                <span>{meridiem} selected. </span>
            }
            {!readOnly && <span>To increment the hour, press the up arrow. To decrement, press the down arrow. Tab or press the right arrow to move to the minutes selector.</span>}
        </div>
    )
}