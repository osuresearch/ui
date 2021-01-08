import React from 'react';
interface Props {
    id?: string;
    hour: string;
    setHour: (hour: string) => void;
    setMeridiem: (meridiem: string) => void;
    handleClick: (e: React.MouseEvent) => void;
    minutesRef?: React.RefObject<HTMLInputElement>;
    meridiemRef?: React.RefObject<HTMLInputElement>;
    readOnly?: boolean;
    required?: boolean;
    invalid?: boolean;
}
declare const HourInput: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLInputElement>>;
export default HourInput;
//# sourceMappingURL=HourInput.d.ts.map