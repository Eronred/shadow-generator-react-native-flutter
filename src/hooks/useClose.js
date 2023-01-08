import { useState, useEffect, useRef } from 'react';

export default function useClose(initialIsVisible) {
    const [isComponentOpen, setIsComponentOpen] = useState(initialIsVisible);
    const ref = useRef(null);

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setIsComponentOpen(false);
        }
    };
    
    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    return { ref, isComponentOpen, setIsComponentOpen };
}