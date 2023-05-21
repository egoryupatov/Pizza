import { RefObject, useEffect } from "react";

export const useOnClickOutside = (
  ref: RefObject<any>,
  handler: () => void
): void => {
  useEffect(() => {
    if (localStorage.getItem("city")) {
      const listener = (event: MouseEvent | TouchEvent): void => {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler();
      };
      document.addEventListener("mousedown", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
      };
    }
  }, [ref, handler]);
};
