
import React, { useContext, useRef } from 'react';
import DatePicker, { ReactDatePickerProps } from 'react-datepicker';
import { Context } from '../';
import FormContext from '../../../internal/FormCommon/FormContext';

import { Print } from '../../../internal/FormCommon/Utility/Print';
import { Diff } from '../../../internal/FormCommon/Utility/Diff';

import Time from '../../Time';

import DatePrefix from './DatePrefix';
import DateTimePrefix from './DateTimePrefix';

// The following props are disabled due to not meeting accessibility standards
type DisabledReactDatePickerProps =
    'customTimeInput' | 'timeInputLabel' | 'disabledKeyboardNavigation'
    | 'showMonthYearPicker' | 'showMonthYearDropdown' | 'monthsShown'
    | 'withPortal' | 'showQuarterYearPicker' | 'showTimeSelect'
    | 'showTimeSelectOnly' | 'todayButton' | 'showYearPicker'
    | 'onChange' | 'selected'

export type InputProps = Omit<ReactDatePickerProps, DisabledReactDatePickerProps> & {
    /** The selected date - **must** be an ISO8601 timestamp string **/
    value: string;

    /** Include time input in the calendar popup */
    showTimeInput?: boolean;

    /** Returns the updated date as an ISO8601 timestamp string */
    onChange: (date: string) => void;
}

/**
 * Dropdown to select a date and time.
 * 
 * This component will accept *most* props supported by [react-datepicker](https://reactdatepicker.com/)
 * with the exception of the following that fail to meet accessibility standards:
 * 
 * ```ts
 * type DisabledReactDatePickerProps = 
 * 'customTimeInput' | 'timeInputLabel' | 'disabledKeyboardNavigation'
 *  | 'showMonthYearPicker' | 'showMonthYearDropdown' | 'monthsShown'
 *  | 'withPortal' | 'showQuarterYearPicker' | 'showTimeSelect'
 *  | 'showTimeSelectOnly' | 'todayButton' | 'showYearPicker'
 *  | 'onChange' | 'selected'
 *  ```
 * 
 * If you wish to use one of these, please submit a merge request with a patch that resolves the issues.
 */
const Input: React.FC<InputProps> = (props) => {
    const { bind } = useContext(Context);
    const { isDiff, isPrint } = useContext(FormContext);

    const selected: string | undefined = bind.value || props.value;

    const initial: string | undefined = bind.initialValue || undefined;

    const name = bind.name || props.name;
    const readOnly = bind.readOnly || props.readOnly;

    const classNames = `input-group datepicker ${props.showTimeInput && 'datetimepicker'} ${props.className ? props.className : ''} ${bind.error ? 'is-invalid' : ''} ${bind.success ? 'is-valid' : ''}`;

    const dateFormat = props.dateFormat || props.showTimeInput ? 'MM/dd/yyyy h:mm aa' : 'MM/dd/yyyy';

    // Transform selected date to ISO timestamp
    const handleChange = (date: Date) => {
        const newSelected = date ? date.toISOString() : '';

        if (props.onChange) {
            props.onChange(newSelected);
        } else {
            bind.value = newSelected;
        }
    };

    const ref = useRef<DatePicker>(null);

    const handleFocus = () => {
        if (ref) {
            // Add screen reader instructions onFocus. This
            // includes the instructions included in this
            // component, as well as any text in
            // `<DatePicker.Help>`
            // @ts-ignore
            ref.current?.input.setAttribute('aria-describedby', `sr-instructions ${bind.id}-help`);
        }
    }

    const formatter = (timestamp: string | undefined) => {
        if (typeof (timestamp) === 'undefined') return undefined;

        let date = new Date(timestamp)
        let formatted = date.toLocaleDateString("en-US");
        if (props.showTimeInput) {
            formatted += ' ' + date.toLocaleTimeString("en-US", { hour: '2-digit', minute: '2-digit' });
        }
        return formatted;
    }

    if (isPrint) {
        return (
            <Print>
                <span className="input-group-prefix">
                    <i className='fa fa-calendar' aria-hidden="true"></i>
                </span>

                {formatter(selected)}
            </Print>
        )
    }

    if (isDiff) {
        if (selected !== initial) {
            return (
                <Diff
                    removed={formatter(initial)}
                    added={formatter(selected)}
                />
            )
        }

        // No change - render as a basic single value print
        return (
            <Print>
                <span className="input-group-prefix">
                    <i className='fa fa-calendar' aria-hidden="true"></i>
                </span>

                {formatter(selected)}
            </Print>
        )
    }

    return (
        <div className={classNames}>
            {!props.showTimeInput && <DatePrefix />}
            {props.showTimeInput && <DateTimePrefix />}

            <DatePicker
                ref={ref}
                {...props}
                id={bind.id}
                selected={selected ? new Date(selected) : null}
                value={selected && formatter(selected)}
                className={'form-control date'}
                onChange={handleChange}
                onFocus={handleFocus}
                shouldCloseOnSelect={!props.showTimeInput}
                // @ts-ignore
                timeInputLabel={<label htmlFor={`${bind.id}-time`}>Time</label>}
                customTimeInput={
                    <Time.Input id={`${bind.id}-time`} />
                }
                dateFormat={dateFormat}
                readOnly={readOnly}
            >
                <div className='keyboard-notice'>
                    <small><em>Keyboard users: Exit this dialog with the <code>esc</code> key</em></small>
                </div>
                <div id='sr-instructions' className='sr-only'>
                    A calendar widget {props.showTimeInput && 'with a time input'} is open. To interact with the calendar, press the up or down arrow keys. {props.showTimeInput && 'To navigate to the time input, press the tab key.'} To exit, press the escape key,,
                </div>
            </DatePicker>
        </div>
    );
};

export default Input;
