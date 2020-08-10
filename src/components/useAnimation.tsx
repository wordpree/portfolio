import { useState, useEffect } from "react";
import { throttle } from "throttle-debounce";

type Animation = [boolean, React.Dispatch<React.SetStateAction<boolean>>];

const useAnimation = (ref: React.RefObject<HTMLDivElement>): Animation => {
  const [animation, setAnimation] = useState(false);
  useEffect(() => {
    const handleScroll = throttle(250, () => {
      const topOfVp = ref.current && ref.current.getBoundingClientRect().top;
      if (topOfVp && topOfVp < 800) {
        setAnimation(true);
      }
    });
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ref]);

  return [animation, setAnimation];
};

export default useAnimation;
