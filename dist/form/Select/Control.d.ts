import React from 'react';
import { Option } from './Option';
export interface ControlProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    children: typeof Option | typeof Option[];
}
export declare const Control: React.FC<ControlProps>;
//# sourceMappingURL=Control.d.ts.map