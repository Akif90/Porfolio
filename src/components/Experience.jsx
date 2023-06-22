import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import {motion} from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import {styles} from "../styles";
import {experiences} from "../constants";
import {SectionWrapper} from "../hoc";
import {textVariant} from "../utils/motion";
-textVariant;

const ExperienceCard = ({experience}) => {
  return (
    <VerticalTimelineElement
      contentStyle={{background: "#1d1836", color: "#fff"}}
      contentArrowStyle={{borderRight: "7px solid #232631"}}
      date={experience.date}
      iconStyle={{background: experience.iconBg}}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            className="w-[60%] h-[60%] object-contain"
            src={experience.icon}
            alt={experience.company_name}
          />
        </div>
      }
    >
      <div>
        <h3 className="font-bold text-white text-[25px]">{experience.title}</h3>
        <p
          className="text-secondary font-semi-bold text-[19px]"
          style={{margin: 0}}
        >
          {experience.company_name}
        </p>

        <ul className="mt-5 list-disc ml-5 space-y-2 ">
          {experience.points.map((point, ind) => (
            <li
              className="text-white-100 text-[14px] pl-1 tracking-wider "
              key={`experience-point-${ind}`}
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div varirants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>What I have done so far?</p>
        <h2 className={`${styles.sectionHeadText}`}>Work Experience</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((exp, ind) => (
            <ExperienceCard key={ind} experience={exp} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
