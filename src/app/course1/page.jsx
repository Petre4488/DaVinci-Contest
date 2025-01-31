import Image from "next/image";
import logo1 from '../../../public/IconStem.svg'
import { FaCircleArrowRight } from "react-icons/fa6";

export default function FirstCourse(){
    return(
        <div className="flex justify-center items-center mt-10 gap-8 flex-col w-[100%]">
            <Card logo={logo1} title="Novice Curios" description="Primii pași în lumea STEM" progress={100} redirect="./course1/firstle vel"/>
            <Card logo={logo1} title="Ucenicul Gânditor" description="Descoperirea conceptelor esențiale" progress={80} redirect="./course1/secondlevel" />
            <Card logo={logo1} title="Exploratorul Logicii" description="Cum gândesc oamenii de știință?" progress={60} redirect="./course1/thirdlevel"/>
            <Card logo={logo1} title="Constructorul de Idei" description="Rezolvarea problemelor prin gândire critică" progress={40} redirect="./course1/forthlevel"/>
            <Card logo={logo1} title="Inventatorul Începător" description="Cum se transformă ideile în realitate?" progress={20}redirect="./course1/fifthlevel"/>
            <Card logo={logo1} title="Pionierul STEM" description="Ești pregătit pentru următoarea provocare!"progress={0} redirect="./course1/sixthlevel"/>
        </div>
    )
}

const Card = ({ logo, title, description, progress, redirect }) => {
  return (
    <div className="relative w-[40%] h-28 rounded-xl overflow-hidden bg-slate-700  flex items-center p-4">
      {/* Background Progress Bar */}
      <div 
        className="absolute top-0 left-0 h-full bg-blue-500 opacity-60 transition-all duration-500"
        style={{ width: `${progress}%` }} 
      ></div>

      {/* Main Content - Stays Above the Background */}
      <div className="relative z-10 flex justify-between w-full items-center">
        <div className="flex items-center space-x-3">
          <Image src={logo} alt="logoStem" className="w-[19%]" />
          <div>
            <h1 className="font-bold text-xl text-white">{title}</h1>
            <p className="text-slate-200">{description}</p>
          </div>
        </div>
        <div className="flex flex-row items-center text-xl text-white">
          <p className="mr-5">{progress}%</p>
          <a href={redirect}>
            <FaCircleArrowRight className="mr-5 text-2xl cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110" />
          </a>
        </div>
      </div>
    </div>
  );
};
