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
                    <li className="ml-24 uppercase">
                        <div className="flex items-center justify-end">
                            <div className="w-10 border-b border-solid border-white"></div>
                            <h1 className="ml-3 text-3xl font-bold">1</h1>
                        </div>
                        <div className="text-right">Photo of the day</div>
                    </li>
                </Link>
                <li className="ml-24">
                    <a href="">
                    <div className="flex items-center justify-end">
                        <div className="w-10 border-b border-solid border-white"></div>
                        <h1 className="ml-3 text-3xl font-bold">2</h1>
                    </div>
                    <div className="text-right">Find Me</div>
                    </a>
                </li>
                <li className="ml-24">
                    <a href="">
                    <div className="flex items-center justify-end">
                        <div className="w-10 border-b border-solid border-white"></div>
                        <h1 className="ml-3 text-3xl font-bold">3</h1>
                    </div>
                    <div className="text-right">Register</div>
                    </a>
                </li>

                <li className="ml-24">
                    <a href="">
                    <div className="flex items-center justify-end">
                        <div className="w-10 border-b border-solid border-white"></div>
                        <h1 className="ml-3 text-3xl font-bold">4</h1>
                    </div>
                    <div className="text-right">Sign In</div>
                    </a>
                </li>
                </ul>
            </div>
        </header>
    )
}

export default Nav
