import { useEffect, useState } from "react";
import { motion } from "motion/react";

function Navigation({ active, onNavigate }) {
  const items = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "hackathons", label: "Hackathons" },
    { id: "contact", label: "Contact" },
  ];
  return (
    <ul className="nav-ul">
      {items.map((item) => (
        <li key={item.id} className="nav-li">
          <a
            href={`#${item.id}`}
            data-current={active === item.id}
            className={`nav-link ${active === item.id ? "nav-link-active" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              onNavigate?.(item.id);
            }}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [isVisible, setIsVisible] = useState(false);

  // Slow smooth scroll with easing
  const animateScrollTo = (to, duration = 1200) => {
    const start = window.pageYOffset;
    const change = to - start;
    const startTime = performance.now();
    const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
    const step = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeInOutCubic(progress);
      window.scrollTo(0, start + change * eased);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const navigateTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    // account for scroll-margin already set on sections; scroll to element's top offset
    const targetY = Math.max(0, el.getBoundingClientRect().top + window.pageYOffset);
    setActive(id);
    setIsOpen(false);
    animateScrollTo(targetY, 1200);
  };

  useEffect(() => {
    const hero = document.getElementById("home");
    if (!hero) {
      // If hero not found, show header to avoid broken UI
      setIsVisible(true);
      return;
    }
    const onScroll = () => {
      const heroHeight = hero.offsetHeight || window.innerHeight;
      const scrolled = window.scrollY || window.pageYOffset;
      setIsVisible(scrolled >= heroHeight * 0.7);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <header className={`header-glass ${isVisible ? "is-visible" : ""}`}>
      <div className="header-inner">
        <div className="header-bar">
          <a
            href="#home"
            className="brand"
            aria-label="Go to hero"
            onClick={(e) => {
              e.preventDefault();
              navigateTo("home");
            }}
          >
            Ranjit
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden inline-flex items-center justify-center rounded-md p-2 text-neutral-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
            aria-label="Toggle navigation"
            aria-controls="primary-navigation"
            aria-expanded={isOpen}
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-6 h-6"
              alt="toggle"
            />
          </button>

          <nav id="primary-navigation" className="hidden sm:flex">
            <Navigation active={active} onNavigate={navigateTo} />
          </nav>
        </div>
      </div>

      <motion.nav
        className="mobile-nav sm:hidden"
        initial={false}
        animate={isOpen ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        aria-hidden={!isOpen}
      >
        <div className="pb-4 pt-2 c-space">
          <Navigation active={active} onNavigate={navigateTo} />
        </div>
      </motion.nav>
    </header>
  );
};

export default Navbar;
