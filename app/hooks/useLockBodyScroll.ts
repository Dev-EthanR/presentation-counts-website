import { useEffect } from "react";

const useLockBodyScroll = (isOpen: boolean): void => {
  useEffect(() => {
    const originalStyle: string = window.getComputedStyle(
      document.body,
    ).overflow;
    const originalPaddingRight: string = document.body.style.paddingRight;

    if (isOpen) {
      const scrollbarWidth: number =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = originalStyle;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, [isOpen]);
};

export default useLockBodyScroll;
