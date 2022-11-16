export const image = {
  initial: { scale: 1.1 },
  animate: {
    scale: 1,
    transition: {
      duration: 1,
      delay: 1.6,
      type: "spring",
      damping: 300,
      stiffness: 800
    }
  }
}

export const splitText = {
  initial: { y: '100%' },
  animate: "visible",
  variants: {
    visible: i => ({
      y: 0,
      transition: {
        delay: 1.2 + (i * 0.1),
        duration: .5,
        type: "spring",
        damping: 100,
        stiffness: 400
      }
    })
  }
}

export const fromLiteflixx = {
  initial: { y: 80 },
  animate: {
    y: 0,
    transition: {
      duration: 1,
      delay: 1.6
    }
  }
}