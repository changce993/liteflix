export const wrapper = {
  initial: { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" },
  animate: {
    clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 0%)",
    transition: {
      duration: .5,
      delay: 1.5,
    }
  }
}

export const container = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.05
    }
  }
}

export const item = {
  hidden: {},
  visible: {
    opacity: [0, .25, .5, .75, 1, .75, .5, .25, 0],
    duration: 1
  }
}
