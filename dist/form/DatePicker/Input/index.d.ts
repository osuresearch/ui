import React from 'react';
import { ReactDatePickerProps } from 'react-datepicker';
export declare type InputProps = Omit<ReactDatePickerProps, 'onChange' | 'selected'> & {
    /** The selected date - **must** be an ISO8601 timestamp string **/
    selected?: string;
    /**
     * onChange handler (required) - a state setter for the parent component
     */
    onChange: (date: string) => void;
};
export interface DatePickerRef {
    name?: string;
    value?: string;
}
declare const Input: React.ForwardRefExoticComponent<Pick<ReactDatePickerProps, "name" | "title" | "children" | "className" | "disabled" | "id" | "tabIndex" | "onFocus" | "onBlur" | "onKeyDown" | "onSelect" | "readOnly" | "value" | "inline" | "autoComplete" | "autoFocus" | "required" | "adjustDateOnChange" | "allowSameDay" | "ariaLabelClose" | "ariaLabelledBy" | "calendarClassName" | "calendarContainer" | "chooseDayAriaLabelPrefix" | "clearButtonTitle" | "closeOnScroll" | "customInput" | "customInputRef" | "customTimeInput" | "dateFormat" | "dateFormatCalendar" | "dayClassName" | "weekDayClassName" | "monthClassName" | "timeClassName" | "disabledDayAriaLabelPrefix" | "disabledKeyboardNavigation" | "dropdownMode" | "endDate" | "excludeDates" | "excludeTimes" | "filterDate" | "fixedHeight" | "forceShowMonthNavigation" | "formatWeekDay" | "formatWeekNumber" | "highlightDates" | "includeDates" | "includeTimes" | "injectTimes" | "focusSelectedMonth" | "isClearable" | "locale" | "maxDate" | "maxTime" | "minDate" | "minTime" | "monthsShown" | "nextMonthButtonLabel" | "nextYearButtonLabel" | "onCalendarClose" | "onCalendarOpen" | "onChangeRaw" | "onClickOutside" | "onDayMouseEnter" | "onInputClick" | "onInputError" | "onMonthChange" | "onMonthMouseLeave" | "onWeekSelect" | "onYearChange" | "open" | "openToDate" | "peekNextMonth" | "placeholderText" | "popperClassName" | "popperContainer" | "popperModifiers" | "popperPlacement" | "popperProps" | "preventOpenOnFocus" | "previousMonthButtonLabel" | "previousYearButtonLabel" | "renderCustomHeader" | "renderDayContents" | "scrollableMonthYearDropdown" | "scrollableYearDropdown" | "selectsEnd" | "selectsStart" | "selectsRange" | "shouldCloseOnSelect" | "showDisabledMonthNavigation" | "showFullMonthYearPicker" | "showMonthDropdown" | "showMonthYearDropdown" | "showMonthYearPicker" | "showPopperArrow" | "showPreviousMonths" | "showQuarterYearPicker" | "showTimeInput" | "showTimeSelect" | "showTimeSelectOnly" | "showTwoColumnMonthYearPicker" | "showWeekNumbers" | "showYearDropdown" | "showYearPicker" | "startDate" | "startOpen" | "strictParsing" | "timeCaption" | "timeFormat" | "timeInputLabel" | "timeIntervals" | "todayButton" | "useShortMonthInDropdown" | "useWeekdaysShort" | "weekAriaLabelPrefix" | "weekLabel" | "withPortal" | "portalId" | "wrapperClassName" | "yearDropdownItemNumber" | "excludeScrollbar" | "enableTabLoop"> & {
    /** The selected date - **must** be an ISO8601 timestamp string **/
    selected?: string | undefined;
    /**
     * onChange handler (required) - a state setter for the parent component
     */
    onChange: (date: string) => void;
} & React.RefAttributes<DatePickerRef>>;
export default Input;
//# sourceMappingURL=index.d.ts.map