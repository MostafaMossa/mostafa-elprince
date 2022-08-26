import { Avatar } from "@mui/material";
import { useRouter } from "next/router";

const HeaderSide = () => {

    // Import Router from Next/Router And Use UseRouter Function
    const router = useRouter()
    // create dynamic Image by Var {{const}}
    const MyLogo = '/img/MyLogo.png'


    return (
        <div className="grid place-items-center py-2">
            <div className="grid place-items-center w-full py-2">
                {/* Change Logo Betwen Image Or M */}
                {
                    MyLogo != "" ?
                        <>
                            <Avatar src={MyLogo}
                                className="h-18 w-18 mb-4 bg-white border-2 border-green-600 shadow-2xl shadow-black" />
                        </>
                        :
                        <Avatar className="h-16 w-16 mb-4 text-2xl font-bold">
                            M
                        </Avatar>
                }
                <h1 className="text-4xl text-green-400" style={{ fontFamily: 'Tangerine', textShadow: '4px 4px 4px #aaa' }}>
                    Mostafa Mossa
                </h1>
            </div>
        </div>
    );
}

export default HeaderSide;