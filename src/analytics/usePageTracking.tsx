import { useEffect } from 'react';
import { useLocation } from 'react-router';
import ReactGA from 'react-ga4';

const usePageTracking = () => {
    const location = useLocation();

    useEffect(() => {
        console.log('Page view changed!');
        ReactGA.send('pageview');
    }, [location]);
};

export default usePageTracking;