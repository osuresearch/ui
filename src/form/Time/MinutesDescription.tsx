import React, { useContext } from 'react';
import { TimeFieldContext } from './TimeFieldContext';

export default function MinutesDescription() {
    const { id, readOnly, hour, minutes, meridiem } = useContext(TimeFieldContext);

    return (
        <div id={'minutes-description-' + id} className='sr-only'>
            {readOnly && <span>This field is disabled. </span>}
            {!minutes &&
                <span>You have not yet selected minutes. </span>
            }
            {minutes &&
                <span>{minutes} minutes selected. </span>
            }
            {hour &&
                <span>{hour} hour selected. </span>
            }
            {meridiem &&
                <span>{meridiem} selected. </span>
            }
            {!readOnly && <span>To increment the minutes, press the up arrow. To decrement, press the down arrow. Tab or press the right arrow to move to the AM/PM selector. Press the left arrow to move to the hour selector.</span>}
        </div>
    )
}