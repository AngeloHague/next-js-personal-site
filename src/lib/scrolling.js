'use client'
export function handleScroll(e) {
    // get href attr
    const href = e.currentTarget.getAttribute('href');
    // check if href starts with #
    if (href.startsWith('#')) {
        // prevent default behaviour
        e.preventDefault();
        // replace hashtag and scroll the element with matching id
        const target = href.replace('#', "");
        const elem = document.getElementById(target);
        elem?.scrollIntoView({
            behavior: 'smooth',
        });
    }
};