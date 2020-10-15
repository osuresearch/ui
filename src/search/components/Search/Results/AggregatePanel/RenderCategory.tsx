import React from 'react';

type Props = {
    category: string
    results: any[]
    children: React.ReactElement
}

export default function RenderCategory({
    category,
    results,
    children
}: Props) {
    return (
        <div className="search-category">
            <div className="search-category-header">
                {category}
            </div>
            <ul className="search-category-results">
                {results.map((result, idx) =>
                    <li key={`search-result-${idx}`}>
                        {React.cloneElement(children, { result: result })}
                    </li>
                )}
            </ul>
        </div>
    );
}
