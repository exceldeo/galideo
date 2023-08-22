import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import FrameworkCard from "../../Cards/FrameworkCard";

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

interface ParallaxProps {
  data: Array<any>;
  baseVelocity?: number;
}

export function ParallaxCardTools({ data, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollX } = useScroll();
  const scrollVelocity = useVelocity(scrollX);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 300,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });
  const x = useTransform(baseX, (v) => `${wrap(0, -100, v)}%`);
  const directionFactor = useRef<number>(1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }
    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax overflow-hidden w-full flex flex-row relative ">
      <motion.div className="scroller flex space-x-2" style={{ x }}>
        {data.map((item, i) => {
          return (
            <motion.span key={i}>
              <FrameworkCard
                title={item.title}
                logo="/images/hero.png"
                description={"1" + " " + i}
              />
            </motion.span>
          );
        })}
      </motion.div>
      <motion.div className="scroller flex space-x-2 ml-2" style={{ x }}>
        {data.map((item, i) => {
          return (
            <motion.span key={i}>
              <FrameworkCard
                title={item.title}
                logo="/images/hero.png"
                description={"1" + " " + i}
              />
            </motion.span>
          );
        })}
      </motion.div>
    </div>
  );
}
