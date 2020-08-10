export const skillsBarVariants = (width: string) => ({
  hidden: { width: 0, opacity: 0 },
  visible: {
    width,
    opacity: 1,
    transition: {
      duration: 1.5,
      type: "spring",
      mass: 0.7,
      stiffness: 80,
    },
  },
});

export const skillsImgVariants = {
  hidden: { x: 350, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, mass: 0.5, delay: 0.75 },
  },
};

export const skillsParentVariants = {
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};
