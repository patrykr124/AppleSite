import React, { useState } from "react";
import { tabs } from "../../constants";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { animateWithGsap } from "../../utils/animations";
function Tabs() {
  const [position, setPosition] = useState(0);
  const [selectedTab, setSelectedTab] = useState(0);
  const [slide, setSlide] = useState(0);

  useGSAP(() => {
    animateWithGsap(".h2anim", {
      opacity: 1,
      y: 0,
    });
    animateWithGsap(".panim", {
      opacity: 1,
      y: 0,
    });
  }, []);

  function handleSelecttabs(index) {
    setSelectedTab(index);
    setSlide(index);
  }

  function moveRight() {
    setPosition((prev) => Math.min(tabs.length - 3, prev + 1));
  }

  function moveLeft() {
    setPosition((prev) => Math.max(0, prev - 1));
  }

  return (
    <section className="w-screen overflow-hidden h-full common-padding bg-zinc">
      <div className="screen-max-width flex flex-col gap-12 ">
        <div className="flex flex-col justify-center items-center">
          <h2 className="hiw-title-macbook h2anim  ">Amps up apps. </h2>
          <p className="hiw-subtitle panim">
            With thousands of apps optimized to unlock the full power of macOS
            and Apple silicon, M3 chips accelerate performance like never
            before. Now apps just soar — from your go-to productivity apps to
            your favorite games and hardest-working pro apps.
          </p>
        </div>
        <div className="flex items-center ">
          {tabs.map((tab, i) => (
            <div
              key={tab.id}
              className={`w-full flex transition-all duration-700 ease-in, ${
                slide === i ? "brightness-100" : " brightness-[0.3]"
              }`}
              style={{
                transform: `translateX(calc(50% - ${slide * 100}% - 50%))`,
              }}
            >
              <div className="relative w-screen flex items-center justify-center  ">
                <div className="flex-center rounded-3xl overflow-hidden bg-black ">
                  <img
                    src={tab.path}
                    alt={tab.title}
                    className=" object-cover "
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="tabsTitle flex flex-row justify-center items-center">
          <button className="p-2 z-50 " onClick={moveLeft}>
            <ChevronLeft />
          </button>

          <div className="flex w-[80%] overflow-hidden flex-col justify-center items-center border-b-[1px] border-r-[1px] border-l-[1px] border-neutral-800 ">
            <ul
              className="flex gap-12 w-full pb-4 transition-all duration-300 ease-in-out"
              style={{ transform: `translateX(-${position * 250}px)` }}
            >
              {tabs.map((tab, i) => {
                return (
                  <li
                    onClick={() => handleSelecttabs(i)}
                    key={i}
                    className={`text-3xl whitespace-nowrap ml-6 cursor-pointer ${
                      i === selectedTab ? "text-white" : "text-neutral-500"
                    }`}
                  >
                    {tab.title}
                  </li>
                );
              })}
            </ul>
          </div>
          <button className="p-2 z-50" onClick={moveRight}>
            <ChevronRight />
          </button>
        </div>
        <div className="desc flex flex-col justify-center items-center">
          {tabs.map((tab, i) => (
            <p
              key={i}
              className={`absolute transition-all  duration-700 ease-in text-neutral-500 max-w-xl text-center ${
                selectedTab === i ? "opacity-100" : "opacity-0"
              }`}
            >
              {tab.text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Tabs;
