import { MenuIcon, XIcon } from '@heroicons/react/solid'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../images/logo.png'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="flex justify-between items-center gap-10 px-10 md:px-20 py-6 relative">
            <Link to="/">
                <img className="text-white" width={'100'} src={logo} alt="" />
            </Link>
            <div onClick={() => setIsOpen(!isOpen)} className="h-7 w-7 md:hidden">
                {isOpen ? <XIcon /> : <MenuIcon />}
            </div>
            <div
                className={`w-full md:flex justify-between md:static absolute left-0 ease-in duration-100 ${
                    isOpen ? 'top-20 p-2 pl-5 mb-3 ' : '-top-[200px]'
                }`}
            >
                <input
                    className="p-1 pl-3 md:pr-24 rounded bg-transparent border-[1px] outline-none"
                    type="text"
                    name="search"
                    placeholder="🔍 Search your Destination..."
                />
                <ul className="flex flex-col gap-1 md:py-3 md:flex-row md:gap-24">
                    <li>
                        <Link to="/">News</Link>
                    </li>
                    <li>
                        <Link to="/">Destination</Link>
                    </li>
                    <li>
                        <Link to="/">Blog</Link>
                    </li>
                    <li>
                        <Link to="/">Contact</Link>
                    </li>
                </ul>
                <Link to="/">
                    <button className="py-3 px-7 text-black font-semibold bg-[#F9A51A] rounded-lg outline-none">
                        Login
                    </button>
                </Link>
            </div>
        </nav>
    )
}

export default Header
