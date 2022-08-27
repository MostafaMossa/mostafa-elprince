import { FacebookOutlined, GitHub, Twitter, WhatsApp } from "@mui/icons-material";
import { Avatar, Button, IconButton } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";



const RightSide = () => {
    // Import Router from Next/Router And Use UseRouter Function
    const router = useRouter()
    // create dynamic Image by Var {{const}}
    const MyLogo = '/img/MyLogo.png'

    // create dynamic Link by Var {{const}}
    const FacebookLink = '#'
    const TwitterLink = '#'
    const GitHubLink = 'https://github.com/MostafaMossa'
    const WhatsAppLink = 'https://wa.me/message/TRZ5FVEKKXC5L1'

    return (
        // All Right side 
        <div className="grid place-items-center w-full h-[80%] md:h-[90%] lg:h-full py-0 md:py-1 lg:py-4">

            {/* Header Logo &&  Icon Link */}
            <div className="grid place-items-center py-0 md:py-0 lg:py-4">

                {/* Header Logo  */}
                <div className="grid place-items-center w-full py-0 md:py-1 lg:py-2 ">
                    {/* Change Logo Betwen Image Or M */}
                    {
                        MyLogo != "" ?
                            <>
                                <Avatar src={MyLogo}
                                    className="h-14 md:h-16 lg:h-20 w-14 md:w-16 lg:w-20 text-2xl mb-4 bg-white border-4 border-green-600 shadow-2xl shadow-black" />
                            </>
                            :
                            <Avatar className="h-16 w-16 mb-4 text-4xl font-bold">
                                M
                            </Avatar>
                    }
                    <h1 className="text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-green-400" style={{ fontFamily: 'Tangerine', textShadow: '4px 4px 4px #aaa' }}>
                        Mostafa Mossa
                    </h1>
                </div>

                {/* Icon Links */}
                <div className="grid place-items-center w-full">
                    <div className="flex space-x-2 lg:space-x-4">
                        <Link href={FacebookLink} passHref>
                            <IconButton target="_blank">
                                <FacebookOutlined className="h-6 md:h-8 lg:h-10 w-6 md:w-8 lg:w-10 text-white  hover:text-blue-600 hover:bg-white rounded-full" />
                            </IconButton>
                        </Link>
                        <Link href={TwitterLink} passHref>
                            <IconButton target="_blank">
                                <Twitter className="h-6 md:h-8 lg:h-10 w-6 md:w-8 lg:w-10 text-white  hover:text-blue-300 hover:bg-white rounded-full" />
                            </IconButton>
                        </Link>
                        <Link href={GitHubLink} passHref>
                            <IconButton target="_blank">
                                <GitHub className="h-6 md:h-8 lg:h-10 w-6 md:w-8 lg:w-10 text-white  hover:text-black hover:bg-gray-50 rounded-full" />
                            </IconButton>
                        </Link>
                        <Link href={WhatsAppLink} passHref>
                            <IconButton target="_blank">
                                <WhatsApp className="h-6 md:h-8 lg:h-10 w-6 md:w-8 lg:w-10 text-white  hover:text-green-600 hover:bg-gray-50 rounded-full" />
                            </IconButton>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Pages Link */}
            <div className="grid place-items-center w-full h-[80%] md:h-[90%] lg:h-full py-0 lg:py-6">
                <Link href="/" passHref>
                    <a className="w-full">
                        {/* Change Hover Class */}
                        <Button className={
                            router.pathname != "/" ?
                                "text-white text-md lg:text-xl hover:text-lg md:hover:text-xl lg:hover:text-2xl hover:shadow-3xl hover:shadow-slate-900 hover:text-green-500 hover:font-bold w-full hover:bg-gray-500"
                                :
                                "text-md md:text-lg lg:text-2xl shadow-3xl shadow-slate-900 text-green-500 font-bold w-full bg-gray-500"
                        }>
                            home
                        </Button>
                    </a>
                </Link>
                <Link href="/blog" passHref>
                    <a className="w-full">
                        <Button className={
                            router.pathname != "/blog" ?
                                "text-white text-md lg:text-xl hover:text-lg md:hover:text-xl lg:hover:text-2xl hover:shadow-3xl hover:shadow-slate-900 hover:text-green-500 hover:font-bold w-full hover:bg-gray-500"
                                :
                                "text-md md:text-lg lg:text-2xl shadow-3xl shadow-slate-900 text-green-500 font-bold w-full bg-gray-500"
                        }>
                            blog
                        </Button>
                    </a>
                </Link>
                <Link href="/projects" passHref>
                    <a className="w-full">
                        {/* Change Hover Class */}
                        <Button className={
                            router.pathname != "/projects" ?
                                "text-white text-md lg:text-xl hover:text-lg md:hover:text-xl lg:hover:text-2xl hover:shadow-3xl hover:shadow-slate-900 hover:text-green-500 hover:font-bold w-full hover:bg-gray-500"
                                :
                                "text-md md:text-lg lg:text-2xl shadow-3xl shadow-slate-900 text-green-500 font-bold w-full bg-gray-500"
                        }>
                            projects
                        </Button>
                    </a>
                </Link>
                <Link href="/MobileApp" passHref>
                    <a className="w-full">
                        {/* Change Hover Class */}
                        <Button className={
                            router.pathname != "/MobileApp" ?
                                "text-white text-md lg:text-xl hover:text-lg md:hover:text-xl lg:hover:text-2xl hover:shadow-3xl hover:shadow-slate-900 hover:text-green-500 hover:font-bold w-full hover:bg-gray-500"
                                :
                                "text-md md:text-lg lg:text-2xl shadow-3xl shadow-slate-900 text-green-500 font-bold w-full bg-gray-500"
                        }>
                            mobile app
                        </Button>
                    </a>
                </Link>
                <Link href="/contact" passHref>
                    <a className="w-full">
                        {/* Change Hover Class */}
                        <Button className={
                            router.pathname != "/contact" ?
                                "text-white text-md lg:text-xl hover:text-lg md:hover:text-xl lg:hover:text-2xl hover:shadow-3xl hover:shadow-slate-900 hover:text-green-500 hover:font-bold w-full hover:bg-gray-500"
                                :
                                "text-md md:text-lg lg:text-2xl shadow-3xl shadow-slate-900 text-green-500 font-bold w-full bg-gray-500"
                        }>
                            contact
                        </Button>
                    </a>
                </Link>
                <Link href="/about" passHref>
                    <a className="w-full">
                        {/* Change Hover Class */}
                        <Button className={
                            router.pathname != "/about" ?
                                "text-white text-md lg:text-xl hover:text-lg md:hover:text-xl lg:hover:text-2xl hover:shadow-3xl hover:shadow-slate-900 hover:text-green-500 hover:font-bold w-full hover:bg-gray-500"
                                :
                                "text-md md:text-lg lg:text-2xl shadow-3xl shadow-slate-900 text-green-500 font-bold w-full bg-gray-500"
                        }>
                            about
                        </Button>
                    </a>
                </Link>
            </div>
        </div>
    );
}

export default RightSide;