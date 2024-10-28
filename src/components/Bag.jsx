
import ItemBag from "./ItemBag";
import { useOpenBag } from "../context/OpenBagContext";

function Bag({ bgRef }) {
  const { open } = useOpenBag();

  return (
    <>
      <div
        className={`bagbox fixed  top-0 w-screen h-screen z-50  transform transition-transform duration-300 ${
          open ? "translate-x-0" : " translate-x-full"
        } `}
      >
        <div className="flex justify-end z-[50]">
          <div
            ref={bgRef}
            className="xl:w-1/3 md:w-[50vw] shadow-2xl w-screen h-screen bg-white flex flex-col justify-center items-center "
          >
            <div className="h-full relative w-full overflow-y-auto py-8 flex flex-col">
              <ItemBag  />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`w-screen fixed h-screen backdrop-blur-md transform transition-all duration-500 ${
          open ? "opacity-100 z-20" : "opacity-0 -z-50"
        }  `}
      ></div>
    </>
  );
}

export default Bag;
