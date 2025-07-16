import React from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { HiMiniSlash } from "react-icons/hi2";
import { RxGithubLogo } from "react-icons/rx";
import '../App.css'

export function Nav() {
    return (
        <div className="bg-[#1d293b] h-[10vh] flex items-center justify-center">
            <div className="flex items-center text-3xl font-bold w-[90%]  h-[100%] justify-between">
                <div className="flex items-center font-bold">
                <SlArrowLeft className="text-green-400" />
                <span className="text-white ml-1">Pass</span>
                <span className="text-green-400">OP</span>
                <HiMiniSlash className="text-green-400 text-4xl -mx-1" />
                <SlArrowRight className="text-green-400" />
            </div>
            <div className="flex items-center gap-[5px] border rounded-3xl p-1 bg-green-400 justify-center cursor-pointer transition-transform duration-300 hover:scale-[1.10]">
                <RxGithubLogo />
                <div ><p>Github</p></div>
            </div>
            </div>
        </div>
    );
}
