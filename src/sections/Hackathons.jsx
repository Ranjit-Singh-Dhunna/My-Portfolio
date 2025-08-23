import { motion } from "motion/react";

const hacks = [
  {
    id: "conuhacks",
    title: "ConUHacks IX",
    subtitle: "Quebec's largest hackathon",
    timeframe: "24 hours",
    description:
      "An unforgettable whirlwind of building, problem‑solving, and teamwork. We tackled workplace stress and ambitiously tried to create a 2D shooter game in just 24 hours.",
    highlights: [
      "Developed core game mechanics & enemy AI",
      "Created custom pixel‑art assets",
      "Learned game physics, iterative design, and teamwork under pressure",
    ],
  },
  {
    id: "athack",
    title: "@Hack 2025 (AtHackCTF)",
    subtitle: "6th place finish out of 600+ teams",
    timeframe: "35+ hours",
    description:
      "Achieved 6th place after 35+ hours of non‑stop hacking and problem‑solving across multiple domains.",
    highlights: [
      "Solved 30+ challenges: web exploits, crypto, forensics, hardware, steganography",
      "Practiced persistence, collaboration, documentation, and methodical problem‑solving",
    ],
  },
];

function HackCard({ title, subtitle, timeframe, description, highlights }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="relative p-6 rounded-2xl bg-gradient-to-b from-storm to-indigo border border-white/10 hover:-translate-y-1 duration-200"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-2xl font-semibold">{title}</h3>
          {subtitle && (
            <p className="mt-1 text-sm text-neutral-300">{subtitle}</p>
          )}
        </div>
        {timeframe && (
          <span className="px-2 py-1 text-xs rounded-md bg-white/10 text-neutral-300 border border-white/10">
            {timeframe}
          </span>
        )}
      </div>
      <p className="mt-4 subtext">{description}</p>
      <ul className="mt-4 space-y-2 text-sm text-neutral-200 list-disc list-inside">
        {highlights.map((h, i) => (
          <li key={i}>{h}</li>
        ))}
      </ul>
    </motion.div>
  );
}

const Hackathons = () => {
  return (
    <section id="hackathon" className="relative c-space section-spacing">
      <h2 className="text-heading">Hackathons</h2>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />
      <div className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-2">
        {hacks.map((h) => (
          <HackCard key={h.id} {...h} />
        ))}
      </div>
    </section>
  );
};

export default Hackathons;
