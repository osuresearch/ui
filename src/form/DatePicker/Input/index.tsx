
import React, { useState, useContext } from 'react';
import { Context } from '../';
import FormContext from '../../../internal/FormCommon/FormContext';

import { Print, Diff } from '../../../internal/FormCommon/Components';

import DatePicker, { ReactDatePickerProps } from 'react-datepicker';
import Time from '../../Time';

import DatePrefix from './DatePrefix';
import DateTimePrefix from './DateTimePrefix';

export type InputProps = Omit<ReactDatePickerProps, 'onChange' | 'selected'> & {
    /** The selected date - **must** be an ISO8601 timestamp string **/
    selected?: string;

    /**
     * onChange handler - a state setter for the parent component
     */
    onChange?: (date: string) => void;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>((
    allprops,
    ref
) => {
    // Remove props that we don't want the developer to be
    // accidentally use because of accessibility issues
    // TODO - fix the MonthYear picker (that will be useful)
    const { customTimeInput, timeInputLabel, disabledKeyboardNavigation, showMonthYearPicker, showMonthYearDropdown, monthsShown, withPortal, showQuarterYearPicker, showTimeSelect, showTimeSelectOnly, todayButton, showYearPicker, ...props } = allprops;


    const { bind } = useContext(Context);
    const { isDiff, isPrint } = useContext(FormContext);

    const [selected, setSelected] = useState<string | undefined>(bind.value || props.selected);

    const initial: string | undefined = bind.initialValue || undefined;

    const name = bind.name || props.name;
    const readOnly = bind.readOnly || props.readOnly;

    const classNames = `input-group datepicker ${props.showTimeInput && 'datetimepicker'} ${props.className ? props.className : ''} ${bind.error ? 'is-invalid' : ''} ${bind.success ? 'is-valid' : ''}`;

    const dateFormat = props.dateFormat || props.showTimeInput ? 'MM/dd/yyyy h:mm aa' : 'MM/dd/yyyy';

    // Transform selected date to ISO timestamp
    const handleChange = (date: Date) => {
        const newSelected = date ? date.toISOString() : '';
        setSelected(newSelected);

        if (props.onChange) {
            props.onChange(newSelected);
        } else {
            bind.value = newSelected;
        }
    };

    const formatter = (timestamp: string | undefined) => {
        if (typeof (timestamp) === 'undefined') return undefined;

        let date = new Date(timestamp)
        let formatted = date.toLocaleDateString("en-US");
        if (props.showTimeInput) {
            formatted += ' ' + date.toLocaleTimeString("en-US");
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
                {...props}
                id={bind.id}
                selected={selected ? new Date(selected) : null}
                className={'form-control date'}
                onChange={handleChange}
                shouldCloseOnSelect={!props.showTimeInput}
                // @ts-ignore
                timeInputLabel={<label htmlFor={`${bind.id}-time`}>Time</label>}
                customTimeInput={
                    <Time.Input id={`${bind.id}-time`} />
                }
                dateFormat={dateFormat}
                readOnly={readOnly}
                required={bind.required || props.required}
            >
                <div className='keyboard-notice'>
                    <small><em>Keyboard users: Exit this dialog with the <code>esc</code> key</em></small>
                </div>
            </DatePicker>

            {/* Hidden input to register a ref to */}
            <input type='hidden' ref={ref} name={name} value={selected && selected} disabled={readOnly} />
        </div>
    );
});

export default Input;
