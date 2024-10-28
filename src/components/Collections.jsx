import React from "react";
import Products from "./Products";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { animateWithGsap } from "../utils/animations";

function Collections() {
  useGSAP(() => {
    animateWithGsap(".hiw-title-macbook-left", {
      opacity: 1,
      y: 0,
      ease: "power1.inOut",
      duration: 1,
    });
  }, []);

  return (
    <section id="buy" className="common-padding bg-white">
      <div className="screen-max-width ">
        <div className="text lg:mb-32 mb-12 flex justify-center lg:justify-start">
          <h2 className="hiw-title-macbook-left ">Explore the lineup.</h2>
        </div>
        <div className="collection">
          <Products />
        </div>
      </div>
    </section>
  );
}

export default Collections;
