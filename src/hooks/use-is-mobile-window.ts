import { useState } from 'react';

import { useResize } from '@/hooks/use-resize';

export default function useIsMobileWindow() {
    const [isMobileWindow, setIsMobileWindow] = useState(true);

    const handleResize = () => {
        setIsMobileWindow(window.innerWidth <= 960);
    };

    useResize(handleResize);

    return isMobileWindow;
}
