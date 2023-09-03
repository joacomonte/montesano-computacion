/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

const useClickOutside = (ref: React.RefObject<HTMLElement>, callback: () => void) => {
  const handleClick = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [callback]);
};

export default useClickOutside;
