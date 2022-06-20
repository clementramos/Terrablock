import React from 'react';
import Image from 'next/image'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const divBlur = {
    background: 'radial-gradient(circle, rgba(177,255,168,1) 0%, rgba(56,255,192,1) 53%, rgba(0,212,255,1) 100%)',
    borderRadius: '50%',
    fontSize: '250px',
    height: '78px',
    width: '1.5em',
    filter: 'blur(185px)',
    zIndex: '9999'
};
export default function Roadmap () {
    return (
        <><><>
        <div className="flex justify-start items-start bg-black overflow-hidden bg-sparkles w-screen h-min xs:pt-48 xs:inline-block xs:h-full xs:w-full">
            <div className="w-full h-min md:text-center pl-20 xs:w-full xs:p-5">
                {/* Text container */}
                <div className="lg:w-full xs:w-full">
                    <div className="">                        
                        <div className="flex justify-start text-white font-bold text-6xl text-center  pb-0">About Terrablock</div>
                    </div>
                </div>
            </div>
            </div>
            {/* Image container */}
            <div className="grid grid-cols-3 px-10 bg-sparkles w-full h-min pr-8 md:text-center xs:w-full xs:p-5 ">
                <div className="col-start-1 col-end-2  ">
                    <Image alt="design" src="/about1.svg" width="1640px" height="1224px" />
                    <p className="text-white font-bold text-5xl col-1 mb-10">Portfolio </p>
                    <p className="text-white text-center font-medium text-lg col-1 px-10">The Terrablock team is in charge of the whole process of purchasing the real estate portfolio, as well as its rental management.</p>
                </div>
                <div className="col-start-2 col-end-3">
                    <Image alt="design" src="/about3.svg" width="1640px" height="1224px" />
                    <p className="text-white font-bold text-5xl col-1 mb-10">NFTs </p>
                    <p className="text-white text-center font-medium text-lg col-1 px-10">The whole real estate portfolio will be represented by the Terrablock&apos;s NFTS collection</p>
                </div>
                <div className="col-start-3 col-end-4">
                    <Image alt="design" src="/about2.svg" width="1640px" height="1224px" />
                    <p className="text-white font-bold text-5xl col-1 mb-10">Rental return </p>
                    <p className="text-white text-center font-medium text-lg col-1 px-10">Hold, buy or resell your Terrablock NFTS and benefit from the performance of the real estate portfolio.</p>
                </div>
            </div>
        
            <div className="flex flex-row justify-center items-start bg-black overflow-hidden bg-sparkles w-screen h-full pt-24 xs:pt-48 xs:inline-block xs:h-full xs:w-full">
                <div className="w-full h-full md:text-center lg:py-56 pl-20 xs:w-full xs:p-5">
                    {/* Text container */}
                    <div className="lg:w-full h-full xs:w-full">
                        <div className="mb-14">
                            <div className="text-white font-bold text-4xl text-center ">A revolution for the real estate industry
                            </div>
                        </div>
                        <p className="text-gray-400 font-semibold text-xl text-center">We are entering a new era of real estate investment. <br></br> <br></br>
                                    With Terrablock&apos;s NFT collection, you will not only benefit from rental returns generated by the real estate, but you will also enjoy exclusive benefits only available to our community. <br></br> <br></br>
                                            Real estate is a booming market in France, with Terrablock, you will be able to invest in a diversified portfolio of properties located in France, from the Paris region to the French Riviera and rigorously selected by our team of specialists.</p>
                    </div>
                </div>
                {/* Image container */}
                <div className="w-3/4 pr-8 md:text-center lg:pt-20 xs:w-full xs:p-5">
                    <Image alt="paris" src="/paris.jpeg" width="500px" height="750px" />
                </div>
            </div></>


            <div className="flex flex-row justify-center items-start bg-black overflow-hidden bg-sparkles w-screen h-full pt-24 xs:pt-48 xs:inline-block xs:h-full xs:w-full">
                <div className="w-3/4 pr-8 md:text-center lg:pt-20 xs:w-full xs:p-5">
                    <Image alt="paris" src="/cotedazur.jpeg" width="500px" height="750px" />
                </div><div className="w-full h-full md:text-center lg:py-56 pl-20 xs:w-full xs:p-5">
                    {/* Text container */}
                    <div className="lg:w-full h-full xs:w-full">
                        <div className="mb-14">
                            <div className="text-white font-bold text-4xl text-center ">Diversify your investments
                            </div>
                        </div>
                        <p className="text-gray-400 font-semibold text-xl text-center pr-8">Terrablock is an innovative, reliable, and flexible way of investing in a diversified french real estate portfolio. <br></br> <br></br>
The French real estate market is very interesting in terms of rental yield, but many barriers prevent foreign investors from taking advantage of it. <br></br> <br></br>
Through Terrablock&apos;s NFTS, you have the opportunity to invest in real estate directly with your cryptocurrencies!</p>
                    </div>
                </div>
                {/* Image container */}
                
            </div></>

<VerticalTimeline
className="bg-sparkles py-32 w-full max-w-full text-lg"
lineColor= "rgb(52 211 153)">
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'none', color: 'white', boxShadow: 'none' }}
    date="Phase 1"
    dateClassName="text-5xl text-emerald-400"
    iconStyle={{ background: 'rgb(52 211 153)', color: 'green' }}
    iconClassName="w-2.5 h-2.5 -ml-1 mt-20"
    contentArrowStyle={{ display: 'none'}}
    textClassName="text-3xl"
  >
    <h1 className="vertical-timeline-element-title font-bold">Initial Coin Offering</h1>
    <h2 className="vertical-timeline-element-subtitle">02/10/2023</h2>
    <p className="font-medium text-lg">
    The ICO will enable you to buy your TRB tokens.
Then, TRB will be able to be traded as any cryptocurrency or exchanged against Terrablock&apos;s NFTs.
See white paper for tokenomics
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'none', color: 'white', boxShadow: 'none' }}
    date="Phase 2"
    dateClassName="text-5xl text-emerald-400"
    iconStyle={{ background: 'rgb(52 211 153)', color: 'green' }}
    iconClassName="w-2.5 h-2.5 -ml-1 mt-20"
    contentArrowStyle={{ display: 'none'}}
    textClassName="text-3xl"
  >
    <h1 className="vertical-timeline-element-title font-bold">Purchase of the real estate portfolio</h1>
    <h2 className="vertical-timeline-element-subtitle">02/10/2023</h2>
    <p className="font-medium text-lg">
    The terrablock team will use a triple diversification strategy to build the real estate portfolio: <br></br>
                                                                                            -diversification by type of property (apartments, investment properties, commercial remises...)<br></br>
                                                                                            -diversification by real estate locations (paris area, major cities, small cities...)<br></br>
                                                                                            -diversification by rental strategies (short-term, long-term rental...)
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'none', color: 'white', boxShadow: 'none' }}
    date="Phase 3"
    dateClassName="text-5xl text-emerald-400"
    iconStyle={{ background: 'rgb(52 211 153)', color: 'green' }}
    iconClassName="w-2.5 h-2.5 -ml-1 mt-20"
    contentArrowStyle={{ display: 'none'}}
    textClassName="text-3xl"
  >
    <h1 className="vertical-timeline-element-title font-bold">Real Estate Portfolio Tokenisation</h1>
    <h2 className="vertical-timeline-element-subtitle">02/10/2023</h2>
    <p className="font-medium text-lg">
    Terrablock has been developed to have its own marketplace. 
A marketplace where you will be able to buy your Terrablock&apos;s NFT that will be a digital representation of the real estate portfolio.

This will able you to invest quickly and easily in our french real estate portfolio.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'none', color: 'white', boxShadow: 'none' }}
    date="Phase 4"
    dateClassName="text-5xl text-emerald-400"
    iconStyle={{ background: 'rgb(52 211 153)', color: 'green' }}
    iconClassName="w-2.5 h-2.5 -ml-1 mt-20"
    contentArrowStyle={{ display: 'none'}}
    textClassName="text-3xl"
  >
    <h1 className="vertical-timeline-element-title font-bold">NFT Sale</h1>
    <h2 className="vertical-timeline-element-subtitle">02/10/2023</h2>
    <p className="font-medium text-lg">
    Terrablock&apos;s NFT holders will automatically receive TRB tokens on their wallet representing the rental income generated by the real estate portfolio in proportion to their investment. 

They will also benefit from exclusive advantages reserved for the Terrablock community.
    </p>
  </VerticalTimelineElement>
</VerticalTimeline>
                </>)}