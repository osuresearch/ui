
import React from 'react';

export type Props = {    
    /** Font Awesome 4.7 icon name */
    name: string

    /** Should the icon have a spin animation */
    spin?: boolean
    
    /** Will encapsulate the specified icon within a circle */
    circled?: boolean

    /**
     * Screen reader labeling for the icon. If not provided,
     * the icon will be flagged as `aria-hidden`
     */
    label?: string
}

/**
 * Font Awesome 4.7 icons with build-in accessibility
 */
export const Icon = ({
    name,
    spin = false,
    circled = false,
    label = undefined
}: Props) => {
    let classNames = `fa fa-${name}`;

    if (spin) {
        classNames += ' fa-spin'
    };

    if (circled) {
        classNames += ' fa-stack-1x';

        return (
            <span className="fa-stack" aria-hidden={!label}>
                <i className="fa fa-circle-thin fa-stack-2x"></i>
                <i className={classNames}>
                    {label &&
                    <span className="sr-only">
                        {label}
                    </span>
                    }
                </i>
            </span>
        );
    }

    // Single icon
    return (
        <i className={classNames} aria-hidden={!label}>
            {label &&
            <span className="sr-only">
                {label}
            </span>
            }
        </i>
    );
};
