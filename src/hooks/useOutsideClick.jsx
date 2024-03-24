import { useEffect, useRef } from 'react';

export const useOutsideClick = (ref, callback, state) => {
    const callbackRef = useRef(callback);

    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);

    useEffect(() => {
        if (!state) return;

        const handler = (event) => {
            const { current: target } = ref;
            if (target && !target.contains(event.target)) {
                callbackRef.current(event);
            }
        };

        document.addEventListener('click', handler);
        return () => document.removeEventListener('click', handler);
    }, [state]);
};
