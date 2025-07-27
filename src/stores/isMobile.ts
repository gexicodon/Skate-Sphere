import { readable } from "svelte/store";

export const isMobile = readable(false, (set) => {
    if (typeof window === 'undefined') return;

    const handleResize = () => {
        set(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
        window.removeEventListener('resize', handleResize);
    };
})