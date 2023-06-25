import {Tilt} from "react-tilt";
import {motion} from "framer-motion";
import {SectionWrapper} from "../hoc";
import {styles} from "../styles";
import {github} from "../assets";
import {projects} from "../constants";
import {fadeIn, textVariant} from "../utils/motion";

// Creating project cards

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.7)}>
      <Tilt
        options={{
          // Tilt property
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary w-full sm:w-[360px] p-5 rounded-2xl"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0  flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white text-bold text-[25px]">{name}</h3>
          <p className="text-secondary text-bold mt-2 text-[15px]">
            {description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-5">
          {tags.map((tag, ind) => (
            <h1 className={`${tag.color}`} key={tag.name}>{`#${tag.name}`}</h1>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div varirants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My Works.</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Followin projects demonstrate my skills in making web app and solving
          real world problem. Although I am new to this world and my projects
          might not be very promising in your eyes but let me assure you I am
          quite capable of producing results through my hard work and
          dedication.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((pro, ind) => (
          <ProjectCard index={ind} key={`project-${ind}`} {...pro} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
