import React, { useState } from "react";

function InchMacbook() {
  const [selected, setSelected] = useState();

  function handleSelect(inch) {
    setSelected(inch);
  }

  const inchData = [
    {
      id: 1,
      inch: "6.1 inc",
      price: 5999,
    },
    {
      id: 2,
      inch: "6.7 inc",
      price: 7199,
    },
  ];

  return (
    <div className="gap-6 flex flex-col">
      <h3 className="feature-text-offanima ">
        <span className="text-black">Model.</span> Which is best for you?
      </h3>
      <div className="boxs flex flex-col gap-4">
        {inchData.map((inch) => (
          <div
            onClick={() => handleSelect(inch.id)}
            key={inch.id}
            className={`capacity-container ${
              selected === inch.id
                ? "bg-greyProduct border-blue border-[1px]"
                : "border-[1px] border-gray-500"
            }`}
          >
            <p>{inch.inch}</p>
            <p>From {inch.price} PLN</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InchMacbook;
