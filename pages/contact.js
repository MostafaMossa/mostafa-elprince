import { PhoneAndroid, Place } from "@mui/icons-material";
import Link from "next/link";

const contact = () => {
    const MyLocationLink = "https://www.google.com/maps/place/31%C2%B015'17.2%22N+29%C2%B059'03.4%22E/@31.2547807,29.9864648,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xa4a0996001d0c7ef!8m2!3d31.2547807!4d29.9842761?hl=ar"
    const MyPhoneNumber = "tel:01004400997"
    return (
        <div className="grid place-items-center p-2 ">
            <div className="grid place-items-center w-full mb-2">
                <h1 className="text-4xl uppercase font-bold">Contact Me</h1>
                <form className="w-full mt-4" action="post">
                    <div className="grid md:flex lg:flex md:flex-row lg:flex-row ">
                        <div className="mx-4">
                            <span className="uppercase text-sm text-gray-300 font-bold ">full Name</span>
                            <input className="w-full bg-gray-500 text-gray-50 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                type="text" placeholder="" />
                        </div>
                        <div className="mx-4">
                            <span className="uppercase text-sm text-gray-300 font-bold">email/Phone number</span>
                            <input className="w-full bg-gray-500 text-gray-50 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                type="text" placeholder="" />
                        </div>
                    </div>
                    <div className="mt-6 mx-4">
                        <span className="uppercase text-sm text-gray-300 font-bold">Message</span>
                        <textarea
                            className="w-full h-32 bg-gray-500 text-gray-50 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
                    </div>
                    <div className="mt-6 mx-4">
                        <button
                            className="uppercase text-sm font-bold tracking-wide bg-green-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
            <div className="grid place-items-start w-full mt-3">
                <h1 className="uppercase text-2xl">contact information</h1>
                <div className="grid place-items-center w-full h-full mt-4">
                    <div className="flex flex-row items-center">
                        <PhoneAndroid className="h-6 w-6 mx-2" />
                        <Link href={MyPhoneNumber} passHref>
                            <a className="text-gray-300 hover:text-green-500" target="_blank">
                                010-04400997
                            </a>
                        </Link>
                        <div className="flex flex-row items-center ml-10">
                            <Place className="h-6 w-6 mx-2" />
                            <Link href={MyLocationLink} passHref>
                                <a className="text-gray-300 hover:text-green-500" target="_blank">
                                    Open in GoogleMab
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default contact;