import type { FunctionComponent } from "react";
import { motion } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "~/components/3d-card";
import SectionWrapper from "~/components/section-wrapper";
import { services } from "~/constants";
import styles from "~/constants/styles";
import cssModules from "./styles.module.css";

const textVariant = (delay = 0) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

const fadeIn = (
  direction: string,
  type: string,
  delay: number,
  duration: number,
) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

type Props = {
  index: number;
  service: (typeof services)[number]["service"];
  icon: (typeof services)[number]["icon"];
};

const ServiceCard: FunctionComponent<Props> = ({ index, service, icon }) => (
  <>
    {/* // <Tilt className="xs:w-[250px] w-full"> */}
    {/* <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="green-pink-gradient w-full rounded-[20px] p-[1px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px] px-12 py-5"
      >
        <img
          src={icon}
          alt="web-development"
          className="size-16 object-contain"
        />

        <h3 className="text-center text-[20px] font-bold text-white">
          {title}
        </h3>
      </div>
    </motion.div> */}
    {/* // </Tilt> */}
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      // className="green-pink-gradient w-full rounded-[20px] p-[1px] shadow-card"
    >
      <CardContainer
        className={`${cssModules.greenPinkGradient} w-full rounded-xl p-px`}
        containerClassName="transition-transform hover:scale-110"
      >
        <CardBody className="relative grid w-full place-items-center rounded-xl border border-black/[0.1] bg-gray-50 p-6 dark:border-white/[0.2] dark:bg-[#151030] dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]">
          <CardItem translateZ="100" className="mt-4">
            {/* <Image
      src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      height="1000"
      width="1000"
      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
      alt="thumbnail"
    /> */}
            <img
              src={icon}
              alt="web-development"
              className="size-16 object-contain"
            />
          </CardItem>
          <CardItem
            translateZ="100"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            {service}
          </CardItem>
        </CardBody>
      </CardContainer>
    </motion.div>
  </>
);

const About = () => (
  <SectionWrapper id="about">
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>

    <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className="mt-4 max-w-3xl text-[17px] leading-[30px] text-secondary-foreground"
    >
      I'm a skilled software developer with experience in TypeScript and
      JavaScript, and expertise in frameworks like React, Node.js, and Three.js.
      I'm a quick learner and collaborate closely with clients to create
      efficient, scalable, and user-friendly solutions that solve real-world
      problems. Let's work together to bring your ideas to life!
    </motion.p>

    <div className="mt-20 grid grid-cols-1 justify-center gap-10 md:grid-cols-2 lg:grid-cols-4">
      {services.map(({ icon, service }, index) => (
        <ServiceCard
          key={service}
          icon={icon}
          index={index}
          service={service}
        />
      ))}
    </div>
  </SectionWrapper>
);

export default About;
