import { useEffect } from "react";

export const useClientOutside = (ref, callback, ignoreRef) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        ignoreRef &&
        ignoreRef.current &&
        ignoreRef.current.contains(event.target)
      ) {
        return;
      }

      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback, ignoreRef]);
};
