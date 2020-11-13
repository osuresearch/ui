import React from 'react';

interface Props {
    id?: string;
    readOnly: boolean | undefined;
    hour: string;
    minutes: string;
    meridiem: string;
}

export default function SRDescriptions({
    id,
    readOnly,
    hour,
    minutes,
    meridiem
}: Props) {
    return (
        <>
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
                {!readOnly && <span>Press the up arrow to increment the hour. Press the down arrow to decrement. Tab or press the right arrow to move to the minutes selector.</span>}
            </div>

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
                {!readOnly && <span>Press the up arrow to increment the minutes. Press the down arrow to decrement. Tab or press the right arrow to move to the AM/PM selector. Press the left arrow to move to the hour selector.</span>}
            </div>

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
        </>
    )
}