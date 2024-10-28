import React, { useState } from "react";

function Capacity() {
  const [selected, setSelected] = useState();

  function handleSelect(capacity) {
    setSelected(capacity);
  }

  const capacityData = [
    {
      id: 1,
      capacity: "128 GB",
      price: 499,
    },
    {
      id: 2,
      capacity: "256 GB",
      price: 699,
    },
    {
      id: 3,
      capacity: "512 GB",
      price: 799,
    },
    {
      id: 4,
      capacity: "1 TB",
      price: 1999,
    },
  ];
  return (
    <div className="gap-6 flex flex-col">
      <h3 className="feature-text-offanima ">
        <span className="text-black">Capacity.</span> How much memory do you
        need?
      </h3>
      <div className="boxs flex flex-col gap-4">
        {capacityData.map((capacity) => (
          <div
            onClick={() => handleSelect(capacity.id)}
            key={capacity.id}
            className={`capacity-container ${
              selected === capacity.id
                ? "bg-greyProduct border-blue border-[1px]"
                : "border-[1px] border-gray-500"
            }`}
          >
            <p>{capacity.capacity}</p>
            <p>From ${capacity.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Capacity;
