import { Timeline } from "../components/Timeline";
import { hackathons } from "../constants";
// Hackathons uses the same Timeline design as Experience

const Hackathons = () => {
  return (
    <section className="c-space mt-20 md:mt-30 md:w-screen md:relative md:left-1/2 md:right-1/2 md:-ml-[50vw] md:-mr-[50vw] md:px-6">
      <Timeline
        data={hackathons}
        title="Hackathons"
        footerText="more coming soon..."
        titleClassName="text-left"
        containerClassName=""
        contentClassName="c-space relative"
        firstItemTopPaddingClass="pt-6 md:pt-32"
        itemTopPaddingClass="pt-10 md:pt-40"
        footerRevealStart={0.4}
        lineEndOffset={6}
      />
    </section>
  );
};

export default Hackathons;
