import React from 'react';
import Image from 'next/image'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function Roadmap () {
    return (
        <><><><div className="flex flex-row justify-center items-start bg-black overflow-hidden bg-sparkles w-screen h-screen pt-24 xs:pt-48 xs:inline-block xs:h-full xs:w-full">
            <div className="w-1/2 md:text-center lg:py-56 pl-20 xs:w-full xs:p-5">
                {/* Text container */}
                <div className="lg:w-3/5 xs:w-full">
                    <div className="mb-14">
                        <div className="text-white font-bold text-3xl text-left ">About Terrablock
                        </div>
                    </div>
                    <p className="text-gray-400 font-semibold text-lg text-left">French real estate at your fingertips higher accessibility to the French real estate market reduction of risks and liabilities for the investor</p>
                </div>
            </div>
            {/* Image container */}
            <div className="w-3/4 pr-8 md:text-center lg:pt-20 xs:w-full xs:p-5">
                <Image alt="design" src="/design1.png" width="1640px" height="924px" />
            </div>
        </div>
            <div className="flex flex-row justify-center items-start bg-black overflow-hidden bg-sparkles w-screen h-screen pt-24 xs:pt-48 xs:inline-block xs:h-full xs:w-full">
                <div className="w-1/2 md:text-center lg:py-56 pl-20 xs:w-full xs:p-5">
                    {/* Text container */}
                    <div className="lg:w-3/5 xs:w-full">
                        <div className="mb-14">
                            <div className="text-white font-bold text-3xl text-left ">A revolution for the real estate industry
                            </div>
                        </div>
                        <p className="text-gray-400 font-semibold text-lg text-left">It’s time for the real estate sector to get ready for web3 and start truly participating in the digital transformation, say hello to terrablock: higher real estate liquidity more transparency</p>
                    </div>
                </div>
                {/* Image container */}
                <div className="w-3/4 pr-8 md:text-center lg:pt-20 xs:w-full xs:p-5">
                    <Image alt="paris" src="/paris.jpeg" width="500px" height="750px" />
                </div>
            </div></><div className="flex flex-row justify-center items-start bg-black overflow-hidden bg-sparkles w-screen h-screen pt-24 xs:pt-48 xs:inline-block xs:h-full xs:w-full">
                <div className="w-1/2 md:text-center lg:py-56 pl-20 xs:w-full xs:p-5">
                    {/* Text container */}
                    <div className="lg:w-3/5 xs:w-full">
                        <div className="mb-14">
                            <div className="text-white font-bold text-3xl text-left ">Diversify your investments
                            </div>
                        </div>
                        <p className="text-gray-400 font-semibold text-lg text-left">Terrablock is an innovative, reliable, and flexible way of investing in a diversified french real estate portfolio.</p>
                    </div>
                </div>
                {/* Image container */}
                <div className="w-3/4 pr-8 md:text-center lg:pt-20 xs:w-full xs:p-5">
                    <Image src="/cotedazur.jpeg" alt="azurcoast" width="500px" height="700px" />
                </div>
            </div></><><>


<VerticalTimeline
className="bg-sparkles py-32 w-full max-w-full text-lg"
lineColor= "linear-gradient(rgb(220 252 231), rgb(20 83 45))">
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
Then, TRB will be able to be traded as any cryptocurrency or exchanged against Terrablock`&apos;`s NFTs.
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
A marketplace where you will be able to buy your Terrablock`&apos;`s NFT that will be a digital representation of the real estate portfolio.

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
    Terrablock`&apos;`s NFT holders will automatically receive TRB tokens on their wallet representing the rental income generated by the real estate portfolio in proportion to their investment. 

They will also benefit from exclusive advantages reserved for the Terrablock community.
    </p>
  </VerticalTimelineElement>
</VerticalTimeline>
                </></></>)}