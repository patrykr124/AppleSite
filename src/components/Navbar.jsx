import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex fixed bg-black justify-between items-center z-50">
      <nav className="flex w-full screen-max-width">
        <img src={appleImg} alt="apple" width={14} height={18} />
        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav) => (
            <Link
              key={nav.id}
              to={nav.path}
              className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
            >
              {nav.name}
            </Link>
          ))}
        </div>
        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <img src={searchImg} alt="search" width={18} height={18} />
          <img src={bagImg} alt="bag" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
