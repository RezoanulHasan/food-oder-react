import { useState } from "react";
//import { Fade } from "react-awesome-reveal";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const AboutUs = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <section className="pt-16 md:pt-28 mb-10">
        <SectionTitle
          subHeading=" World wide First service"
          heading={<>About Us </>}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-center auto-cols-max uppercase">
          <div className="flex flex-col gap-3 px-3 py-8 my-bg rounded-md shadow-lg">
            <div className="text-3xl sm:text-4xl  text-orange-500 font-semibold">
              {counterOn && (
                <CountUp start={0} end={500} duration={2} delay={0} />
              )}
              +
            </div>
            Food Items
          </div>
          <div className="flex flex-col gap-3 px-3 py-8 my-bg rounded-md shadow-lg">
            <div className="text-3xl text-orange-500 sm:text-4xl font-semibold">
              {counterOn && (
                <CountUp start={0} end={2000} duration={2} delay={0} />
              )}
              +
            </div>
            Users
          </div>
          <div className="flex flex-col gap-3 px-3 py-8 my-bg rounded-md shadow-lg">
            <div className="text-3xl  text-orange-500 sm:text-4xl font-semibold">
              {counterOn && (
                <CountUp start={0} end={100} duration={2} delay={0} />
              )}
              +
            </div>
            Countries
          </div>
          <div className="flex flex-col gap-3 px-3 py-8 my-bg rounded-md shadow-lg">
            <div className="text-3xl  text-orange-500 sm:text-4xl font-semibold">
              {counterOn && (
                <CountUp start={0} end={50} duration={2} delay={0} />
              )}
            </div>
            Outlet
          </div>
        </div>
      </section>
    </ScrollTrigger>
  );
};

export default AboutUs;
