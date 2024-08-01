import { useRef } from "react";
import {
  chipImg,
  frameImg,
  framemacbookImg,
  frameVideo,
  frameVideoMacbook,
} from "../../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { animateWithGsap } from "../../utils/animations";

function HowItWorksMacbook() {
  const videoRef = useRef();
  useGSAP(() => {
    animateWithGsap(".hiw-title-macbook", {
      opacity: 1,
      y: 0,
    });
    animateWithGsap(".hiw-subtitle", {
      opacity: 1,
      y: 0,
    });
    animateWithGsap(".hiw-text", {
      opacity: 1,
      y: 0,
    });
    animateWithGsap(".hiw-bigtext", {
      opacity: 1,
      y: 0,
    });
    
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div className="flex flex-col justify-center items-center ">
          <h2 className="hiw-title-macbook  ">
            Hardware-accelerated ray tracing.
          </h2>
          <p className="hiw-subtitle">
            It's the most powerful chip ever in a smartphone. And it shows.
          </p>
        </div>
        <div className=" relative flex flex-col flex-center h-full">
          <div className="overflow-hidden">
            <img
              src={framemacbookImg}
              alt="frameMacbook"
              className="bg-transparent relative z-10"
            />
          </div>
          <div className="hiw-video-macbook z-30">
            <video
              className="pointer-events-none"
              playsInline
              preload="none"
              muted
              autoPlay
              loop
              ref={videoRef}
            >
              <source src={frameVideoMacbook} type="video/mp4" />
            </video>
          </div>
        </div>

        <div className="hiw-text-container py-10">
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

export default HowItWorksMacbook;
