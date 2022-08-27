import RightSide from "../components/RightSide";
import HeaderMenu from '../components/Mobile/HeaderMenu'
import Head from "next/head";


const LayoutPc = ({ children }) => {
    return (
        <>
            <Head>
                <title>Mostafa Elprince</title>
            </Head>
            {/* Mobile view */}
            <div className="grid place-items-center h-full w-full lg:hidden md:hidden">
                <HeaderMenu />
                <div className="mt-6 mb-3 text-gray-50">
                    {children}
                </div>
            </div>


            {/* Pc view */}
            <div className="hidden lg:flex md:flex place-items-center h-[85vh] md:h-[95vh] lg:h-[100vh] w-[100vw] p-0 md:p-2 lg:p-4">
                <div className="flex-1 bg-gray-800 h-[90%] lg:h-full rounded-3xl shadow-2xl shadow-black p-0 md:p-1 lg:p-3 mx-1 md:mx-2 lg:mx-4">
                    <div className="grid place-items-center h-[85%] md:h-[95%] lg:h-full text-gray-50">
                        {children}
                    </div>
                </div>
                <div className="flex-[0.35] bg-gray-800 h-[80%] md:h-[90%] lg:h-full rounded-3xl shadow-2xl shadow-black mx-2 lg:mx-4">
                    <RightSide />
                </div>
            </div>
        </>
    );
}

export default LayoutPc;