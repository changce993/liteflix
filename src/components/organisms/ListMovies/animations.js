export const container = {
  hidden: { opacity: 1},
  visible: { opacity: 1 }
};

export const item = {
  hidden: { y: 40, opacity: 0, scale: 1.1  },
  visible: i => ({
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      delay: 1.2 + (i * 0.15),
      duration: .3,
      type: "spring",
      damping: 10,
      stiffness: 60
    }
  }),
};