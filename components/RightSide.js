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
        <div className="grid place-items-center w-full h-full py-4">

            {/* Header Logo &&  Icon Link */}
            <div className="grid place-items-center py-2">

                {/* Header Logo  */}
                <div className="grid place-items-center w-full py-2 ">
                    {/* Change Logo Betwen Image Or M */}
                    {
                        MyLogo != "" ?
                            <>
                                <Avatar src={MyLogo}
                                    className="h-20 w-20 text-2xl mb-4 bg-white border-4 border-indigo-500 shadow-2xl shadow-slate-900" />
                            </>
                            :
                            <Avatar className="h-16 w-16 mb-4 text-4xl font-bold">
                                M
                            </Avatar>
                    }
                    <h1 className="text-6xl text-white" style={{ fontFamily: 'Tangerine', textShadow: '4px 4px 4px #aaa' }}>
                        Mostafa Mossa
                    </h1>
                </div>

                {/* Icon Links */}
                <div className="grid place-items-center w-full">
                    <div className="flex space-x-4">
                        <Link href={FacebookLink} passHref>
                            <IconButton >
                                <FacebookOutlined className="h-10 w-10 text-white  hover:text-blue-600 hover:bg-white rounded-full" />
                            </IconButton>
                        </Link>
                        <Link href={TwitterLink} passHref>
                            <IconButton className="">
                                <Twitter className="h-10 w-10 text-white  hover:text-blue-300 hover:bg-white rounded-full" />
                            </IconButton>
                        </Link>
                        <Link href={GitHubLink} passHref>
                            <IconButton className="">
                                <GitHub className="h-10 w-10 text-white  hover:text-black hover:bg-gray-50 rounded-full" />
                            </IconButton>
                        </Link>
                        <Link href={WhatsAppLink} passHref>
                            <IconButton className="">
                                <WhatsApp className="h-10 w-10 text-white  hover:text-green-600 hover:bg-gray-50 rounded-full" />
                            </IconButton>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Pages Link */}
            <div className="grid place-items-center w-full h-full py-4">
                {/* hidden Button */}
                {
                    router.pathname != '/' ?
                        <Link href="/" passHref>
                            <a className="w-full">
                                <Button className="text-white text-xl hover:text-2xl hover:shadow-3xl hover:shadow-slate-900 hover:text-indigo-500 hover:font-bold w-full hover:bg-slate-100">
                                    Home
                                </Button>
                            </a>
                        </Link>
                        :
                        <></>
                }

                <Link href="/blog" passHref>
                    <a className="w-full">
                        {/* Change Hover Class */}
                        <Button className={
                            router.pathname != "/blog" ?
                                "text-white text-xl hover:text-2xl hover:shadow-3xl hover:shadow-slate-900 hover:text-indigo-500 hover:font-bold w-full hover:bg-slate-100"
                                :
                                "text-2xl shadow-3xl shadow-slate-900 text-indigo-500 font-bold w-full bg-slate-100"
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
                                "text-white text-xl hover:text-2xl hover:shadow-3xl hover:shadow-slate-900 hover:text-indigo-500 hover:font-bold w-full hover:bg-slate-100"
                                :
                                "text-2xl shadow-3xl shadow-slate-900 text-indigo-500 font-bold w-full bg-slate-100"
                        }>
                            projects
                        </Button>
                    </a>
                </Link>
                <Link href="/courses" passHref>
                    <a className="w-full">
                        {/* Change Hover Class */}
                        <Button className={
                            router.pathname != "/courses" ?
                                "text-white text-xl hover:text-2xl hover:shadow-3xl hover:shadow-slate-900 hover:text-indigo-500 hover:font-bold w-full hover:bg-slate-100"
                                :
                                "text-2xl shadow-3xl shadow-slate-900 text-indigo-500 font-bold w-full bg-slate-100"
                        }>
                            courses
                        </Button>
                    </a>
                </Link>
                <Link href="/contact" passHref>
                    <a className="w-full">
                        {/* Change Hover Class */}
                        <Button className={
                            router.pathname != "/contact" ?
                                "text-white text-xl hover:text-2xl hover:shadow-3xl hover:shadow-slate-900 hover:text-indigo-500 hover:font-bold w-full hover:bg-slate-100"
                                :
                                "text-2xl shadow-3xl shadow-slate-900 text-indigo-500 font-bold w-full bg-slate-100"
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
                                "text-white text-xl hover:text-2xl hover:shadow-3xl hover:shadow-slate-900 hover:text-indigo-500 hover:font-bold w-full hover:bg-slate-100"
                                :
                                "text-2xl shadow-3xl shadow-slate-900 text-indigo-500 font-bold w-full bg-slate-100"
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