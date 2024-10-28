import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {heroVideoMacbook, macbookMobileVideo} from "../../utils";
import {useEffect, useState} from "react";
import ButtonBuy from "../UI/ButtonBuy.jsx";

function HeroMacbook() {
    const [video,setVideo] = useState( window.innerWidth > 768 ? heroVideoMacbook : macbookMobileVideo );

    const videoDisplay = () => {
        if (window.innerWidth > 768){
            setVideo(heroVideoMacbook)
        } else {
            setVideo(macbookMobileVideo)
        }
    }

    useEffect(() => {
        window.addEventListener('resize', videoDisplay);

        return () => {
            window.removeEventListener('resize', videoDisplay);
        }
    },[])


    useGSAP(() => {
        gsap.to("#hero", {opacity: 1, delay: 1.5});
        gsap.to("#cta", {opacity: 1, y: 0, delay: 2});
        gsap.to("#paragraf-hero", {opacity: 1, delay: 2});
    }, []);
    return (
        <section className="w-full bg-white
     h-screen common-padding relative">
            <div className="screen-max-width">
                <div className="h-5/6 w-full flex-center flex-col">
                    <p id="paragraf-hero" className="hero-title-macbook">
                        MacBook Pro
                    </p>
                    <h1 id="hero" className="hero-title-max-macbook pb-10">
                        Mind-blowing.<br></br> Head-turning.
                    </h1>
                    <div className={`${video === macbookMobileVideo ? "md:w-10/12 w-9/12" : "md:h-[350px] w-screen" }  relative`}>
                        <video
                            className="pointer-events-none h-full w-full object-cover"
                            autoPlay
                            muted
                            playsInline={true}
                            key={video}
                        >
                            <source src={video} type="video/mp4"/>
                        </video>
                    </div>
                </div>
                <div
                    id="cta"
                    className="flex flex-col items-center opacity-0 translate-y-20"
                >
                    <ButtonBuy animation href="#buy"/>
                    <p className="font-normal text-black text-xl">
                        From $199/month or $999
                    </p>
                </div>
            </div>
        </section>
    );
}

export default HeroMacbook;
