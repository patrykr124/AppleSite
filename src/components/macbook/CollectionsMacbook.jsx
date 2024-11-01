import {useGSAP} from "@gsap/react";
import React from "react";

import ProductsMacbook from "./ProductsMacbook";
import {animateWithGsap} from "../../utils/animations";

function CollectionsMacbook() {
    useGSAP(() => {
        animateWithGsap(".hiw-title-macbook-left", {
            opacity: 1,
            y: 0,
            ease: "power2.inOut",
            duration: 1,
        });
    }, []);

    return (
        <section className="common-padding bg-white" id="buy">
            <div className="screen-max-width ">
                <div className="text  mb-12 flex justify-center lg:justify-start">
                    <h2 className="hiw-title-macbook-left">Explore the lineup.</h2>
                </div>
                <div className="collection">
                    <ProductsMacbook/>
                </div>
            </div>
        </section>
    );
}

export default CollectionsMacbook;
