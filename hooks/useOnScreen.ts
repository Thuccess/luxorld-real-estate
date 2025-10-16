import { useEffect, useState, RefObject } from 'react';

export const useOnScreen = (ref: RefObject<Element>, rootMargin = '0px 0px -50px 0px'): boolean => {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIntersecting(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                rootMargin,
            }
        );
        const currentElement = ref.current;
        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, [ref, rootMargin]);

    return isIntersecting;
};