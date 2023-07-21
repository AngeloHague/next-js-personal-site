'use client'
export const handleScroll = (e) => {
    const href = e.currentTarget.href;
    let target = href.replace(/.*\//, "");
    if (target.startsWith('#')) {
        e.preventDefault();
        target = target.replace('#', "");
        const elem = document.getElementById(target);
        elem?.scrollIntoView({
            behavior: 'smooth',
        });
    } 
};