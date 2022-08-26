import Head from "next/head";
import RightSide from "../components/RightSide";

const LayoutPc = ({ children }) => {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Mostafa Elprince</title>
            </Head>
            <div className="flex place-items-center h-[100vh] w-[100vw] p-4">
                <div className="flex-1 bg-gray-800 h-full rounded-3xl shadow-2xl shadow-black p-3 mx-4">
                    <div className="grid place-items-center h-full text-gray-50">
                        {children}
                    </div>
                </div>
                <div className="flex-[0.35] bg-gray-800 h-full rounded-3xl shadow-2xl shadow-black mx-4">
                    <RightSide />
                </div>
            </div>
        </>
    );
}

export default LayoutPc;