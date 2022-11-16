export const container = {
  initial: {
    y: -80
  },
  animate: {
    y: 0,
    transition: {
      delay: 1.8,
      duration: .3,
      type: "spring",
      damping: 10,
      stiffness: 60
    }
  }
}