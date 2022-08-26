import Head from "next/head";
import HeaderSide from "../components/Mobile/HeaderSide";

const LayoutMobile = ({ children }) => {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Mostafa Elprince</title>
            </Head>
            <div className="grid place-content-center h-full w-full">
                <div className="fixed top-0 h-[10vh] w-full">
                    <HeaderSide />
                </div>
                <div className="block text-gray-50">
                    {children}
                </div>
            </div>
        </>
    );
}

export default LayoutMobile;