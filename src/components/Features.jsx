import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { animateWithGsap } from "../utils/animations";
import { explore1Img, explore2Img, exploreVideo } from "../utils";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function Features() {
  gsap.registerPlugin(ScrollTrigger);
  const videoRef = useRef();
  useGSAP(() => {
    gsap.to("#exploreVideo", {
      scrollTrigger: {
        trigger: "#exploreVideo",
        start: "top 15%",
        end: "bottom top",
        scrub: 0.8,
        onEnter: () => {
          videoRef.current.play();
        },
        onLeave: () => {
          videoRef.current.pause();
        },
        onEnterBack: () => {
          videoRef.current.play();
        },
        onLeaveBack: () => {
          videoRef.current.pause();
        },
      },

      scale: 0.6,
    });
    animateWithGsap("#features_title", { opacity: 1, y: 0, delay: 0 });
    animateWithGsap(".animateText", { opacity: 1, y: 0,delay:0.2 });
    animateWithGsap(".animateTextSecond", { opacity: 1, y: 0,delay:0.4 });
    animateWithGsap(
      ".g_grow",
      { scale: 1.1, opacity: 1, ease: "power1.out" },
      { scrub: 1.5 }
    );
    animateWithGsap(".g_text", {
      opacity: 1,
      y: 0,
      ease: "power1.out",
      duration: 1,
    });
  }, []);

  return (
    <section className="h-full common-padding bg-zinc relative overflow-hidden">
      <div className="screen-max-width">
        <div className="mb-12 w-full">
          <h1 id="features_title" className="section-heading">
            Explore the full story.
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center overflow-hidden">
          <div className="mt-32 mb-24 pl-24">
            <h2 className="text-5xl lg:text-7xl font-semibold animateText">Iphone.</h2>
            <h2 className="text-5xl lg:text-7xl font-semibold animateTextSecond">
              Forged in titanium.
            </h2>
          </div>
        </div>
      </div>
      <div className="flex-center flex-col sm:px-10 ">
        <div className="relative w-screen h-[90vh] flex items-center">
          <video
            playsInline
            preload="none"
            muted
            autoPlay
            loop
            ref={videoRef}
            id="exploreVideo"
            className="w-full h-full object-cover object-center rounded-3xl"
          >
            <source src={exploreVideo} type="video/mp4" />
          </video>
        </div>
        <div className="flex flex-col w-full relative">
          <div className="screen-max-width">
            <div className="feature-video-container flex items-center justify-center">
              <div className="overflow-hidden flex flex-col md:flex-row h-[50%] rounded-3xl gap-6">
                <div className="box-img flex md:flex-1 overflow-hidden rounded-2xl">
                  <img
                    src={explore1Img}
                    alt="titanium"
                    className="feature-video g_grow "
                  />
                </div>
                <div className="box-img flex md:flex-1 overflow-hidden rounded-2xl">
                  <img
                    src={explore2Img}
                    alt="titanium2"
                    className="feature-video g_grow"
                  />
                </div>
              </div>
            </div>

            <div className="feature-text-container">
              <div className="flex-1 flex-center">
                <p className="feature-text g_text">
                  Iphone 15 pro is{" "}
                  <span className="text-white">
                    the first iphone to featured an aerospace-grade titanium
                    design
                  </span>
                  , using the same alloy that spacecrafts are made of. The
                  result is a phone stronger, lighter, and more durable — yet
                </p>
              </div>
              <div className="flex-1 flex-center">
                <p className="feature-text g_text">
                  Titanium has one of the best strength-to-weight ratios of any
                  metal, making these our{" "}
                  <span className="text-white">Lightest pro models ever.</span>
                  You will notice the difference the moment you pick them up.
                  yet
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
