import { Timeline } from "../components/Timeline";
import { hackathons } from "../constants";
// Hackathons uses the same Timeline design as Experience

const Hackathons = () => {
  return (
    <section id="hackathons" className="py-0 md:py-0 px-0 md:px-0 md:w-screen md:relative md:left-1/2 md:right-1/2 md:-ml-[50vw] md:-mr-[50vw] scroll-mt-24 md:scroll-mt-28">
      <Timeline
        data={hackathons}
        title="Hackathons"
        footerText="more coming soon..."
      />
    </section>
  );
};

export default Hackathons;
