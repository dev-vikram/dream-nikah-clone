
export default function Hero(){
    return(
        <>
        <div className="bg-cover bg-top bg-repeat-round p-20 bg-[url('https://staging.dreamnikah.com/images/HomePageImage/topImage.png')]">
            <div className="flex justify-center gap-20 items-center scale-110">
                
                <div className="flex flex-col items-center relative mt-5">
                    <img src="https://staging.dreamnikah.com/images/HomePageImage/bismillah.png" alt="" />
                    <p className="text-3xl font-light text-[#A82C2B]">A Modern Islamic Marriage Platform</p>
                    <p className="text-[#A82C2B] font-medium">Connecting Souls, not just two individual's</p>
                    <img className=" z-0 -mt-16 w-100" src="https://staging.dreamnikah.com/images/HomePageImage/firstImage1.svg" alt="" />
                </div>


                <div className="relative top-1.5">
                   <img className="" src="https://staging.dreamnikah.com/_next/image?url=%2Fimages%2FHomePageImage%2FregistrationSection.svg&w=640&q=75" alt="" />
                   <div className="absolute top-10 left-5 pt-10">
                    <h5 className="text-center font-bold">Register Yourself</h5>

                        <form className="grid sm:grid-cols-2 gap-3 mt-5" action="">
                            <div>
                                <label htmlFor="first-name">First Name*</label><br/>
                                <input className="border rounded-md py-1" type="text" name="first-name" />
                            </div>
                            <div>
                                <label htmlFor="last-name">Last Name</label><br/>
                                <input className="border rounded-md py-1" type="text" name="last-name" />
                            </div>
                            <div>
                                <label htmlFor="last-name">Last Name</label><br/>
                                <input className="border rounded-md py-1" type="text" name="last-name" />
                            </div>
                            <div>
                                <label htmlFor="last-name">Last Name</label><br/>
                                <input className="border rounded-md py-1" type="text" name="last-name" />
                            </div>
                            <div className="col-span-2">
                                <label htmlFor="last-name">Password</label><br/>
                                <input className="border rounded-md py-1 w-full" type="text" name="last-name" />
                            </div>
                        </form>
                        <div className="flex mt-6 justify-center items-center">
                                <input type="checkbox" className="appearance-none border border-yellow-300 h-5 w-5 rounded checked:bg-[#A82C2B]" name="tc-cox" id="" />
                                <label htmlFor="tc-box" className="text-sm my-auto pl-2"> Agree To Accept All The <span className="text-[#A82C2B] hover:cursor-pointer">T&C</span> And <span className="text-[#A82C2B] hover:cursor-pointer">Privacy Policy</span></label>
                        </div>
                        <div className="p-4 mt-6">
                            <button className="w-full bg-[#A82C2B] py-2 text-white rounded-md">SIGN UP</button>
                        </div>
                        <p className="text-center mt-6">Already a member <a className="text-[#A82C2B] underline font-bold" href="">LOG IN</a></p>
                        <p className="text-center">OR</p>
                        <div className="flex justify-center mt-2 ">
                                    <div className="flex space-x-4 border-r-2 border-black px-7">
                                        <img src="https://staging.dreamnikah.com/_next/image?url=%2Fimages%2FHomePageImage%2Fgoogle.png&w=32&q=75" alt="" />
                                        <p className="font-medium text-lg">Google</p>
                                    </div>
                                    <div className="flex space-x-4 px-7">
                                        <img src="https://staging.dreamnikah.com/_next/image?url=%2Fimages%2FHomePageImage%2Ffacebook.png&w=32&q=75" alt="" />
                                        <p className="font-medium text-lg">Facebook</p>
                                    </div>
                        </div>
                        </div>
                    </div>
                <div> 
                  
                  
                   
                   
                </div>
            </div>
            
        </div>
        </>
    );
}