

export default function Work(){
    return(
        <>
        <div className="bg-cover bg-no-repeat pb-20 bg-top bg-[url('https://staging.dreamnikah.com/images/HomePageImage/WorkSection.png')]">
            <div className="flex flex-row gap-52 justify-center pr-32 py-10">
                <div>
                     <h2 style={{fontFamily:"Pinyon Script"}} className="text-6xl mt-5 text-[#dece70]">
                        How </h2>
                        <h2 className="font-bold -mt-6 text-5xl text-slate-600">
                            <p className="inline">It </p>
                            <span className="text-[#A82C2B] relative border-b border-[#A82C2B]">
                             <img className="absolute -left-1 -bottom-1.5 inline-block" src="https://staging.dreamnikah.com/images/completeProfile/smallheartL.svg" alt="" />
                             <p className="inline">Work</p>
                             <img className="absolute inline-block -right-1.5 -bottom-1.5" src="https://staging.dreamnikah.com/images/completeProfile/smallheartR.svg" alt="" />
                            </span>
                        </h2>
                        <p className="mt-10 text-xl">Ease your journey in just 3 simple steps:</p>
                        <p className="text-sm">It will not take more than 15 minutes before you start</p>
                        <div className="flex flex-col gap-x-20 gap-y-10 mt-10">
                            <div className="flex gap-x-10">
                                <img src="https://staging.dreamnikah.com/images/HomePageImage/Ellipse.png" alt="" />
                                <div>
                                    <h3 className="font-bold text-2xl">Register Yourself</h3>
                                    <p className="font- inline text-s text-gray-500">Register and fill out the information</p>
                                </div>  
                            </div>

                            <div className="flex gap-x-10">
                                <img src="https://staging.dreamnikah.com/images/HomePageImage/Ellipse76.png" alt="" />
                                <div>
                                    <h3 className="font-bold text-2xl">Your Preferences</h3>
                                    <p className="font- inline text-s text-gray-500">Tell us about your preferences.</p>
                                </div>  
                            </div>

                            <div className="flex gap-x-10">
                                <img src="https://staging.dreamnikah.com/images/HomePageImage/Ellipse761.png" alt="" />
                                <div>
                                    <h3 className="font-bold text-2xl">Find Your Soulmate</h3>
                                    <p className="font- inline text-s text-gray-500">Good to Go! Find your match.</p>
                                </div>  
                            </div>
                        </div>
                </div>
                <div className="flex relative z-0">
                    <img className="h-80 b" src="https://staging.dreamnikah.com/images/HomePageImage/workshadow.png" alt="" />
                    <img className="absolute -left-32  scale-[0.7]" src="https://staging.dreamnikah.com/images/HomePageImage/rect.png" alt="" />
                    <img className="absolute -right-28" src="https://staging.dreamnikah.com/images/HomePageImage/workSectionImage1.png" alt="" />
                    <img className="absolute bottom-32 scale-[1.3]" src="https://staging.dreamnikah.com/images/HomePageImage/rect2.png" alt="" />
                </div>
            </div>
        </div>
        </>
    )
}