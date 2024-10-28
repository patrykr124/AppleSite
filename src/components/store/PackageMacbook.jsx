import React from "react";

function PackageMacbook() {
  return (
    <div className="flex flex-col justify-center items-center mt-20 gap-10  ">
      <h3 className="text-black product-title">Package Contents</h3>
      <div className="flex  h-[400px] bg-grey w-full rounded-2xl overflow-hidden justify-center items-center">
        <img src="/assets/images/macbookPackage.png" alt="macbook" />
      </div>
      <div className="desc">
        <h4 className="hiw-subtitle-offanimation text-black">
          Apple's environmental credentials.
        </h4>
        <p className="hiw-text-small text-center">
          To help us achieve carbon neutrality by 2030, iPhone 15 Pro and iPhone
          15 Pro Max are sold without a power adapter or EarPods. In the box,
          you'll find a fast-charging USB-C cable that's compatible with USB-C
          power adapters and computer ports. We encourage you to use any
          compatible USB-C power adapter. If you need a new power adapter or new
          Apple headphones, you can purchase them.
        </p>
      </div>
      <div className="add mt-10 gap-10 flex flex-col justify-center items-center">
        <h3 className="text-black product-title max-w-sm">
          Your new iPhone. And so much more.
        </h3>
        <div className="grid grid-cols-4 gap-4">
          <div className="box col-start-2 items-center flex flex-col gap-4">
            <img className="w-[80px]" src="/assets/images/tv.jpg" alt="box1" />
            <p className="hiw-subtitle-shortoff  text-black">Apple TV+ </p>
            <p className="hiw-text-small text-center">
              3 months of free original movies and series that will completely
              absorb you°°.
            </p>
          </div>

          <div className="box col-end-4 items-center flex flex-col gap-4">
            <img
              className="w-[80px]"
              src="/assets/images/arcade.jpg"
              alt="box1"
            />
            <p className="hiw-subtitle-shortoff  text-black">Apple TV+ </p>
            <p className="hiw-text-small text-center">
              3 months of free original movies and series that will completely
              absorb you°°.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PackageMacbook;
