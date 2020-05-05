
import React, { useEffect, useState } from 'react';
import ExternalLink from '../ExternalLink';

export interface Props {
    /** API endpoint to query for alerts */
    endpoint?: string;
}

/**
 * Red server-wide alert banner. May appear for network issues,
 * planned outages, buckeye alerts, etc.
 */
const AppAlert: React.FC<Props> = ({
    endpoint = `${process.env.PUBLIC_URL}/api/alert` 
}) => {
    const [message, setMessage] = useState<string>('');

    useEffect(() => {
        let cancelled = false;
        
        fetch(endpoint, {
            cache: 'no-cache',
            redirect: 'follow',
            credentials: 'same-origin'
        })
        .then((res) => res.json())
        .then((res) => {
            if (!cancelled) {
                setMessage(res.data);
            }
        })
        .catch(() => {
            if (!cancelled) {
                setMessage('Could not communicate with the alerting API');
            }
        });

        return () => {
            // Cancel request in scope on unmount.
            cancelled = true;
        };
    }, [endpoint]);

    if (!message) {
        return null;
    }

    return (
        <div className="application-alert">
            {message}. Contact the <ExternalLink href="https://orhelp.osu.edu">
                OR Help Desk</ExternalLink> for more information.
        </div>
    ); 
}

export default AppAlert;
