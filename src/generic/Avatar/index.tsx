import React from 'react';


type Props = {
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
const FALLBACK_URL = 'http://localhost:8000/assets/img/pixel.gif';
// TODO: Use to orapps/assets

const Avatar: React.FC<Props> = ({ name, username, useOPIC = true, size = 50 }) => {
    const colors = ["#1abc9c", "#2ecc71", "#3498db", "#9b59b6", "#34495e", "#16a085", "#27ae60", "#2980b9", "#8e44ad", "#2c3e50", "#f1c40f", "#e67e22", "#e74c3c", "#f39c12", "#d35400", "#c0392b", "#7f8c8d"];
    const index = (name.charCodeAt(0) - 65) % colors.length;

    return (
        <div className="avatar" aria-hidden="true" style={{
            backgroundColor: colors[index],
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

export default Avatar;
