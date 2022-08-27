import { AppSettingsAlt, ConnectWithoutContact, Home, Info, KeyboardArrowDown, KeyboardArrowUp, KeyboardDoubleArrowDown, Preview, RssFeed } from "@mui/icons-material";
import { Avatar, Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const HeaderMenu = () => {
    // Import Router from Next/Router And Use UseRouter Function
    const router = useRouter()
    // create dynamic Image by Var {{const}}
    const MyLogo = '/img/MyLogo.png'

    const [activeMenu, setActiveMenu] = useState(false)

    const MenuViewActive = () => {
        if (activeMenu == false) {
            setActiveMenu(true)
        }
        if(activeMenu == true){
            setActiveMenu(false)
        }
    }

    return (
        <div className="bg-slate-800 grid place-items-center pt-2 shadow-2xl shadow-gray-800 w-[100vw] h-[100%]">
            <div className="grid place-items-center w-full py-3">

                {/* Change Logo Betwen Image Or M */}
                {
                    MyLogo != "" ?
                        <>
                            <Avatar src={MyLogo}
                                className="h-20 w-20 text-2xl mb-4 bg-white border-4 border-green-600 shadow-2xl shadow-black" />
                        </>
                        :
                        <Avatar className="h-16 w-16 mb-4 text-4xl font-bold">
                            M
                        </Avatar>
                }
                <h1 className="text-3xl sm:text-6xl text-green-400" style={{ fontFamily: 'Tangerine', textShadow: '4px 4px 4px #aaa' }}>
                    Mostafa Mossa
                </h1>
            </div>

            {
                activeMenu ?
                    <>
                        <div className="grid pt-2  grid-cols-3 h-full w-full items-center">
                            {/* hidden Button */}

                            <Link href="/" passHref>
                                <a className="w-full">
                                    {/* Change Hover Class */}
                                    <Button className={
                                        router.pathname != "/" ?
                                            "grid place-items-center text-white text-lg w-full"
                                            :
                                            "grid place-items-center text-xl shadow-3xl shadow-slate-900 text-green-500 font-bold w-full bg-slate-100"
                                    }>
                                        <Home className="h-8 w-8    " />
                                        <span>Home</span>
                                    </Button>
                                </a>
                            </Link>


                            <Link href="/blog" passHref>
                                <a className="w-full">
                                    {/* Change Hover Class */}
                                    <Button className={
                                        router.pathname != "/blog" ?
                                            "grid place-items-center text-white text-lg w-full"
                                            :
                                            "grid place-items-center text-xl shadow-3xl shadow-slate-900 text-green-500 font-bold w-full bg-slate-100"
                                    }>
                                        <RssFeed className="h-8 w-8" />
                                        <span>blog</span>
                                    </Button>
                                </a>
                            </Link>
                            <Link href="/projects" passHref>
                                <a className="w-full">
                                    {/* Change Hover Class */}
                                    <Button className={
                                        router.pathname != "/projects" ?
                                            "grid place-items-center text-white text-md w-full"
                                            :
                                            "grid place-items-center text-md font-bold shadow-3xl shadow-slate-900 text-green-500 w-full bg-slate-100"
                                    }>
                                        <Preview className="h-9 w-8" />
                                        <span>projects</span>
                                    </Button>
                                </a>
                            </Link>
                            <Link href="/courses" passHref>
                                <a className="w-full">
                                    {/* Change Hover Class */}
                                    <Button className={
                                        router.pathname != "/courses" ?
                                            "grid place-items-center text-white text-md w-full"
                                            :
                                            "grid place-items-center text-md font-bold shadow-3xl shadow-slate-900 text-green-500 w-full bg-slate-100"
                                    }>
                                        <AppSettingsAlt className="h-9 w-8" />
                                        <span>mobile app</span>
                                    </Button>
                                </a>
                            </Link>
                            <Link href="/contact" passHref>
                                <a className="w-full">
                                    {/* Change Hover Class */}
                                    <Button className={
                                        router.pathname != "/contact" ?
                                            "grid place-items-center text-white text-md w-full"
                                            :
                                            "grid place-items-center text-md font-bold shadow-3xl shadow-slate-900 text-green-500 w-full bg-slate-100"
                                    }>
                                        <ConnectWithoutContact className="h-9 w-8" />
                                        <span>contact</span>
                                    </Button>
                                </a>
                            </Link>
                            <Link href="/about" passHref>
                                <a className="w-full">
                                    {/* Change Hover Class */}
                                    <Button className={
                                        router.pathname != "/about" ?
                                            "grid place-items-center text-white text-md w-full"
                                            :
                                            "grid place-items-center text-md font-bold shadow-3xl shadow-slate-900 text-green-500 w-full bg-slate-100"
                                    }>
                                        <Info className="h-9 w-8" />
                                        <span>about</span>
                                    </Button>
                                </a>
                            </Link>

                        </div>
                        <div className="w-full">
                            <Button onClick={MenuViewActive} className="space-x-4 text-gray-50 text-lg w-full">
                                <KeyboardArrowUp className="h-8 w-8 animate-ping" />
                            </Button>
                        </div>
                    </>

                    :
                    <div className="w-full">
                        <Button onClick={MenuViewActive} className="space-x-4 text-gray-50 text-lg w-full">
                            <KeyboardArrowDown className="h-8 w-8 text-2xl animate-bounce" />
                        </Button>
                    </div>
            }
        </div>
    );
}

export default HeaderMenu;