import React from "react";
import Image from "next/image"
import Link from "next/link"

export default function Footer () {
    return (
        
    <div className="bg-gray-600 h-auto grid grid-cols-3 z-50">
        <div className="pl-10 pt-10">
            <Image alt="logo footer" src="/logofooter.png" width="50px" height="50px">
            </Image>
        <p className="text-white font-bold ">Invest in French real estate with the blockchain</p>
        <p className="text-white font-medium">TERRABLOCK is a subsidiary of FENIX Group, a french investment ecosystem. </p>
        <div className="flex items-stretch">
            <a className="flex self-auto" href="https://t.me/+Snh51yH7iqI3Y2Zk">
            <Image alt="telegram" src="/telegram.svg" width="65px" height="65px" href="">
            </Image>
            <p className="text-white font-bold m-10 mb-8 inline text-center pr-12">Join us on Telegram</p>
            </a>
            <a className="flex self-auto" href="https://discord.gg/rGr8pkBM">
                <Image alt="discord" src="/discord.svg" width="65px" height="65px" >
                </Image>            
            <p className="text-white font-bold m-10 mb-8 inline text-center">Join us on Discord</p>
            </a>
        </div>
        </div>
        <div className="text-center pt-10" id="socials">
            <p className="text-white font-medium pb-3"><a href="https://discord">ABOUT</a></p>
            <p className="text-white font-medium pb-3">ROAD MAP</p>            
            <p className="text-white font-medium pb-3">WHITE PAPER</p>            
            <p className="text-white font-medium pb-3">TEAM</p>            
        </div>
        <div className="text-left pt-10">
            <p className="text-white font-medium pb-3">Contact Informations</p>
            <hr></hr>
            <p className="text-white font-medium pt-6 pb-3">Phone : 000000000</p>            
            <p className="text-white font-medium pb-3">Email : contact@terrablock.fr</p>            
            <p className="text-white font-medium pb-3">Adress :</p>
            <form className="pb-3">
                <label className="inline">
                    <input type="email" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-l-lg text-emerald-400" placeholder="Enter your email"/>
                    <div className="inline-flex rounded-md shadow">
                        <a
                            href="#"
                            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-r-lg text-white bg-emerald-600"
                        >
                        Subscribe
                        </a>                    
            </div>
                </label>
            </form>
            <div className="flex items-stretch">
            <a className="flex self-auto pb-2" href=" https://twitter.com/terrablock_fr">
            <Image alt="twitter" src="/twitter.svg" width="30px" height="30px" href="">
            </Image>
            </a>
            <a className="flex self-auto pl-5 pb-2" href="">
                <Image alt="facebook" src="/facebook.svg" width="30px" height="30px" >
                </Image>            
            </a>
            <a className="flex self-auto pl-5 pb-2" href="">
            <Image alt="linkedin" src="/linkedin.svg" width="30px" height="30px" href="">
            </Image>
            </a>
            <a className="flex self-auto pl-5 pb-2" href="">
            <Image alt="youtube" src="/youtube.svg" width="30px" height="30px" href="">
            </Image>
            </a>
            <a className="flex self-auto pl-5 pb-2" href="">
            <Image alt="reddit" src="/reddit.svg" width="30px" height="30px" href="">
            </Image>
            </a>
        </div>
        </div>
    </div>
    )
}