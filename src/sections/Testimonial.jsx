import Marquee from "../components/Marquee";

const iconMap = {
  // existing local icons
  "React": "/assets/logos/react.svg",
  "React.js": "/assets/logos/react.svg",
  "Tailwind": "/assets/logos/tailwindcss.svg",
  "Vite": "/assets/logos/vitejs.svg",

  // Devicon CDN icons per request
  "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  "JS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  "Java": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg",
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  "HTML": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg",
  "CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg",
  "JSON": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
  "Express": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
  "Express.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
  "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  "FastAPI": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-plain.svg",
  "GitHub": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  "VS Code": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
  "Eclipse": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eclipse/eclipse-original.svg",
};

// Decide card width based on label length
const widthForLabel = (label) => {
  const len = (label || "").length;
  const smallOverrides = new Set(["JavaScript", "JS", "GitHub", "Express.js"]);
  if (smallOverrides.has(label)) return "w-32 md:w-48";
  // Short labels e.g., "Git"
  if (len <= 4) return "w-36 md:w-56";
  // Medium labels e.g., "JavaScript", "MongoDB"
  if (len <= 9) return "w-48 md:w-64";
  // Long labels e.g., "Management", "Problem-Solving"
  return "w-60 md:w-80";
};

const SkillCard = ({ label }) => {
  const icon = iconMap[label] || null;
  const widthClass = widthForLabel(label);
  return (
    <figure className={`group relative h-16 md:h-28 ${widthClass} cursor-pointer overflow-hidden rounded-xl border p-3 md:p-6 border-gray-50/[.1] bg-gradient-to-r bg-indigo to-storm hover:bg-royal hover-animation transform-gpu transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.03] hover:rotate-[0.5deg] hover:shadow-xl hover:shadow-lavender/30 hover:border-white/20`}>
      {/* Sheen effect */}
      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:translate-x-full" />

      {/* Optional icon */}
      {icon && (
        <img
          src={icon}
          alt=""
          className="absolute top-2 left-2 md:top-3 md:left-3 h-5 w-5 md:h-8 md:w-8 opacity-70 transition duration-300 group-hover:opacity-100 group-hover:animate-pulse"
        />
      )}

      <div className="flex items-center justify-center w-full h-full">
        <figcaption className="text-sm md:text-lg font-medium text-white text-center transition-colors duration-300 group-hover:text-white">
          {label}
        </figcaption>
      </div>
    </figure>
  );
};

export default function Testimonial() {
  const skills = [
    
    "Vite",
    "React.js",
    "Tailwind",
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
    "Node.js",
    "Express.js",
  ];
  // Soft skills to hide on mobile
  const softSkills = new Set([
    "Creativity",
    "Adaptability",
    "Collaboration",
    "Communication",
    "Management",
    "Innovation",
    "Usability",
  ]);

  // Desktop: show all skills (icons optional)
  const midpointDesktop = Math.ceil(skills.length / 2);
  const firstRowDesktop = skills.slice(0, midpointDesktop);
  const secondRowDesktop = skills.slice(midpointDesktop);

  // Mobile: show only items that have icons and are not soft skills
  const mobileSkills = skills.filter((s) => Boolean(iconMap[s]) && !softSkills.has(s));
  const midpointMobile = Math.ceil(mobileSkills.length / 2);
  const firstRowMobile = mobileSkills.slice(0, midpointMobile);
  const secondRowMobile = mobileSkills.slice(midpointMobile);

  return (
    <div id="skills" className="c-space min-h-0 mt-0 pt-8 md:pt-12 pb-0 mb-0 overflow-hidden">
      <h2 className="text-heading">Skills</h2>
      {/* Mobile: only items with icons, soft skills hidden */}
      <div className="md:hidden relative flex flex-col items-center justify-center w-full mt-6 overflow-hidden">
        <Marquee pauseOnHover className="[--duration:14s]">
          {firstRowMobile.map((s) => (
            <div key={s} className="mx-2">
              <SkillCard label={s} />
            </div>
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:14s]">
          {secondRowMobile.map((s) => (
            <div key={s} className="mx-2">
              <SkillCard label={s} />
            </div>
          ))}
        </Marquee>
      </div>

      {/* Desktop: show all skills (text-only where no icon) */}
      <div className="hidden md:flex relative flex-col items-center justify-center w-full mt-6 overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRowDesktop.map((s) => (
            <div key={s} className="mx-2">
              <SkillCard label={s} />
            </div>
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRowDesktop.map((s) => (
            <div key={s} className="mx-2">
              <SkillCard label={s} />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
