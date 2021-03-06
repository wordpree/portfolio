import { useState, useEffect } from "react";
import { throttle } from "throttle-debounce";

type Animation = [boolean, React.Dispatch<React.SetStateAction<boolean>>];

const useAnimation = (ref: React.RefObject<HTMLDivElement>): Animation => {
  const [animation, setAnimation] = useState(false);
  useEffect(() => {
    const handleScroll = throttle(200, () => {
      if (ref && ref.current) {
        const eleTop = ref.current.getBoundingClientRect().top;
        const eleHeight = ref.current.offsetHeight;
        const height = window.innerHeight;
        setAnimation(height - eleTop > eleHeight / 3);
      } else {
        setAnimation(false);
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
