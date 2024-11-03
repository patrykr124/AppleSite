import Filters from "./store/Filters.jsx";
import ButtonText from "./UI/Buttontext.jsx";

function FilterWall({handleOpenFilters, isFiltersOpen}) {
    return (
        <div
            className={`${isFiltersOpen ? "translate-x-0" : "translate-x-full"} z-[999] w-full transition-transform duration-300 ease-in-out lg:hidden bg-white shadow-xl fixed top-16 right-0  h-screen `}>
            <div className="flex flex-col gap-4 mt-10 justify-center items-center  ">
                <div onClick={handleOpenFilters}
                     className="close absolute text-black top-4 left-4 text-2xl cursor-pointer">X
                </div>
                <div className="">
                    <Filters/>
                    <ButtonText onClick={handleOpenFilters}>Szukaj</ButtonText>
                </div>
            </div>
        </div>
    );
}

export default FilterWall;