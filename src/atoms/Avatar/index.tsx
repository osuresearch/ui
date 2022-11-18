import React from 'react';


export type Props = {
    /**
     * Users name, starting with their preferred first name.
     */
    name: string

    /** User's preferred name.# at the University */
    username: string

    /** Should opic.osu.edu be used to resolve the avatar.
     *
     * If the user does not have an OPIC avatar this will
     * fallback to the standard initials.
     */
    useOPIC: boolean

    /**
     * Avatar size in pixels
     */
    size: number
}

/**
 * Fallback (pixel.gif) for when someone does not have an OPIC.
 */
const FALLBACK_URL = 'https://orapps.osu.edu/assets/img/pixel.gif';

/**
 * Colors assigned to initials when someone does not have an OPIC or we disable OPIC
 */
 const THEME_COLORS = ['#586a81', '#bb0000', '#6a6f24', '#846622', '#427067', '#442369', '#851e5e'];

export const Avatar = ({ name, username, useOPIC = true, size = 50 }: Props) => {
    const index = (name.charCodeAt(0) - 65) % THEME_COLORS.length;

    return (
        <div className="avatar" aria-hidden="true" style={{
            backgroundColor: THEME_COLORS[index],
            width: size,
            height: size,
        }}>
            {useOPIC &&
                <img className="avatar-opic" src={`https://opic.osu.edu/${username}?width=${size}&default=${FALLBACK_URL}`} />
            }
            <div className="avatar-initials" style={{
                fontSize: (size / 2.25) + 'px',
                lineHeight: size + 'px',
            }}>
                {name[0].toUpperCase()}{username[0].toUpperCase()}
            </div>
        </div>
    );
}
