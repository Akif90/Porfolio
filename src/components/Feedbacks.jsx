import {motion} from "framer-motion";

import {styles} from "../styles";
import {testimonials} from "../constants";
import {SectionWrapper} from "../hoc";
import {fadeIn, textVariant} from "../utils/motion";

const FeedbackCard = ({
  name,
  designation,
  image,
  company,
  testimonial,
  index,
}) => {
  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.1, 0.75)}
      className="w-full sm:w-[320px] bg-black-300 p-10  rounded-3xl "
    >
      <p className="text-white font-black text-[48px]">"</p>

      <div className="mt-1">
        <p className="text-white font-bold tracking-wider text-[18px]">
          {testimonial}
        </p>
        <div className="mt-7 justify-between items-center gap-1">
          <div className="flex-1 flex flex-col">
            <p className="text-white font-medium text-[16px]">
              <span className="blue-text-gradient">@</span>
              {name}
            </p>
            <p className="mt-1 text-secondary text-[12px]">
              {designation} of {company}
            </p>
          </div>

          <img
            src={image}
            alt={`FeedBack by ${name}`}
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
};

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black rounded-[20px]">
      <div
        className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText}`}>What others say</p>
          <h2 className={`${styles.sectionHeadText}`}>Testimonials</h2>
        </motion.div>
      </div>

      <div className={`${styles.paddingX} -mt-20 flex felx-wrap gap-10 pb-14`}>
        {testimonials.map((test, ind) => (
          <FeedbackCard
            key={test.name}
            testimonial={test.testimonial}
            index={ind}
            {...test}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks);
