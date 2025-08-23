import Marquee from "../components/Marquee";

const iconMap = {
  "React": "/assets/logos/react.svg",
  "React.js": "/assets/logos/react.svg",
  "Tailwind": "/assets/logos/tailwindcss.svg",
  "Vite": "/assets/logos/vitejs.svg",
};

const SkillCard = ({ label }) => {
  const icon = iconMap[label] || null;
  return (
    <figure className="group relative h-28 w-72 cursor-pointer overflow-hidden rounded-xl border p-6 border-gray-50/[.1] bg-gradient-to-r bg-indigo to-storm hover:bg-royal hover-animation transform-gpu transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.03] hover:rotate-[0.5deg] hover:shadow-xl hover:shadow-lavender/30 hover:border-white/20">
      {/* Sheen effect */}
      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:translate-x-full" />

      {/* Optional icon */}
      {icon && (
        <img
          src={icon}
          alt=""
          className="absolute top-3 left-3 h-5 w-5 opacity-70 transition duration-300 group-hover:opacity-100 group-hover:animate-pulse"
        />
      )}

      <div className="flex items-center justify-center w-full h-full">
        <figcaption className="text-sm font-medium text-white text-center transition-colors duration-300 group-hover:text-white">
          {label}
        </figcaption>
      </div>
    </figure>
  );
};

export default function Testimonial() {
  const skills = [
    "AI",
    "React",
    "Vite",
    "Tailwind",
    "Express",
    "JSON",
    "APIs",
    "GitHub",
    "Problem-Solving",
    "Creativity",
    "Adaptability",
    "Collaboration",
    "Communication",
    "Management",
    "Innovation",
    "Usability",
    "Java",
    "JavaScript",
    "Python",
    "HTML",
    "CSS",
    "Git",
    "Eclipse",
    "VS Code",
    "Cursor",
    "PyCharm",
    "BlueJ",
    "MongoDB",
    "React.js",
    "Node.js",
    "Express.js",
  ];
  const midpoint = Math.ceil(skills.length / 2);
  const firstRow = skills.slice(0, midpoint);
  const secondRow = skills.slice(midpoint);

  return (
    <div id="skills" className="c-space section-spacing">
      <h2 className="text-heading">Skills</h2>
      <div className="relative flex flex-col items-center justify-center w-full mt-12 overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((s) => (
            <div key={s} className="mx-2">
              <SkillCard label={s} />
            </div>
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((s) => (
            <div key={s} className="mx-2">
              <SkillCard label={s} />
            </div>
          ))}
        </Marquee>
        <div className="absolute inset-y-0 left-0 w-1/4 pointer-events-none bg-gradient-to-r from-primary"></div>
        <div className="absolute inset-y-0 right-0 w-1/4 pointer-events-none bg-gradient-to-l from-primary"></div>
      </div>
    </div>
  );
}
