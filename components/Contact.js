import React from 'react';

export default function Contact () {
    return (
<div className="flex flex-row justify-center items-start bg-black overflow-hidden bg-hero bg-no-repeat w-screen h-screen pt-24 xs:pt-48 xs:inline-block xs:bg-hero xs:w-full z-9999">
            {/* Text container */}
      <div className="w-3/4 md:text-center lg:pt-20 xs:w-full xs:p-5">
        <h1 className="cursor-none text-6xl font-bold text-white hover:text-emerald-400 pb-14 xs:pb-7">Contact us</h1>
        <h4 className="cursor-none text-4xl font-bold text-white pt-4 hover:text-emerald-400 pb-28 xs:pb-7">Want to know more about the project or ask a question to the team? <br></br> Fill the form below!</h4>
        <button className="rounded-full bg-emerald-400 text-white text-lg font-bold py-2 px-12 cursor-help mx-12 hover:bg-white hover:text-emerald-400 xs:px-6 xs:mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
        </svg>
        </button>      
        </div>
    </div>    )
}
