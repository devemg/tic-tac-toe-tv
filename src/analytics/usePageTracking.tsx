import { useEffect } from 'react';
import { useLocation } from 'react-router';

const usePageTracking = () => {
    const location = useLocation();

    useEffect(() => {
        console.log('Page view changed!');
    }, [location]);
};

export default usePageTracking;