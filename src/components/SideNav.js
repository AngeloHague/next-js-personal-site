'use client'
import { handleScroll } from "@/lib/scrolling";

export function SideNav({slugs, columns=1}) {
    slugs.unshift('hero');
    const nav = slugs.map((slug, index) => {
        const class_name = (index % columns == 0) ? 'anchorTag' : 'anchorTag hideDesktop';
        return (
        <>
            <a className={class_name} href={"#"+slug} onClick={handleScroll} tabIndex='-1'><span /></a>
        </>
    )});
    return (
        <div id="page_nav">
            <div>
                {nav}
            </div>
        </div>
    )
}