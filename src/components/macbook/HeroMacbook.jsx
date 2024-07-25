import { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideoMacbook, smallHeroMacbookImg } from "../../utils";

function HeroMacbook() {
  useGSAP(() => {
    gsap.to("#hero", { opacity: 1, delay: 2.0 });
    gsap.to("#cta", { opacity: 1, y: 0, delay: 1.5 });
    gsap.to("#paragraf-hero", { opacity: 1, delay: 1.5 });
  }, []);
  return (
    <section className="w-full h-screen common-padding relative">
      <div className="screen-max-width">
        <div className="h-5/6 w-full flex-center flex-col">
          <p id="paragraf-hero" className="hero-title-macbook">
            MacBook Pro
          </p>
          <h1 id="hero" className="hero-title-max-macbook pb-10">
            Mind-blowing.<br></br> Head-turning.
          </h1>
          <div className="md:h-[350px]">
            <video
              className="pointer-events-none h-full w-full object-cover"
              autoPlay
              muted
              playsInline={true}
              key={heroVideoMacbook}
            >
              <source src={heroVideoMacbook} type="video/mp4" />
            </video>
          </div>
        </div>
        <div
          id="cta"
          className="flex flex-col items-center opacity-0 translate-y-20"
        >
          <a href="#highlights" className="btn">
            Buy
          </a>
          <p className="font-normal text-black text-xl">
            From $199/month or $999
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroMacbook;
