import { useState, useEffect } from "react";
import { throttle } from "throttle-debounce";

type Animation = [boolean, React.Dispatch<React.SetStateAction<boolean>>];

const getAnimate = (ref: React.RefObject<HTMLDivElement>) => {
  if (ref && ref.current) {
    const eleTop = ref.current.getBoundingClientRect().top; //element top to viewport
    const eleHeight = ref.current.offsetHeight; //element height
    const height = window.innerHeight;
    return height - eleTop > eleHeight / 3;
  }
  return false;
};

const useAnimation = (ref: React.RefObject<HTMLDivElement>): Animation => {
  const [animation, setAnimation] = useState(false);
  useEffect(() => {
    const handleScroll = throttle(200, () =>
      setAnimation(() => getAnimate(ref))
    );
    setAnimation(() => getAnimate(ref));
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ref]);

  return [animation, setAnimation];
};

export default useAnimation;
