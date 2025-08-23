import { Timeline } from "../components/Timeline";
import { hackathons } from "../constants";
// Hackathons uses the same Timeline design as Experience

const Hackathons = () => {
  return (
    <div className="w-full">
      <Timeline data={hackathons} title="Hackathons" />
    </div>
  );
};

export default Hackathons;
