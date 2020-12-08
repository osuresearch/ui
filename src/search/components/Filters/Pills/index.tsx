
import React, { useContext } from 'react';
import { Context } from '..';
import { IFilter, AnyOfFilter, anyOf, AndFilters, OR, AND, OrFilters, TermFilter } from '../../..';

type PillProps = {
    label: string
    onDelete: () => void
}

const Pill: React.FC<PillProps> = ({ label, onDelete }) => {
    return (
        <button className="filters-pill" onClick={onDelete}
            title={`Remove "${label}" filter`}>
            {label}
            <span className="filters-pill-delete">
                &times;
            </span>
        </button>
    );
}


export type Props = {
    /**
     * Should the search terms also be shown as a pill. Defaults to `true`
     */
    includeTerms?: boolean
};

function isAnyOf(filter: IFilter): filter is AnyOfFilter {
    return typeof (filter as AnyOfFilter).anyOf !== 'undefined';
}

function isOR(filter: IFilter): filter is OrFilters {
    return typeof (filter as OrFilters).OR !== 'undefined';
}

function isAND(filter: IFilter): filter is AndFilters {
    return typeof (filter as AndFilters).AND !== 'undefined';
}

function isTerm(filter: IFilter): filter is TermFilter {
    return typeof (filter as TermFilter).term !== 'undefined';
}

function prettyLabel(filter: IFilter): string {
    if (!filter.name) {
        return 'Unknown'; // TODO: ??
    }

    // If the name ends with a colon, also show the value
    if (filter.name?.indexOf(':') >= 0) {
        if (isTerm(filter)) {
            const field = Object.keys(filter.term)[0];
            return `${filter.name} "${filter.term[field]}"`;
        }
        // TODO: Other supported types?
    }

    return filter.name as string;
}

/**
 * Pills that show all the active filters, with an option to clear each one.
 */
const Pills: React.FC<Props> = ({ includeTerms = true }) => {
    const { terms, filters, setTerms, getFilter, addFilter, deleteFilter } = useContext(Context);

    const onDeleteNamedFilter = (name: string) => {
        deleteFilter(name);
    }

    /**
     * Delete a single entry from within an AnyOf filter
     */
    const onDeleteAnyOfEntry = (name: string, entry: string | number) => {
        const filter = getFilter<AnyOfFilter>(name);
        if (!filter) {
            return;
        }

        const field = Object.keys(filter.anyOf)[0];
        const values = filter.anyOf[field];

        let updated: any[] = []; // Any is used here because of a re-map issue to string|number arrays.
        for (let i = 0; i < values.length; i++) {
            if (values[i] !== entry) {
                updated.push(values[i]);
            }
        }

        if (updated.length < 1) {
            deleteFilter(name);
        } else {
            addFilter(anyOf(field, updated, name));
        }
    }

    /**
     * Delete a single record from within an OR filter
     */
    const onDeleteOREntry = (name: string, filterName: string) => {
        const filter = getFilter<OrFilters>(name);
        if (!filter) {
            return;
        }

        const updated = filter.OR.filter((f) => f.name != filterName);
        if (updated.length < 1) {
            deleteFilter(name);
        } else {
            addFilter(OR(updated, name));
        }
    }

    /**
     * Delete a single record from within an AND filter
     */
    const onDeleteANDEntry = (name: string, filterName: string) => {
        const filter = getFilter<AndFilters>(name);
        if (!filter) {
            return;
        }

        const updated = filter.AND.filter((f) => f.name != filterName);
        if (updated.length < 1) {
            deleteFilter(name);
        } else {
            addFilter(AND(updated, name));
        }
    }

    return (
        <div className="filters-pills">
            {terms.length > 0 && includeTerms &&
                <Pill
                    label={`"${terms}"`}
                    onDelete={() => setTerms('')}
                />
            }

            {filters.map((filter) => {
                // AnyOf - add a pill for each entry
                if (filter.name && isAnyOf(filter)) {
                    const field = Object.keys(filter.anyOf)[0];
                    const values = filter.anyOf[field] as string[];

                    return values.map((entry) => <Pill
                        label={entry}
                        onDelete={() => onDeleteAnyOfEntry(filter.name as string, entry)}
                    />);
                }

                // ORFilters - show each sub-filter as a (single) pill
                // Does not support recursive complex filters (e.g. spreading AnyOf sub-filters)
                if (filter.name && isOR(filter)) {
                    return filter.OR.map((entry) => <Pill
                        label={prettyLabel(entry)}
                        onDelete={() => onDeleteOREntry(filter.name as string, entry.name as string)}
                    />);
                }

                // ANDFilters - show each sub-filter as a (single) pill.
                // Does not support recursive complex filters (e.g. spreading AnyOf sub-filters)
                if (filter.name && isAND(filter)) {
                    return filter.AND.map((entry) => <Pill
                        label={prettyLabel(entry)}
                        onDelete={() => onDeleteANDEntry(filter.name as string, entry.name as string)}
                    />);
                }

                // All other types - add just a single pill
                if (filter.name) {
                    return (
                        <Pill
                            label={prettyLabel(filter)}
                            onDelete={() => onDeleteNamedFilter(filter.name as string)}
                        />
                    );
                }

                // Unnamed filters are hidden
                return null;
            })}
        </div>
    );
}

export default Pills;
