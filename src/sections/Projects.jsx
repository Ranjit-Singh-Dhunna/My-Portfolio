import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const data = [
  // 1) Universal Resume Parser
  {
    img: "/assets/resume-json.jpg",
    title: "Universal Resume Parser",
    topic: "Python Tool",
    des:
      "Extracts structured JSON from resumes across domains. Detects links and categorizes skills, experience, projects using LLMs (Ollama).",
    specs: [
      ["Output", "Structured JSON"],
      ["Checks", "GitHub\nLinkedIn"],
      ["Models", "Ollama"],
    ],
    code: "https://github.com/Ranjit-Singh-Dhunna/Resume-Parser-JSON",
  },
  // 2) INTERBU
  {
    img: "/assets/interbu.jpg",
    title: "INTERBU",
    topic: "AI Interview Coach",
    des:
      "Privacy-first interview practice. Resume-aware Q&A, smooth flow with TTS/recording, and structured AI feedback (ratings, strengths, improvements, STAR).",
    specs: [
      ["Flow", "TTS + Recording"],
      ["Feedback", "AI + STAR"],
      ["Privacy", "Local-first"],
    ],
    code: "https://github.com/Ranjit-Singh-Dhunna/ai-interview-coach",
  },
  // 3) DRIP GENIUS
  {
    img: "/assets/drip.jpg",
    title: "DRIP GENIUS",
    topic: "Outfit Recs",
    des:
      "Upload wardrobe photos and get AI outfit suggestions. Roboflow detection, color analysis, and Gemini-driven recommendations.",
    specs: [
      ["Vision", "Roboflow"],
      ["AI", "Gemini"],
      ["Color", "Palette analysis"],
    ],
    code: "https://github.com/Ranjit-Singh-Dhunna/Outfit-Recommendation-System",
  },
  // 4) Click2Bill
  {
    img: "/assets/bill.jpg",
    title: "Click2Bill",
    topic: "Serverless Invoicing",
    des:
      "Zero subscription cost for small businesses. Apps Script + Sheets automation: form → invoice PDF → email → log.",
    specs: [
      ["Cost", "$0 subscription"],
      ["Cloud", "Sheets + Drive + Gmail"],
      ["Impact", "~70% less manual"],
    ],
    code: "https://github.com/Ranjit-Singh-Dhunna/gsheets-invoice-automation",
  },
  // 5) Code Buddy
  {
    img: "/assets/buddy.jpg",
    title: "Code Buddy",
    topic: "AI Code Review",
    des:
      "Paste code and get instant, syntax-aware AI feedback. Designed for people new to coding.",
    specs: [
      ["Frontend", "React + Vite"],
      ["Backend", "Express"],
      ["Feedback", "AI"],
    ],
    code: "https://github.com/Ranjit-Singh-Dhunna/Code-Instructor",
  },
];

const Projects = () => {
  const [items, setItems] = useState(data);
  const [mode, setMode] = useState(""); // '', 'next', 'prev', 'showDetail'
  const [animDir, setAnimDir] = useState(""); // '', 'next', 'prev' (used in detail mode)

  const onNext = useCallback(() => {
    if (mode === "showDetail") {
      if (animDir) return; // ignore while animating
      setAnimDir("next");
      setItems((arr) => {
        const [first, ...rest] = arr;
        return [...rest, first];
      });
      setTimeout(() => setAnimDir(""), 1200);
      return;
    }
    setMode("next");
    setItems((arr) => {
      const [first, ...rest] = arr;
      return [...rest, first];
    });
    setTimeout(() => setMode(""), 1200);
  }, [mode, animDir]);

  const onPrev = useCallback(() => {
    if (mode === "showDetail") {
      if (animDir) return; // ignore while animating
      setAnimDir("prev");
      setItems((arr) => {
        const last = arr[arr.length - 1];
        return [last, ...arr.slice(0, -1)];
      });
      setTimeout(() => setAnimDir(""), 1200);
      return;
    }
    setMode("prev");
    setItems((arr) => {
      const last = arr[arr.length - 1];
      return [last, ...arr.slice(0, -1)];
    });
    setTimeout(() => setMode(""), 1200);
  }, [mode, animDir]);

  const onShow = useCallback(() => setMode("showDetail"), []);
  const onBack = useCallback(() => setMode(""), []);

  // Horizontal scroll navigation: wheel right/down -> next, left/up -> prev
  const handleWheel = useCallback(
    (e) => {
      // avoid spamming while animating
      if (mode) return;
      // Only act on horizontal intent
      const isHorizontal = Math.abs(e.deltaX) > Math.abs(e.deltaY);
      if (!isHorizontal) return; // ignore vertical scroll
      const delta = e.deltaX;
      if (Math.abs(delta) < 10) return;
      if (delta > 0) {
        onNext();
      } else {
        onPrev();
      }
      // prevent page scroll when interacting with carousel
      e.preventDefault?.();
      e.stopPropagation?.();
    },
    [mode, onNext, onPrev]
  );

  // Touch swipe navigation for mobile/trackpads
  const touchStart = useRef({ x: 0, y: 0 });
  const touchHandled = useRef(false);

  const onTouchStart = useCallback((e) => {
    const t = e.touches?.[0];
    if (!t) return;
    touchStart.current = { x: t.clientX, y: t.clientY };
    touchHandled.current = false;
  }, []);

  const onTouchMove = useCallback(
    (e) => {
      if (mode || touchHandled.current) return;
      const t = e.touches?.[0];
      if (!t) return;
      const dx = t.clientX - touchStart.current.x;
      const dy = t.clientY - touchStart.current.y;
      if (Math.abs(dx) <= Math.abs(dy)) return; // ignore vertical
      if (Math.abs(dx) < 24) return; // threshold
      if (dx < 0) onNext(); else onPrev();
      touchHandled.current = true;
      e.preventDefault?.();
      e.stopPropagation?.();
    },
    [mode, onNext, onPrev]
  );

  const onTouchEnd = useCallback(() => {
    touchHandled.current = false;
  }, []);

  // Keyboard navigation: ArrowRight -> next, ArrowLeft -> prev
  const onKeyDown = useCallback(
    (e) => {
      // Allow arrow keys in all modes; ignore if currently animating in detail
      if ((e.key === "ArrowRight" || e.key === "ArrowLeft") && animDir) {
        e.preventDefault();
        return;
      }
      if (e.key === "ArrowRight") {
        onNext();
        e.preventDefault();
      } else if (e.key === "ArrowLeft") {
        onPrev();
        e.preventDefault();
      }
    },
    [animDir, onNext, onPrev]
  );

  // attach keydown on mount
  useEffect(() => {
    window.addEventListener("keydown", onKeyDown, { passive: false });
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);

  const containerClass = useMemo(
    () => `projects-carousel ${mode === "next" ? "next" : ""} ${
      mode === "prev" ? "prev" : ""
    } ${mode === "showDetail" ? "showDetail" : ""} ${
      animDir === "next" ? "next" : ""
    } ${animDir === "prev" ? "prev" : ""}`,
    [mode, animDir]
  );

  return (
    <section
      id="projects"
      className="c-space section-spacing md:w-screen md:relative md:left-1/2 md:right-1/2 md:-ml-[50vw] md:-mr-[50vw] md:px-6 scroll-mt-24 md:scroll-mt-28 pb-[5vh] md:pb-[5vh]"
    >
      <h2 className="text-heading">Projects</h2>
      <p className="subtext mt-2">Swipe through a few highlights.</p>

      <div
        className={containerClass}
        onWheel={handleWheel}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="list">
          {items.slice(0, 6).map((p, idx) => (
            <div key={idx} className="item">
              <img src={p.img} alt="project preview" />
              <div className="introduce">
                <div className="title">SHOWCASE</div>
                <div className="topic">{p.title}</div>
                <div className="des">{p.des}</div>
                {p.code && (
                  <button
                    className="seeMore md:hidden mt-2"
                    onClick={() => window.open(p.code, "_blank")}
                  >
                    VIEW CODE ↗
                  </button>
                )}
                <button className="seeMore hidden md:inline-block" onClick={onShow}>
                  SEE MORE ↗
                </button>
              </div>
              <div className="detail">
                <div className="title">{p.title}</div>
                <div className="des">{p.des}</div>
                <div className="specifications">
                  {p.specs.map(([k, v]) => (
                    <div key={`${k}-${v}`}>
                      <p>{k}</p>
                      <p>{v}</p>
                    </div>
                  ))}
                </div>
                <div className="checkout">
                  {p.code && (
                    <button onClick={() => window.open(p.code, "_blank")}>VIEW CODE</button>
                  )}
                  {p.live && (
                    <button onClick={() => window.open(p.live, "_blank")}>LIVE DEMO</button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="arrows pointer-events-none">
          {/* Minimalist nav buttons */}
          <div
            className="hidden md:flex absolute inset-y-0 left-2 items-center justify-start"
            style={{ transform: "translateY(-3vh)" }}
          >
            <button
              aria-label="Previous project"
              onClick={onPrev}
              className="pointer-events-auto select-none w-9 h-9 flex items-center justify-center rounded-full border-2 border-purple-500/40 bg-black/20 text-neutral-200 hover:border-purple-400/70 hover:bg-black/30 shadow-[0_0_14px_rgba(168,85,247,0.22)] backdrop-blur-md transition"
            >
              &lt;
            </button>
          </div>
          <div
            className="hidden md:flex absolute inset-y-0 right-2 items-center justify-end"
            style={{ transform: "translateY(-3vh)" }}
          >
            <button
              aria-label="Next project"
              onClick={onNext}
              className="pointer-events-auto select-none w-9 h-9 flex items-center justify-center rounded-full border-2 border-purple-500/40 bg-black/20 text-neutral-200 hover:border-purple-400/70 hover:bg-black/30 shadow-[0_0_14px_rgba(168,85,247,0.22)] backdrop-blur-md transition"
            >
              &gt;
            </button>
          </div>
          {mode === "showDetail" && (
            <button id="back" onClick={onBack} className="pointer-events-auto">See All ↗</button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
