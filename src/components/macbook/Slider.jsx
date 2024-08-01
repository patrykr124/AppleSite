import gsap from "gsap";
import { animateWithGsap } from "../../utils/animations";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { imagesSlider } from "../../constants";

gsap.registerPlugin(ScrollTrigger);

function Slider() {
  const [currentImage, setCurrentImage] = useState(0);

  function nextImage() {
    setCurrentImage((prev) =>
      prev === imagesSlider.length - 1 ? 0 : prev + 1
    );
  }

  function prevImage() {
    setCurrentImage((prev) =>
      prev === 0 ? imagesSlider.length - 1 : prev - 1
    );
  }

  useGSAP(() => {
    animateWithGsap("#h1", { opacity: 1, y: 0 });
  }, []);

  return (
    <section className="w-screen overflow-hidden h-full common-padding bg-white">
      <div className="screen-max-width">
        <div className="mb-12 w-full items-end justify-between md:flex">
          <h1 id="h1" className="section-heading-black">
            Get the highlights.
          </h1>
        </div>
        <div className="sliderDiv my-28 flex flex-col justify-center items-center">
          <div className="slider relative w-full h-[550px] overflow-hidden flex flex-col justify-center items-center">
            {imagesSlider.map((images, index) => {
              return (
                <div
                  key={index}
                  className="absolute top-0 bottom-0 flex flex-col justify-between"
                >
                  <img
                    src={images.path}
                    alt="slider"
                    className={`sliderImg transition-opacity w-full h-full object-cover duration-700 ease-in-out  ${
                      index === currentImage ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  <p
                    className={`font-normal text-black mt-20  text-md flex justify-center ${
                      index === currentImage ? "opacity-100" : "opacity-0 "
                    }`}
                  >
                    {images.title}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="flex w-fit p-1 rounded-full justify-center items-center bg-neutral-200/60 shadow-inner mt-4">
            <div className="buttons flex justify-center items-center">
              <button
                onClick={prevImage}
                className="mr-6 hover:bg-neutral-200 rounded-full transition-all duration-150 p-3 "
              >
                <ChevronLeft color="black" />
              </button>
              <div className=" flex gap-4">
                {imagesSlider.map((images, index) => {
                  return (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full  ${
                        index === currentImage ? "bg-black" : "bg-gray-300"
                      }`}
                    ></button>
                  );
                })}
              </div>
              <button
                onClick={nextImage}
                className="ml-6 hover:bg-neutral-200 rounded-full transition-all duration-150 p-3"
              >
                <ChevronRight color="black" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Slider;
