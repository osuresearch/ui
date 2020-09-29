import React from 'react';
interface Props {
    id?: string;
    meridiem: string;
    setMeridiem: (meridiem: string) => void;
    handleClick: (e: React.MouseEvent) => void;
    hourRef?: React.RefObject<HTMLInputElement>;
    minutesRef?: React.RefObject<HTMLInputElement>;
    readOnly?: boolean;
}
declare const MeridiemInput: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLInputElement>>;
export default MeridiemInput;
//# sourceMappingURL=MeridiemInput.d.ts.map