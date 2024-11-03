import {navLists} from "../constants/index.js";
import {Link} from "react-router-dom";

function MobileMenu({openMenu}) {
    return (
        <div
            className={`${openMenu ? 'translate-x-0 ' : 'translate-x-full  '} w-2/3 transition-transform duration-300 ease-in-out lg:hidden bg-black fixed  top-16 right-0  h-screen `}>
            <div className="flex flex-col gap-4 mt-10">
                {navLists.map((nav) => (<Link onClick={openMenu}
                                              key={nav.id}
                                              to={nav.path}
                                              className="px-5 text-xl cursor-pointer text-gray hover:text-white transition-all"
                >
                    {nav.name}
                </Link>))}
            </div>
        </div>
    );
}

export default MobileMenu;