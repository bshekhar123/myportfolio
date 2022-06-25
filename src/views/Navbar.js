import React from 'react'
import {BtnPrimary} from '../styles/global'
import logo1 from '../img/logo1.png'
export const Navbar = () => {
    return (
        <div className="pt-5 px-3 sm:px-10 flex justify-between">
            <img src={logo1} alt="logo1" className="w-20 h-10 mt-2" />
        </div>
    )
}
