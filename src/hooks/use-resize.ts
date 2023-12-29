import { useEffect } from 'react';

export function useResize(handleResize: () => void): void {
    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [handleResize]);
}
