import React, { useState } from "react";
import Link from "next/link";


const Nav = () => {
    return(        
        <header className="w-full absolute left-0 top-0 p-16">
            <div className="flex justify-between text-white">
                <div className="text-6xl">
                    <i class="fas fa-rocket"></i>
                </div>
                <ul className="flex">
                <Link href="/photooftheday">
                    <li className="ml-24 uppercase cursor-pointer">
                        <div className="flex items-center justify-center text-4xl">
                                <i class="fas fa-camera "></i> 
                        </div>
                        <div className="text-right mt-2">Photo of the day</div>
                    </li>
                </Link>
                <Link href="/photooftheday">
                    <li className="ml-24 uppercase">
                        <div className="flex items-center justify-center text-4xl">
                            <i class="fas fa-globe-asia"></i>
                        </div>
                        <div className="text-right mt-2">Find Me</div>
                    </li>
                </Link>
                <Link href="/photooftheday">
                    <li className="ml-24 uppercase">
                        <div className="flex items-center justify-center text-4xl">
                            <i class="fas fa-cash-register"></i>
                        </div>
                        <div className="text-right mt-2">Register</div>
                    </li>
                </Link>
                <Link href="/photooftheday">
                    <li className="ml-24 uppercase">
                        <div className="flex items-center justify-center text-4xl">
                            <i class="fas fa-sign-in-alt"></i>
                        </div>
                        <div className="text-right mt-2">Sign In</div>
                    </li>
                </Link>
                </ul>
            </div>
        </header>
    )
}

export default Nav
