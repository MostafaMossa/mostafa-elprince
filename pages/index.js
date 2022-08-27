import { DomainVerification, RemoveRedEye } from "@mui/icons-material";
import Image from "next/image";
import VisitorCounter from "../components/VisitorCounter";


const Home = () => {

  const MyPhoto = "/img/Developer.png"




  return (
    <div className="gird place-items-center w-full h-full p-2 xl:p-6">
      <div className="grid place-items-center W-0 xl:flex xl:flex-row xl:items-center xl:space-x-4 xl:w-full">
        <Image src={MyPhoto} width={250} height={260} className="rounded-2xl shadow-2xl shadow-slate-800" />
        <div className="grid place-items-center w-full h-full xl:place-items-start xl:h-full xl:w-full">
          <h1 className="text-gray-400 uppercase text-xl pb-2">THIS IS ME</h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-green-400" style={{ fontFamily: 'Tangerine', textShadow: '4px 4px 4px #aaa' }}>
            Mostafa Mohamed Moussa
          </h1>
          <div className="flex flex-row items-center space-x-2 xl:space-x-4">
            <h1 className="text-gray-300 uppercase text-md xl:text-lg pb-2 pt-1">Website developer</h1>
            <h1 className="text-gray-300 uppercase text-md xl:text-lg pb-2 pt-1">Mobile developer</h1>
          </div>
          <p className="text-gray-50 uppercase max-w-[95%] text-sm xl:text-md">Welcome to my own site. You will find here all the information about my previous work and models that I have implemented. You can also request the design of your site. You can also contact me through social networking links or access my contact page.</p>
        </div>
      </div>

      <div className="flex flex-row justify-items-center space-x-4 mt-4">

        <div className="grid place-items-center bg-gray-700 border-2 border-gray-600 shadow-slate-800 shadow-2xl rounded-2xl p-2">
          <h1 className="py-2">
            <VisitorCounter />
          </h1>
          <div className="flex flex-row space-x-2 px-2">
            <RemoveRedEye />
            <span>visitors</span>
          </div>
        </div>

        <div className="grid place-items-center bg-gray-700 border-2 border-gray-600 shadow-slate-800 shadow-2xl rounded-2xl p-2">
          <h1 className="py-2">0</h1>
          <div className="flex flex-row space-x-2 px-2">
            <DomainVerification />
            <span>Projects Completed</span>
          </div>
        </div>

      </div>



    </div>
  );
}

export default Home;