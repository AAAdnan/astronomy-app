import React, { useState } from "react";
import Link from "next/link";
import { useAuth0 } from '@auth0/auth0-react';
import { Transition } from "@headlessui/react";
import { AnimatePresence, motion } from 'framer-motion'
import useSound from 'use-sound';
import spaceSound from '../public/space-sound.mp3'

const Nav = () => {

    const [isOpen, setIsOpen] = useState(false);

    const [play] = useSound(spaceSound);


    const svgVariants = {
        hidden: { rotate: -180 },
        visible: { 
          rotate: 0,
          transition: { duration: 1 }
        }
      }

    
    const pathVariants = {
        hidden: {
        opacity: 0,
        pathLength: 0
        },
        visible: {
        opacity: 1,
        pathLength: 1,
        transition: {
            duration: 2,
            ease: "easeInOut"
        }
        }
    }

    const {
        isLoading,
        isAuthenticated,
        error,
        user,
        loginWithRedirect,
        logout,
      } = useAuth0();


    const LogoutButton = () => {
        return (
                    <div onClick={() => logout({ returnTo: window.location.origin })}
                        className="cursor-pointer text-center text-red-200 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xs md:text-base font-medium">
                        <i className="fas fa-sign-out-alt text-white"></i>
                        <div className="uppercase">Logout</div>
                    </div>
        )
    }

    const RegisterButton = () => {
        return (
            <div
              onClick={() => loginWithRedirect()}
              className="md:pl-42 cursor-pointer text-center text-red-200 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xs md:text-base font-medium" 
            >
                    <i className="fas fa-cash-register fa-lg text-white"></i>
                    <div className="uppercase">Login</div>
            </div>
        )
    }

    const AlbumButton = () => {
        return (
            <Link href="/album">
                <div className="cursor-pointer text-center text-red-200 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xs md:text-base font-medium">
                    <i className="fas fa-record-vinyl fa-lg text-white"></i>
                    <div className="uppercase">Album</div>
                </div>
            </Link>
        )
    }

    const SearchButton = () => {
      return (
          <Link href="/search">
              <div className="cursor-pointer text-center text-red-200 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xs md:text-base font-medium">
                  <i className="fas fa-record-vinyl fa-lg text-white"></i>
                  <div className="uppercase">Search</div>
              </div>
          </Link>
      )
  }

    const UploadButton = () => {
        return (
            <Link href="/upload">
                <div className="cursor-pointer text-center text-red-200 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xs md:text-base font-medium">
                    <i className="fas fa-upload fa-lg text-white"></i>
                    <div className="uppercase">Upload</div>
                </div>
            </Link>
        )
    }

    const ProfileButton = () => {
      return (
          <Link href="/profile">
              <div className="cursor-pointer text-center text-red-200 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xs md:text-base font-medium">
                  <i className="fas fa-user fa-lg text-white"></i>
                  <div className="uppercase">Profile</div>
              </div>
          </Link>
      )
  }

    return(        
    <>
    <div>
      <nav className="bg-black pt-8 overscroll-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
                    <Link href="/">
                    <motion.div 
                        drag
                        dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
                        dragElastic={0.8}
                        onClick={play}
                        >
                        <i className="cursor-pointer fas fa-rocket fa-3x text-white hover:text-red-100"></i>
                    </motion.div>
                    </Link>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/photooftheday">
                    <div className="cursor-pointer text-center text-red-200 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium">
                    <i className="fas fa-camera fa-lg text-white"></i>
                    <div className="uppercase">Photo of the day</div>
                    </div>
                </Link>
                <Link href="/iss">
                    <div className="cursor-pointer text-center text-red-200 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium">
                    <i className="fas fa-globe-asia fa-lg text-white"></i>
                    <div className="uppercase">ISS</div>
                    </div>
                </Link>
                {isAuthenticated && <UploadButton /> }
                {isAuthenticated && <AlbumButton /> }
                {isAuthenticated && <SearchButton /> }
                {isAuthenticated && <ProfileButton /> }
                {isAuthenticated ? <LogoutButton /> : <RegisterButton />}
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="z-20 px-2 pt-1 pb-3 space-y-0 sm:px-3">
                <Link href="/photooftheday">
                    <div className="cursor-pointer text-center text-red-200 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xs font-medium">
                    <i className="fas fa-camera fa-lg text-white"></i>
                    <div className="uppercase">Photo of the day</div>
                    </div>
                </Link>
                <Link href="/iss">
                    <div className="cursor-pointer text-center text-red-200 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xs font-medium">
                    <i className="fas fa-globe-asia fa-lg text-white"></i>
                    <div className="uppercase">ISS</div>
                    </div>
                </Link>
                {isAuthenticated && <UploadButton /> }
                {isAuthenticated && <AlbumButton /> }
                {isAuthenticated && <SearchButton /> }
                {isAuthenticated ? <LogoutButton /> : <RegisterButton />}
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
    </>
    )
}

export default Nav
