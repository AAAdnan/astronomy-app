import React, { useState } from "react";

const Nav = () => {
    return(        
        <header className="w-full absolute left-0 top-0 p-16">
            <div className="flex justify-between text-white">
                <div>
                    <h1 className="text-3xl font-bold">Logo</h1>
                    <span>Connection is infinite</span>
                </div>
                <div>
                <ul className="flex">
                <li className="ml-24">
                    <a href="">
                    <div className="flex items-center justify-end">
                        <div className="w-10 border-b border-solid border-white"></div>
                        <h1 className="ml-3 text-3xl font-bold">1</h1>
                    </div>
                    <div className="text-right">Photo of the day</div>
                    </a>
                </li>
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
            </div>
        </header>
    )
}

export default Nav
