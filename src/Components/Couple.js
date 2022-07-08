export default function Couple(){
    return(
        <>
        <div className=" mx-auto z-0">
            <div className="mt-10">
                <div className="text-center mb-0">
                    <p style={{fontFamily:"Pinyon Script"}} className="text-6xl mr-80 mb-0 text-[#dece70]">Our</p>
                </div>
                <div className="text-center -mt-5 mx-10">
                    <h2 className="font-bold text-5xl text-slate-600">
                        <p className="inline">Dream </p>
                        <span className="text-[#A82C2B] relative border-b border-[#A82C2B]">
                            <img className="absolute -left-1 -bottom-1.5 inline-block" src="https://staging.dreamnikah.com/images/completeProfile/smallheartL.svg" alt="" />
                            <p className="inline">Couple</p>
                            <img className="absolute inline-block -right-1.5 -bottom-1.5" src="https://staging.dreamnikah.com/images/completeProfile/smallheartR.svg" alt="" />
                        </span>
                    </h2>
                </div>
            </div>
            <div className="flex justify-center mt-5 items-center">
                <div>
                    <img src="https://staging.dreamnikah.com/images/HomePageImage/faizan.png" alt="" />
                </div>
                <div style={{width:"520px"}}  className="p-16">
                    <p className="text-3xl font-semibold text-slate-900">Fahad and Mahira</p>
                    <p className="text-slate-600 text-lg font-semibold">“Destiny is all that comes through and DreamNikah became that path to our destiny. From letting our profiles be displayed to each other, we gradually moved onto amazing video chat facilities, bringing our families closer and making it easier to understand each other. I have had nine precious months with Mahiri and we are still smiling and counting.”</p>
                </div>
            </div>

            {/* Wedding planneners section */}
            <div className="py-5">
                <div className="flex gap-x-96 justify-center mt-10">
                    <div className="">
                        <div className="text-center mb-0">
                            <p style={{fontFamily:"Pinyon Script"}} className="text-6xl mr-80 mb-0 text-[#dece70]">Our</p>
                        </div>
                        <div className="text-center -mt-5 mx-10">
                            <h2 className="font-bold text-5xl text-slate-600">
                                <p className="inline">Dream </p>
                                <span className="text-[#A82C2B] relative border-b border-[#A82C2B]">
                                    <img className="absolute -left-1 -bottom-1.5 inline-block" src="https://staging.dreamnikah.com/images/completeProfile/smallheartL.svg" alt="" />
                                    <p className="inline">Couple</p>
                                    <img className="absolute inline-block -right-1.5 -bottom-1.5" src="https://staging.dreamnikah.com/images/completeProfile/smallheartR.svg" alt="" />
                                </span>
                            </h2>
                        </div>
                        <p className="text-center mt-5 from-neutral-600">All wedding related solution</p>
                  </div>
                  <div className="items-center flex">
                    <img className="w-5 hover:scale-150 cursor-pointer" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///8eIB0ABwAABQAAAACfn56jpKIbHRrDw8MZHBjMzMzAwcAbHhrExcQDCQDS0tIVGBQKDgi4ubjl5eVxcnEQEw/29vbe396ur66YmJdeX13Z2di1trUlJyRRUlFlZmRERkQ5Ozg0NjN4eXhTVFLuQuL+AAADfUlEQVR4nO2dbU/bQBCE/XLFdvxSO06CAwQI9P//xiaASiDjVqrOWt3cPN8jzeh2vbt3ji9JhBBCCCGEEEIIIYQQQgghhBBC/AfjtN9Po7WK5Rg3znWdc3f31koWYlUN6Rtb92CtZRFKV6QfFK60VrMA9afBNK0OO2s93qmzC4Np6iZrQb5p3ReDaf9orcgz3w2eFtFakl/qK4NkDr/l4NvTdLAW5ZPyegXT7ZO1Ko8gg6mrrWX5o86Bwf7ZWpY/StdcG6yGW2td3oAhWnU/rXV5A5SJ8wqurHV5A5QJLoMwRIucx+B1q3ZeQaccDIYyQ2WiIzLIXiawwZzHIH2ZaFGrVjgegzhEM6IQZS8T9DmIW7WM3KBatYAoc7VqYYNDlMkge5mAAy9Tq4YnerVq4UCfg2rVQqeGnQxViCKDRBu/atVCJ9IyQd+qMW38qlULHJyD9FsWTDmI3pOptkwrqMOXsFGZCB3692T4J3r2HNThS+jgEGWqg+xlgv7wRa1a6NDnoA5fQqeGA++BxyCc6NP+6eZHwEzt7sIgCNGzxSxknHOb8e8Gw2d4LwX3AwpRDqrh/Cg59tY6FqQ/JsnaWatYFLdONsxLeFrETfLC+ph5p3hJrCUszYF+DY/JZmstYlG2r/TP0pK8Hm4f33oa3kzs+1vqvrTpio/5D+6xpefZIg+Y02zx+md+atGR9mk+nG4C5qG9/JRTiSwWKc+MH8FmcBwWO7QZRXSsFsE7UHEEKn5NqLXW5ZGyQ6s4MFmMIlD5LaJDNrJcxEWDyWIMgYosNlyBCotGRmURByqTxZlA5cpF/gYO1cWGKhcjeKLO1EUqi+ijcw3V99bhm25NzmQxhkDFFom+gzzTwHFZxKvIlYuwu4nAIlOgwj9bcllU0WCghMc2VBZhA8dlcSZQVTSCoo62gWOyGEHRaNFfaAu3ttblkZmiwWQxhkDFm4xMqzhTNKgsKhcJgA0cWS7CYxsqi7CBa8gClX8V8bENk0V8bENlcaZoyGJQzDRwTLdyx9vAcVmEUz/TX1HwXbJHa1k+wfcBM8UpvtP5zlqVV9C93J21KL/Q360OikbD5vDKYv/LWpF3vuWim6wF+edLLlaH3b9/ERwXRYPr4PSTVTN8FMOMabq4ZNw413XO3d1bK1mOcdrvp9FahRBCCCGEEEIIIYQQQgghhBBCRMtv7PxEggm3iH4AAAAASUVORK5CYII=" alt="" />
                    <p className="ml-2 text-lg font-bold text-[#A82C2B]">Pre-Wedding Shoot</p>
                    <img className="ml-2 hover:scale-125 cursor-pointer" src="https://staging.dreamnikah.com/images/HomePageImage/blogimage.svg" alt="" />
                  </div>
                </div>
            
                <div className="flex gap-6 mt-10 justify-center scale-95">
                    <div className="">
                        <img src="https://staging.dreamnikah.com/_next/image?url=%2Fimages%2FHomePageImage%2FRectangle536.png&w=384&q=75" alt="" />
                        <div className="p bg-gray-100 rounded-b-[35px] py-3">
                            <h2 className="p-3 font-bold text-lg">CINEMATOGRAPHY</h2>
                            <p className="w-96 p-3 text-lg">Here at DreamNikah, we don’t just bring you your perfect match, but a Dream Wedding that is just needed. Introducing the never heard facility of cinematography/videography, making sure of capturing your unforgettable moments for life. Inclusive of pre wedding shoots trend.</p>
                            <button className="font-bold px-3 flex hover:text-[#a82c2b]">Find out more <span><img className="absolute -m-3 -ml-1" src="https://staging.dreamnikah.com/_next/image?url=%2Fimages%2FHomePageImage%2Farrow.png&w=32&q=75" alt="" /></span></button>
                        </div>
                    </div>
                    <div className="">
                        <img src="https://staging.dreamnikah.com/_next/image?url=%2Fimages%2FHomePageImage%2FRectangle536.png&w=384&q=75" alt="" />
                        <div className="p bg-gray-100 rounded-b-[35px] py-3">
                            <h2 className="p-3 font-bold text-lg">CINEMATOGRAPHY</h2>
                            <p className="w-96 p-3 text-lg">Here at DreamNikah, we don’t just bring you your perfect match, but a Dream Wedding that is just needed. Introducing the never heard facility of cinematography/videography, making sure of capturing your unforgettable moments for life. Inclusive of pre wedding shoots trend.</p>
                            <button className="font-bold px-3 flex hover:text-[#a82c2b]">Find out more <span><img className="absolute -m-3 -ml-1" src="https://staging.dreamnikah.com/_next/image?url=%2Fimages%2FHomePageImage%2Farrow.png&w=32&q=75" alt="" /></span></button>
                        </div>
                    </div>
                    <div className="">
                        <img src="https://staging.dreamnikah.com/_next/image?url=%2Fimages%2FHomePageImage%2FRectangle536.png&w=384&q=75" alt="" />
                        <div className="p bg-gray-100 rounded-b-[35px] py-3">
                            <h2 className="p-3 font-bold text-lg">CINEMATOGRAPHY</h2>
                            <p className="w-96 p-3 text-lg">Here at DreamNikah, we don’t just bring you your perfect match, but a Dream Wedding that is just needed. Introducing the never heard facility of cinematography/videography, making sure of capturing your unforgettable moments for life. Inclusive of pre wedding shoots trend.</p>
                            <button className="font-bold px-3 flex hover:text-[#a82c2b]">Find out more <span><img className="absolute -m-3 -ml-1" src="https://staging.dreamnikah.com/_next/image?url=%2Fimages%2FHomePageImage%2Farrow.png&w=32&q=75" alt="" /></span></button>
                        </div>
                    </div>

                </div>
            </div>

            {/* --------------------------------------------------Bloges section-------------------------- */}

            <div className="bg-cover bg-no-repeat items-center bg-[url('https://staging.dreamnikah.com/images/HomePageImage/Rectangleblogs.png')]">
                <div className="py-20">
                    <div className="flex gap-x-96 justify-center mt-10">
                        <div className="">
                            <div className="text-center mb-0">
                                <p style={{fontFamily:"Pinyon Script"}} className="text-6xl mr-80 mb-0 text-[#dece70]">Our</p>
                            </div>
                            <div className="text-center -mt-5 mx-10">
                                <h2 className="font-bold text-5xl text-slate-600">
                                    <p className="inline">Weddings </p>
                                    <span className="text-[#A82C2B] relative border-b border-[#A82C2B]">
                                        <img className="absolute -left-1 -bottom-1.5 inline-block" src="https://staging.dreamnikah.com/images/completeProfile/smallheartL.svg" alt="" />
                                        <p className="inline">Blogs</p>
                                        <img className="absolute inline-block -right-1.5 -bottom-1.5" src="https://staging.dreamnikah.com/images/completeProfile/smallheartR.svg" alt="" />
                                    </span>
                                </h2>
                            </div>
                    </div>
                        <div className="items-center flex">
                            <p className="ml-2 text-lg font-bold text-[#A82C2B]">Check Our All Blogs</p>
                            <img className="ml-2 hover:scale-125 cursor-pointer" src="https://staging.dreamnikah.com/images/HomePageImage/blogimage.svg" alt="" />
                        </div>
                    </div>
                
                    <div className="flex gap-6 mt-20 justify-center scale-95">
                        <div className="">
                            <div className="bg-gray-900 text-white p-3 rounded-[35px]">
                                <h2 className="p-3 font-bold text-lg">CINEMATOGRAPHY</h2>
                                <div className="flex items-center">
                                    <img className="px-3" src="https://staging.dreamnikah.com/images/HomePageImage/Ellipse65.png" alt="" />
                                    <p className="font-bold">Sana Khan</p>
                                </div>
                                <p className="w-96 p-3 text-lg">Here at DreamNikah, we don’t just bring you your perfect match, but a Dream Wedding that is just needed. Introducing the never heard facility of cinematography/videography, making sure of capturing your unforgettable moments for life. Inclusive of pre wedding shoots trend.</p>
                                <p className="font-semibold px-3 flex">THU JUN 27-2021</p>
                            </div>
                        </div>
                        <div className="">
                            <div className="bg-gray-900 text-white p-3 rounded-[35px]">
                                <h2 className="p-3 font-bold text-lg">CINEMATOGRAPHY</h2>
                                <div className="flex items-center">
                                    <img className="px-3" src="https://staging.dreamnikah.com/images/HomePageImage/Ellipse65.png" alt="" />
                                    <p className="font-bold">Sana Khan</p>
                                </div>
                                <p className="w-96 p-3 text-lg">Here at DreamNikah, we don’t just bring you your perfect match, but a Dream Wedding that is just needed. Introducing the never heard facility of cinematography/videography, making sure of capturing your unforgettable moments for life. Inclusive of pre wedding shoots trend.</p>
                                <p className="font-semibold px-3 flex">THU JUN 27-2021</p>
                            </div>
                        </div>
                        <div className="">
                            <div className="bg-gray-900 text-white p-3 rounded-[35px]">
                                <h2 className="p-3 font-bold text-lg">CINEMATOGRAPHY</h2>
                                <div className="flex items-center">
                                    <img className="px-3" src="https://staging.dreamnikah.com/images/HomePageImage/Ellipse65.png" alt="" />
                                    <p className="font-bold">Sana Khan</p>
                                </div>
                                <p className="w-96 p-3 text-lg">Here at DreamNikah, we don’t just bring you your perfect match, but a Dream Wedding that is just needed. Introducing the never heard facility of cinematography/videography, making sure of capturing your unforgettable moments for life. Inclusive of pre wedding shoots trend.</p>
                                <p className="font-semibold px-3 flex">THU JUN 27-2021</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/*------------------------------------------ Feature in----------------------------------------------- */}
            <div className="py-28 mx-auto bg-cover bg-no-repeat bg-[url('https://staging.dreamnikah.com/images/HomePageImage/Rectanglefeature.png')]">
                <div className="">
                    <div className="text-center mb-0">
                        <p style={{fontFamily:"Pinyon Script"}} className="text-6xl mr-80 mb-0 text-[#dece70]">We</p>
                    </div>
                    <div className="text-center -mt-5 mx-10">
                        <h2 className="font-bold text-5xl text-slate-600">
                            <p className="inline">Are </p>
                            <span className="text-[#A82C2B] relative border-b border-[#A82C2B]">
                                <img className="absolute -left-1 -bottom-1.5 inline-block" src="https://staging.dreamnikah.com/images/completeProfile/smallheartL.svg" alt="" />
                                <p className="inline">Feature In</p>
                                <img className="absolute inline-block -right-1.5 -bottom-1.5" src="https://staging.dreamnikah.com/images/completeProfile/smallheartR.svg" alt="" />
                            </span>
                        </h2>
                    </div>
                </div>
                
                <div className="grid grid-cols-4 gap-10  scale-75 justify-items-center">
                    <div>
                        <img src="https://staging.dreamnikah.com/images/HomePageImage/Rectangle6151.png" alt="" />
                    </div>
                    <div>
                        <img src="https://staging.dreamnikah.com/images/HomePageImage/Rectangle619.png" alt="" />
                    </div>
                    <div>
                        <img src="https://staging.dreamnikah.com/images/HomePageImage/Rectangle620.png" alt="" />
                    </div>
                    <div>
                        <img src="https://staging.dreamnikah.com/images/HomePageImage/Rectangle621.png" alt="" />
                    </div>
                    <div>
                        <img src="https://staging.dreamnikah.com/images/HomePageImage/Rectangle622.png" alt="" />
                    </div>
                    <div>
                        <img src="https://staging.dreamnikah.com/images/HomePageImage/Rectangle623.png" alt="" />
                    </div>
                    <div>
                        <img src="https://staging.dreamnikah.com/images/HomePageImage/Rectangle625.png" alt="" />
                    </div>
                    <div>
                        <img src="https://staging.dreamnikah.com/images/HomePageImage/Rectangle626.png" alt="" />
                    </div>
                    <div>
                        <img src="https://staging.dreamnikah.com/images/HomePageImage/Rectangle627.png" alt="" />
                    </div>
                    <div>
                        <img src="https://staging.dreamnikah.com/images/HomePageImage/Rectangle628.png" alt="" />
                    </div>
                    <div>
                        <img src="https://staging.dreamnikah.com/images/HomePageImage/Rectangle629.png" alt="" />
                    </div>
                    <div>
                        <img src="https://staging.dreamnikah.com/images/HomePageImage/Rectangle630.png" alt="" />
                    </div>
                </div>

            </div>
        </div>
        </>
    )
}