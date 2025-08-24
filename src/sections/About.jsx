import { useEffect, useState } from "react";
import { Github, Linkedin, ExternalLink } from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    const el = document.getElementById("about-section");
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, []);

  const stats = [
    { number: "8+", label: "Years of Coding" },
    { number: "15+", label: "Technologies" },
  ];

  return (
    <section id="about" className="relative c-space pt-[calc(7vh+4rem)] md:pt-[calc(7vh+6rem)] pb-[5vh] md:pb-[5vh] md:w-screen md:relative md:left-1/2 md:right-1/2 md:-ml-[50vw] md:-mr-[50vw] md:px-6 scroll-mt-24 md:scroll-mt-28">

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-royal/20 rounded-full animate-float blur-xl"></div>
        <div className="absolute top-3/4 right-20 w-24 h-24 bg-lavender/20 rounded-full animate-float [animation-delay:2s] blur-lg"></div>
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-aqua/20 rounded-full animate-float [animation-delay:4s] blur-md"></div>
      </div>

      <div id="about-section" className="max-w-6xl mx-auto">
        {/* Section Header removed per request */}

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className={`space-y-8 transform transition-all duration-1000 ${isVisible ? 'animate-fade-in opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'} [animation-delay:200ms]`}>
            {/* Story */}
            <div className="space-y-6 group">
              <h3 className="text-3xl font-bold text-white mb-4 relative">
                My Journey
                <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-gold transition-all duration-500 group-hover:w-full"></div>
              </h3>
              <div className="space-y-4 text-lg text-neutral-400 leading-relaxed">
                <p className="transition-all duration-500 hover:text-white">
                  It all started when I was just in <span className="text-lavender font-semibold">6th grade</span>. While my friends were playing video games, I was fascinated by how they were made. That curiosity led me to write my first "Hello World" program, and I've been hooked ever since.
                </p>
                <p className="transition-all duration-500 hover:text-white [transition-delay:100ms]">
                  Today, as a <span className="text-lavender font-semibold">Software Engineering student</span>, I channel that same childhood wonder into creating seamless digital experiences. From winning hackathons to building innovative projects, every line of code I write is driven by that passion.
                </p>
                <p className="transition-all duration-500 hover:text-white [transition-delay:200ms]">
                  I believe in <span className="text-lavender font-semibold">learning by doing</span> — whether it's tackling complex algorithms on LeetCode, collaborating on GitHub projects, or pushing the boundaries in 48-hour hackathons.
                </p>
              </div>
            </div>

            {/* Philosophy */}
            <div className="bg-gradient-to-br from-storm to-indigo border border-white/10 rounded-xl p-6 shadow-card relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-royal/20 via-transparent to-royal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h4 className="text-xl font-semibold text-white mb-3 group-hover:animate-glow">My Philosophy</h4>
                <p className="text-neutral-300 italic">
                  "Great software isn't just about perfect code — it's about creating experiences that make people's lives better, one pixel at a time."
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Stats & Focus */}
          <div className={`space-y-8 transform transition-all duration-1000 ${isVisible ? 'animate-slide-in-right opacity-100 translate-x-0' : 'opacity-0 translate-x-10'} [animation-delay:400ms]`}>
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((s, i) => (
                <div key={s.label} className="bg-gradient-to-br from-storm to-indigo border border-white/10 rounded-xl p-6 text-center hover:shadow-gold transition-all duration-500 hover:scale-110 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-royal/10 via-lavender/10 to-aqua/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="text-3xl font-bold text-white mb-2 animate-glow">{s.number}</div>
                    <div className="text-sm text-neutral-400 uppercase tracking-wide">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Cards moved from Contact */}
            <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} transition-all duration-700 [transition-delay:300ms]`}>
              {/* GitHub Card */}
              <a
                href="https://github.com/Ranjit-Singh-Dhunna"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="group block relative"
              >
                <div className="bg-gradient-to-br from-storm via-indigo to-indigo/50 border border-white/10 rounded-2xl p-8 relative overflow-hidden transition-all duration-500 hover:scale-110 hover:shadow-gold">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 opacity-0 transition-opacity duration-500" />
                  <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                    <div className="p-4 rounded-full bg-royal/10">
                      <Github className="w-8 h-8 text-royal" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold text-white">GitHub</h3>
                      <p className="text-sm text-neutral-400">Check my repos</p>
                      <p className="text-xs text-neutral-400/80">@Ranjit-Singh-Dhunna</p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-neutral-400" />
                  </div>
                </div>
              </a>

              {/* LinkedIn Card */}
              <a
                href="https://www.linkedin.com/in/ranjit-singh-dhunna-772790307"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="group block relative"
              >
                <div className="bg-gradient-to-br from-storm via-indigo to-indigo/50 border border-white/10 rounded-2xl p-8 relative overflow-hidden transition-all duration-500 hover:scale-110 hover:shadow-gold">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 opacity-0 transition-opacity duration-500" />
                  <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                    <div className="p-4 rounded-full bg-royal/10">
                      <Linkedin className="w-8 h-8 text-royal" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold text-white">LinkedIn</h3>
                      <p className="text-sm text-neutral-400">Let's connect</p>
                      <p className="text-xs text-neutral-400/80">Ranjit Singh Dhunna</p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-neutral-400" />
                  </div>
                </div>
              </a>
            </div>

            {/* Current Focus removed per request */}

            {/* Fun Fact */}
            <div className="bg-gradient-to-br from-primary via-indigo to-primary border border-white/10 rounded-xl p-6 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-glow opacity-30"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-royal/10 via-lavender/20 to-royal/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h4 className="text-xl font-semibold text-white mb-3 group-hover:animate-glow">🎮 Fun Fact</h4>
                <p className="text-white">
                  When I'm not coding, you'll find me exploring pixel art, gaming, or experimenting with new tech trends. I believe creativity in one area fuels innovation in another!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
