import { motion } from "framer-motion";
import ComputersCanvas from "~/components/three/canvas/computer";
import styles from "~/constants/styles";
import cssModules from "./styles.module.css";

const Hero = () => (
  <section className={`relative mx-auto h-screen w-full`}>
    <div
      className={`absolute inset-0 top-[120px] mx-auto max-w-7xl ${styles.paddingX} flex flex-row items-start gap-5`}
    >
      <div className="mt-5 flex flex-col items-center justify-center">
        <div className="size-5 rounded-full bg-[#915EFF]" />
        <div className={`${cssModules.violetGradient} h-40 w-1 sm:h-80`} />
      </div>

      <div>
        <h1 className={`${styles.heroHeadText} `}>
          Hi, I'm <span className="text-[#915EFF]">David</span>
        </h1>
        <p className={`${styles.heroSubText} mt-2`}>
          I'm a fullstack developer who writes flexible code and delivers
          products. I started coding in 2009. I have been devoting the bulk of
          my professional time to programming since 2016. I can write Java,
          JavaScript, Python and C#. I am also a specialist on JS monorepos.
        </p>
      </div>
    </div>

    <ComputersCanvas />

    <div className="xs:bottom-10 absolute bottom-32 flex w-full items-center justify-center">
      <a href="#about" role="button">
        <span className="sr-only">About me</span>
        <div className="flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 border-muted-foreground p-2">
          <motion.div
            animate={{
              y: [0, 24, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="mb-1 size-3 rounded-full bg-muted-foreground"
          />
        </div>
      </a>
    </div>
  </section>
);

export default Hero;
