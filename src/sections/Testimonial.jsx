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

// Add default glyph-style icons for soft skills (desktop display)
iconMap["Creativity"] =
  "data:image/svg+xml;utf8,\
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>\
  <path fill='%23FBBF24' d='M12 3a7 7 0 0 0-4.95 11.95V18a2 2 0 0 0 2 2h1v-3h2v3h1a2 2 0 0 0 2-2v-3.05A7 7 0 0 0 12 3z'/>\
</svg>";
iconMap["Adaptability"] =
  "data:image/svg+xml;utf8,\
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>\
  <rect width='24' height='24' fill='none'/>\
  <path fill='%232DD4BF' d='M3 12l4-4v3h10V8l4 4-4 4v-3H7v3l-4-4z'/>\
</svg>";
iconMap["Collaboration"] =
  "data:image/svg+xml;utf8,\
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>\
  <circle cx='8' cy='9' r='3.2' fill='%23A78BFA'/>\
  <circle cx='16' cy='9' r='3.2' fill='%23967CF2'/>\
  <path d='M4 20a4.5 4.5 0 0 1 4.5-4.5h7' fill='none' stroke='%23C4B5FD' stroke-width='2' stroke-linecap='round'/>\
  <path d='M20 20a4.5 4.5 0 0 0-4.5-4.5' fill='none' stroke='%23C4B5FD' stroke-width='2' stroke-linecap='round'/>\
</svg>";
iconMap["Communication"] =
  "data:image/svg+xml;utf8,\
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>\
  <rect x='2' y='4' width='20' height='14' rx='3' fill='%2360A5FA'/>\
  <path d='M8 18l-3 3' stroke='%2360A5FA' stroke-width='2' stroke-linecap='round'/>\
</svg>";
iconMap["Management"] =
  "data:image/svg+xml;utf8,\
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>\
  <rect x='3' y='7' width='18' height='12' rx='2' fill='%23FB923C'/>\
  <rect x='8' y='4' width='8' height='3' rx='1.5' fill='%23FDBA74'/>\
  <rect x='7' y='12' width='10' height='2' rx='1' fill='%23FED7AA'/>\
</svg>";
iconMap["Innovation"] =
  "data:image/svg+xml;utf8,\
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>\
  <path d='M12 2l5 9-5 2-5-2 5-9z' fill='%23F472B6'/>\
  <circle cx='12' cy='8' r='1.5' fill='%23FDF2F8'/>\
</svg>";
iconMap["Usability"] =
  "data:image/svg+xml;utf8,\
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>\
  <path d='M6 3l10 7-6 2 2 6-6-15z' fill='%2334D399'/>\
</svg>";

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
