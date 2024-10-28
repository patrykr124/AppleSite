import {useEffect, useState} from "react";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {heroVideo, smallHeroVideo} from "../utils";
import ButtonBuy from "./UI/ButtonBuy";

function Hero() {
    const [videoSrc, setVideoSrc] = useState(
        window.innerWidth > 768 ? heroVideo : smallHeroVideo
    );
    const handleVideoSrcSet = () => {
        if (window.innerWidth > 768) {
            setVideoSrc(heroVideo);
        } else {
            setVideoSrc(smallHeroVideo);
        }
    };

    useEffect(() => {
        window.addEventListener("resize", handleVideoSrcSet);

        return () => {
            window.removeEventListener("resize", handleVideoSrcSet);
        };
    }, []);

    useGSAP(() => {
        gsap.to("#hero", {opacity: 1, delay: 0.6});
        gsap.to("#cta", {opacity: 1, y: -50, delay: 1});
        gsap.to("#text", {opacity: 1, y: -50, delay: 1.8});
    }, []);
    return (
        <section className="w-full nav-height bg-black relative">
            <div className="h-5/6 w-full flex-center flex-col">
                <p id="hero" className="hero-title">
                    Iphone 15 pro
                </p>
                <div className="md:w-10/12 w-9/12">
                    <video
                        className="pointer-events-none"
                        autoPlay
                        muted
                        loop
                        playsInline={true}
                        key={videoSrc}
                    >
                        <source src={videoSrc} type="video/mp4"/>
                    </video>
                </div>
            </div>
            <ButtonBuy animation href="/store"/>
            <div className="flex flex-col items-center">
                <p id="text" className="font-normal text-xl opacity-0 translate-y-20">
                    From $199/month or $999
                </p>
            </div>
        </section>
    );
}

export default Hero;
