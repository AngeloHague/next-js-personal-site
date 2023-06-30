export const handleScroll = (e) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const target = href.replace(/.*\#/, "");
    const elem = document.getElementById(target);
    elem?.scrollIntoView({
        behavior: 'smooth',
    });
};