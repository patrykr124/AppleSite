import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import AllProductsStore from "../components/store/AllProductsStore";
import {animateWithGsap} from "../utils/animations";
import Filters from "../components/store/Filters";

gsap.registerPlugin(ScrollTrigger);

function Store() {


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
                <div className="filtersbox">
                    <Filters/>
                </div>
            </div>
            <div className="productsBox py-10">
                <AllProductsStore />
            </div>
        </section>
    );
}

export default Store;
