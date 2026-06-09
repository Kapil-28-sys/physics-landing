"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import {
  Atom, Sparkles, ArrowRight, BookOpen, School,
  Video, MessageCircle, TrendingUp, FileText, Star, Check, X,
  Clock, Users, Mail, MessageSquare, Zap, Award, Target,
  ChevronLeft, ChevronRight, Home, BookOpen as BookIcon,
  BarChart2, CreditCard, Phone, GraduationCap, Sun, Moon,
  Brain, Trophy, Lightbulb, FlaskConical,
} from "lucide-react";

const WHATSAPP_NUMBER = "919876543210";
const WEB3FORMS_KEY = "0272d72a-08b2-495c-ada8-9d69ecc98902";
const TEACHER_PHOTO_URL = "https://img.freepik.com/premium-psd/businesswoman-transparency-background-psd_693425-19306.jpg";

/* ─── Animated Grid Pattern Background ─── */
const GeoBg = ({ isDark }) => {
  const lineColor       = isDark ? "rgba(201,168,76,0.1)"  : "rgba(139,90,20,0.08)";
  const lineColorBright = isDark ? "rgba(201,168,76,0.22)" : "rgba(139,90,20,0.16)";
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
      <style>{`
        @keyframes grid-pan {
          0%   { transform: translate(0,0); }
          100% { transform: translate(40px,40px); }
        }
        @keyframes grid-shimmer {
          0%,100% { opacity:0.6; }
          50%      { opacity:1; }
        }
        .grid-pan     { animation: grid-pan     18s linear infinite; }
        .grid-shimmer { animation: grid-shimmer 5s  ease-in-out infinite; }
      `}</style>

      {/* Base grid — small cells, continuously panning diagonal */}
      <svg width="calc(100% + 80px)" height="calc(100% + 80px)"
        style={{ position:"absolute", top:-40, left:-40 }} className="grid-pan">
        <defs>
          <pattern id="grid-base" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="0"  y2="40" stroke={lineColor} strokeWidth="1"/>
            <line x1="0" y1="0" x2="40" y2="0"  stroke={lineColor} strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-base)"/>
      </svg>

      {/* Overlay grid — larger cells, reverse direction, shimmer */}
      <svg width="calc(100% + 240px)" height="calc(100% + 240px)"
        style={{ position:"absolute", top:-120, left:-120 }}>
        <defs>
          <pattern id="grid-large" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="0"   y2="120" stroke={lineColorBright} strokeWidth="1"/>
            <line x1="0" y1="0" x2="120" y2="0"   stroke={lineColorBright} strokeWidth="1"/>
          </pattern>
        </defs>
        <rect className="grid-pan grid-shimmer"
          style={{ animationDirection:"reverse", animationDuration:"28s" }}
          width="100%" height="100%" fill="url(#grid-large)"/>
      </svg>
    </div>
  );
};

/* ─── Teacher Photo ─── */
const TeacherPhoto = ({ theme }) => {
  const isDark = theme === "dark";
  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(52px,8vw,96px)", fontWeight: 700, fontStyle: "italic", color: isDark ? "rgba(201,168,76,0.05)" : "rgba(139,90,20,0.07)", whiteSpace: "nowrap", letterSpacing: "-0.02em", pointerEvents: "none", zIndex: 0, userSelect: "none", lineHeight: 1 }}>Physics Pro</div>
      <div style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "flex-end", justifyContent: "center", height: "100%" }}>
        <img src={TEACHER_PHOTO_URL} alt="Sunira Agarwal - Physics Teacher" loading="eager" draggable={false}
          style={{ width: "100%", maxHeight: 560, objectFit: "contain", objectPosition: "bottom center", display: "block", filter: isDark ? "drop-shadow(0 16px 48px rgba(0,0,0,0.35))" : "drop-shadow(0 16px 48px rgba(0,0,0,0.18))", transform: "translateZ(0)", willChange: "transform" }}
          onError={(e) => { const img = e.currentTarget; if (img.dataset.fallbackApplied) return; img.dataset.fallbackApplied = "true"; img.src = "https://static.vecteezy.com/system/resources/thumbnails/027/394/933/small_2x/teacher-lady-friendly-smiling-arms-crossed-png.png"; img.style.borderRadius = "24px"; img.style.objectFit = "cover"; img.style.maxHeight = "520px"; }}
        />
      </div>
      <div style={{ position: "absolute", bottom: 8, left: 0, zIndex: 2, display: "flex", alignItems: "center", gap: 10, background: isDark ? "rgba(11,17,32,0.92)" : "rgba(255,255,255,0.95)", backdropFilter: "blur(14px)", border: isDark ? "1px solid rgba(201,168,76,0.28)" : "1px solid rgba(201,168,76,0.2)", borderRadius: 14, padding: "10px 16px", boxShadow: isDark ? "0 8px 32px rgba(0,0,0,0.4)" : "0 8px 32px rgba(0,0,0,0.1)" }}>
        <div style={{ width: 36, height: 36, borderRadius: 10, background: "linear-gradient(135deg,#c9a84c,#e8c96a)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><GraduationCap size={18} color="#0b1120" /></div>
        <div>
          <div style={{ fontSize: 13, fontWeight: 600, color: isDark ? "#f0f4ff" : "#1a1a2e", fontFamily: "'Cormorant Garamond',serif", lineHeight: 1.2 }}>Sunira Agarwal</div>
          <div style={{ fontSize: 10.5, color: "#c9a84c", letterSpacing: "0.06em", marginTop: 2 }}>22+ Yrs · DPS Faridabad · Author</div>
        </div>
      </div>
      <div style={{ position: "absolute", top: 12, right: 0, zIndex: 2, background: "linear-gradient(135deg,#c9a84c,#e8c96a)", borderRadius: 12, padding: "8px 14px", boxShadow: "0 6px 24px rgba(201,168,76,0.4)", textAlign: "center" }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: "#0b1120", fontFamily: "'Cormorant Garamond',serif", lineHeight: 1 }}>30+</div>
        <div style={{ fontSize: 9.5, color: "rgba(11,17,32,0.7)", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginTop: 2 }}>Yrs Teaching</div>
      </div>
    </div>
  );
};

/* ─── Main Component ─── */
export default function PhysicsProLanding() {
  const [theme, setTheme] = useState("light");
  const [activeNav, setActiveNav] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [visibleSections, setVisible] = useState({});
  const [form, setForm] = useState({ name: "", phone: "", email: "", course: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [emailStatus, setEmailStatus] = useState("idle");
  const [emailError, setEmailError] = useState("");
  const [errors, setErrors] = useState({});
  const [hoveredPlan, setHoveredPlan] = useState(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const [sliding, setSliding] = useState(false);
  const [slideDir, setSlideDir] = useState(1);
  const [aboutExpanded, setAboutExpanded] = useState(false);
  const autoRef = useRef(null);
  const sectionRefs = useRef({});
  const navRef = useRef(null);

  const isDark = theme === "dark";

  const T = {
    bg: isDark ? "#0b1120" : "#faf8f3",
    bgSec: isDark ? "rgba(255,255,255,0.025)" : "rgba(255,255,255,0.85)",
    surface: isDark ? "rgba(255,255,255,0.03)" : "#ffffff",
    border: isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.08)",
    borderMed: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.12)",
    text: isDark ? "#f0f4ff" : "#1a1a2e",
    textMid: isDark ? "rgba(180,195,230,0.72)" : "rgba(40,40,70,0.68)",
    textDim: isDark ? "rgba(180,195,230,0.4)" : "rgba(40,40,70,0.44)",
    textFaint: isDark ? "rgba(180,195,230,0.22)" : "rgba(40,40,70,0.28)",
    navBg: isDark ? "rgba(11,17,32,0.97)" : "rgba(250,248,243,0.97)",
    navBorder: isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.07)",
    navScrollBorder: isDark ? "rgba(201,168,76,0.18)" : "rgba(201,168,76,0.3)",
    gold: "#c9a84c",
    goldDim: isDark ? "rgba(201,168,76,0.12)" : "rgba(201,168,76,0.1)",
    goldBorder: isDark ? "rgba(201,168,76,0.28)" : "rgba(201,168,76,0.35)",
    teal: "#0d9488",
    tealDim: isDark ? "rgba(13,148,136,0.12)" : "rgba(13,148,136,0.1)",
    blue: "#3b82f6",
    blueDim: isDark ? "rgba(59,130,246,0.12)" : "rgba(59,130,246,0.1)",
    violet: "#8b5cf6",
    violetDim: isDark ? "rgba(139,92,246,0.12)" : "rgba(139,92,246,0.1)",
    emerald: "#10b981",
    rose: "#f43f5e",
    green: "#25d366",
    divider: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.06)",
    inputBg: isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.03)",
    inputBorder: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.12)",
    shadow: isDark ? "0 12px 40px rgba(0,0,0,0.4)" : "0 12px 40px rgba(0,0,0,0.1)",
    shadowCard: isDark ? "0 2px 16px rgba(0,0,0,0.3)" : "0 2px 16px rgba(0,0,0,0.07)",
  };

  const navLinks = [
    { label: "Home", id: "hero", Icon: Home },
    { label: "About", id: "about", Icon: GraduationCap },
    { label: "Courses", id: "courses", Icon: BookIcon },
    { label: "Results", id: "testimonials", Icon: BarChart2 },
    { label: "Pricing", id: "pricing", Icon: CreditCard },
    { label: "Contact", id: "contact", Icon: Phone },
  ];

  const registerRef = (id) => (el) => { if (el) sectionRefs.current[id] = el; };

  const scrollToSection = useCallback((item) => {
    setActiveNav(item.label);
    const el = sectionRefs.current[item.id];
    if (el) {
      const navH = navRef.current ? navRef.current.offsetHeight : 68;
      const isMobile = window.innerWidth < 768;
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - (isMobile ? 0 : navH), behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const navH = navRef.current ? navRef.current.offsetHeight : 68;
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const el = sectionRefs.current[navLinks[i].id];
        if (el && el.getBoundingClientRect().top <= navH + 40) { setActiveNav(navLinks[i].label); break; }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setVisible((p) => ({ ...p, [e.target.id]: true })); }),
      { threshold: 0.07 }
    );
    document.querySelectorAll("[data-observe]").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const testimonials = [
    { text: "Sunira ma'am's way of breaking down complex concepts is unmatched. I went from dreading Physics to genuinely enjoying it. Cleared JEE with AIR 312.", name: "Aryan Rao", sub: "IIT Bombay · JEE 2025, AIR 312", initials: "AR", accent: "#c9a84c", score: "AIR 312" },
    { text: "Ma'am's patient teaching style and her focus on concepts rather than rote learning made all the difference. I scored 690 in NEET — couldn't have done it without her.", name: "Simran Mehra", sub: "NEET 2025 · Score 690/720", initials: "SM", accent: "#0d9488", score: "690/720" },
    { text: "Her NTSE preparation is incredibly thorough. The Mission NTSE book she authored was our bible. Got through with a top rank.", name: "Dev Kumar", sub: "NTSE Scholar · Class 10, DPS", initials: "DK", accent: "#8b5cf6", score: "NTSE" },
    { text: "From 55% in Class 11 to 96% in boards — Sunira ma'am's structured revision plan and personalised attention made all the difference.", name: "Priya Nair", sub: "CBSE 2025 · 96% in Physics", initials: "PN", accent: "#f43f5e", score: "96%" },
    { text: "22 years at DPS Faridabad and counting — you can feel the depth of experience in every session. She knows exactly where students get stuck.", name: "Rohan Gupta", sub: "Class 12 Alumni · DPS Faridabad", initials: "RG", accent: "#10b981", score: "AIR 201" },
  ];

  const goTo = useCallback((dir) => {
    if (sliding) return;
    setSlideDir(dir); setSliding(true);
    setTimeout(() => { setSlideIndex((i) => (i + dir + testimonials.length) % testimonials.length); setSliding(false); }, 400);
  }, [sliding, testimonials.length]);

  useEffect(() => {
    autoRef.current = setInterval(() => goTo(1), 4500);
    return () => clearInterval(autoRef.current);
  }, [goTo]);

  const resetAuto = () => { clearInterval(autoRef.current); autoRef.current = setInterval(() => goTo(1), 4500); };
  const handleNav = (dir) => { goTo(dir); resetAuto(); };

  const fadeIn = (id, delay = 0) => ({
    style: {
      opacity: visibleSections[id] ? 1 : 0,
      transform: visibleSections[id] ? "translateY(0)" : "translateY(28px)",
      transition: `opacity 0.65s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.65s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
    },
  });

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.phone.trim()) e.phone = "Phone is required";
    else if (!/^[6-9]\d{9}$/.test(form.phone.trim())) e.phone = "Enter a valid 10-digit mobile number";
    if (form.email && !/\S+@\S+\.\S+/.test(form.email)) e.email = "Invalid email address";
    return e;
  };

  const handleSubmitWA = () => {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setErrors({});
    const body = `Hi! 👋\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email || "—"}\nCourse: ${form.course || "—"}\nMessage: ${form.message || "—"}\n\nI'd like to know more about enrolling with Sunira Agarwal.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(body)}`, "_blank");
    setSubmitted(true);
  };

  const handleSubmitEmail = async () => {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setErrors({}); setEmailStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ access_key: WEB3FORMS_KEY, subject: `New Enquiry from ${form.name}`, name: form.name, email: form.email || "Not provided", phone: form.phone, course: form.course || "Not specified", message: form.message || "—", botcheck: false }),
      });
      const data = await res.json();
      if (data.success) { setEmailStatus("success"); setForm({ name: "", phone: "", email: "", course: "", message: "" }); }
      else { setEmailStatus("error"); setEmailError(data.message || "Failed to send."); }
    } catch { setEmailStatus("error"); setEmailError("Network error. Please try again."); }
  };

  const openWA = (msg = "Hi! I'd like to know more about Sunira Agarwal's Physics classes.") =>
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
  const openMail = () => window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=vaishnavkapil412@gmail.com`, "_blank");

  const courses = [
    { badge: "Most Popular", Icon: School, accent: "#c9a84c", accentDim: isDark ? "rgba(201,168,76,0.1)" : "rgba(201,168,76,0.12)", title: "Class 9 & 10 Science", sub: "Online · ₹500/month", desc: "Complete CBSE Science with strong focus on Physics — concepts, board prep, Olympiad & NTSE training. Both weak and meritorious students welcome.", hours: "Board + Competitive", enrolled: "3,200+", featured: true },
    { badge: "Board + JEE/NEET", Icon: Atom, accent: "#0d9488", accentDim: isDark ? "rgba(13,148,136,0.1)" : "rgba(13,148,136,0.12)", title: "Class 11 & 12 Physics", sub: "Online · ₹500/month", desc: "In-depth Physics for CBSE boards and entrance exam foundation — JEE, NEET, and beyond. Strong conceptual base guaranteed.", hours: "Board + Entrance", enrolled: "4,100+", featured: false },
    { badge: "Olympiad & NTSE", Icon: Award, accent: "#8b5cf6", accentDim: isDark ? "rgba(139,92,246,0.1)" : "rgba(139,92,246,0.12)", title: "Competitive Exam Prep", sub: "IMO · ISO · NTSE", desc: "Specialised training for IMO, ISO, NTSE, and other Olympiads. Authored Mission NTSE Class 8 & 10 — the definitive prep resource.", hours: "Flexible batches", enrolled: "1,800+", featured: false },
  ];

  const features = [
    { Icon: Video, accent: "#c9a84c", title: "Live + Recorded Classes", desc: "Attend live sessions or watch recordings anytime. Full HD with chapter-wise timestamps." },
    { Icon: MessageCircle, accent: "#0d9488", title: "Personalised Doubt Clearing", desc: "Every student gets individual attention — no question left unanswered." },
    { Icon: Brain, accent: "#3b82f6", title: "Conceptual Clarity First", desc: "Teaching goes beyond marks — analytical thinking, logical reasoning, problem-solving." },
    { Icon: FileText, accent: "#8b5cf6", title: "Mission NTSE Study Material", desc: "Practice sheets, past-paper questions, and chapters from Mission NTSE Class 8 & 10 — included." },
    { Icon: Target, accent: "#f43f5e", title: "Weak & Strong Students Both", desc: "Proven success with struggling learners and high achievers alike. Every student reaches their potential." },
    { Icon: Trophy, accent: "#10b981", title: "30+ Years · DPS Faridabad", desc: "Including 22+ years at DPS Faridabad — one of India's most reputed schools." },
  ];

  const plans = [
    { name: "Class 9 & 10", price: "₹500", period: "/ month", accent: "#c9a84c", popular: true, features: [{ text: "Science (Physics focus)", ok: true }, { text: "Live online classes", ok: true }, { text: "Doubt clearing sessions", ok: true }, { text: "NTSE / Olympiad prep", ok: true }] },
    { name: "Class 11 & 12", price: "₹500", period: "/ month", accent: "#0d9488", popular: false, features: [{ text: "Complete Physics syllabus", ok: true }, { text: "Live online classes", ok: true }, { text: "Doubt clearing sessions", ok: true }, { text: "JEE / NEET foundation", ok: true }] },
    { name: "Trial Class", price: "Free", period: "first class", accent: isDark ? "#64748b" : "#94a3b8", popular: false, features: [{ text: "1 free demo class", ok: true }, { text: "Meet Sunira ma'am", ok: true }, { text: "No commitment needed", ok: true }, { text: "WhatsApp support", ok: false }] },
  ];

  const inputCss = (field) => ({
    width: "100%", padding: "11px 14px", borderRadius: 10,
    background: T.inputBg,
    border: errors[field] ? "1.5px solid #f43f5e" : `1.5px solid ${T.inputBorder}`,
    color: T.text, fontSize: 13.5, fontFamily: "inherit", outline: "none",
    transition: "border-color 0.18s, background 0.18s",
  });

  const inp = (field, placeholder, type = "text") => ({
    value: form[field], type, placeholder,
    onChange: (e) => setForm((p) => ({ ...p, [field]: e.target.value })),
    style: inputCss(field),
    onFocus: (e) => { e.target.style.borderColor = T.gold; e.target.style.background = T.goldDim; },
    onBlur: (e) => { e.target.style.borderColor = errors[field] ? "#f43f5e" : T.inputBorder; e.target.style.background = T.inputBg; },
  });

  const stats = [
    { n: "30+", l: "Years Teaching", accent: "#c9a84c", Icon: Award },
    { n: "22+", l: "Yrs at DPS", accent: "#3b82f6", Icon: School },
    { n: "1000s", l: "Students", accent: "#0d9488", Icon: Users },
    { n: "2", l: "Books Authored", accent: "#8b5cf6", Icon: BookOpen },
  ];

  const whyTrust = [
    "30+ Years of Teaching Experience",
    "22+ Years at DPS Faridabad",
    "Thousands of Successful Students",
    "Strong Focus on Conceptual Understanding",
    "Personalised Attention for Every Learner",
    "Weak & High-Performing Students Both",
    "Olympiad & Competitive Exam Prep",
    "Author: Mission NTSE Class 8 & 10",
  ];

  const tCurr = testimonials[slideIndex];

  /* ── Headline phrases ── */
  const headlines = [
    { main: "Physics Made Simple.", em: "Confidence Made Strong." },
    { main: "When Concepts Become Clear,", em: "Success Follows." },
    { main: "30+ Years of Transforming Students into", em: "Confident Physics Learners." },
  ];
  const [hlIdx, setHlIdx] = useState(0);
  useEffect(() => { const t = setInterval(() => setHlIdx(i => (i + 1) % headlines.length), 5000); return () => clearInterval(t); }, []);
  const hl = headlines[hlIdx];

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: T.bg, color: T.text, overflowX: "hidden", minHeight: "100vh", transition: "background 0.3s ease, color 0.3s ease" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500;600&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}
        ::selection{background:rgba(201,168,76,0.25);}
        input::placeholder,textarea::placeholder{color:${isDark ? "rgba(180,195,230,0.22)" : "rgba(40,40,70,0.3)"};}
        select option{background:${isDark ? "#111827" : "#ffffff"};color:${T.text};}
        .btn{cursor:pointer;transition:all 0.2s cubic-bezier(0.22,1,0.36,1);border:none;font-family:inherit;}
        .btn:hover{transform:translateY(-2px);}
        .btn:active{transform:translateY(0) scale(0.97);}
        .nav-link{transition:all 0.18s;cursor:pointer;user-select:none;}
        .nav-link:hover{color:${T.text}!important;}
        .wa-float{position:fixed;bottom:90px;right:20px;z-index:80;width:52px;height:52px;border-radius:50%;background:linear-gradient(135deg,#25d366,#128c7e);display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 6px 24px rgba(37,211,102,0.4);transition:all 0.22s;border:none;}
        .wa-float:hover{transform:scale(1.1) translateY(-2px);}
        .wa-float svg{width:24px;height:24px;fill:white;}
        @keyframes spin{to{transform:rotate(360deg);}}
        @keyframes pulse-ring{0%,100%{opacity:0.35;transform:scale(1);}50%{opacity:0.6;transform:scale(1.04);}}
        @keyframes hl-fade{0%{opacity:0;transform:translateY(10px);}100%{opacity:1;transform:translateY(0);}}
        .hl-animate{animation:hl-fade 0.6s cubic-bezier(0.22,1,0.36,1) forwards;}
        .form-err{font-size:11.5px;color:#f43f5e;margin-top:5px;display:flex;align-items:center;gap:4px;}
        .tag{display:inline-flex;align-items:center;gap:5px;font-size:11px;font-weight:500;letter-spacing:0.08em;text-transform:uppercase;padding:4px 12px;border-radius:20px;}
        .stat-num{font-family:'Cormorant Garamond',serif;font-size:26px;font-weight:700;}
        .features-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;}
        @keyframes slideInRight{from{opacity:0;transform:translateX(50px) scale(0.97);}to{opacity:1;transform:translateX(0) scale(1);}}
        @keyframes slideInLeft{from{opacity:0;transform:translateX(-50px) scale(0.97);}to{opacity:1;transform:translateX(0) scale(1);}}
        .anim-in-right{animation:slideInRight 0.4s cubic-bezier(0.4,0,0.2,1) forwards;}
        .anim-in-left{animation:slideInLeft 0.4s cubic-bezier(0.4,0,0.2,1) forwards;}
        .card-hover{transition:transform 0.25s cubic-bezier(0.22,1,0.36,1),box-shadow 0.25s;}
        .card-hover:hover{transform:translateY(-5px);box-shadow:${T.shadow};}
        .section-line{display:flex;align-items:center;gap:12px;margin-bottom:28px;}
        .section-line::before{content:'';flex:0 0 32px;height:2px;background:linear-gradient(90deg,#c9a84c,transparent);}

        .desktop-nav{position:fixed;top:0;left:0;right:0;z-index:50;padding:0 48px;height:68px;display:flex;align-items:center;justify-content:space-between;background:${T.navBg};backdrop-filter:blur(24px) saturate(1.8);border-bottom:1px solid ${T.navBorder};transition:background 0.35s ease,border-color 0.35s ease,box-shadow 0.35s ease;}
        .desktop-nav.scrolled{border-bottom-color:${T.navScrollBorder};box-shadow:0 4px 32px ${isDark ? "rgba(0,0,0,0.5)" : "rgba(0,0,0,0.1)"};}
        .bottom-nav{display:none;position:fixed;bottom:0;left:0;right:0;z-index:90;background:${T.navBg};backdrop-filter:blur(24px) saturate(1.8);border-top:1px solid ${T.navScrollBorder};padding:6px 0 calc(6px + env(safe-area-inset-bottom));box-shadow:0 -8px 32px ${isDark ? "rgba(0,0,0,0.4)" : "rgba(0,0,0,0.08)"};}
        .bottom-nav-inner{display:flex;justify-content:space-around;align-items:stretch;}
        .bottom-nav-item{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;padding:7px 8px 5px;border-radius:14px;cursor:pointer;transition:all 0.22s cubic-bezier(0.22,1,0.36,1);border:none;background:transparent;font-family:inherit;flex:1;position:relative;}
        .bottom-nav-item.active{background:rgba(201,168,76,0.1);}
        .bottom-nav-item.active::before{content:'';position:absolute;top:-6px;left:50%;transform:translateX(-50%);width:28px;height:3px;border-radius:0 0 3px 3px;background:linear-gradient(90deg,#c9a84c,#e8c96a);}
        .bottom-nav-item span{font-size:9.5px;font-weight:500;letter-spacing:0.03em;transition:color 0.18s;}

        /* Mission statement band */
        .mission-band{background:linear-gradient(135deg,#c9a84c,#e8c96a);padding:14px 48px;display:flex;align-items:center;justify-content:center;gap:12px;flex-wrap:wrap;}

        @media(max-width:768px){
          .bottom-nav{display:block;}
          .desktop-nav{display:none!important;}
          .features-grid{grid-template-columns:repeat(2,1fr);}
          .hero-pad{padding:56px 20px 72px!important;}
          .hero-inner{flex-direction:column!important;gap:32px!important;}
          .hero-text{max-width:100%!important;}
          .hero-img{width:100%!important;max-width:340px!important;margin:0 auto!important;order:2!important;min-height:320px!important;}
          .section-pad{padding:56px 20px!important;}
          .stats-wrap{flex-wrap:wrap;}
          .stat-cell{min-width:50%;flex:1;}
          .courses-grid{grid-template-columns:1fr!important;}
          .pricing-grid{grid-template-columns:1fr!important;}
          .contact-grid{grid-template-columns:1fr!important;}
          .form-row{grid-template-columns:1fr!important;}
          .footer-inner{padding:32px 20px!important;}
          .divider{margin:0 20px!important;}
          .slider-side-card{display:none!important;}
          .slider-center-card{flex:0 0 100%!important;}
          .wa-float{bottom:88px;right:16px;}
          .about-grid{grid-template-columns:1fr!important;}
          .why-trust-grid{grid-template-columns:1fr 1fr!important;}
          .mission-band{padding:14px 20px;}
        }
        @media(max-width:480px){.features-grid{grid-template-columns:1fr;}.why-trust-grid{grid-template-columns:1fr!important;}}
        @media(min-width:769px){.wa-float{bottom:28px;right:28px;}.bottom-nav{display:none!important;}.page-wrap{padding-top:68px;}}
        @media(max-width:768px){.page-wrap{padding-bottom:72px;}}
      `}</style>

      {/* WhatsApp Float */}
      <button className="wa-float btn" onClick={() => openWA()}>
        <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
      </button>

      {/* ── DESKTOP NAV ── */}
      <nav ref={navRef} className={`desktop-nav${scrolled ? " scrolled" : ""}`}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, cursor: "pointer" }} onClick={() => scrollToSection(navLinks[0])}>
          <div style={{ width: 38, height: 38, borderRadius: 10, background: "linear-gradient(135deg,#c9a84c,#e8c96a)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 18px rgba(201,168,76,0.4)" }}>
            <Atom size={18} color="#0b1120" />
          </div>
          <div>
            <div style={{ fontSize: 16, fontWeight: 600, fontFamily: "'Cormorant Garamond',serif", color: T.text }}>Sunira Agarwal</div>
            <div style={{ fontSize: 9.5, color: T.gold, letterSpacing: "0.14em", textTransform: "uppercase", display: "flex", alignItems: "center", gap: 3 }}><Sparkles size={8} /> Physics · 30+ Years · DPS Faridabad</div>
          </div>
        </div>
        <ul style={{ display: "flex", listStyle: "none", gap: 0, alignItems: "center" }}>
          {navLinks.map((n) => (
            <li key={n.label}>
              <span className="nav-link" onClick={() => scrollToSection(n)} style={{ fontSize: 13.5, padding: "8px 14px", borderRadius: 8, display: "block", color: activeNav === n.label ? T.gold : T.textDim, fontWeight: activeNav === n.label ? 500 : 400, borderBottom: activeNav === n.label ? `2px solid ${T.gold}` : "2px solid transparent" }}>{n.label}</span>
            </li>
          ))}
        </ul>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <button className="btn" onClick={() => setTheme(isDark ? "light" : "dark")} style={{ width: 40, height: 40, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", background: T.surface, border: `1.5px solid ${T.border}`, color: isDark ? "#fbbf24" : "#64748b", boxShadow: T.shadowCard }}>
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button className="btn" onClick={() => openWA()} style={{ fontSize: 13, color: T.emerald, background: isDark ? "rgba(16,185,129,0.08)" : "rgba(16,185,129,0.1)", border: `1px solid rgba(16,185,129,0.25)`, borderRadius: 9, padding: "9px 18px", display: "flex", alignItems: "center", gap: 7 }}>
            <MessageSquare size={13} /> WhatsApp
          </button>
          <button className="btn" onClick={openMail} style={{ fontSize: 13, fontWeight: 600, color: "#0b1120", background: "linear-gradient(135deg,#c9a84c,#e8c96a)", border: "none", borderRadius: 9, padding: "9px 20px", display: "flex", alignItems: "center", gap: 7, boxShadow: "0 4px 16px rgba(201,168,76,0.35)" }}>
            Enrol Now <ArrowRight size={13} />
          </button>
        </div>
      </nav>

      {/* ── MOBILE BOTTOM NAV ── */}
      <nav className="bottom-nav">
        <div className="bottom-nav-inner">
          {navLinks.map((n) => (
            <button key={n.label} className={`bottom-nav-item${activeNav === n.label ? " active" : ""}`} onClick={() => scrollToSection(n)}>
              <n.Icon size={20} color={activeNav === n.label ? T.gold : T.textDim} strokeWidth={activeNav === n.label ? 2 : 1.5} />
              <span style={{ color: activeNav === n.label ? T.gold : T.textDim }}>{n.label}</span>
            </button>
          ))}
        </div>
      </nav>

      <div className="page-wrap">

        {/* ── HERO ── */}
        <section id="hero" ref={registerRef("hero")} data-observe className="hero-pad"
          style={{ padding: "72px 48px 0", position: "relative", overflow: "hidden", minHeight: 580 }}>
          <GeoBg isDark={isDark} />
          <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden", zIndex: 1 }}>
            <div style={{ position: "absolute", top: -60, right: "5%", width: 600, height: 600, borderRadius: "50%", background: isDark ? "radial-gradient(circle,rgba(201,168,76,0.05) 0%,transparent 65%)" : "radial-gradient(circle,rgba(201,168,76,0.1) 0%,transparent 65%)", animation: "pulse-ring 8s ease-in-out infinite" }} />
          </div>
          <div className="hero-inner" style={{ maxWidth: 1140, margin: "0 auto", display: "flex", alignItems: "flex-end", gap: 32, position: "relative", zIndex: 2, minHeight: 520 }}>
            <div className="hero-text" style={{ flex: 1, minWidth: 0, maxWidth: 560, paddingBottom: 64 }}>
              <div {...fadeIn("hero", 0)}>
                <div className="tag" style={{ background: T.goldDim, border: `1px solid ${T.goldBorder}`, color: T.gold, marginBottom: 28 }}>
                  <Zap size={11} fill={T.gold} /> Online Classes · Class 9–12 · Olympiad · NTSE — Now Enrolling
                </div>
              </div>
              <div {...fadeIn("hero", 0.1)}>
                <h1 key={hlIdx} className="hl-animate" style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(34px,5vw,60px)", fontWeight: 700, lineHeight: 1.09, letterSpacing: "-0.02em", marginBottom: 10, color: T.text }}>
                  {hl.main}{" "}
                  <span style={{ fontStyle: "italic", background: "linear-gradient(135deg,#c9a84c,#e8c96a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{hl.em}</span>
                </h1>
              </div>
              <div {...fadeIn("hero", 0.15)}>
                <p style={{ fontSize: 13, color: T.gold, fontStyle: "italic", marginBottom: 22, fontFamily: "'Cormorant Garamond',serif", letterSpacing: "0.03em" }}>— Sunira Agarwal · Physics Educator · Author · 30+ Years Experience</p>
              </div>
              <div {...fadeIn("hero", 0.2)}>
                <div style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 32 }}>
                  <span style={{ fontSize: 52, color: T.gold, fontFamily: "'Cormorant Garamond',serif", lineHeight: 0.8, flexShrink: 0, marginTop: 8 }}>"</span>
                  <p style={{ fontSize: 16, color: T.textMid, maxWidth: 460, lineHeight: 1.78 }}>
                    Live online classes, personalised doubt clearing, and 30+ years of expertise — helping Class 9–12 students overcome their fear of Physics and achieve results that reflect their true potential.
                  </p>
                </div>
              </div>
              <div {...fadeIn("hero", 0.3)} style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 48 }}>
                <button className="btn" onClick={() => openWA("Hi Sunira ma'am! I want to enrol in your Physics classes.")}
                  style={{ fontSize: 13.5, fontWeight: 700, color: "#0b1120", background: "linear-gradient(135deg,#c9a84c,#e8c96a)", border: "none", borderRadius: 10, padding: "13px 28px", display: "inline-flex", alignItems: "center", gap: 9, boxShadow: "0 6px 24px rgba(201,168,76,0.4)", letterSpacing: "0.04em", textTransform: "uppercase" }}>
                  Enrol on WhatsApp
                </button>
                <button className="btn" onClick={() => scrollToSection(navLinks.find(n => n.id === "about"))}
                  style={{ fontSize: 13.5, fontWeight: 600, color: T.textMid, background: "transparent", border: `1.5px solid ${T.borderMed}`, borderRadius: 10, padding: "13px 26px", display: "inline-flex", alignItems: "center", gap: 9, letterSpacing: "0.04em", textTransform: "uppercase" }}>
                  Meet Sunira <ArrowRight size={15} />
                </button>
              </div>

              <div {...fadeIn("hero", 0.4)} style={{ display: "flex", gap: 0, flexWrap: "wrap", borderRadius: 14, overflow: "hidden", border: `1px solid ${T.border}`, width: "fit-content", background: T.surface, boxShadow: T.shadowCard }} className="stats-wrap">
                {stats.map((s, i, arr) => (
                  <div key={i} className="stat-cell" style={{ padding: "16px 22px", textAlign: "center", borderRight: i < arr.length - 1 ? `1px solid ${T.border}` : "none", display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                    <s.Icon size={14} color={s.accent} style={{ marginBottom: 2 }} />
                    <div className="stat-num" style={{ color: s.accent }}>{s.n}</div>
                    <div style={{ fontSize: 10, color: T.textFaint, textTransform: "uppercase", letterSpacing: "0.1em" }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-img" style={{ flex: "0 0 420px", width: 420, position: "relative", alignSelf: "flex-end", minHeight: 480 }}>
              <TeacherPhoto theme={theme} />
            </div>
          </div>
        </section>

        {/* ── MISSION BAND ── */}
        <div className="mission-band">
          <Lightbulb size={16} color="#0b1120" />
          <span style={{ fontSize: 13.5, fontWeight: 700, color: "#0b1120", fontFamily: "'Cormorant Garamond',serif", letterSpacing: "0.02em" }}>
            "Her mission is simple: to help every student understand Physics with clarity, approach exams with confidence, and achieve results that reflect their true potential."
          </span>
        </div>

        <div className="divider" style={{ height: 1, background: `linear-gradient(90deg,transparent,${isDark ? "rgba(201,168,76,0.18)" : "rgba(201,168,76,0.25)"},transparent)`, margin: "0 48px" }} />

        {/* ── ABOUT ── */}
        <section id="about" ref={registerRef("about")} data-observe className="section-pad" style={{ padding: "72px 48px", position: "relative", overflow: "hidden" }}>
          <GeoBg isDark={isDark} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "start" }}>
              <div>
                <div {...fadeIn("about", 0)}>
                  <div className="section-line">
                    <div className="tag" style={{ background: T.goldDim, border: `1px solid ${T.goldBorder}`, color: T.gold }}><GraduationCap size={11} /> About</div>
                  </div>
                  <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(28px,4vw,42px)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.12, color: T.text, marginBottom: 6 }}>
                    Meet Sunira Agarwal
                  </h2>
                  <p style={{ fontSize: 15, color: T.gold, fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic", marginBottom: 24, letterSpacing: "0.02em" }}>30+ Years of Inspiring Excellence in Physics</p>
                </div>
                <div {...fadeIn("about", 0.1)}>
                  <p style={{ fontSize: 15, color: T.textMid, lineHeight: 1.82, marginBottom: 16 }}>
                    For over three decades, Sunira Agarwal has been helping students overcome their fear of Physics and transform it into one of their strongest subjects. Having taught thousands of students across leading schools — including <strong style={{ color: T.text, fontWeight: 600 }}>22+ years at DPS Faridabad</strong> — she is known for her unique ability to simplify complex concepts, making Physics not only easy to understand but genuinely interesting and enjoyable to learn.
                  </p>
                  <p style={{ fontSize: 15, color: T.textMid, lineHeight: 1.82, marginBottom: 16 }}>
                    Her students consistently appreciate her patient teaching style, conceptual clarity, and unwavering commitment to their success. Whether a student is struggling to grasp fundamentals or aiming for top academic performance, Sunira believes that <em style={{ color: T.text }}>every child can excel</em> when guided with the right approach, encouragement, and mentorship.
                  </p>
                  <div style={{ maxHeight: aboutExpanded ? 500 : 0, overflow: "hidden", transition: "max-height 0.5s cubic-bezier(0.22,1,0.36,1)" }}>
                    <p style={{ fontSize: 15, color: T.textMid, lineHeight: 1.82, marginBottom: 16 }}>
                      Her teaching goes beyond marks and examinations. She helps students develop analytical thinking, logical reasoning, problem-solving abilities, and the confidence to tackle challenging questions independently — skills that benefit them far beyond the classroom.
                    </p>
                    <p style={{ fontSize: 15, color: T.textMid, lineHeight: 1.82, marginBottom: 16 }}>
                      In addition to academic coaching, she has successfully trained students for Olympiads, NTSE, IMO, ISO, and other competitive examinations. As the author of <em style={{ color: T.text }}>Mission NTSE Class 8 and Class 10</em>, Sunira brings together deep subject expertise, proven teaching methodologies, and decades of classroom experience to create a learning environment where students feel supported, motivated, and empowered to perform at their best.
                    </p>
                  </div>
                  <button className="btn" onClick={() => setAboutExpanded(!aboutExpanded)} style={{ fontSize: 13, color: T.gold, background: T.goldDim, border: `1px solid ${T.goldBorder}`, borderRadius: 8, padding: "8px 18px", marginBottom: 28, display: "inline-flex", alignItems: "center", gap: 6 }}>
                    {aboutExpanded ? "Show less" : "Read more"} <ArrowRight size={13} style={{ transform: aboutExpanded ? "rotate(90deg)" : "rotate(0deg)", transition: "transform 0.3s" }} />
                  </button>
                  <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                    {["Mission NTSE · Class 8", "Mission NTSE · Class 10"].map((book, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 16px", borderRadius: 12, background: T.surface, border: `1px solid ${T.goldBorder}`, boxShadow: T.shadowCard }}>
                        <div style={{ width: 34, height: 34, borderRadius: 9, background: T.goldDim, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><BookOpen size={16} color={T.gold} /></div>
                        <div>
                          <div style={{ fontSize: 11, color: T.textFaint, textTransform: "uppercase", letterSpacing: "0.08em" }}>Authored Book</div>
                          <div style={{ fontSize: 13, fontWeight: 600, color: T.text, fontFamily: "'Cormorant Garamond',serif" }}>{book}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div {...fadeIn("about", 0.15)}>
                <div style={{ background: T.surface, border: `1px solid ${T.goldBorder}`, borderRadius: 20, padding: "28px 26px", boxShadow: T.shadowCard, position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg,#c9a84c,#e8c96a)", borderRadius: "20px 20px 0 0" }} />

                  {/* Dotted border accent */}
                  <div style={{ position: "absolute", top: 10, right: 10, width: 60, height: 60, border: `1.5px dashed ${T.goldBorder}`, borderRadius: 12, pointerEvents: "none" }} />

                  <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 19, fontWeight: 700, color: T.text, marginBottom: 20 }}>Why Parents & Students Trust Sunira Agarwal</div>
                  <div className="why-trust-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 24 }}>
                    {whyTrust.map((item, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 9, padding: "10px 12px", borderRadius: 10, background: T.goldDim, border: `1px solid ${T.goldBorder}` }}>
                        <div style={{ width: 18, height: 18, borderRadius: "50%", background: "linear-gradient(135deg,#c9a84c,#e8c96a)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}><Check size={10} color="#0b1120" /></div>
                        <span style={{ fontSize: 12.5, color: T.textMid, lineHeight: 1.45 }}>{item}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 18px", borderRadius: 14, background: isDark ? "rgba(201,168,76,0.05)" : "rgba(201,168,76,0.06)", border: `1px solid ${T.goldBorder}` }}>
                    <div style={{ width: 44, height: 44, borderRadius: 12, background: "linear-gradient(135deg,#c9a84c,#e8c96a)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><School size={22} color="#0b1120" /></div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 700, color: T.text, fontFamily: "'Cormorant Garamond',serif" }}>Delhi Public School, Faridabad</div>
                      <div style={{ fontSize: 12, color: T.textDim, marginTop: 2 }}>22+ years teaching Physics at one of India's most reputed schools</div>
                    </div>
                  </div>
                  <button className="btn" onClick={() => openWA("Hi Sunira ma'am! I'd like to book a free demo class.")} style={{ width: "100%", marginTop: 20, padding: 14, borderRadius: 12, fontSize: 14, fontWeight: 700, color: "#0b1120", background: "linear-gradient(135deg,#c9a84c,#e8c96a)", border: "none", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, boxShadow: "0 6px 22px rgba(201,168,76,0.35)" }}>
                    <MessageSquare size={15} /> Book a Free Demo Class
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="divider" style={{ height: 1, background: `linear-gradient(90deg,transparent,${T.divider},transparent)`, margin: "0 48px" }} />

        {/* ── COURSES ── */}
        <section id="courses" ref={registerRef("courses")} data-observe className="section-pad" style={{ padding: "72px 48px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24, marginBottom: 44 }}>
            <div {...fadeIn("courses", 0)}>
              <div className="section-line">
                <div className="tag" style={{ background: T.goldDim, border: `1px solid ${T.goldBorder}`, color: T.gold }}><BookOpen size={11} /> Courses</div>
              </div>
              <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(28px,4vw,40px)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.15, color: T.text }}>Physics classes for<br />every stage of learning.</h2>
            </div>
            <div {...fadeIn("courses", 0.1)} style={{ fontSize: 14, color: T.textDim, maxWidth: 320, lineHeight: 1.68 }}>
              Class 9 to 12, board exams, and competitive prep — all at ₹500 per month. Taught with clarity, patience, and 30 years of experience.
            </div>
          </div>
          <div className="courses-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 16 }}>
            {courses.map((c, i) => (
              <div key={i} {...fadeIn("courses", 0.1 + i * 0.1)} className="card-hover" style={{ background: c.featured ? (isDark ? "rgba(201,168,76,0.05)" : "rgba(201,168,76,0.04)") : T.surface, border: c.featured ? `1px solid ${T.goldBorder}` : `1px solid ${T.border}`, borderRadius: 18, padding: 28, position: "relative", overflow: "hidden", boxShadow: T.shadowCard }}>
                {c.featured && <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg,#c9a84c,transparent)", borderRadius: "18px 18px 0 0" }} />}
                {/* Dotted square accent */}
                <div style={{ position: "absolute", bottom: 12, right: 12, width: 40, height: 40, border: `1.5px dashed ${c.accent}30`, borderRadius: 8 }} />
                <span style={{ fontSize: 10.5, fontWeight: 600, letterSpacing: "0.07em", color: c.accent, background: `${c.accent}18`, border: `1px solid ${c.accent}30`, borderRadius: 7, padding: "4px 10px", display: "inline-block", marginBottom: 20, textTransform: "uppercase" }}>{c.badge}</span>
                <div style={{ width: 46, height: 46, borderRadius: 13, background: c.accentDim, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14, border: `1px solid ${c.accent}25` }}><c.Icon size={22} color={c.accent} /></div>
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 20, fontWeight: 600, color: T.text, marginBottom: 4, lineHeight: 1.3 }}>{c.title}</div>
                <div style={{ fontSize: 11.5, color: c.accent, marginBottom: 10, fontWeight: 500, letterSpacing: "0.04em" }}>{c.sub}</div>
                <div style={{ fontSize: 13.5, color: T.textDim, lineHeight: 1.68, marginBottom: 22 }}>{c.desc}</div>
                <div style={{ display: "flex", gap: 18, marginBottom: 22 }}>
                  {[{ Icon: Clock, text: c.hours }, { Icon: Users, text: c.enrolled }].map(({ Icon, text }, j) => (
                    <span key={j} style={{ fontSize: 12, color: T.textFaint, display: "flex", alignItems: "center", gap: 5 }}><Icon size={12} color={c.accent} /> {text}</span>
                  ))}
                </div>
                <button className="btn" onClick={() => openWA(`Hi! I'm interested in the ${c.title} class with Sunira ma'am.`)} style={{ width: "100%", padding: "11px", borderRadius: 11, fontSize: 13, fontWeight: 600, background: c.featured ? "linear-gradient(135deg,#25d366,#1aab55)" : T.inputBg, color: c.featured ? "white" : T.textDim, border: c.featured ? "none" : `1px solid ${T.border}`, display: "flex", alignItems: "center", justifyContent: "center", gap: 7, boxShadow: c.featured ? "0 4px 18px rgba(37,211,102,0.28)" : "none" }}>
                  <MessageSquare size={13} /> Enquire on WhatsApp
                </button>
              </div>
            ))}
          </div>
        </section>

        <div className="divider" style={{ height: 1, background: `linear-gradient(90deg,transparent,${T.divider},transparent)`, margin: "0 48px" }} />

        {/* ── FEATURES ── */}
        <section id="features" data-observe className="section-pad" style={{ padding: "72px 48px", position: "relative", overflow: "hidden" }}>
          <GeoBg isDark={isDark} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <div {...fadeIn("features", 0)} style={{ marginBottom: 44 }}>
              <div className="section-line">
                <div className="tag" style={{ background: T.goldDim, border: `1px solid ${T.goldBorder}`, color: T.gold }}><Star size={11} fill={T.gold} /> What You Get</div>
              </div>
              <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(28px,4vw,40px)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.15, color: T.text }}>Physics made simple.<br />Confidence made strong.</h2>
            </div>
            <div className="features-grid">
              {features.map((f, i) => (
                <div key={i} {...fadeIn("features", 0.06 + i * 0.07)} className="card-hover" style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: "26px 24px", position: "relative", overflow: "hidden", boxShadow: T.shadowCard }}>
                  {/* Dotted corner */}
                  <div style={{ position: "absolute", top: -1, right: -1, width: 48, height: 48, borderLeft: `1.5px dashed ${f.accent}25`, borderBottom: `1.5px dashed ${f.accent}25`, borderRadius: "0 16px 0 12px" }} />
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: `${f.accent}15`, border: `1px solid ${f.accent}28`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}><f.Icon size={20} color={f.accent} /></div>
                  <div style={{ fontSize: 15, fontWeight: 600, color: T.text, marginBottom: 9, fontFamily: "'Cormorant Garamond',serif", lineHeight: 1.3 }}>{f.title}</div>
                  <div style={{ fontSize: 13.5, color: T.textDim, lineHeight: 1.68 }}>{f.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="divider" style={{ height: 1, background: `linear-gradient(90deg,transparent,${T.divider},transparent)`, margin: "0 48px" }} />

        {/* ── TESTIMONIALS ── */}
        <section id="testimonials" ref={registerRef("testimonials")} data-observe className="section-pad" style={{ padding: "72px 48px" }}>
          <div {...fadeIn("testimonials", 0)} style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 20, marginBottom: 36 }}>
            <div>
              <div className="section-line">
                <div className="tag" style={{ background: T.blueDim, border: `1px solid rgba(59,130,246,0.28)`, color: T.blue }}><Award size={11} /> Student Results</div>
              </div>
              <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(28px,4vw,40px)", fontWeight: 700, letterSpacing: "-0.02em", color: T.text }}>Students who made it.</h2>
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              <button className="btn" onClick={() => handleNav(-1)} style={{ width: 44, height: 44, borderRadius: 12, background: T.surface, border: `1px solid ${T.border}`, display: "flex", alignItems: "center", justifyContent: "center", color: T.textDim, boxShadow: T.shadowCard }}><ChevronLeft size={20} /></button>
              <button className="btn" onClick={() => handleNav(1)} style={{ width: 44, height: 44, borderRadius: 12, background: T.goldDim, border: `1px solid ${T.goldBorder}`, display: "flex", alignItems: "center", justifyContent: "center", color: T.gold }}><ChevronRight size={20} /></button>
            </div>
          </div>
          <div style={{ position: "relative", overflow: "hidden" }}>
            <div style={{ display: "flex", gap: 16 }}>
              {[-1, 0, 1].map((offset) => {
                const idx = (slideIndex + offset + testimonials.length) % testimonials.length;
                const t = testimonials[idx];
                const isCenter = offset === 0;
                return (
                  <div key={idx + "-" + offset} onClick={() => !isCenter && handleNav(offset)}
                    className={isCenter && sliding ? (slideDir === 1 ? "anim-in-right" : "anim-in-left") : ""}
                    style={{ flex: isCenter ? "0 0 calc(60% - 8px)" : "0 0 calc(20% - 8px)", borderRadius: 16, padding: isCenter ? "24px 24px 20px" : "20px 16px 16px", background: isCenter ? T.surface : T.bgSec, border: isCenter ? `1.5px solid ${t.accent}30` : `1px solid ${T.border}`, position: "relative", overflow: "hidden", cursor: isCenter ? "default" : "pointer", opacity: isCenter ? 1 : 0.5, transform: isCenter ? "scale(1)" : "scale(0.96)", transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)", flexShrink: 0, boxShadow: isCenter ? T.shadowCard : "none" }}>
                    {isCenter && <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg,${t.accent},transparent)`, borderRadius: "16px 16px 0 0" }} />}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: isCenter ? 14 : 10 }}>
                      <div style={{ width: isCenter ? 38 : 30, height: isCenter ? 38 : 30, borderRadius: "50%", background: `${t.accent}18`, border: `1.5px solid ${t.accent}35`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: isCenter ? 12 : 10, fontWeight: 700, color: t.accent }}>{t.initials}</div>
                      {isCenter && <div style={{ background: `${t.accent}18`, border: `1px solid ${t.accent}35`, borderRadius: 8, padding: "4px 10px", fontSize: 12, fontWeight: 700, color: t.accent, fontFamily: "'Cormorant Garamond',serif" }}>{t.score}</div>}
                    </div>
                    <p style={{ fontSize: isCenter ? 14 : 11.5, color: isCenter ? T.textMid : T.textDim, lineHeight: 1.7, marginBottom: isCenter ? 16 : 10, fontStyle: "italic", display: "-webkit-box", WebkitLineClamp: isCenter ? 4 : 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{t.text}</p>
                    <div>
                      <div style={{ fontSize: isCenter ? 13 : 11, fontWeight: 600, color: isCenter ? T.text : T.textFaint, fontFamily: "'Cormorant Garamond',serif" }}>{t.name}</div>
                      {isCenter && <div style={{ fontSize: 11, color: T.textFaint, marginTop: 2 }}>{t.sub}</div>}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 20 }}>
            {testimonials.map((_, i) => (
              <button key={i} className="btn" onClick={() => { setSlideDir(i > slideIndex ? 1 : -1); setSliding(true); setTimeout(() => { setSlideIndex(i); setSliding(false); }, 400); resetAuto(); }} style={{ width: i === slideIndex ? 24 : 8, height: 8, borderRadius: 4, background: i === slideIndex ? T.gold : T.borderMed, border: "none", transition: "all 0.3s", padding: 0 }} />
            ))}
          </div>
        </section>

        <div className="divider" style={{ height: 1, background: `linear-gradient(90deg,transparent,${T.divider},transparent)`, margin: "0 48px" }} />

        {/* ── PRICING ── */}
        <section id="pricing" ref={registerRef("pricing")} data-observe className="section-pad" style={{ padding: "72px 48px" }}>
          <div {...fadeIn("pricing", 0)} style={{ marginBottom: 44 }}>
            <div className="section-line">
              <div className="tag" style={{ background: T.tealDim, border: `1px solid rgba(13,148,136,0.28)`, color: T.teal }}><Zap size={11} /> Pricing</div>
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(28px,4vw,40px)", fontWeight: 700, letterSpacing: "-0.02em", color: T.text, marginBottom: 8 }}>Simple, honest pricing.</h2>
            <p style={{ fontSize: 14.5, color: T.textDim }}>₹500 per month for live online classes — Class 9 & 10 Science and Class 11 & 12 Physics. Free demo class available.</p>
          </div>
          <div className="pricing-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 16 }}>
            {plans.map((plan, i) => (
              <div key={i} {...fadeIn("pricing", 0.1 + i * 0.1)} onMouseEnter={() => setHoveredPlan(i)} onMouseLeave={() => setHoveredPlan(null)} style={{ background: plan.popular ? (isDark ? "rgba(201,168,76,0.05)" : "rgba(201,168,76,0.04)") : T.surface, border: plan.popular ? `1px solid ${T.goldBorder}` : `1px solid ${T.border}`, borderRadius: 18, padding: 28, display: "flex", flexDirection: "column", position: "relative", overflow: "hidden", transform: hoveredPlan === i ? "translateY(-5px)" : "translateY(0)", transition: "transform 0.25s", boxShadow: hoveredPlan === i ? T.shadow : T.shadowCard }}>
                {plan.popular && <>
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg,#c9a84c,#e8c96a)", borderRadius: "18px 18px 0 0" }} />
                  <span className="tag" style={{ background: T.goldDim, border: `1px solid ${T.goldBorder}`, color: T.gold, marginBottom: 16, alignSelf: "flex-start" }}>Most Popular</span>
                </>}
                {!plan.popular && <div style={{ height: 8 }} />}
                {/* Dotted square decoration */}
                <div style={{ position: "absolute", bottom: 14, right: 14, width: 36, height: 36, border: `1.5px dashed ${plan.accent}25`, borderRadius: 8 }} />
                <div style={{ fontSize: 12.5, color: T.textFaint, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10 }}>{plan.name}</div>
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 42, fontWeight: 700, color: T.text, lineHeight: 1, marginBottom: 4 }}>{plan.price}</div>
                <div style={{ fontSize: 12.5, color: T.textFaint, marginBottom: 28 }}>{plan.period}</div>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 11, marginBottom: 28, flex: 1 }}>
                  {plan.features.map((f, j) => (
                    <li key={j} style={{ fontSize: 13.5, color: f.ok ? T.textMid : T.textFaint, display: "flex", alignItems: "center", gap: 10 }}>
                      {f.ok
                        ? <div style={{ width: 20, height: 20, borderRadius: "50%", background: T.tealDim, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><Check size={11} color={T.teal} /></div>
                        : <div style={{ width: 20, height: 20, borderRadius: "50%", background: T.inputBg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><X size={11} color={T.textFaint} /></div>}
                      {f.text}
                    </li>
                  ))}
                </ul>
                <button className="btn" onClick={() => openWA(`Hi Sunira ma'am! I'd like to join the ${plan.name} class.`)} style={{ width: "100%", padding: 13, borderRadius: 11, fontSize: 13.5, fontWeight: 600, background: plan.popular ? "linear-gradient(135deg,#c9a84c,#e8c96a)" : T.inputBg, color: plan.popular ? "#0b1120" : T.textDim, border: plan.popular ? "none" : `1px solid ${T.border}`, display: "flex", alignItems: "center", justifyContent: "center", gap: 7, boxShadow: plan.popular ? "0 6px 22px rgba(201,168,76,0.32)" : "none" }}>
                  <MessageSquare size={14} /> {plan.price === "Free" ? "Book Free Demo" : "Enrol Now"}
                </button>
              </div>
            ))}
          </div>
        </section>

        <div className="divider" style={{ height: 1, background: `linear-gradient(90deg,transparent,${isDark ? "rgba(201,168,76,0.15)" : "rgba(201,168,76,0.22)"},transparent)`, margin: "0 48px" }} />

        {/* ── CONTACT ── */}
        <section id="contact" ref={registerRef("contact")} data-observe className="section-pad" style={{ padding: "72px 48px", position: "relative", overflow: "hidden" }}>
          <GeoBg isDark={isDark} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 56, alignItems: "start" }}>
              <div {...fadeIn("contact", 0)}>
                <div className="section-line">
                  <div className="tag" style={{ background: T.goldDim, border: `1px solid ${T.goldBorder}`, color: T.gold }}>Contact Us</div>
                </div>
                <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(28px,4vw,40px)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.15, color: T.text, marginBottom: 16 }}>Got questions?<br />We're one tap away.</h2>
                <p style={{ fontSize: 15, color: T.textDim, lineHeight: 1.78, marginBottom: 40 }}>Fill the form and we'll reach you via WhatsApp or email — usually within the hour.</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {[
                    { Icon: MessageSquare, label: "WhatsApp", value: "+91 98765 43210", accent: T.emerald, accentDim: "rgba(16,185,129,0.1)", action: () => openWA() },
                    { Icon: Mail, label: "Email", value: "vaishnavkapil412@gmail.com", accent: T.gold, accentDim: T.goldDim, action: openMail },
                  ].map((c, i) => (
                    <div key={i} onClick={c.action} style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 18px", borderRadius: 14, background: T.surface, border: `1px solid ${T.border}`, cursor: "pointer", transition: "all 0.2s", boxShadow: T.shadowCard }}
                      onMouseEnter={(e) => { e.currentTarget.style.borderColor = c.accent + "50"; e.currentTarget.style.transform = "translateX(4px)"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.borderColor = T.border; e.currentTarget.style.transform = ""; }}>
                      <div style={{ width: 40, height: 40, borderRadius: 11, background: c.accentDim, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><c.Icon size={18} color={c.accent} /></div>
                      <div>
                        <div style={{ fontSize: 11.5, color: T.textFaint, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 2 }}>{c.label}</div>
                        <div style={{ fontSize: 13.5, color: T.textMid, fontWeight: 500 }}>{c.value}</div>
                      </div>
                      <ArrowRight size={14} color={T.textFaint} style={{ marginLeft: "auto" }} />
                    </div>
                  ))}
                </div>
              </div>

              <div {...fadeIn("contact", 0.18)}>
                {submitted ? (
                  <div style={{ background: T.tealDim, border: `1px solid rgba(13,148,136,0.22)`, borderRadius: 18, padding: "40px 28px", textAlign: "center" }}>
                    <div style={{ width: 52, height: 52, borderRadius: "50%", background: T.tealDim, border: `2px solid rgba(13,148,136,0.3)`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}><Check size={24} color={T.teal} /></div>
                    <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 20, fontWeight: 700, color: T.text, marginBottom: 8 }}>Message sent!</div>
                    <p style={{ fontSize: 13.5, color: T.textDim, lineHeight: 1.65, marginBottom: 20 }}>Sunira ma'am's team will reply shortly.</p>
                    <button className="btn" onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", course: "", message: "" }); }} style={{ fontSize: 13, color: T.textDim, background: T.inputBg, border: `1px solid ${T.border}`, borderRadius: 9, padding: "9px 22px" }}>Send another</button>
                  </div>
                ) : (
                  <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 18, padding: "24px 22px", boxShadow: T.shadowCard }}>
                    <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 18, fontWeight: 700, color: T.text, marginBottom: 4 }}>Send an Enquiry</div>
                    <p style={{ fontSize: 12.5, color: T.textDim, marginBottom: 20, lineHeight: 1.55 }}>We'll open WhatsApp or Gmail with your details pre-filled.</p>
                    <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
                      <div className="form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                        <div>
                          <label style={{ fontSize: 11.5, color: T.textDim, display: "block", marginBottom: 5, fontWeight: 500 }}>Name <span style={{ color: T.gold }}>*</span></label>
                          <input {...inp("name", "Full name")} style={{ ...inputCss("name"), padding: "9px 12px", fontSize: 13 }} />
                          {errors.name && <div className="form-err"><X size={10} />{errors.name}</div>}
                        </div>
                        <div>
                          <label style={{ fontSize: 11.5, color: T.textDim, display: "block", marginBottom: 5, fontWeight: 500 }}>WhatsApp <span style={{ color: T.gold }}>*</span></label>
                          <input {...inp("phone", "10-digit", "tel")} style={{ ...inputCss("phone"), padding: "9px 12px", fontSize: 13 }} />
                          {errors.phone && <div className="form-err"><X size={10} />{errors.phone}</div>}
                        </div>
                      </div>
                      <div className="form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                        <div>
                          <label style={{ fontSize: 11.5, color: T.textDim, display: "block", marginBottom: 5, fontWeight: 500 }}>Email <span style={{ color: T.textFaint }}>(opt.)</span></label>
                          <input {...inp("email", "you@email.com", "email")} style={{ ...inputCss("email"), padding: "9px 12px", fontSize: 13 }} />
                          {errors.email && <div className="form-err"><X size={10} />{errors.email}</div>}
                        </div>
                        <div>
                          <label style={{ fontSize: 11.5, color: T.textDim, display: "block", marginBottom: 5, fontWeight: 500 }}>Course</label>
                          <select value={form.course} onChange={(e) => setForm((p) => ({ ...p, course: e.target.value }))} style={{ ...inputCss("course"), padding: "9px 12px", fontSize: 13, color: form.course ? T.text : T.textFaint, appearance: "none" }}>
                            <option value="">Select…</option>
                            <option value="Class 9 & 10 Science">Class 9 & 10 Science</option>
                            <option value="Class 11 & 12 Physics">Class 11 & 12 Physics</option>
                            <option value="Olympiad / NTSE Prep">Olympiad / NTSE Prep</option>
                            <option value="Free Demo Class">Free Demo Class</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label style={{ fontSize: 11.5, color: T.textDim, display: "block", marginBottom: 5, fontWeight: 500 }}>Message <span style={{ color: T.textFaint }}>(optional)</span></label>
                        <textarea {...inp("message", "Any specific questions…")} rows={2} style={{ ...inputCss("message"), padding: "9px 12px", fontSize: 13, resize: "vertical", minHeight: 68 }}
                          onFocus={(e) => { e.target.style.borderColor = T.gold; e.target.style.background = T.goldDim; }}
                          onBlur={(e) => { e.target.style.borderColor = T.inputBorder; e.target.style.background = T.inputBg; }}
                        />
                      </div>
                      {emailStatus === "success" && <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 14px", borderRadius: 10, background: T.tealDim, border: `1px solid rgba(13,148,136,0.28)` }}><Check size={15} color={T.teal} /><span style={{ fontSize: 13, color: T.teal, fontWeight: 500 }}>Email sent!</span></div>}
                      {emailStatus === "error" && <div style={{ display: "flex", alignItems: "flex-start", gap: 8, padding: "10px 14px", borderRadius: 10, background: "rgba(244,63,94,0.08)", border: "1px solid rgba(244,63,94,0.28)" }}><X size={15} color={T.rose} style={{ marginTop: 1, flexShrink: 0 }} /><span style={{ fontSize: 12.5, color: T.rose, lineHeight: 1.5 }}>{emailError}</span></div>}
                      <div className="form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 2 }}>
                        <button className="btn" onClick={handleSubmitWA} style={{ padding: "11px", borderRadius: 11, fontSize: 13, fontWeight: 600, background: "linear-gradient(135deg,#25d366,#1aab55)", color: "white", border: "none", display: "flex", alignItems: "center", justifyContent: "center", gap: 7, boxShadow: "0 4px 18px rgba(37,211,102,0.3)" }}>
                          <MessageSquare size={14} /> WhatsApp
                        </button>
                        <button className="btn" onClick={handleSubmitEmail} disabled={emailStatus === "sending"} style={{ padding: "11px", borderRadius: 11, fontSize: 13, fontWeight: 600, background: "linear-gradient(135deg,#c9a84c,#e8c96a)", color: "#0b1120", border: "none", display: "flex", alignItems: "center", justifyContent: "center", gap: 7, opacity: emailStatus === "sending" ? 0.7 : 1 }}>
                          {emailStatus === "sending" ? <><span style={{ width: 13, height: 13, border: "2px solid rgba(0,0,0,0.2)", borderTopColor: "#0b1120", borderRadius: "50%", display: "inline-block", animation: "spin 0.7s linear infinite" }} />Sending…</> : <><Mail size={14} /> Send Email</>}
                        </button>
                      </div>
                      <p style={{ fontSize: 11, color: T.textFaint, textAlign: "center", lineHeight: 1.5 }}>WhatsApp opens a chat · Email sends directly to our inbox</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <div className="divider" style={{ height: 1, background: `linear-gradient(90deg,transparent,${T.divider},transparent)`, margin: "0 48px" }} />

        {/* ── FOOTER ── */}
        <footer className="footer-inner" style={{ padding: "40px 48px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 20, marginBottom: 28 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 32, height: 32, borderRadius: 9, background: "linear-gradient(135deg,#c9a84c,#e8c96a)", display: "flex", alignItems: "center", justifyContent: "center" }}><Atom size={15} color="#0b1120" /></div>
              <div>
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 15, color: T.textDim, fontWeight: 600 }}>Sunira Agarwal · Physics</div>
                <div style={{ fontSize: 10.5, color: T.textFaint, marginTop: 1 }}>Author · Mission NTSE Class 8 & 10 · DPS Faridabad</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <button className="btn" onClick={() => setTheme(isDark ? "light" : "dark")} style={{ width: 36, height: 36, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", background: T.surface, border: `1px solid ${T.border}`, color: isDark ? "#fbbf24" : "#64748b" }}>
                {isDark ? <Sun size={15} /> : <Moon size={15} />}
              </button>
              <button className="btn" onClick={() => openWA()} style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 13, padding: "9px 18px", background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.2)", borderRadius: 9, color: T.emerald }}><MessageSquare size={13} /> WhatsApp</button>
              <button className="btn" onClick={openMail} style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 13, padding: "9px 18px", background: T.goldDim, border: `1px solid ${T.goldBorder}`, borderRadius: 9, color: T.gold }}><Mail size={13} /> Email</button>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 14, paddingTop: 20, borderTop: `1px solid ${T.divider}` }}>
            <span style={{ fontSize: 12.5, color: T.textFaint }}>© 2026 Sunira Agarwal. All rights reserved.</span>
            <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
              {["Privacy", "Terms", "Refund Policy", "Contact"].map((l) => (
                <span key={l} style={{ fontSize: 12.5, color: T.textFaint, cursor: "pointer", transition: "color 0.15s" }}
                  onMouseEnter={(e) => (e.target.style.color = T.textMid)}
                  onMouseLeave={(e) => (e.target.style.color = T.textFaint)}>{l}</span>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}