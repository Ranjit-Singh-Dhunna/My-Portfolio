import { Timeline } from "../components/Timeline";
import { experiences } from "../constants";
const Experiences = () => {
  return (
    <section
      id="work"
      className="c-space section-spacing md:w-screen md:relative md:left-1/2 md:right-1/2 md:-ml-[50vw] md:-mr-[50vw] md:px-6 pb-[5vh] md:pb-[5vh]"
    >
      <Timeline data={experiences} footerRevealStart={0.4} />
    </section>
  );
};

export default Experiences;
