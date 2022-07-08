

export default function Sectionthree(){
    return(
        <>
        
        <div className="container mx-auto my-28 ">
            <div className="flex flex-row gap-20 px-20 justify-between">
                <div className="basis-1/2">
                    <h2 style={{fontFamily:"Pinyon Script"}} className="text-6xl  text-[#dece70]">See</h2>
                   
                        <h2 className="font-bold text-5xl text-slate-600">
                            <p className="inline">Our </p>
                            <span className="text-[#A82C2B] relative border-b border-[#A82C2B]">
                             <img className="absolute -left-1 -bottom-1.5 inline-block" src="https://staging.dreamnikah.com/images/completeProfile/smallheartL.svg" alt="" />
                             <p className="inline">Offerings</p>
                             <img className="absolute inline-block -right-1.5 -bottom-1.5" src="https://staging.dreamnikah.com/images/completeProfile/smallheartR.svg" alt="" />
                            </span>
                        </h2>
                   
                   
                        <p className="text-[#dece70] text-xl font-bold mt-12">__YOUR PRIVACY OUR AMAANAH </p>
                            <p className="p-5 ml-0 pl-0">DreamNikah eminently believes in privacy as for what priors to our members priors to us.Your personal details, namely your contact, email and so on will always be secured with us and not be shared publicly just to guarantee a 100% privacy for our respected users.</p>      
                </div>
                <div className="basis-1/2">
                    <img className="w-100" src="https://staging.dreamnikah.com/images/HomePageImage/offeringSection.png" alt="" />
                </div>
            </div>     
            <div className="bg-cover pt-40 bg-top bg-no-repeat bg-[url('https://staging.dreamnikah.com/images/HomePageImage/videobgimage.svg')] mt-14">
                <div className="flex flex-row px-36 gap-20">
                    <div className="">
                        <img className="h-100" src="https://staging.dreamnikah.com/_next/image?url=%2Fimages%2FHomePageImage%2Fimage1.png&w=640&q=75" alt="" />
                    </div>
                    <div>
                        <img className="hover:cursor-pointer hover:scale-95" src="https://staging.dreamnikah.com/_next/image?url=%2Fimages%2FHomePageImage%2Fimage2.png&w=64&q=75" alt="" />
                        
                        <h2 style={{fontFamily:"Pinyon Script"}} className="text-6xl mt-5 text-[#dece70]">Watch</h2>
                        <h2 className="font-bold -mt-6 text-5xl text-slate-600">
                            <p className="inline">Our </p>
                            <span className="text-[#A82C2B] relative border-b border-[#A82C2B]">
                             <img className="absolute -left-1 -bottom-1.5 inline-block" src="https://staging.dreamnikah.com/images/completeProfile/smallheartL.svg" alt="" />
                             <p className="inline">Video</p>
                             <img className="absolute inline-block -right-1.5 -bottom-1.5" src="https://staging.dreamnikah.com/images/completeProfile/smallheartR.svg" alt="" />
                            </span>
                        </h2>
                        <p className="mt-10 text-lg px-3 text-gray-500">Watch our short clip before getting onto this bewildering journing.</p>
                    </div>
                    
                </div>
            </div>
        </div>
        </>
    );
}