"use client";
import { SiOpenaigym } from "react-icons/si";
import { FaHouseUser } from "react-icons/fa";
import { FaHelicopter } from "react-icons/fa";
import { FaTractor } from "react-icons/fa";
import { FaCarCrash } from "react-icons/fa";

export default function NavBar() {
    return(
        <div className="flex justify-center gap-9 rounded-xl items-center mt-10 mb-3 w-[30%] h-14 bg-slate-600 text-3xl">
            <a href="./">
                <FaHouseUser className="cursor-pointer  transition-transform duration-300 ease-in-out hover:scale-110 hover:text-cyan-300" />
            </a>
            <SiOpenaigym className="cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"/> 
            <FaHelicopter className="cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"/>
            <FaTractor className="cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"/>
            <FaCarCrash className="cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"/>
        </div>
    );
}