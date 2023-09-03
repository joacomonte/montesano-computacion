/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, RefObject } from 'react';

interface WithNodeMethod {
  node: () => HTMLElement | null;
}

function useOutsideClick(ref: RefObject<HTMLElement | WithNodeMethod>, callback: () => void): void {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
        if (!ref.current) return;  // Add this line to exit early if ref.current is null
      
        let node: HTMLElement | null;
      
        if ("node" in ref.current) {
          node = ref.current.node();
        } else {
          node = ref.current as HTMLElement;
        }
      
        if (node && !node.contains(event.target as Node)) {
          callback();
        }
      }
      

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [callback]);
}

export default useOutsideClick;
