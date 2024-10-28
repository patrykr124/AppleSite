import {appleImg, bagImg, searchImg} from "../utils";
import {navLists} from "../constants";
import {Link} from "react-router-dom";
import {useRef} from "react";
import Bag from "./Bag";
import {useClientOutside} from "../hooks/useClickOutside";
import {useOpenBag} from "../context/OpenBagContext";
import useCartStore from "../context/cart.js";

function Navbar() {
    const {cartItems} = useCartStore();

    const bgRef = useRef();
    const imgRef = useRef();

    const {handleOpen} = useOpenBag();

    useClientOutside(bgRef, () => handleOpen(false), imgRef);

    return (<>
        <header className="w-full  py-5 sm:px-10 px-5 flex fixed bg-black justify-between items-center z-[100] ">
            <nav className="flex w-full screen-max-width">
                <a href="/">
                    <img src={appleImg} alt="apple" width={14} height={18}/>
                </a>
                <div className="flex flex-1 justify-center max-sm:hidden">
                    {navLists.map((nav) => (<Link
                        key={nav.id}
                        to={nav.path}
                        className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
                    >
                        {nav.name}
                    </Link>))}
                </div>
                <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
                    <img src={searchImg} alt="search" width={18} height={18}/>
                    <div  ref={imgRef} className="">
                        <img
                            className="cursor-pointer relative"
                            onClick={() => handleOpen()}
                            src={bagImg}
                            alt="bag"
                            width={18}
                            height={18}

                        />
                        <span  onClick={() => handleOpen()}
                              className="absolute w-4 h-4 text-[12px] rounded-full bg-white bottom-2 -right-2 text-black text-center flex justify-center items-center cursor-pointer">
                                    {cartItems.length}
                            </span>
                    </div>
                </div>
            </nav>
        </header>
        <Bag bgRef={bgRef}/>
    </>);
}

export default Navbar;
