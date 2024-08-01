import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { rightImg, watchImg } from "../utils";
import VideoCareousel from "./VideoCareousel";
import { animateWithGsap } from "../utils/animations";

gsap.registerPlugin(ScrollTrigger);

function Highlights() {
  useGSAP(() => {
    animateWithGsap("#title", { opacity: 1, y: 0 });

    animateWithGsap(".link", { opacity: 1, y: 0 });
  }, []);

  return (
    <section
      id="highlights"
      className="w-screen overflow-hidden h-full common-padding bg-zinc"
    >
      <div className="screen-max-width">
        <div className="mb-12 w-full items-end justify-between md:flex">
          <h1 id="title" className="section-heading">
            Get the highlights.
          </h1>
          <div className="flex flex-wrap items-end gap-5">
            <p className="link ">
              Watch the film <img src={watchImg} alt="watch" className="ml-2" />
            </p>
            <p className="link ">
              Watch the event{" "}
              <img src={rightImg} alt="right" className="ml-2" />
            </p>
          </div>
        </div>
        <VideoCareousel />
      </div>
    </section>
  );
}

export default Highlights;
