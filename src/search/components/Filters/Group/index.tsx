import React, { useState } from "react";
import { Icon } from "../../../..";

export type Props = {
  title: string;

  /** Initialize expanded */
  open?: boolean;
};

/**
 * A titled and collapsible set of one or more filters
 */
const Group: React.FC<Props> = ({ title, open = false, children }) => {
  const [collapsed, setCollapsed] = useState(!open);

  return (
    <div className="filters-group">
      <button
        className="filters-group-title"
        aria-expanded={!collapsed}
        onClick={() => setCollapsed(!collapsed)}
      >
        {title}

        <Icon name={collapsed ? "angle-down" : "angle-up"} />
      </button>

      {!collapsed && (
        <div className="filters-group-filters">
          {React.Children.map(children, (child) =>
            React.isValidElement(child)
              ? React.cloneElement(child, { title: child.props.title || title })
              : child
          )}
        </div>
      )}
    </div>
  );
};

export default Group;
