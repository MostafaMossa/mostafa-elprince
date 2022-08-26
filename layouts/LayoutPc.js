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
            <div className="flex h-screen w-full p-4 justify-center items-center">
                <div className="grid place-items-center w-full h-full p-4">
                    <div className="flex flex-row h-full w-full space-x-4">
                        {/* Pages left Side */}
                        <div className="flex-1 h-full bg-gray-800 shadow-2xl shadow-slate-900 rounded-3xl text-gray-50">
                            <div className="grid place-items-center w-full h-full py-2">
                                {children}
                            </div>
                        </div>

                        {/* Navbar right side */}
                        <div className="flex-[0.35] h-full bg-gray-800 shadow-2xl shadow-slate-900 rounded-3xl ">
                            <RightSide />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LayoutPc;