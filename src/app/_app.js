const { default: NavBar } = require("@/components/NavBar");


export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <NavBar />
            <Component {...pageProps} />
        </>
    )
}