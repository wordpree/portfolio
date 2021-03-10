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
  hidden: { x: 80, opacity: 0 },
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

export const cardArticleChild = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
      type: "spring",
      stiffness: 50,
      staggerChildren: 0.2,
    },
  },
};

export const cardArticleParent = {
  hidden: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
  visible: { transition: { staggerChildren: 0.1 } },
};

export const cardMediaVariants = {
  hidden: { x: 20, opacity: 0 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, type: "spring", delay: 0.3, stiffness: 50 },
  },
};

export const cardGesture = {
  hover: {
    scale: 1.03,
    transition: { stiffness: 20, type: "spring", duration: 0.1 },
  },
  tap: { scale: 0.99, transition: { stiffness: 20, dumping: 0.2 } },
};
