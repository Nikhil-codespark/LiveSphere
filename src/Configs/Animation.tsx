import { Variants } from "framer-motion";


// used in all common heading animation
export const headingVariants: Variants = {
  offscreen: {
    x: -50,
    y: -50,
    opacity: 0,
    transition: { duration: 0.6, ease: "easeInOut" }, // Animation duration
  },
  onscreen: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeInOut" }, // Animation duration
  },
};



// used in recent work
export const rwOneVariants: Variants = {
  offscreen: {
    x: 0,
    y: -100,
    clipPath: "inset(0 0 100% 0)", 
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.9, 
      ease: "easeInOut",
    },
  },
  onscreen: {
    x: 0,
    y: 0,
    clipPath: "inset(0 0 0 0)", 
    transition: {

      clipPath: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8, 
        ease: "easeInOut",
      },
    },
  },
};

export const rwTwoVariants: Variants = {
  offscreen: {
    scale: 1.1,
    clipPath: "inset(0 0 100% 100%)",
    transition: {
      type: "spring",
      bounce: 0.4,
      ease: "easeInOut",
      duration: 0.8, 
    },
  },
  onscreen: {
    scale: 1,
    clipPath: "inset(0 0 0 0)",
    transition: {
      scale: {
        type: "spring",
        bounce: 0.4,
        ease: "easeInOut",
        duration: 0.8, 
      },
      clipPath: {
        type: "spring",
        bounce: 0.4,
        ease: "easeInOut",
        duration: 0.6, 
      },
    },
  },
};

// services animation dynamically passed the duration 
export const servicesVariants = (
  scaleDuration = 0.8,
  pathDuration = 0.6
): Variants => ({
  offscreen: {
    scale: 1.1,
    clipPath: "inset(0 0 100% 100%)",
    transition: {
      type: "spring",
      bounce: 0.4,
      ease: "easeInOut",
      duration: 0.4,
    },
  },
  onscreen: {
    scale: 1,
    clipPath: "inset(0 0 0 0)",
    transition: {
      scale: {
        type: "spring",
        bounce: 0.4,
        ease: "easeInOut",
        duration: 0.4,
      },
      clipPath: {
        type: "spring",
        bounce: 0.4,
        ease: "easeInOut",
        duration: pathDuration,
      },
    },
  },
});


// initial={{ scale: 1.2 }} // Initially, clip the whole element
// whileInView={{
//   scale: 1,
// }}
// viewport={{ once: animationOnce }}
// transition={{ duration: 0.4, ease: "easeOut" }} // Animation duration
// style={{ transformOrigin: "top right" }}

// initial={{ clipPath: "inset(0 0 100% 100%)" }} // Initially, clip the whole element
// whileInView={{
//   clipPath: "inset(0 0 0 0)", // Reveal the element with no clipping
// }}
// viewport={{ once: animationOnce }}
// transition={{ duration: 0.6, ease: "easeIn" }} // Animation duration

// const target = useRef<HTMLDivElement>(null)
// const isIntersecting = useInView(target, {});

// console.log(isIntersecting);

// import { motion, Variants } from "framer-motion";
