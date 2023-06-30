'use client'
import { handleScroll } from "@/lib/scrolling";

export function SideNav({slugs}) {
    const nav = slugs.map((slug) => (
        <>
            <a className='anchorTag' href={"#"+slug} onClick={handleScroll} tabIndex='-1'><span /></a>
        </>
    ));
    return (
        <div className="page_nav">
            <div>
                <a className='anchorTag' href="#hero" onClick={handleScroll} tabIndex='-1'><span /></a>
                {nav}
            </div>
        </div>
    )
}