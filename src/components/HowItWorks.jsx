import React, { useRef } from "react";
import { chipImg, frameImg, frameVideo } from "../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { animateWithGsap } from "../utils/animations";

function HowItWorks() {
  const videoRef = useRef();
  useGSAP(() => {
    gsap.from("#chip", {
      scrollTrigger: {
        trigger: "#chip",
        start: "20% bottom",
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: "power2.out",
    });

    animateWithGsap(".a_text", {
      opacity: 1,
      y: 0,
      ease: "power2.inOut",
      duration: 1,
    });
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div id="chip" className="flex-center w-full my-20">
          <img src={chipImg} alt="chip" width={180} height={180} />
        </div>
        <div className="flex flex-col items-center">
          <h2 className="hiw-title">
            A17 Pro Chip.
            <br></br> A monster win for gaming.
          </h2>
          <p className="hiw-subtitle">
            It's the most powerful chip ever in a smartphone. And it shows.
          </p>
        </div>
        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-full flex-center">
            <div className="overflow-hidden">
              <img
                src={frameImg}
                alt="frame"
                className="bg-transparent relative z-10"
              />
            </div>
            <div className="hiw-video">
              <video
                className="pointer-events-none"
                playsInline
                preload="none"
                muted
                autoPlay
                loop
                ref={videoRef}
              >
                <source src={frameVideo} type="video/mp4" />
              </video>
            </div>
          </div>
          <p className="text-gray font-semibold text-center mt-3">
            Honkai: Star Reil
          </p>
        </div>
        <div className="hiw-text-container">
          <div className="flex-1 flex justify-center flex-col ">
            <p className="hiw-text feature-text a_text">
              A17 Pro is an entirely new class of Iphone chip that delivers our{" "}
              <span className="text-white">Lightest Pro models ever.</span>,
              using the same alloy that spacecrafts are made of. The result is a
              phone that's stronger, lighter, and more durable — yet
            </p>

            <p className="hiw-text feature-text a_text">
              Mobile {""}
              <span className="text-white">games </span>
              with incredibly detailed environments and characters.
            </p>
          </div>

          <div className="flex-1 flex justify-center flex-col a_text">
            <p className="hiw-text feature-text a_text">New</p>
            <p className="hiw-bigtext feature-text a_text">pro-class GPU</p>
            <p className="hiw-text mt-2 md:mt-4 feature-text a_text">
              with 6 cores
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
