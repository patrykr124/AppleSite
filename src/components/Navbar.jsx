import {appleImg, bagImg} from "../utils";
import {navLists} from "../constants";
import {Link, NavLink, useParams} from "react-router-dom";
import {useRef, useState} from "react";
import Bag from "./Bag";
import {useClientOutside} from "../hooks/useClickOutside";
import {useOpenBag} from "../context/OpenBagContext";
import useCartStore from "../context/cart.js";
import MobileMenu from "./MobileMenu.jsx";

function Navbar() {
    const params = useParams()
    const {cartItems} = useCartStore();
    const [openMenu, setOpenMenu] = useState(false);
    const {handleOpen, open} = useOpenBag();
    const bgRef = useRef();
    const imgRef = useRef();

    console.log(params)


    const handleOpenMenu = () => {
        setOpenMenu(openMenu => !openMenu);
        if (!openMenu) handleOpen(false);
    }

    const handleOpenBag= () => {
        handleOpen(!open);
        if (!open) setOpenMenu(false);
    }


    useClientOutside(bgRef, () => handleOpen(false), imgRef);

    return (
        <div className="relative">
            <header className="w-full  py-5 sm:px-10 px-5 flex fixed bg-black justify-between items-center z-[200] ">
                <nav className="flex items-center w-full gap-6 lg:gap-0 screen-max-width ">
                    <a href="/">
                        <img src={appleImg} alt="apple" width={14} height={18}/>
                    </a>

                    <div className="flex flex-1 justify-center max-sm:hidden">
                        {navLists.map((nav) => (<NavLink
                            key={nav.id}
                            to={nav.path}
                            className={({ isActive }) =>
                                `px-5 text-sm cursor-pointer text-gray hover:text-white transition-all ${isActive ? 'text-white' : ''}`
                            }
                        >
                            {nav.name}
                        </NavLink>))}
                    </div>

                    <div className="flex items-baseline gap-6 max-sm:justify-end max-sm:flex-1">

                        <div ref={imgRef} className="">
                            <img
                                className="cursor-pointer relative"
                                onClick={handleOpenBag}
                                src={bagImg}
                                alt="bag"
                                width={18}
                                height={18}

                            />
                            <span onClick={handleOpenBag}
                                  className="absolute w-4 h-4 text-[12px] rounded-full bg-white bottom-4 lg:bottom-2 right-12 lg:-right-2 text-black text-center flex justify-center items-center cursor-pointer">
                                    {cartItems.length}
                            </span>
                        </div>

                    </div>
                    <div className="mobileMenu md:hidden">
                        <label className="hamburger">
                            <input type="checkbox"
                                   checked={openMenu}
                                   onChange={handleOpenMenu}/>
                            <svg viewBox="0 0 32 32">
                                <path className="line line-top-bottom"
                                      d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                                <path className="line" d="M7 16 27 16"></path>
                            </svg>
                        </label>
                    </div>
                </nav>
                <MobileMenu openMenu={openMenu}/>
            </header>
            <Bag bgRef={bgRef}/>
        </div>);
}

export default Navbar;
