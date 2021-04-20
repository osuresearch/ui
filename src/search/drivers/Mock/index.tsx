import React, { useEffect } from 'react';
import faker, { random, name, image } from 'faker';

import { AnyOfFilter, TermFilter, DriverProps } from '../..';
import useSearchProvider from '../../hooks/useSearchProvider';

/**
 * Get an avatar containing a user's initials, similar to Microsoft products
 *
 * Reference: https://codepen.io/felipepucinelli/pen/QyVJbM
 */
function getInitialsAvatar(firstName: string, lastName: string, size: number = 80) {
    const colors = ["#1abc9c", "#2ecc71", "#3498db", "#9b59b6", "#34495e", "#16a085", "#27ae60", "#2980b9", "#8e44ad", "#2c3e50", "#f1c40f", "#e67e22", "#e74c3c", "#f39c12", "#d35400", "#c0392b", "#7f8c8d"];
    const index = (firstName.charCodeAt(0) - 65) % colors.length;

    const style: React.CSSProperties = {
        backgroundColor: colors[index],
        width: size,
        height: size,
        font: (size / 2) + 'px Arial',
        color: '#fff',
        textAlign: 'center',
        lineHeight: size + 'px',
        borderRadius: '50%'
    };

    return (
        <div style={style}>
            {firstName[0].toUpperCase() + lastName[0].toUpperCase()}
        </div>
    )
}

const FAKE_DATA = Array.from({ length: 100 }, () => {
    const card = faker.helpers.createCard();
    const firstName = name.firstName();
    const lastName = name.lastName();

    return {
        id: random.number(),
        name: firstName + ' ' + lastName,
        age: random.number(50) + 18,
        username: card.username,
        address: card.address.streetA,
        city: card.address.city,
        state: card.address.state,
        zip: card.address.zipcode,
        company: card.company.name,
        bs: card.company.bs,
        email: card.email,
        phone: card.phone,
        about: card.posts[0].paragraph,
        title: name.jobTitle(),
        // .avatar uses uifaces.co which has become a paid service
        // avatar: image.avatar(),
        avatar: getInitialsAvatar(firstName, lastName)
    }
});

/**
 * Search driver that generates mock results. This is really only
 * for showing off examples in Styleguidist.
 */
export default function Mock(searchWhenEmpty: boolean = true) {
    const DriverComponent: React.FC<DriverProps> = ({
        provider
    }) => {
        const {
            terms, filters, sort, offset, limit,
            setResults, setError, setSearching
        } = useSearchProvider(provider);

        const isEmpty = terms.length < 1 && filters.length < 1 && sort === undefined;
        const skipSearchAndClear = isEmpty && !searchWhenEmpty;

        // Fire off a new query if anything in the search state changes
        useEffect(() => {
            if (skipSearchAndClear) {
                return;
            }

            let ageRange: number[] = [0, 1000];
            let states: string[] = [];
            let emailDomain = '';
            let otherEmailDomain = '';

            // Hardcode filtering examples against demo data
            filters.forEach((f) => {
                if (Object.keys(f).indexOf('term') >= 0) {
                    const key = Object.keys((f as TermFilter).term)[0];
                    const value = (f as TermFilter).term[key] as string;

                    if (key === 'ageRange') {
                        ageRange = value.split(',').map(s => parseInt(s));
                    } else if (key === 'emailDomain') {
                        emailDomain = value;
                    } else if (key === 'otherEmailDomain') {
                        otherEmailDomain = value;
                    }

                } else if (Object.keys(f).indexOf('anyOf')) {
                    const anyOfKey = (f as AnyOfFilter).anyOf;
                    states = anyOfKey && anyOfKey.state ? anyOfKey.state as string[] : [];
                }
            });

            let hits = FAKE_DATA.filter((p) => {
                let match = true;

                if (terms.length > 0) {
                    const re = new RegExp(terms, 'i');
                    match = p.name.match(re) !== null
                        || p.address.match(re) !== null
                        || p.title.match(re) !== null
                        || p.city.match(re) !== null
                        || p.state.match(re) !== null
                        || p.email.match(re) !== null;
                }

                console.debug(ageRange);
                match = match && p.age >= ageRange[0] && p.age <= ageRange[1];

                match = match
                    && (emailDomain.length < 1 || p.email.endsWith(emailDomain))
                    && (otherEmailDomain.length < 1 || p.email.endsWith(otherEmailDomain));

                if (states.length > 0) {
                    match = match && states.includes(p.state);
                }

                return match;
            });

            // Payload is the total hit count and
            // the top 10 result objects.
            const results = {
                hits: hits.length,
                results: hits.slice(offset, (limit + offset))
            }

            setSearching(false);
            setResults(results);
        }, [terms, filters, sort, offset, limit, skipSearchAndClear, setSearching, setResults]);

        // Replicated from GraphQL driver - for mock testing of the same behaviour
        useEffect(() => {
            if (skipSearchAndClear) {
                setSearching(false);
                setError(undefined);
                setResults(undefined);
            }
        }, [skipSearchAndClear, setSearching, setError, setResults]);

        // Driver components are renderless. It's just a stateful container
        return null;
    }

    return DriverComponent;
}
