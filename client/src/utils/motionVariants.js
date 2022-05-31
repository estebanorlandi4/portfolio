export const variants = {
  hidden: ({ x = 0, y = 0 }) => ({
    opacity: 0,
    y,
    x,
  }),
  visible: ({ delay = 0, duration = 0.5 }) => ({
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration,
      delay,
      type: 'spring',
    },
  }),
};

export const variantsSection = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.25,
    },
  },
};

export const motionSections = {
  viewport: { once: true },
  variants: variantsSection,
};
