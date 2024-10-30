import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import AllProductsStore from "../components/store/AllProductsStore";
import {animateWithGsap} from "../utils/animations";
import Filters from "../components/store/Filters";
import FilterWall from "../components/FilterWall.jsx";
import {useState} from "react";

gsap.registerPlugin(ScrollTrigger);

function Store() {

    const [isFiltersOpen, setIsFiltersOpen] = useState(false);

    const handleOpenFilters = () => {
        setIsFiltersOpen(!isFiltersOpen);
    }


    useGSAP(() => {
        animateWithGsap("#store", {opacity: 1, y: 0});
    }, []);

    return (
        <section className="bg-white ">
            <div className="w-screen overflow-hidden common-padding-short ">
                <div className="screen-max-width  ">
                    <div className="mb-12 w-full items-end justify-between md:flex  ">
                        <h1 id="store" className="section-heading-black ">
                            Store. The best way to buy the products you love.
                        </h1>
                    </div>
                </div>
                <div className="filtersbox hidden md:block">
                    <Filters/>
                </div>
                <div onClick={handleOpenFilters} className="filtersbox sm:hidden flex justify-end cursor-pointer">
                    <div className="text-black text-xl bg-gray-50 w-fit px-2 py-1 rounded-xl">Filters</div>
                </div>
            </div>
            <div className="productsBox py-10 common-padding-shortNoTop ">
            <AllProductsStore />
            </div>
            <FilterWall setIsFiltersOpen={setIsFiltersOpen} isFiltersOpen={isFiltersOpen} handleOpenFilters={handleOpenFilters} />
        </section>
    );
}

export default Store;
