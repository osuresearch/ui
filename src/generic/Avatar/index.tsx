
import { _ } from '@ungap/global-this';
import React, { useEffect, useState } from 'react';

type Props = {
    /**
     * Users name, starting with their preferred first name.
     */
    name: string

    /** User's preferred name.# at the University */
    username: string

    /** Should opic.osu.edu be used to resolve the avatar */
    useOPIC: boolean
}

const Avatar: React.FC<Props> = ({ name, username, useOPIC = true, }) => {
    const [url, setUrl] = useState<string>();
    const [useDefault, setUseDefault] = useState(!useOPIC);

    useEffect(() => {
        // Skip making an OPIC request
        if (useDefault) {
            return;
        }

        fetch(`https://opic.osu.edu/${username}?width=50`, {
            method: 'HEAD',
            redirect: 'error',
            credentials: 'omit',
            mode: 'no-cors',
        })
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.error(err);
        })
    }, [username, useOPIC]);

    return (
        <div className="avatar">
            {name[0].toUpperCase()}{username[0].toUpperCase()}
        </div>
    );
}

export default Avatar;
