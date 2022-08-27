import { AlternateEmail, Close, PhoneAndroid, Place } from "@mui/icons-material";
import { Alert, IconButton } from "@mui/material";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import Link from "next/link";
import { useState } from "react";
import { db } from "../utils/firebase";

const ContactPage = () => {

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')

    const [successNotif, setSuccessNotif] = useState(false)
    const [errNotif, setErrNotif] = useState(false)
    const [nameErr, setNameErr] = useState(false)
    const [emailErr, setEmailErr] = useState(false)
    const [messageErr, setMessageErr] = useState(false)

    const HandleSubmit = async (e) => {
        e.preventDefault()
        if (!name && !phone && !message) {
            setSuccessNotif(false)
            setNameErr(false)
            setEmailErr(false)
            setMessageErr(false)
            return setErrNotif(true)
        }

        if (name == '') {
            setSuccessNotif(false)
            setErrNotif(false)
            setEmailErr(false)
            setMessageErr(false)
            return setNameErr(true)
        }

        if (phone == '') {
            setSuccessNotif(false)
            setErrNotif(false)
            setNameErr(false)
            setMessageErr(false)
            return setEmailErr(true)
        }

        if (message == '') {
            setSuccessNotif(false)
            setErrNotif(false)
            setNameErr(false)
            setEmailErr(false)
            return setMessageErr(true)
        }

        if (name != '' && phone != '' && message != '') {
            const collectionRef = collection(db, "contactme")
            const docRef = await addDoc(collectionRef, {
                FullName: name,
                EmailOrPhone: phone,
                TextMessge: message,
                timestamp: serverTimestamp()
            })

            setName('')
            setPhone('')
            setMessage('')
            setErrNotif(false)
            setNameErr(false)
            setEmailErr(false)
            setMessageErr(false)
            return setSuccessNotif(true)
        }
    }

    const MyLocationLink = "https://www.google.com/maps/place/31%C2%B015'17.2%22N+29%C2%B059'03.4%22E/@31.2547807,29.9864648,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xa4a0996001d0c7ef!8m2!3d31.2547807!4d29.9842761?hl=ar"
    const MyPhoneNumber = "tel:01004400997"
    const MyEmailAddress = "mailto:mostafaelprince56@gmail.com"

    return (
        <div className="grid place-items-center p-2 ">
            <div className="grid place-items-center w-full mb-2">
                <h1 className="text-4xl uppercase font-bold">Contact Me</h1>

                {
                    messageErr ?
                        <>
                            <div className="my-2 w-[90%]">
                                <Alert className="w-full flex flex-row" action={
                                    <IconButton
                                        aria-label="close"
                                        color="inherit"
                                        size="small"
                                        onClick={() => {
                                            setMessageErr(false);
                                        }}
                                    >
                                        <Close fontSize="inherit" />
                                    </IconButton>
                                } variant="filled" severity="warning">
                                    Please enter your message
                                </Alert>
                            </div>
                        </>
                        :
                        <>
                        </>
                }


                {
                    emailErr ?
                        <>
                            <div className="my-2 w-[90%]">
                                <Alert className="w-full flex flex-row" action={
                                    <IconButton
                                        aria-label="close"
                                        color="inherit"
                                        size="small"
                                        onClick={() => {
                                            setNameErr(false);
                                        }}
                                    >
                                        <Close fontSize="inherit" />
                                    </IconButton>
                                } variant="filled" severity="warning">
                                    Please enter your phone number or email
                                </Alert>
                            </div>
                        </>
                        :
                        <>
                        </>
                }

                {
                    nameErr ?
                        <>
                            <div className="my-2 w-[90%]">
                                <Alert className="w-full flex flex-row" action={
                                    <IconButton
                                        aria-label="close"
                                        color="inherit"
                                        size="small"
                                        onClick={() => {
                                            setNameErr(false);
                                        }}
                                    >
                                        <Close fontSize="inherit" />
                                    </IconButton>
                                } variant="filled" severity="warning">
                                    Please enter the name
                                </Alert>
                            </div>
                        </>
                        :
                        <>
                        </>
                }


                {
                    errNotif ?
                        <>
                            <div className="my-2 w-[90%]">
                                <Alert className="w-full flex flex-row" action={
                                    <IconButton
                                        aria-label="close"
                                        color="inherit"
                                        size="small"
                                        onClick={() => {
                                            setErrNotif(false);
                                        }}
                                    >
                                        <Close fontSize="inherit" />
                                    </IconButton>
                                } variant="filled" severity="error">
                                    Please fill in all fields
                                </Alert>
                            </div>
                        </>
                        :
                        <>
                        </>
                }


                {
                    successNotif == true ?
                        <>
                            <div className="my-2 w-[90%]">
                                <Alert className="w-full flex flex-row" action={
                                    <IconButton
                                        aria-label="close"
                                        color="inherit"
                                        size="small"
                                        onClick={() => {
                                            setSuccessNotif(false);
                                        }}
                                    >
                                        <Close fontSize="inherit" />
                                    </IconButton>
                                } variant="filled" severity="success">
                                    Your message was sent successfully
                                </Alert>
                            </div>
                        </>
                        :
                        <>
                        </>
                }
                <form className="w-full mt-4" action="post" onSubmit={HandleSubmit}>
                    <div className="grid md:flex lg:flex md:flex-row lg:flex-row ">
                        <div className="mx-4">
                            <span className="uppercase text-sm text-gray-300 font-bold ">full Name</span>
                            <input className="w-full bg-gray-500 text-gray-50 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Full Name" />
                        </div>
                        <div className="mx-4">
                            <span className="uppercase text-sm text-gray-300 font-bold">email/Phone number</span>
                            <input className="w-full bg-gray-500 text-gray-50 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                value={phone} onChange={(e) => setPhone(e.target.value)} type="text" placeholder="Email/Phone Number" />
                        </div>
                    </div>
                    <div className="mt-6 mx-4">
                        <span className="uppercase text-sm text-gray-300 font-bold">Message</span>
                        <textarea
                            value={message} onChange={(e) => setMessage(e.target.value)}
                            placeholder="Message"
                            className="w-full h-32 bg-gray-500 text-gray-50 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
                    </div>
                    <div className="mt-6 mx-4">
                        <button
                            type="submit"
                            className="uppercase text-sm font-bold tracking-wide bg-green-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                            Send Message
                        </button>
                    </div>
                </form>
            </div>

            {/* Footer Links */}
            <div className="grid place-items-start w-full mt-3">
                <h1 className="uppercase text-2xl">contact information</h1>
                <div className="grid place-items-center w-full h-full mt-4">
                    <div className="grid place-items-center space-y-4 md:space-y-0 lg:space-y-0 md:flex lg:flex md:flex-row lg:flex-row md:items-center lg:items-center">
                        <div className="flex flex-row items-center ">
                            <PhoneAndroid className="h-6 w-6 mx-1 xl:mx-2" />
                            <Link href={MyPhoneNumber} passHref>
                                <a className="text-gray-300 hover:text-green-500" target="_blank">
                                    010-04400997
                                </a>
                            </Link>
                        </div>
                        <div className="flex flex-row items-center ml-0 xl:ml-10 ">
                            <Place className="h-6 w-6 mx-2" />
                            <Link href={MyLocationLink} passHref>
                                <a className="text-gray-300 hover:text-green-500" target="_blank">
                                    Open in GoogleMab
                                </a>
                            </Link>
                        </div>
                        <div className="flex flex-row items-center ml-0 xl:ml-10 ">
                            <AlternateEmail className="h-6 w-6 mx-2" />
                            <Link href={MyEmailAddress} passHref>
                                <a className="text-gray-300 hover:text-green-500" target="_blank">
                                    mostafaelprince56@gmail.com
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;