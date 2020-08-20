import React, { useContext } from 'react';
import { TimeFieldContext } from './TimeFieldContext';

export default function MeridiemDescription() {
    const { id, readOnly, hour, minutes, meridiem } = useContext(TimeFieldContext);

    return (
        <div id={'meridiem-description-' + id} className='sr-only'>
            {readOnly && <span>This field is disabled. </span>}
            {!meridiem &&
                <span>You have not yet selected AM or PM. </span>
            }
            {meridiem &&
                <span>{meridiem} selected. </span>
            }
            {hour &&
                <span>{hour} hour selected. </span>
            }
            {minutes &&
                <span>{minutes} minutes selected. </span>
            }
            {!readOnly && <span>To select {meridiem === 'AM' ? 'PM' : 'AM'}, press the up or down arrow. Press the right arrow to return to the hour selector. Press the left arrow to return to the minutes selector.</span>}
        </div>
    )
}