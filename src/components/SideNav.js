
export function SideNav({slugs}) {
    const nav = slugs.map((slug) => (
        <>
            <a className='anchorTag' href={"#"+slug} tabIndex='-1'><span /></a>
        </>
    ));
    return (
        <div className="page_nav">
            <div>
                <a className='anchorTag' href="#hero" tabIndex='-1'><span /></a>
                {nav}
            </div>
        </div>
    )
}