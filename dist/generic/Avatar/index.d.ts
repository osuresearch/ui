import React from 'react';
declare type Props = {
    /**
     * Users name, starting with their preferred first name.
     */
    name: string;
    /** User's preferred name.# at the University */
    username: string;
    /** Should opic.osu.edu be used to resolve the avatar.
     *
     * If the user does not have an OPIC avatar this will
     * fallback to the standard initials.
     */
    useOPIC: boolean;
    /**
     * Avatar size in pixels
     */
    size: number;
};
declare const Avatar: React.FC<Props>;
export default Avatar;
//# sourceMappingURL=index.d.ts.map