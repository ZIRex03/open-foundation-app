import { useRef, useCallback } from "react";

export const useHorizontalScroll = () => {
  const ref = useRef<HTMLDivElement>(null);

  const handleWheel = useCallback((e: React.WheelEvent) => {
    if (ref.current) {
      e.preventDefault();
      ref.current.scrollLeft += e.deltaY;
    }
  }, []);

  return {
    ref,
    onWheel: handleWheel,
  };
};
