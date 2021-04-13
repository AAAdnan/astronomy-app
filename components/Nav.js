import React, { useState } from "react";
import Link from "next/link";
import { useAuth0 } from '@auth0/auth0-react';

const Nav = () => {

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
            <li className="ml-24 cursor-pointer">
                <button onClick={() => logout({ returnTo: window.location.origin })}>
                    <div className="flex items-center justify-center text-2xl">
                        <i className="fas fa-sign-out-alt"></i>
                    </div>
                    <div className="text-right mt-2 uppercase">Logout</div>
                </button>
            </li>
        )
    }

    const LoginButton = () => {
        return (
            <button onClick={() => loginWithRedirect()}>
                <li className="ml-24 uppercase cursor-pointer">
                    <div className="flex items-center justify-center text-2xl">
                        <i className="fas fa-sign-in-alt"></i>
                    </div>
                    <div className="text-right mt-2 uppercase">Login</div>
                </li>
            </button>
        )
    }

    const RegisterButton = () => {
        return (
            <button onClick={() => loginWithRedirect()}>
                <li className="ml-24 uppercase cursor-pointer">
                    <div className="flex items-center justify-center text-2xl">
                        <i className="fas fa-cash-register"></i>
                    </div>
                    <div className="text-right mt-2">Login</div>
                </li>
            </button>
        )
    }

    const AlbumButton = () => {
        return (
            <Link href="/album">
                <li className="ml-24 uppercase cursor-pointer">
                    <div className="flex items-center justify-center text-2xl">
                        <i class="fas fa-record-vinyl"></i>
                    </div>
                    <div className="text-right mt-2">Album</div>
                </li>
            </Link>
        )
    }

    const ToDoButton = () => {
        return (
            <Link href="/todo">
                <li className="ml-24 uppercase cursor-pointer">
                    <div className="flex items-center justify-center text-2xl">
                        <i class="fas fa-record-vinyl"></i>
                    </div>
                    <div className="text-right mt-2">Todo</div>
                </li>
            </Link>
        )
    }

    const UploadButton = () => {
        return (
            <Link href="/upload">
                <li className="ml-24 uppercase cursor-pointer">
                    <div className="flex items-center justify-center text-2xl">
                        <i class="fas fa-upload"></i>
                    </div>
                    <div className="text-right mt-2">Upload</div>
                </li>
            </Link>
        )
    }

    return(        
        <header className="w-full absolute left-0 top-0 p-16 z-10 overflow-hidden">
            <div className="flex justify-between text-white">
                <Link href="/">
                    <div className="text-4xl cursor-pointer">
                        <i className="fas fa-rocket"></i>
                    </div>
                </Link>
                <ul className="flex">
                <Link href="/photooftheday">
                    <li className="ml-24 uppercase cursor-pointer">
                        <div className="flex items-center justify-center text-2xl">
                                <i className="fas fa-camera "></i> 
                        </div>
                        <div className="text-right mt-2">Photo of the day</div>
                    </li>
                </Link>
                <Link href="/geolocation">
                    <li className="ml-24 uppercase cursor-pointer">
                        <div className="flex items-center justify-center text-2xl">
                            <i className="fas fa-globe-asia"></i>
                        </div>
                        <div className="text-right mt-2">Geolocation</div>
                    </li>
                </Link>
                {isAuthenticated && <UploadButton /> }
                {isAuthenticated && <AlbumButton /> }
                {isAuthenticated && <ToDoButton /> }
                {isAuthenticated ? <LogoutButton /> : <RegisterButton />}
                </ul>
            </div>
        </header>
    )
}

export default Nav
