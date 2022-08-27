import { LocationCity, PhoneAndroid } from "@mui/icons-material";

const contact = () => {
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
                        <h1 className="text-gray-50">
                            010-04400997
                        </h1>
                    </div>
                    <div>
                        <LocationCity />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default contact;