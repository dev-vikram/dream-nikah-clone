export default function DownloadApp(){
    return(
        <>
        <div>
            <div className="flex justify-center flex-row px-24 py-16">
                <div>
                    <img src="https://staging.dreamnikah.com/_next/image?url=%2Fimages%2FHomePageImage%2Fsoulmateimage.svg&w=640&q=75" alt="" />
                </div>
                <div className="mt-20">
                     <h2 style={{fontFamily:"Pinyon Script"}} className="text-6xl mt-5 text-[#dece70]">
                        Find 
                     </h2>
                        <h2 className="font-bold -mt-6 text-3xl text-slate-600">
                            <p className="inline">Your Soulmate </p>
                            <span className="text-[#A82C2B] relative border-b border-[#A82C2B]">
                             <img className="absolute -left-1 -bottom-1.5 inline-block" src="https://staging.dreamnikah.com/images/completeProfile/smallheartL.svg" alt="" />
                             <p className="inline">In Our App</p>
                             <img className="absolute inline-block -right-1.5 -bottom-1.5" src="https://staging.dreamnikah.com/images/completeProfile/smallheartR.svg" alt="" />
                            </span>
                        </h2>
                        <p className="mt-5 text-slate-600">Our Dream Nikah application is here and it’s easy to use. Find your <br/> better half in just a click.</p>
                        <div className="flex gap-20">
                        <button className="mt-36 flex flex-row items-center py-1 gap-5 border border-red-600 px-6 rounded-md">
                            <img src="https://staging.dreamnikah.com/images/HomePageImage/apple1.png" alt="" />
                            <span className=""><p>Android App On</p> <p className="font-semibold text-xl">Google Play</p></span>
                        </button>
                        <button className="mt-36 flex flex-row items-center py-1 gap-5 border border-red-600 px-6 rounded-md">
                            <img src="https://staging.dreamnikah.com/images/HomePageImage/apple.png" alt="" />
                            <span className=""><p>Apple App On</p> <p className="font-semibold text-xl">Play Store</p></span>
                        </button>
                        </div>
                </div>
            </div>
        </div>
        <div className="">
            <div className="flex row justify-center">
                <h2 style={{fontFamily:"Pinyon Script"}} className="text-6xl absolute -ml-72 text-[#dece70]">
                        Find 
                     </h2>
                        <h2 className="font-bold text-5xl mt-10 text-slate-600">
                            <span className="text-[#A82C2B] relative border-b border-[#A82C2B]">
                             <img className="absolute -left-1 -bottom-1.5 inline-block" src="https://staging.dreamnikah.com/images/completeProfile/smallheartL.svg" alt="" />
                             <p className="inline">Your Match</p>
                             <img className="absolute inline-block -right-1.5 -bottom-1.5" src="https://staging.dreamnikah.com/images/completeProfile/smallheartR.svg" alt="" />
                            </span>
                            <p className="inline"> By</p>
                        </h2>
            </div>
            <div className="flex gap-10 mt-14 justify-center">
                <button className="border border-[#dece70] px-16 py-2 rounded-lg hover:border-[#A82c2b] hover:bg-red-200">City</button>
                <button className="border border-[#dece70] px-16 py-2 rounded-lg hover:border-[#A82c2b] hover:bg-red-200">Gender</button>
                <button className="border border-[#dece70] px-16 py-2 rounded-lg hover:border-[#A82c2b] hover:bg-red-200">Age</button>
                <button className="border border-[#dece70] px-16 py-2 rounded-lg hover:border-[#A82c2b] hover:bg-red-200">Sect</button>
            </div>
            <div className="flex justify-center mt-16 text-xl text-slate-700">
                <button className=" border-r-slate-700 border-r-2 px-6">DELHI</button>
                <button className=" border-r-slate-700 border-r-2 px-6">MUMBAI</button>
                <button className=" border-r-slate-700 border-r-2 px-6">BANGLORE</button>
                <button className=" border-r-slate-700 border-r-2 px-6">HYDRABAD</button>
                <button className=" border-r-slate-700 border-r-2 px-6">AHMEDABAD</button>
                <button className=" border-r-slate-700 border-r-2 px-6">CHENNAI</button>
                <button className="  px-6">DELHI</button>
                

            </div>
        </div>
        </>
    );
}