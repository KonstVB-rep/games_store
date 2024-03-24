import { useEffect, useRef } from 'react';

export const useKeydown = (key, callback, state) => {
    const callbackRef = useRef(callback);

    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);

    useEffect(() => {
        if (!state) return;
        const handler = (event) => {
            if (event.code === key) {
                callbackRef.current(event);
            }
        };
        document.addEventListener('keydown', handler);
        return () => document.removeEventListener('keydown', handler);
    }, [key, state]);
};
