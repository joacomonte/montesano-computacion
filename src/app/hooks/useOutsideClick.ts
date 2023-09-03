import { useEffect, useState, RefObject } from "react";

interface WithNodeMethod {
  getMenuNode: () => HTMLElement | null;
}

function useOutsideClick(ref: RefObject<WithNodeMethod>): boolean {
  const [isClickedOutside, setIsClickedOutside] = useState<boolean>(false);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      let node = ref.current?.getMenuNode();

      if (node && !node.contains(event.target as Node)) {
        setIsClickedOutside(true);
      } else {
        setIsClickedOutside(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref]);

  return isClickedOutside;
}

export default useOutsideClick;
