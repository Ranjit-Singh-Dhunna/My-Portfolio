import { useEffect, useState } from "react";
import { Mail, Github, Linkedin, Code, ExternalLink, Sparkles } from "lucide-react";

const Contact = () => {
  const [hovered, setHovered] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    const el = document.getElementById("contact-section");
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, []);

  const socialLinks = [];

  return (
    <section id="contact" className="relative c-space pt-16 md:pt-24 md:w-screen md:left-1/2 md:right-1/2 md:-ml-[50vw] md:-mr-[50vw] md:px-6 scroll-mt-24 md:scroll-mt-28 pb-[5vh] md:pb-[5vh]">
      {/* Background floaters */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/4 w-56 h-56 bg-royal/10 rounded-full animate-float blur-2xl" />
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-lavender/10 rounded-full animate-float [animation-delay:3s] blur-xl" />
        <div className="absolute top-2/3 left-1/2 w-28 h-28 bg-aqua/10 rounded-full animate-float [animation-delay:6s] blur-lg" />
      </div>

      <div id="contact-section" className="max-w-6xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative inline-block mb-6">
            <Sparkles className="absolute -top-6 -left-6 w-8 h-8 text-royal animate-pulse" />
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-royal via-lavender to-aqua bg-clip-text text-transparent tracking-tight animate-glow">
              Let's Connect
            </h2>
            <Sparkles className="absolute -bottom-6 -right-6 w-8 h-8 text-royal animate-pulse [animation-delay:0.8s]" />
          </div>
          <p className="text-lg text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Ready to build something extraordinary together? Whether it's collaborating on a project,
            discussing the latest tech trends, or just having a friendly chat about code — I'm all ears!
          </p>
          <div className="w-28 h-1 bg-gradient-gold mx-auto rounded-full shadow-gold mt-6"></div>
        </div>

        {/* Social Cards */}
        {socialLinks.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {socialLinks.map((s, i) => {
            const Icon = s.icon;
            const isHovered = hovered === s.name;
            return (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.name}
                onMouseEnter={() => setHovered(s.name)}
                onMouseLeave={() => setHovered(null)}
                className={`group block relative transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                style={{ transitionDelay: `${600 + i * 120}ms` }}
              >
                <div className="bg-gradient-to-br from-storm via-indigo to-indigo/50 border border-white/10 rounded-2xl p-8 transition-all duration-500 relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${s.gradient} opacity-0 transition-opacity duration-500`}></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-royal/10 via-lavender/10 to-royal/10 opacity-0 transition-opacity duration-500 blur-xl"></div>

                  <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                    <div className="relative">
                      <div className={`p-4 rounded-full bg-royal/10 transition-all duration-500 ${isHovered ? '' : ''}`}>
                        <Icon className="w-8 h-8 text-royal transition-all duration-300" />
                      </div>
                      {/* hover ping removed to prevent color changes */}
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-xl font-bold text-white">{s.name}</h3>
                      <p className="text-sm text-neutral-400">{s.description}</p>
                      <p className="text-xs text-neutral-400/80">{s.label}</p>
                    </div>

                    <ExternalLink className="w-5 h-5 text-neutral-400 opacity-100" />
                  </div>
                </div>
              </a>
            );
          })}
          </div>
        )}

        {/* CTA Block */}
        <div className={`relative transform transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} [transition-delay:1200ms]`}>
          <div className="bg-gradient-to-br from-storm via-indigo to-storm border border-white/10 rounded-3xl p-10 md:p-14 relative overflow-hidden hover:shadow-gold transition-all duration-700">
            <div className="absolute inset-0 bg-gradient-glow opacity-20"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-royal/5 via-transparent to-royal/10 opacity-0 hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative z-10 text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Build Something Amazing?</h3>
              <p className="text-neutral-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                I'm always excited about new opportunities, innovative projects, and connecting with fellow developers. Let's create something that matters.
              </p>
              <a href="mailto:rs00dhunna@gmail.com" className="inline-block rounded-full border border-white/10 px-6 py-3 text-neutral-200 hover:text-white hover:shadow-gold hover:-translate-y-0.5 transition-all">Shoot a message</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
