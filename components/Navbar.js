import { Fragment } from 'react'
import Link from 'next/link';
import React, { useEffect, useState } from "react";
import { Popover, Transition } from '@headlessui/react'
import {
  MenuIcon,
  ChatAlt2Icon,
  UsersIcon,
  LinkIcon,
  XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { motion } from "framer-motion";

export default function Navbar() {
  
  const [clientWindowHeight, setClientWindowHeight] = useState("");

  const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);
  const [padding, setPadding] = useState(25);
  const [boxShadow, setBoxShadow] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    let backgroundTransparacyVar = clientWindowHeight / 600;

    if (backgroundTransparacyVar < 1) {
      let paddingVar = 25 - backgroundTransparacyVar * 20;
      let boxShadowVar = backgroundTransparacyVar * 0.1;
      setBackgroundTransparacy(backgroundTransparacyVar);
      setPadding(paddingVar);
      setBoxShadow(boxShadowVar);
    }
  }, [clientWindowHeight]);

const resources = [
  {
    name: 'Contact',
    href: 'contact',
    icon: ChatAlt2Icon,
  },
  {
    name: 'Team',
    href: 'team',
    icon: UsersIcon,
  },
  { 
    name: 'Socials',  
    href: '#socials', 
    icon: LinkIcon },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

/*export default function Navbar() {
  const router = useRouter();
  console.log(router.asPath);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  {
*/

  return (
    <Popover className="fixed w-full bg-black z-50" style={{
      background: `rgba(0, 0, 0, ${backgroundTransparacy})`,
      padding: `${padding}px 0px`,
      boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`,
    }}>
      <motion.div
      className="max-w-9xl mx-auto px-4 sm:px-6 border-hidden"
      layoutId="navbar">
      <div className="border-hidden">
        <div className="flex justify-between items-center border-hidden border-b-2 border-gray-100 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
          <span className="inline-flex items-center text-3xl font-medium text-white hover:text-emerald-400	"><a href="../#">TERRABLOCK</a></span>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-emerald-400 hover:text-emerald-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only ">Open menu</span>
              <MenuIcon className="h-6 w-6 " aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="xs:hidden md:flex space-x-10">                
            <a href="#about" className="inline-flex items-center text-1xl font-medium text-white hover:text-emerald-400	">
              ABOUT
            </a>
            <a href="#roadmap" className="inline-flex items-center text-1xl font-medium text-white hover:text-emerald-400	">
              ROADMAP
            </a>
            <a href="#" className="inline-flex items-center text-1xl font-medium text-white hover:text-emerald-400	">
              WHITE PAPER
            </a>

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-emerald-400	' : 'text-gray-500',
                      'group rounded-md inline-flex items-center text-base font-medium hover:text-emerald-400	 focus:outline-none focus:ring-2  focus:ring-emerald-400'
                    )}
                  >
                    <span className="inline-flex items-center text-1xl font-medium text-white hover:text-emerald-400">MORE</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5 group-hover:text-gray-500'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-fit sm:px-0">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-0.5 bg-white sm:gap-0.5 sm:p-3">
                          {resources.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="p-3 flex items-center rounded-lg hover:bg-black"
                            >
                              <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                              <div className="ml-4">
                                <p className="text-base font-medium text-emerald-400	">{item.name}</p>
                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </Popover.Group>
        </div>
      </div>
      </motion.div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
     <Popover.Panel focus className="relative top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="p-3 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="/navicon.png"
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-emerald-400 hover:text-emerald-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="relative grid gap-0.5 bg-white sm:gap-0.5 sm:p-3">
                {resources.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="p-3 flex items-center font-medium text-emerald-400 hover:text-gray-700"
                  >
                    <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                    <div className="ml-4">
                        <p className="text-base font-medium text-emerald-400	">{item.name}</p>
                        <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
};