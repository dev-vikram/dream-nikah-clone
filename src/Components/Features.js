export default  function Features(){
    return(
        <>
        <div className="bg-cover bg-no-repeat bg-[url('https://staging.dreamnikah.com/images/HomePageImage/mobilebgimageamazing.svg')] pt-36 ">
           <div className="">
           <div className="text-center">
                <p style={{fontFamily:"Pinyon Script"}} className="text-6xl -ml-[550px] text-[#dece70]">Our</p>
            </div>
            <div className="text-center -mt-5 mx-10">
                <h2 className="font-bold text-5xl text-slate-600">
                <span className="text-[#A82C2B] relative border-b border-[#A82C2B]">
                             <img className="absolute -left-1 -bottom-1.5 inline-block" src="https://staging.dreamnikah.com/images/completeProfile/smallheartL.svg" alt="" />
                            <p className="inline">Amazing Features</p>
                            <img className="absolute inline-block -right-1.5 -bottom-1.5" src="https://staging.dreamnikah.com/images/completeProfile/smallheartR.svg" alt="" />
                        </span>
                    <p className="inline"> To Offer</p>    
                </h2>
                <p className="py-5 font-semibold mt-5 text-xl text-slate-500">To find meaningful connections and life partners.</p>     
            </div>
           </div>
        </div>

        <div className="flex justify-center  gap-32 px-10 mt-14">
            <div className="relative flex items-center px-5"> 
                <img className="h-80" src="https://staging.dreamnikah.com/images/HomePageImage/dil.png" alt="" />
                <img className="absolute mx-96 -80" src="https://staging.dreamnikah.com/_next/image?url=%2Fimages%2FHomePageImage%2Ffree.svg&w=256&q=75" alt="" />
            </div>

            
            <div className="space-y-6">
                <div className="flex gap-6 justify-center ">
                    <img className="p-6" src="https://staging.dreamnikah.com/images/HomePageImage/simpletouse.png" alt="" />
                    <div className=" pb-5">
                        <p className="font-bold text-gray-900 text-lg">Simple to use</p>
                        <p className="text-slate-500">Simple steps to follow to have matching connection.Get started to find a perfect.</p>
                    </div>
                </div>
                <div className="flex gap-6">
                    <img className="p-6" src="https://staging.dreamnikah.com/images/HomePageImage/privacy.png" alt="" />
                    <div>
                        <p className="font-bold text-gray-900 text-lg">Your privacy our amaanah</p>
                        <p className="text-slate-500">We believes in privacy, and its our priority, to share your data which is safe and.</p>
                    </div>
                </div>
                <div className="flex gap-6">
                    <img className="p-6" src="https://staging.dreamnikah.com/images/HomePageImage/videocall.png" alt="" />
                    <div>
                        <p className="font-bold text-gray-900 text-lg">Video & Voice call</p>
                        <p className="text-slate-500">Finest features of voice calls, video calls, chats, with a ghost mode possibility.</p>
                    </div>
                </div>
                <div className="flex gap-6">
                    <img className="p-6" src="https://staging.dreamnikah.com/images/HomePageImage/smartfilter.png" alt="" />
                    <div>
                        <p className="font-bold text-gray-900 text-lg">Smart filter</p>
                        <p className="text-slate-500">Allows you to find more relevent matches.Can customize as per your preferences</p>
                    </div>
                </div>
            </div>

        </div>
        </>
    );
}