import { useGSAP } from "@gsap/react";
import { m3Img, m3maxImg, m3maxproImg } from "../../utils";
import { animateWithGsap } from "../../utils/animations";

function FeaturesMacbook() {
  useGSAP(() => {
    animateWithGsap("#features_title", { opacity: 1, y: 0 });
    animateWithGsap(".g_text", {
      opacity: 1,
      y: 0,
      ease: "power2.inOut",
      duration: 1,
    });
  }, []);

  return (
    <section className="h-full common-padding bg-zinc relative overflow-hidden">
      <div className="screen-max-width">
        <div className="flex flex-col justify-center items-center overflow-hidden">
          <div className="mb-24">
            <h2
              id="features_title"
              className="translate-y-[100px] text-5xl lg:text-7xl font-semibold"
            >
              Three giant leaps.
            </h2>
          </div>
          <div className="flex w-full justify-center">
            <p className="feature-text-macbook  g_text ">
              Macbook pro is{" "}
              <span className="text-white">
                the first Macbook to featured an aerospace-grade titanium design
              </span>
              , using the same alloy that spacecrafts are made of. The result is
              a Macbook stronger, lighter, and more durable — yet
            </p>
          </div>
        </div>
        <div className="offer mt-32 mb-24">
          <div className="grid grid-cols-3 justify-center items-center ">
            <div className="flex flex-col justify-center items-center">
              <div className="box flex flex-col justify-center max-w-[250px]">
                <img src={m3Img} alt="m3" width={180} />
                <div className="desc text-[#43B9B9] flex flex-col gap-12 mt-10">
                  <p className="g_text text-xl md:text-3xl font-semibold">
                    8-core CPU{" "}
                  </p>
                  <p className="g_text text-xl md:text-3xl font-semibold">
                    10-core GPU{" "}
                  </p>
                  <p className="g_text text-xl md:text-3xl font-semibold">
                    Up to 24GB unified memory{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="box flex flex-col justify-center max-w-[250px]">
                <img src={m3maxproImg} alt="m3max" width={180} />
                <div className="desc text-[#2997FF] flex flex-col gap-12 mt-10">
                  <p className="g_text text-xl md:text-3xl  font-semibold">
                    8-core CPU{" "}
                  </p>
                  <p className="g_text text-xl md:text-3xl font-semibold">
                    10-core GPU{" "}
                  </p>
                  <p className="g_text text-xl md:text-3xl font-semibold">
                    Up to 24GB unified memory{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="box flex flex-col justify-center max-w-[250px]">
                <img src={m3maxImg} alt="m3maxpro" width={180} />
                <div className="desc text-[#A972FF] flex flex-col gap-12 mt-10">
                  <p className="g_text text-xl md:text-3xl font-semibold">
                    8-core CPU{" "}
                  </p>
                  <p className="g_text text-xl md:text-3xl font-semibold">
                    10-core GPU{" "}
                  </p>
                  <p className="g_text text-xl md:text-3xl font-semibold">
                    Up to 24GB unified memory{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesMacbook;
