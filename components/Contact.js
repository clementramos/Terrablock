import React from 'react';
import Image from 'next/image';

export default function Contact () {
    return (
      <><div className="flex flex-row justify-center items-start bg-black overflow-hidden bg-hero bg-no-repeat w-screen h-screen pt-24 xs:pt-48 xs:inline-block xs:bg-hero xs:w-full z-9999">
        {/* Text container */}
        <div className="w-3/4 md:text-center lg:pt-20 xs:w-full xs:p-5">
          <h1 className="cursor-none text-6xl font-bold text-white hover:text-emerald-400 pb-14 xs:pb-7">Contact us</h1>
          <h4 className="cursor-none text-4xl font-bold text-white pt-4 hover:text-emerald-400 pb-28 xs:pb-7">Want to know more about the project or ask a question to the team?<br></br> Fill the form below!</h4>
          <a href="#contact">
            <button className="rounded-full bg-emerald-400 text-white text-lg font-bold py-2 px-12 cursor-none mx-12 hover:bg-white hover:text-emerald-400 xs:px-6 xs:mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
              </svg>
            </button>
          </a>
        </div>
      </div>
      <div className="flex grid grid-cols-2 justify-center items-start bg-sparkles w-screen h-sreen" id="contact">
        <div className="flex flex-row justify-center pt-40">
          <Image alt="logo" src="/nft4.png" width="300px" height="300px"></Image>
        </div>
      <div  className="flex items-center justify-center pt-24 w-full">
      <form className="w-1/2 pb-48">
        <label htmlFor="first-name" className="block pt-12"></label>
        <input type="text" name="First Name" placeholder="First Name" required className="w-full rounded-lg border py-3 px-6 font-medium text-black outline-none focus:border-emerald-400"></input> <br></br>
        <label htmlFor="last-name"  className="block pt-12"></label>
        <input type="text" name="Last Name" placeholder="Last Name" required className="w-full rounded-lg border py-3 px-6 font-medium text-black outline-none focus:border-emerald-400"></input>
        <label htmlFor="e-mail"  className="block pt-12"></label>
        <input type="email" name="E-mail" placeholder="E-mail" required className="w-full rounded-lg border py-3 px-6 font-medium text-black outline-none focus:border-emerald-400"></input>
        <label htmlFor="text-area"  className="block pt-12"></label>
        <textarea type="text" name="subject" placeholder="Your questions" required className="resize-none w-full rounded-lg border py-3 px-6 font-medium text-black outline-none focus:border-emerald-400"></textarea>
        <label htmlFor="submit" className="block pt-12"></label>
        <input type="submit" name="submit" placeholder="Submit" className="w-full rounded-lg border bg-contact py-3 px-6 font-medium text-black outline-none focus:border-emerald-400"></input>
      </form>
      </div>
      </div></>
 )
}
