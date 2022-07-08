import React from "react";

export default function Navbar(){
    return(
        <>
        <div className="flex p-7 bg-[#A82C2B] justify-between px-24 align-middle sticky top-0 z-10">
            <div className="">
                <img className=""src="https://staging.dreamnikah.com/_next/image?url=%2Fimages%2Fnikahlogolg.svg&w=384&q=75" alt="" />
            </div>
        <ul className="flex space-x-6 items-center text-white">
            <li>Home</li>
            <li>Browse through</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Login or Register</li>
            <li>English</li>
        </ul>
        </div>
        <div className="md:hidden flex justify-between px-4 py-5 bg-[#A82C2B]">
            <img src="https://staging.dreamnikah.com/_next/image?url=%2Fimages%2FHomePageImage%2Fmobilemenu.png&w=32&q=75" alt="" />
            <img src="https://staging.dreamnikah.com/images/HomePageImage/dreamoon.png" alt="" />
            <img src="https://staging.dreamnikah.com/_next/image?url=%2Fimages%2FHomePageImage%2Fbellicon.svg&w=32&q=75" alt="" />
        </div>
        </>
    );
}