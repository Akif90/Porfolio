import {Tilt} from "react-tilt";
import {motion} from "framer-motion";
import {styles} from "../styles";
import {services} from "../constants";
import {fadeIn} from "../utils/motion";
import {SectionWrapper} from "../hoc";

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] shadow-card rounded-[20px]"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white font-bold text-[20px] text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div>
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText}`}>Overview.</h2>
      </motion.div>

      <motion.p
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        variants={fadeIn("", "", 0.1, 1)}
      >
        I am skilled software engineer with experience in working with
        frameworks like react, express, nodeJs. I am interested in competitve
        programming. Currently learning web development by myself. Simultaneouly
        looking for a job so that I could become financially independent and
        learn how the real world works
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, ind) => (
          <ServiceCard key={service.title} index={ind} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
