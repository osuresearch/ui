import React from 'react';

type Props = {
    category: string
    categoryHeaderWrapper?: React.FC
    results: any[]
    children: React.ReactElement
}

export default function RenderCategory({
    category,
    categoryHeaderWrapper,
    results,
    children
}: Props) {
    const CategoryHeader = () => {
        const Header = categoryHeaderWrapper;

        if (Header) {
            return <Header>{category}</Header>
        }

        return <>{category}</>;
    }

    return (
        <div className="search-category">
            <div className="search-category-header">
                <CategoryHeader />
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
