import React from "react";

export default function Hero() {
  return (
    <div className="flex flex-row justify-center items-start bg-black overflow-hidden bg-hero bg-no-repeat w-screen pt-24 xs:pt-48 xs:inline-block xs:bg-hero xs:w-full z-50">
      <div className="w-1/2 md:text-center lg:py-20 pl-20 xs:w-full xs:p-5">
              {/* Image container */}
        <div className="lg:w-3/5 xs:w-full">
        <div className="card charizard animated bg-sparkles w-80 h-[32rem] rounded-xl p-6 space-y-4 border border-emerald-400">
            <a href="#">
                <img className="w-full h-64 rounded-md transition"
                    src="/nft4.png"
                    alt="" />
            </a>
            <div id="description" className="space-y-4">
                <a href="#">
                    <h2 className="text-white font-semibold text-xl transition hover:text-cyan-300 underline underline-offset-4  decoration-emerald-400">
                        TBC #3429
                    </h2>
                </a>
                <p className="text-white text-sm select-none">The land is at the following coordinates : <br></br> <p className="hover:underline hover:decoration-emerald-400">43.6043776, 3.833856</p></p>
                <div className="flex items-center justify-between font-bold text-sm border-b border-slate-500 pb-6">
                    <span id="price" className="text-cyan-300 flex justify-between items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 320 512" fill="#67E7F9">
                            <path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z" />
                        </svg>
                        0.041 ETH
                    </span>
                    <span className="text-white flex justify-between items-center select-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                clipRule="evenodd" />
                        </svg>
                        3 days left
                    </span>
                </div>
                <div className="flex text-sm items-center">
                    <img src="https://i.pravatar.cc/30?img=56" alt="avatar" className="rounded-full border border-white" />
                    <span className="ml-2 text-slate-500">
                        Seller : 
                        <a href="#" className="text-gray-300 transition hover:text-cyan-300">
                             <br></br>d855
                        </a>
                    </span>
                </div>
            </div>
        </div>
            </div>
          </div>
            {/* Text container */}
      <div className="w-3/4 md:text-center lg:pt-20 xs:w-full xs:p-5">
        <h1 className="cursor-none text-5xl font-bold text-white hover:text-emerald-400 pb-14 xs:pb-7">Say hello to the future of real estate investing.</h1>
        <h4 className="cursor-none text-2xl font-bold text-white pt-4 hover:text-emerald-400 pb-28 xs:pb-7">The power of real estate and the blockchain finally come together</h4>
        <button className="rounded-full bg-emerald-400 text-white text-lg font-bold py-2 px-12 cursor-help mx-12 hover:bg-white hover:text-emerald-400 xs:px-6 xs:mb-6">
          <p className="pr-2.5 inline">Join and buy tokens</p>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0M8 10.5h4m-4 3h4m9-1.5a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>
        <button className="rounded-full bg-emerald-400 text-white text-lg font-bold py-2 px-12 cursor-help mx-12 hover:bg-white hover:text-emerald-400 xs:px-6 xs:mb-6">
        <p className="pr-2.5 inline">White paper</p>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
        </button>
      </div>
    </div>
  );
}
