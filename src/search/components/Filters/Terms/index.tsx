import React, { useState, useContext, useEffect } from 'react';
import { Context } from '..';
import { Icon } from '../../../..';

export type Props = {
    
};

/**
 * Full-text search terms input
 */
const Terms: React.FC<Props> = (props) => {
    const { terms, setTerms } = useContext(Context);
    const [value, setValue] = useState('');
    
    // Update self when an external entity modifies search terms
    useEffect(() => setValue(terms), [terms]);

    return (
        <div className="input-group filters-terms">
            <span className="input-group-prefix">
                <Icon name="search" />
            </span>

            <input type="text" 
                className="form-control" 
                title="Search by keywords" 
                value={value}
                onChange={(e) => setValue(e.currentTarget.value)}
                onKeyUp={(e) => e.keyCode === 13 && setTerms(value)}
            />
            <div className="input-group-append">
                <button type="button"
                    className="btn btn-outline-secondary" 
                    onClick={() => setTerms(value)}
                >
                    Search
                </button>
            </div>
        </div>
    );
}

export default Terms;
