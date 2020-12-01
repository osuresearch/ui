import React, { useEffect } from 'react';
import faker, { random, name, internet, image } from 'faker';

import { AnyOfFilter, TermFilter, DriverProps, SearchData } from '../..';
import useSearch from '../../hooks/useSearch';
import { ppid } from 'process';

const FAKE_DATA = Array.from({ length: 100 }, () => {
    const card = faker.helpers.createCard();

    return {
        id: random.number(),
        name: card.name,
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
        avatar: image.avatar(),
    }
});

/**
 * Search driver that generates mock results. This is really only
 * for showing off examples in Styleguidist.
 */
export default function Mock() {
    const DriverComponent: React.FC<DriverProps> = ({
        provider,
        updateSearchData
    }) => {
        const { terms, sort, filters } = useSearch(provider);

        let people: any[] = [];
        // Fire off a new query if anything in the search state changes
        useEffect(() => {
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
                    states = (f as AnyOfFilter).anyOf.state as string[];
                }
            });

            let results = FAKE_DATA.filter((p) => {
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

            // Top 10 results only
            results = results.slice(0, 10);

            const data: SearchData = {
                loading: false,
                results
            };

            console.debug('SENDING MOCK DATA', data);

            updateSearchData(data);
        }, [terms, filters, sort, updateSearchData]);

        // Driver components are renderless. It's just a stateful container
        return null;
    }

    return DriverComponent;
}
