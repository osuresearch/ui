
import React, { useState } from 'react';
import { Icon } from '../../../..';

export type Props = {
    title: string

    /** Initialize expanded */
    open?: boolean
};

/**
 * A titled and collapsible set of one or more filters
 * 
 * @visibleName Filters.Group
 */
const Group: React.FC<Props> = ({ title, open = false, children }) => {
    const [collapsed, setCollapsed] = useState(!open);

    return (
        <div className="filters-group">
            <button className="filters-group-title" 
                onClick={() => setCollapsed(!collapsed)}>
                {title}

                <Icon name={collapsed ? 'angle-down' : 'angle-up'} />
            </button>

            {!collapsed && 
            <div className="filters-group-filters">
                {children}
            </div>
            }
        </div>
    );
}

export default Group;
