"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import {
  Atom, Sparkles, ArrowRight, BookOpen, Dna, School,
  Video, MessageCircle, TrendingUp, FileText, Star, Check, X,
  Clock, Users, Mail, MessageSquare, Zap, Award, Target,
  ChevronLeft, ChevronRight, Home, BookOpen as BookIcon,
  BarChart2, CreditCard, Phone, Menu,
} from "lucide-react";

const WHATSAPP_NUMBER = "919876543210";
const WEB3FORMS_KEY = "0272d72a-08b2-495c-ada8-9d69ecc98902";

const GOLD    = "#c9a84c";
const GOLD_DIM= "rgba(201,168,76,0.12)";
const BLUE    = "#4f8ef7";
const BLUE_DIM= "rgba(79,142,247,0.12)";
const TEAL    = "#2dd4bf";
const TEAL_DIM= "rgba(45,212,191,0.12)";
const VIOLET  = "#818cf8";
const VIO_DIM = "rgba(129,140,248,0.12)";
const EMERALD = "#34d399";
const ROSE    = "#fb7185";

export default function PhysicsProLanding() {
  const [activeNav, setActiveNav]     = useState("Home");
  const [scrolled, setScrolled]       = useState(false);
  const [visibleSections, setVisible] = useState({});
  const [form, setForm]               = useState({ name: "", phone: "", email: "", course: "", message: "" });
  const [submitted, setSubmitted]     = useState(false);
  const [emailStatus, setEmailStatus] = useState("idle");
  const [emailError, setEmailError]   = useState("");
  const [errors, setErrors]           = useState({});
  const [hoveredPlan, setHoveredPlan] = useState(null);
  const [slideIndex, setSlideIndex]   = useState(0);
  const [sliding, setSliding]         = useState(false);
  const [slideDir, setSlideDir]       = useState(1); // 1=next, -1=prev
  const [mobileMenuOpen, setMobileMenu] = useState(false);
  const autoRef  = useRef(null);
  const sectionRefs = useRef({});

  const navLinks = [
    { label: "Home",    id: "hero",         Icon: Home       },
    { label: "Courses", id: "courses",      Icon: BookIcon   },
    { label: "Results", id: "testimonials", Icon: BarChart2  },
    { label: "Pricing", id: "pricing",      Icon: CreditCard },
    { label: "Contact", id: "contact",      Icon: Phone      },
  ];

  const registerRef = (id) => (el) => { if (el) sectionRefs.current[id] = el; };

  const scrollToSection = useCallback((item) => {
    setActiveNav(item.label);
    setMobileMenu(false);
    const el = sectionRefs.current[item.id];
    if (el) {
      const offset = window.innerWidth < 768 ? 0 : 72;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const ids = navLinks.map(n => n.id);
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = sectionRefs.current[ids[i]];
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveNav(navLinks[i].label);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) setVisible((p) => ({ ...p, [e.target.id]: true }));
      }),
      { threshold: 0.07 }
    );
    document.querySelectorAll("[data-observe]").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const testimonials = [
    { text: "PhysicsPro changed everything for me. The doubt-clearing sessions helped me fix gaps I'd had since Class 9. Cleared JEE with AIR 312.", name: "Aryan Rao",    sub: "IIT Bombay · JEE 2025, AIR 312",  initials: "AR", accent: GOLD,   score: "AIR 312" },
    { text: "The mock test series was spot-on. Half the questions in my actual NEET paper felt completely familiar. Scored 690 out of 720.",          name: "Simran Mehra", sub: "NEET 2025 · Score 690/720",        initials: "SM", accent: TEAL,   score: "690/720" },
    { text: "Best value for money out of every course I tried. Clear explanations, no fluff, just results. Landed AIR 89.",                           name: "Dev Kumar",    sub: "IIT Delhi · JEE 2025, AIR 89",    initials: "DK", accent: VIOLET, score: "AIR 89"  },
    { text: "From 55% in Class 11 to a 96% board score — the structured revision plan and live sessions made all the difference.",                   name: "Priya Nair",   sub: "CBSE 2025 · 96% in Physics",       initials: "PN", accent: ROSE,   score: "96%"    },
    { text: "I tried three other platforms. Nothing came close. The IIT alumni faculty actually know where students struggle and address it directly.", name: "Rohan Gupta",  sub: "IIT Madras · JEE 2025, AIR 201",  initials: "RG", accent: EMERALD,score: "AIR 201" },
  ];

  const goTo = useCallback((dir) => {
    if (sliding) return;
    setSlideDir(dir);
    setSliding(true);
    setTimeout(() => {
      setSlideIndex((i) => (i + dir + testimonials.length) % testimonials.length);
      setSliding(false);
    }, 420);
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
    const body = `Hi PhysicsPro! 👋\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email || "—"}\nCourse: ${form.course || "—"}\nMessage: ${form.message || "—"}\n\nI'd like to know more about enrolling.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(body)}`, "_blank");
    setSubmitted(true);
  };

  const handleSubmitEmail = async () => {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setErrors({});
    setEmailStatus("sending");
    try {
      const res  = await fetch("https://api.web3forms.com/submit", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ access_key: WEB3FORMS_KEY, subject: `New Enquiry from ${form.name}`, name: form.name, email: form.email || "Not provided", phone: form.phone, course: form.course || "Not specified", message: form.message || "—", botcheck: false }),
      });
      const data = await res.json();
      if (data.success) { setEmailStatus("success"); setForm({ name: "", phone: "", email: "", course: "", message: "" }); }
      else { setEmailStatus("error"); setEmailError(data.message || "Failed to send."); }
    } catch { setEmailStatus("error"); setEmailError("Network error. Please try again."); }
  };

  const openWA  = (msg = "Hi PhysicsPro! I'd like to know more about your courses.") => window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
  const openMail= () => window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=vaishnavkapil412@gmail.com`, "_blank");

  const courses = [
    { badge: "Most Popular", Icon: Atom,   accent: GOLD,   accentDim: GOLD_DIM,  title: "JEE Advanced Complete", desc: "Full syllabus with past-paper analysis and 40 full-length mock tests.", hours: "320 hrs", enrolled: "4,200+", featured: true  },
    { badge: "New Batch",    Icon: Dna,    accent: TEAL,   accentDim: TEAL_DIM,  title: "NEET Physics",          desc: "Concept-first approach tailored to NEET's MCQ pattern and marking scheme.", hours: "180 hrs", enrolled: "2,800+", featured: false },
    { badge: "Class 11–12",  Icon: School, accent: VIOLET, accentDim: VIO_DIM,   title: "Board Exam Prep",       desc: "CBSE & state board mastery with chapter-wise practice and revision sessions.", hours: "120 hrs", enrolled: "5,100+", featured: false },
  ];

  const features = [
    { Icon: Video,         accent: GOLD,    title: "Live + Recorded Classes",   desc: "Attend live or catch up anytime. All classes recorded in full HD with timestamped chapters." },
    { Icon: MessageCircle, accent: TEAL,    title: "Daily Doubt Clearing",      desc: "IIT-alumni teachers respond within 2 hours, every single day." },
    { Icon: TrendingUp,    accent: BLUE,    title: "Progress Analytics",        desc: "Chapter-wise dashboards so you always know exactly where to focus next." },
    { Icon: FileText,      accent: VIOLET,  title: "10,000+ Practice Problems", desc: "Curated from 20 years of JEE, NEET, and board past papers." },
    { Icon: Target,        accent: ROSE,    title: "Mock Test Series",          desc: "40 full-length mocks with percentile analysis and rank predictions." },
    { Icon: Award,         accent: EMERALD, title: "IIT Alumni Faculty",        desc: "Learn from teachers who've cracked the exact exam you're preparing for." },
  ];

  const plans = [
    { name: "Starter", price: "Free",  period: "forever",           accent: "#64748b", popular: false, features: [{ text: "20 free video lessons", ok: true }, { text: "100 practice problems", ok: true }, { text: "Live classes", ok: false }, { text: "Doubt clearing", ok: false }] },
    { name: "Pro",     price: "₹999",  period: "/ month",           accent: GOLD,      popular: true,  features: [{ text: "All video lessons", ok: true }, { text: "Live classes daily", ok: true }, { text: "Doubt clearing", ok: true }, { text: "10,000+ problems", ok: true }] },
    { name: "Annual",  price: "₹699",  period: "/ month · save 30%",accent: TEAL,      popular: false, features: [{ text: "Everything in Pro", ok: true }, { text: "1-on-1 mentorship", ok: true }, { text: "Printed study material", ok: true }, { text: "Parent progress reports", ok: true }] },
  ];

  const inputCss = (field) => ({
    width: "100%", padding: "11px 14px", borderRadius: 10,
    background: "rgba(255,255,255,0.04)",
    border: errors[field] ? "1.5px solid #fb7185" : "1.5px solid rgba(255,255,255,0.08)",
    color: "#f0f4ff", fontSize: 13.5, fontFamily: "inherit", outline: "none",
  });

  const inp = (field, placeholder, type = "text") => ({
    value: form[field], type, placeholder,
    onChange: (e) => setForm((p) => ({ ...p, [field]: e.target.value })),
    style: inputCss(field),
    onFocus: (e) => { e.target.style.borderColor = GOLD; e.target.style.background = "rgba(201,168,76,0.05)"; },
    onBlur:  (e) => { e.target.style.borderColor = errors[field] ? "#fb7185" : "rgba(255,255,255,0.08)"; e.target.style.background = "rgba(255,255,255,0.04)"; },
  });

  // Capsule slider logic — prev / current / next
  const prev = (slideIndex - 1 + testimonials.length) % testimonials.length;
  const next = (slideIndex + 1) % testimonials.length;
  const tPrev = testimonials[prev];
  const tCurr = testimonials[slideIndex];
  const tNext = testimonials[next];

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#0b1120", color: "#f0f4ff", overflowX: "hidden", minHeight: "100vh", paddingBottom: 72 }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500;600&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}
        ::selection{background:rgba(201,168,76,0.25);}
        input::placeholder,textarea::placeholder{color:rgba(180,195,230,0.25);}
        select option{background:#111827;color:#f0f4ff;}
        .btn{cursor:pointer;transition:all 0.2s cubic-bezier(0.22,1,0.36,1);border:none;font-family:inherit;}
        .btn:hover{transform:translateY(-2px);}
        .btn:active{transform:translateY(0) scale(0.97);}
        .nav-link{transition:all 0.18s;cursor:pointer;user-select:none;}
        .nav-link:hover{color:#f0f4ff!important;}
        .wa-float{position:fixed;bottom:88px;right:20px;z-index:80;width:52px;height:52px;border-radius:50%;background:linear-gradient(135deg,#25d366,#128c7e);display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 6px 24px rgba(37,211,102,0.4);transition:all 0.22s;border:none;}
        .wa-float:hover{transform:scale(1.1) translateY(-2px);}
        .wa-float svg{width:24px;height:24px;fill:white;}
        @keyframes spin{to{transform:rotate(360deg);}}
        .form-err{font-size:11.5px;color:#fb7185;margin-top:5px;display:flex;align-items:center;gap:4px;}
        .grid-dots{background-image:radial-gradient(rgba(255,255,255,0.04) 1px,transparent 1px);background-size:28px 28px;}
        .tag{display:inline-flex;align-items:center;gap:5px;font-size:11px;font-weight:500;letter-spacing:0.08em;text-transform:uppercase;padding:4px 12px;border-radius:20px;}
        @keyframes pulse-glow{0%,100%{opacity:0.4;transform:scale(1);}50%{opacity:0.65;transform:scale(1.03);}}
        .stat-num{font-family:'Playfair Display',serif;font-size:26px;font-weight:700;}
        .features-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;}

        /* Slider */
        .slider-track{display:flex;align-items:stretch;gap:16px;position:relative;}
        .slide-card{border-radius:20px;padding:28px;flex:0 0 auto;transition:all 0.42s cubic-bezier(0.4,0,0.2,1);}
        .slide-main{width:100%;max-width:520px;background:rgba(255,255,255,0.04);border:1.5px solid rgba(201,168,76,0.25);position:relative;z-index:2;}
        .slide-side{width:220px;background:rgba(255,255,255,0.015);border:1px solid rgba(255,255,255,0.06);opacity:0.5;transform:scale(0.94);z-index:1;cursor:pointer;}
        .slide-side:hover{opacity:0.72;transform:scale(0.96);}

        /* slide in/out animation */
        @keyframes slideInRight{from{opacity:0;transform:translateX(60px) scale(0.95);}to{opacity:1;transform:translateX(0) scale(1);}}
        @keyframes slideInLeft{from{opacity:0;transform:translateX(-60px) scale(0.95);}to{opacity:1;transform:translateX(0) scale(1);}}
        @keyframes slideOutRight{from{opacity:1;transform:translateX(0);}to{opacity:0;transform:translateX(60px);}}
        @keyframes slideOutLeft{from{opacity:1;transform:translateX(0);}to{opacity:0;transform:translateX(-60px);}}
        .anim-in-right{animation:slideInRight 0.42s cubic-bezier(0.4,0,0.2,1) forwards;}
        .anim-in-left{animation:slideInLeft 0.42s cubic-bezier(0.4,0,0.2,1) forwards;}

        /* Bottom mobile nav */
        .bottom-nav{
          display:none;
          position:fixed;bottom:0;left:0;right:0;z-index:90;
          background:rgba(11,17,32,0.96);
          backdrop-filter:blur(20px) saturate(1.8);
          border-top:1px solid rgba(201,168,76,0.12);
          padding:8px 0 calc(8px + env(safe-area-inset-bottom));
        }
        .bottom-nav-inner{display:flex;justify-content:space-around;align-items:center;}
        .bottom-nav-item{display:flex;flex-direction:column;align-items:center;gap:3px;padding:6px 14px;border-radius:12px;cursor:pointer;transition:all 0.18s;border:none;background:transparent;font-family:inherit;}
        .bottom-nav-item span{font-size:10px;font-weight:500;letter-spacing:0.04em;}
        .bottom-nav-item.active{background:rgba(201,168,76,0.1);}

        @media(max-width:768px){
          .bottom-nav{display:block;}
          .desktop-nav{display:none!important;}
          .features-grid{grid-template-columns:repeat(2,1fr);}
          .slide-side{display:none;}
          .slider-track{justify-content:center;}
          .slide-main{max-width:100%;}
          .hero-pad{padding:72px 20px 64px!important;}
          .section-pad{padding:56px 20px!important;}
          .stats-wrap{flex-wrap:wrap;}
          .stat-cell{min-width:50%;flex:1;}
          .courses-grid{grid-template-columns:1fr!important;}
          .pricing-grid{grid-template-columns:1fr!important;}
          .contact-grid{grid-template-columns:1fr!important;}
          .form-row{grid-template-columns:1fr!important;}
        }
        @media(max-width:480px){
          .features-grid{grid-template-columns:1fr;}
        }
        @media(min-width:769px){
          .wa-float{bottom:28px;right:28px;}
        }
      `}</style>

      {/* WhatsApp Float */}
      <button className="wa-float btn" onClick={() => openWA()}>
        <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </button>

      {/* Desktop Navbar */}
      <nav className="desktop-nav" style={{
        position: "sticky", top: 0, zIndex: 50,
        padding: "16px 48px", display: "flex", alignItems: "center", justifyContent: "space-between",
        background: scrolled ? "rgba(11,17,32,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px) saturate(1.6)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
        transition: "all 0.35s ease",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, cursor: "pointer" }} onClick={() => scrollToSection(navLinks[0])}>
          <div style={{ width: 38, height: 38, borderRadius: 10, background: `linear-gradient(135deg, ${GOLD}, #e8c96a)`, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: `0 4px 18px rgba(201,168,76,0.4)` }}>
            <Atom size={18} color="#0b1120" />
          </div>
          <div>
            <div style={{ fontSize: 16, fontWeight: 600, fontFamily: "'Playfair Display', serif", color: "#f0f4ff" }}>PhysicsPro</div>
            <div style={{ fontSize: 9.5, color: GOLD, letterSpacing: "0.14em", textTransform: "uppercase", display: "flex", alignItems: "center", gap: 3 }}><Sparkles size={8} /> Online Classes</div>
          </div>
        </div>

        <ul style={{ display: "flex", listStyle: "none", gap: 0, alignItems: "center" }}>
          {navLinks.map((n) => (
            <li key={n.label}>
              <span className="nav-link" onClick={() => scrollToSection(n)} style={{
                fontSize: 13.5, padding: "8px 16px", borderRadius: 8, display: "block",
                color: activeNav === n.label ? GOLD : "rgba(180,195,230,0.45)",
                fontWeight: activeNav === n.label ? 500 : 400,
                borderBottom: activeNav === n.label ? `1.5px solid ${GOLD}` : "1.5px solid transparent",
              }}>{n.label}</span>
            </li>
          ))}
        </ul>

        <div style={{ display: "flex", gap: 10 }}>
          <button className="btn" onClick={() => openWA()} style={{ fontSize: 13, color: "#34d399", background: "rgba(52,211,153,0.08)", border: "1px solid rgba(52,211,153,0.22)", borderRadius: 9, padding: "9px 18px", display: "flex", alignItems: "center", gap: 7 }}>
            <MessageSquare size={13} /> WhatsApp
          </button>
          <button className="btn" onClick={openMail} style={{ fontSize: 13, fontWeight: 600, color: "#0b1120", background: `linear-gradient(135deg, ${GOLD}, #e8c96a)`, border: "none", borderRadius: 9, padding: "9px 20px", display: "flex", alignItems: "center", gap: 7, boxShadow: `0 4px 16px rgba(201,168,76,0.35)` }}>
            Enroll Now <ArrowRight size={13} />
          </button>
        </div>
      </nav>

      {/* Mobile Bottom Navbar */}
      <nav className="bottom-nav">
        <div className="bottom-nav-inner">
          {navLinks.map((n) => (
            <button key={n.label} className={`bottom-nav-item${activeNav === n.label ? " active" : ""}`} onClick={() => scrollToSection(n)}>
              <n.Icon size={20} color={activeNav === n.label ? GOLD : "rgba(180,195,230,0.4)"} />
              <span style={{ color: activeNav === n.label ? GOLD : "rgba(180,195,230,0.4)" }}>{n.label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* ── HERO ── */}
      <section id="hero" ref={registerRef("hero")} data-observe className="hero-pad" style={{ padding: "96px 48px 88px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: -120, right: "5%", width: 640, height: 640, borderRadius: "50%", background: `radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 65%)`, animation: "pulse-glow 7s ease-in-out infinite" }} />
          <div style={{ position: "absolute", bottom: -60, left: "2%", width: 420, height: 420, borderRadius: "50%", background: `radial-gradient(circle, rgba(79,142,247,0.06) 0%, transparent 65%)` }} />
          <div className="grid-dots" style={{ position: "absolute", inset: 0, opacity: 0.5 }} />
          <div style={{ position: "absolute", right: "4%", top: "50%", transform: "translateY(-50%)", opacity: 0.055, pointerEvents: "none" }}>
            <svg width="400" height="400" viewBox="0 0 420 420" fill="none">
              <circle cx="210" cy="210" r="38" fill={GOLD}/>
              <ellipse cx="210" cy="210" rx="178" ry="58" stroke={GOLD} strokeWidth="1.5" fill="none"/>
              <ellipse cx="210" cy="210" rx="178" ry="58" stroke={GOLD} strokeWidth="1.5" fill="none" transform="rotate(60 210 210)"/>
              <ellipse cx="210" cy="210" rx="178" ry="58" stroke={GOLD} strokeWidth="1.5" fill="none" transform="rotate(120 210 210)"/>
              <circle cx="388" cy="210" r="9" fill={GOLD}/><circle cx="121" cy="55" r="9" fill={BLUE}/><circle cx="121" cy="365" r="9" fill={TEAL}/>
            </svg>
          </div>
        </div>
        <div style={{ maxWidth: 700, position: "relative" }}>
          <div {...fadeIn("hero", 0)}>
            <div className="tag" style={{ background: GOLD_DIM, border: `1px solid rgba(201,168,76,0.28)`, color: GOLD, marginBottom: 28 }}>
              <Zap size={11} fill={GOLD} /> Batch 2026 · JEE · NEET · Board Exams — Now Open
            </div>
          </div>
          <div {...fadeIn("hero", 0.1)}>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(40px, 6.5vw, 70px)", fontWeight: 700, lineHeight: 1.08, letterSpacing: "-0.02em", marginBottom: 24, color: "#f0f4ff" }}>
              Physics made{" "}
              <span style={{ fontStyle: "italic", background: `linear-gradient(135deg, ${GOLD}, #e8c96a)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>crystal clear.</span>
            </h1>
          </div>
          <div {...fadeIn("hero", 0.2)}>
            <p style={{ fontSize: 17, color: "rgba(180,195,230,0.5)", maxWidth: 490, lineHeight: 1.78, marginBottom: 40 }}>
              Live classes, recorded sessions, and 1-on-1 doubt clearing — taught by IIT alumni who've cracked the exact exams you're preparing for.
            </p>
          </div>
          <div {...fadeIn("hero", 0.3)} style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 64 }}>
            <button className="btn" onClick={() => openWA("Hi PhysicsPro! I want to enroll.")} style={{ fontSize: 14.5, fontWeight: 600, color: "white", background: "linear-gradient(135deg,#25d366,#1aab55)", border: "none", borderRadius: 12, padding: "14px 30px", display: "inline-flex", alignItems: "center", gap: 9, boxShadow: "0 6px 24px rgba(37,211,102,0.38)" }}>
              <MessageSquare size={16} /> Chat on WhatsApp
            </button>
            <button className="btn" onClick={() => scrollToSection(navLinks[1])} style={{ fontSize: 14.5, fontWeight: 500, color: GOLD, background: "transparent", border: `1px solid rgba(201,168,76,0.3)`, borderRadius: 12, padding: "14px 28px", display: "inline-flex", alignItems: "center", gap: 9 }}>
              View Courses <ArrowRight size={15} />
            </button>
          </div>
          <div {...fadeIn("hero", 0.4)} style={{ display: "flex", gap: 0, flexWrap: "wrap", borderRadius: 16, overflow: "hidden", border: "1px solid rgba(255,255,255,0.07)", width: "fit-content", background: "rgba(255,255,255,0.02)" }} className="stats-wrap">
            {[{ n: "12,400+", l: "Students", accent: GOLD }, { n: "340+", l: "IIT Selections", accent: BLUE }, { n: "98%", l: "Pass Rate", accent: TEAL }, { n: "4.9 ★", l: "Rating", accent: VIOLET }].map((s, i, arr) => (
              <div key={i} className="stat-cell" style={{ padding: "20px 28px", textAlign: "center", borderRight: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
                <div className="stat-num" style={{ color: s.accent }}>{s.n}</div>
                <div style={{ fontSize: 10.5, color: "rgba(180,195,230,0.35)", marginTop: 4, textTransform: "uppercase", letterSpacing: "0.1em" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ height: 1, background: `linear-gradient(90deg, transparent, rgba(201,168,76,0.18), transparent)`, margin: "0 48px" }} />

      {/* ── COURSES ── */}
      <section id="courses" ref={registerRef("courses")} data-observe className="section-pad" style={{ padding: "72px 48px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24, marginBottom: 44 }}>
          <div {...fadeIn("courses", 0)}>
            <div className="tag" style={{ background: GOLD_DIM, border: `1px solid rgba(201,168,76,0.22)`, color: GOLD, marginBottom: 14 }}><BookOpen size={11} /> Courses</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px,4vw,40px)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.15, color: "#f0f4ff" }}>Everything you need<br />to score top ranks.</h2>
          </div>
          <div {...fadeIn("courses", 0.1)} style={{ fontSize: 14, color: "rgba(180,195,230,0.38)", maxWidth: 320, lineHeight: 1.68 }}>From mechanics to modern physics — structured, exam-focused, and taught with absolute clarity.</div>
        </div>
        <div className="courses-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
          {courses.map((c, i) => (
            <div key={i} className="btn" {...fadeIn("courses", 0.1 + i * 0.1)} style={{ background: c.featured ? `rgba(201,168,76,0.05)` : "rgba(255,255,255,0.025)", border: c.featured ? `1px solid rgba(201,168,76,0.28)` : "1px solid rgba(255,255,255,0.07)", borderRadius: 18, padding: 28, position: "relative", overflow: "hidden", transition: "transform 0.25s, box-shadow 0.25s" }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-5px)"; e.currentTarget.style.boxShadow = `0 12px 40px rgba(0,0,0,0.3)`; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}>
              {c.featured && <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, ${GOLD}, transparent)`, borderRadius: "18px 18px 0 0" }} />}
              <span style={{ fontSize: 10.5, fontWeight: 600, letterSpacing: "0.07em", color: c.accent, background: c.accentDim, border: `1px solid ${c.accent}30`, borderRadius: 7, padding: "4px 10px", display: "inline-block", marginBottom: 20, textTransform: "uppercase" }}>{c.badge}</span>
              <div style={{ width: 46, height: 46, borderRadius: 13, background: c.accentDim, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18, border: `1px solid ${c.accent}20` }}><c.Icon size={22} color={c.accent} /></div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 19, fontWeight: 600, color: "#f0f4ff", marginBottom: 10, lineHeight: 1.3 }}>{c.title}</div>
              <div style={{ fontSize: 13.5, color: "rgba(180,195,230,0.42)", lineHeight: 1.68, marginBottom: 22 }}>{c.desc}</div>
              <div style={{ display: "flex", gap: 18, marginBottom: 22 }}>
                {[{ Icon: Clock, text: c.hours }, { Icon: Users, text: c.enrolled }].map(({ Icon, text }, j) => (
                  <span key={j} style={{ fontSize: 12, color: "rgba(180,195,230,0.32)", display: "flex", alignItems: "center", gap: 5 }}><Icon size={12} color={c.accent} /> {text}</span>
                ))}
              </div>
              <button className="btn" onClick={() => openWA(`Hi! I'm interested in the ${c.title} course.`)} style={{ width: "100%", padding: "11px", borderRadius: 11, fontSize: 13, fontWeight: 600, background: c.featured ? "linear-gradient(135deg, #25d366, #1aab55)" : "rgba(255,255,255,0.04)", color: c.featured ? "white" : "rgba(180,195,230,0.45)", border: c.featured ? "none" : "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", gap: 7, boxShadow: c.featured ? "0 4px 18px rgba(37,211,102,0.28)" : "none" }}>
                <MessageSquare size={13} /> Enquire on WhatsApp
              </button>
            </div>
          ))}
        </div>
      </section>

      <div style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)", margin: "0 48px" }} />

      {/* ── FEATURES 3+3 ── */}
      <section id="features" data-observe className="section-pad" style={{ padding: "72px 48px" }}>
        <div {...fadeIn("features", 0)} style={{ marginBottom: 44 }}>
          <div className="tag" style={{ background: GOLD_DIM, border: `1px solid rgba(201,168,76,0.22)`, color: GOLD, marginBottom: 14 }}><Star size={11} fill={GOLD} /> Why PhysicsPro</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px,4vw,40px)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.15, color: "#f0f4ff" }}>Learning that actually<br />moves the needle.</h2>
        </div>
        <div className="features-grid">
          {features.map((f, i) => (
            <div key={i} {...fadeIn("features", 0.06 + i * 0.07)} style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16, padding: "26px 24px", position: "relative", overflow: "hidden", transition: "transform 0.22s, border-color 0.22s" }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.borderColor = `${f.accent}30`; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = ""; e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"; }}>
              <div style={{ position: "absolute", top: -20, left: -20, width: 72, height: 72, borderRadius: "50%", background: `${f.accent}10`, pointerEvents: "none" }} />
              <div style={{ width: 44, height: 44, borderRadius: 12, background: `${f.accent}14`, border: `1px solid ${f.accent}28`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}><f.Icon size={20} color={f.accent} /></div>
              <div style={{ fontSize: 15, fontWeight: 600, color: "#f0f4ff", marginBottom: 9, fontFamily: "'Playfair Display', serif", lineHeight: 1.3 }}>{f.title}</div>
              <div style={{ fontSize: 13.5, color: "rgba(180,195,230,0.4)", lineHeight: 1.68 }}>{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <div style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)", margin: "0 48px" }} />

      {/* ── TESTIMONIALS — CAPSULE SLIDER ── */}
      <section id="testimonials" ref={registerRef("testimonials")} data-observe className="section-pad" style={{ padding: "72px 48px" }}>
        <div {...fadeIn("testimonials", 0)} style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 20, marginBottom: 44 }}>
          <div>
            <div className="tag" style={{ background: BLUE_DIM, border: `1px solid rgba(79,142,247,0.22)`, color: BLUE, marginBottom: 14 }}><Award size={11} /> Student Results</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px,4vw,40px)", fontWeight: 700, letterSpacing: "-0.02em", color: "#f0f4ff" }}>Students who made it.</h2>
          </div>
          {/* Nav arrows */}
          <div style={{ display: "flex", gap: 10 }}>
            <button className="btn" onClick={() => handleNav(-1)} style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(180,195,230,0.6)" }}>
              <ChevronLeft size={20} />
            </button>
            <button className="btn" onClick={() => handleNav(1)} style={{ width: 44, height: 44, borderRadius: 12, background: GOLD_DIM, border: `1px solid rgba(201,168,76,0.28)`, display: "flex", alignItems: "center", justifyContent: "center", color: GOLD }}>
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Capsule slider */}
        <div style={{ position: "relative", overflow: "hidden" }}>
          <div className="slider-track" style={{ display: "flex", alignItems: "stretch", gap: 16 }}>
            {/* Prev ghost */}
            <div className="slide-card slide-side" onClick={() => handleNav(-1)} style={{ display: "flex", flexDirection: "column", justifyContent: "center", minHeight: 280 }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 44, lineHeight: 0.8, color: `${tPrev.accent}15`, marginBottom: 12, fontStyle: "italic" }}>"</div>
              <p style={{ fontSize: 13, color: "rgba(180,195,230,0.4)", lineHeight: 1.65, fontStyle: "italic", marginBottom: 20, display: "-webkit-box", WebkitLineClamp: 4, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{tPrev.text}</p>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 32, height: 32, borderRadius: "50%", background: `${tPrev.accent}18`, border: `2px solid ${tPrev.accent}38`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, color: tPrev.accent }}>{tPrev.initials}</div>
                <div style={{ fontSize: 12, fontWeight: 600, color: "rgba(180,195,230,0.45)", fontFamily: "'Playfair Display', serif" }}>{tPrev.name}</div>
              </div>
            </div>

            {/* Main card */}
            <div className={`slide-card slide-main ${sliding ? (slideDir === 1 ? "anim-in-right" : "anim-in-left") : ""}`} style={{ display: "flex", flexDirection: "column", minHeight: 320, flex: 1, maxWidth: 600 }}>
              {/* Top accent line */}
              <div style={{ position: "absolute", top: 0, left: 28, right: 28, height: 2, background: `linear-gradient(90deg, ${tCurr.accent}, transparent)`, borderRadius: 2 }} />
              {/* Score badge */}
              <div style={{ position: "absolute", top: 18, right: 20 }}>
                <div style={{ background: `${tCurr.accent}18`, border: `1px solid ${tCurr.accent}38`, borderRadius: 10, padding: "5px 12px", fontSize: 13, fontWeight: 700, color: tCurr.accent, fontFamily: "'Playfair Display', serif" }}>{tCurr.score}</div>
              </div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 56, lineHeight: 0.8, color: `${tCurr.accent}18`, marginBottom: 14, fontStyle: "italic" }}>"</div>
              <p style={{ fontSize: 15.5, color: "rgba(180,195,230,0.62)", lineHeight: 1.8, marginBottom: 32, fontStyle: "italic", flex: 1 }}>{tCurr.text}</p>
              <div style={{ display: "flex", alignItems: "center", gap: 14, borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 20 }}>
                <div style={{ width: 46, height: 46, borderRadius: "50%", background: `${tCurr.accent}18`, border: `2px solid ${tCurr.accent}40`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700, color: tCurr.accent, flexShrink: 0 }}>{tCurr.initials}</div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 600, color: "#f0f4ff", fontFamily: "'Playfair Display', serif" }}>{tCurr.name}</div>
                  <div style={{ fontSize: 12, color: "rgba(180,195,230,0.3)", marginTop: 3 }}>{tCurr.sub}</div>
                </div>
              </div>
            </div>

            {/* Next ghost */}
            <div className="slide-card slide-side" onClick={() => handleNav(1)} style={{ display: "flex", flexDirection: "column", justifyContent: "center", minHeight: 280 }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 44, lineHeight: 0.8, color: `${tNext.accent}15`, marginBottom: 12, fontStyle: "italic" }}>"</div>
              <p style={{ fontSize: 13, color: "rgba(180,195,230,0.4)", lineHeight: 1.65, fontStyle: "italic", marginBottom: 20, display: "-webkit-box", WebkitLineClamp: 4, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{tNext.text}</p>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 32, height: 32, borderRadius: "50%", background: `${tNext.accent}18`, border: `2px solid ${tNext.accent}38`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, color: tNext.accent }}>{tNext.initials}</div>
                <div style={{ fontSize: 12, fontWeight: 600, color: "rgba(180,195,230,0.45)", fontFamily: "'Playfair Display', serif" }}>{tNext.name}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Dot indicators */}
        <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 28 }}>
          {testimonials.map((_, i) => (
            <button key={i} className="btn" onClick={() => { setSlideDir(i > slideIndex ? 1 : -1); setSliding(true); setTimeout(() => { setSlideIndex(i); setSliding(false); }, 420); resetAuto(); }} style={{ width: i === slideIndex ? 24 : 8, height: 8, borderRadius: 4, background: i === slideIndex ? GOLD : "rgba(255,255,255,0.15)", border: "none", transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)", padding: 0 }} />
          ))}
        </div>
      </section>

      <div style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)", margin: "0 48px" }} />

      {/* ── PRICING ── */}
      <section id="pricing" ref={registerRef("pricing")} data-observe className="section-pad" style={{ padding: "72px 48px" }}>
        <div {...fadeIn("pricing", 0)} style={{ marginBottom: 44 }}>
          <div className="tag" style={{ background: TEAL_DIM, border: `1px solid rgba(45,212,191,0.22)`, color: TEAL, marginBottom: 14 }}><Zap size={11} /> Pricing</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px,4vw,40px)", fontWeight: 700, letterSpacing: "-0.02em", color: "#f0f4ff", marginBottom: 8 }}>Simple, honest pricing.</h2>
          <p style={{ fontSize: 14.5, color: "rgba(180,195,230,0.38)" }}>No hidden fees. Cancel anytime.</p>
        </div>
        <div className="pricing-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
          {plans.map((plan, i) => (
            <div key={i} {...fadeIn("pricing", 0.1 + i * 0.1)} onMouseEnter={() => setHoveredPlan(i)} onMouseLeave={() => setHoveredPlan(null)} style={{ background: plan.popular ? "rgba(201,168,76,0.05)" : "rgba(255,255,255,0.025)", border: plan.popular ? `1px solid rgba(201,168,76,0.32)` : "1px solid rgba(255,255,255,0.07)", borderRadius: 18, padding: 28, display: "flex", flexDirection: "column", position: "relative", overflow: "hidden", transform: hoveredPlan === i ? "translateY(-5px)" : "translateY(0)", transition: "transform 0.25s" }}>
              {plan.popular && (
                <>
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, ${GOLD}, #e8c96a)`, borderRadius: "18px 18px 0 0" }} />
                  <span className="tag" style={{ background: GOLD_DIM, border: `1px solid rgba(201,168,76,0.3)`, color: GOLD, marginBottom: 16, alignSelf: "flex-start" }}>Most Popular</span>
                </>
              )}
              {!plan.popular && <div style={{ height: 8 }} />}
              <div style={{ fontSize: 12.5, color: "rgba(180,195,230,0.38)", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10 }}>{plan.name}</div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 42, fontWeight: 700, color: "#f0f4ff", lineHeight: 1, marginBottom: 4 }}>{plan.price}</div>
              <div style={{ fontSize: 12.5, color: "rgba(180,195,230,0.28)", marginBottom: 28 }}>{plan.period}</div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 11, marginBottom: 28, flex: 1 }}>
                {plan.features.map((f, j) => (
                  <li key={j} style={{ fontSize: 13.5, color: f.ok ? "rgba(180,195,230,0.6)" : "rgba(180,195,230,0.2)", display: "flex", alignItems: "center", gap: 10 }}>
                    {f.ok ? <div style={{ width: 20, height: 20, borderRadius: "50%", background: TEAL_DIM, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><Check size={11} color={TEAL} /></div>
                           : <div style={{ width: 20, height: 20, borderRadius: "50%", background: "rgba(255,255,255,0.04)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><X size={11} color="rgba(180,195,230,0.2)" /></div>}
                    {f.text}
                  </li>
                ))}
              </ul>
              <button className="btn" onClick={() => openWA(`Hi! I'd like to subscribe to the PhysicsPro ${plan.name} plan.`)} style={{ width: "100%", padding: 13, borderRadius: 11, fontSize: 13.5, fontWeight: 600, background: plan.popular ? `linear-gradient(135deg, ${GOLD}, #e8c96a)` : "rgba(255,255,255,0.05)", color: plan.popular ? "#0b1120" : "rgba(180,195,230,0.5)", border: plan.popular ? "none" : "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", gap: 7, boxShadow: plan.popular ? `0 6px 22px rgba(201,168,76,0.32)` : "none" }}>
                <MessageSquare size={14} /> {plan.popular ? "Enroll Now" : plan.price === "Free" ? "Get Started" : "Get Annual"}
              </button>
            </div>
          ))}
        </div>
      </section>

      <div style={{ height: 1, background: `linear-gradient(90deg, transparent, rgba(201,168,76,0.15), transparent)`, margin: "0 48px" }} />

      {/* ── CONTACT ── */}
      <section id="contact" ref={registerRef("contact")} data-observe className="section-pad" style={{ padding: "72px 48px" }}>
        <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 56, alignItems: "start" }}>
          <div {...fadeIn("contact", 0)}>
            <div className="tag" style={{ background: GOLD_DIM, border: `1px solid rgba(201,168,76,0.22)`, color: GOLD, marginBottom: 16 }}>Contact Us</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px,4vw,40px)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.15, color: "#f0f4ff", marginBottom: 16 }}>Got questions?<br />We're one tap away.</h2>
            <p style={{ fontSize: 15, color: "rgba(180,195,230,0.38)", lineHeight: 1.78, marginBottom: 40 }}>Fill the form and we'll reach you instantly via WhatsApp or email.</p>
            
          </div>

          <div {...fadeIn("contact", 0.18)}>
            {submitted ? (
              <div style={{ background: TEAL_DIM, border: `1px solid rgba(45,212,191,0.22)`, borderRadius: 18, padding: "40px 28px", textAlign: "center" }}>
                <div style={{ width: 52, height: 52, borderRadius: "50%", background: TEAL_DIM, border: `2px solid rgba(45,212,191,0.3)`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}><Check size={24} color={TEAL} /></div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: "#f0f4ff", marginBottom: 8 }}>Message sent!</div>
                <p style={{ fontSize: 13.5, color: "rgba(180,195,230,0.42)", lineHeight: 1.65, marginBottom: 20 }}>Our team will reply shortly.</p>
                <button className="btn" onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", course: "", message: "" }); }} style={{ fontSize: 13, color: "rgba(180,195,230,0.45)", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 9, padding: "9px 22px" }}>Send another</button>
              </div>
            ) : (
              <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 18, padding: "24px 22px" }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: "#f0f4ff", marginBottom: 4 }}>Send an Enquiry</div>
                <p style={{ fontSize: 12.5, color: "rgba(180,195,230,0.32)", marginBottom: 20, lineHeight: 1.55 }}>We'll open WhatsApp or Gmail with your details pre-filled.</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
                  <div className="form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                    <div>
                      <label style={{ fontSize: 11.5, color: "rgba(180,195,230,0.4)", display: "block", marginBottom: 5, fontWeight: 500 }}>Name <span style={{ color: GOLD }}>*</span></label>
                      <input {...inp("name", "Full name")} style={{ ...inputCss("name"), padding: "9px 12px", fontSize: 13 }} />
                      {errors.name && <div className="form-err"><X size={10} />{errors.name}</div>}
                    </div>
                    <div>
                      <label style={{ fontSize: 11.5, color: "rgba(180,195,230,0.4)", display: "block", marginBottom: 5, fontWeight: 500 }}>WhatsApp <span style={{ color: GOLD }}>*</span></label>
                      <input {...inp("phone", "10-digit", "tel")} style={{ ...inputCss("phone"), padding: "9px 12px", fontSize: 13 }} />
                      {errors.phone && <div className="form-err"><X size={10} />{errors.phone}</div>}
                    </div>
                  </div>
                  <div className="form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                    <div>
                      <label style={{ fontSize: 11.5, color: "rgba(180,195,230,0.4)", display: "block", marginBottom: 5, fontWeight: 500 }}>Email <span style={{ color: "rgba(180,195,230,0.2)" }}>(opt.)</span></label>
                      <input {...inp("email", "you@email.com", "email")} style={{ ...inputCss("email"), padding: "9px 12px", fontSize: 13 }} />
                      {errors.email && <div className="form-err"><X size={10} />{errors.email}</div>}
                    </div>
                    <div>
                      <label style={{ fontSize: 11.5, color: "rgba(180,195,230,0.4)", display: "block", marginBottom: 5, fontWeight: 500 }}>Course</label>
                      <select value={form.course} onChange={(e) => setForm((p) => ({ ...p, course: e.target.value }))} style={{ ...inputCss("course"), padding: "9px 12px", fontSize: 13, color: form.course ? "#f0f4ff" : "rgba(180,195,230,0.22)", appearance: "none" }}>
                        <option value="">Select…</option>
                        <option value="JEE Advanced Complete">JEE Advanced</option>
                        <option value="NEET Physics">NEET Physics</option>
                        <option value="Board Exam Prep">Board Prep</option>
                        <option value="Not sure yet">Not sure yet</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label style={{ fontSize: 11.5, color: "rgba(180,195,230,0.4)", display: "block", marginBottom: 5, fontWeight: 500 }}>Message <span style={{ color: "rgba(180,195,230,0.2)" }}>(optional)</span></label>
                    <textarea {...inp("message", "Any specific questions…")} rows={2} style={{ ...inputCss("message"), padding: "9px 12px", fontSize: 13, resize: "vertical", minHeight: 68 }}
                      onFocus={(e) => { e.target.style.borderColor = GOLD; e.target.style.background = "rgba(201,168,76,0.05)"; }}
                      onBlur={(e)  => { e.target.style.borderColor = "rgba(255,255,255,0.08)"; e.target.style.background = "rgba(255,255,255,0.04)"; }}
                    />
                  </div>
                  {emailStatus === "success" && <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 14px", borderRadius: 10, background: TEAL_DIM, border: `1px solid rgba(45,212,191,0.28)` }}><Check size={15} color={TEAL} /><span style={{ fontSize: 13, color: TEAL, fontWeight: 500 }}>Email sent!</span></div>}
                  {emailStatus === "error"   && <div style={{ display: "flex", alignItems: "flex-start", gap: 8, padding: "10px 14px", borderRadius: 10, background: "rgba(251,113,133,0.08)", border: "1px solid rgba(251,113,133,0.28)" }}><X size={15} color={ROSE} style={{ marginTop: 1, flexShrink: 0 }} /><span style={{ fontSize: 12.5, color: ROSE, lineHeight: 1.5 }}>{emailError}</span></div>}
                  <div className="form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 2 }}>
                    <button className="btn" onClick={handleSubmitWA} style={{ padding: "11px", borderRadius: 11, fontSize: 13, fontWeight: 600, background: "linear-gradient(135deg, #25d366, #1aab55)", color: "white", border: "none", display: "flex", alignItems: "center", justifyContent: "center", gap: 7, boxShadow: "0 4px 18px rgba(37,211,102,0.3)" }}>
                      <MessageSquare size={14} /> WhatsApp
                    </button>
                    <button className="btn" onClick={handleSubmitEmail} disabled={emailStatus === "sending"} style={{ padding: "11px", borderRadius: 11, fontSize: 13, fontWeight: 600, background: `linear-gradient(135deg, ${GOLD}, #e8c96a)`, color: "#0b1120", border: "none", display: "flex", alignItems: "center", justifyContent: "center", gap: 7, opacity: emailStatus === "sending" ? 0.7 : 1 }}>
                      {emailStatus === "sending" ? <><span style={{ width: 13, height: 13, border: "2px solid rgba(0,0,0,0.2)", borderTopColor: "#0b1120", borderRadius: "50%", display: "inline-block", animation: "spin 0.7s linear infinite" }} />Sending…</> : <><Mail size={14} /> Send Email</>}
                    </button>
                  </div>
                  <p style={{ fontSize: 11, color: "rgba(180,195,230,0.18)", textAlign: "center", lineHeight: 1.5 }}>WhatsApp opens a chat · Email sends directly to our inbox</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <div style={{ height: 1, background: `linear-gradient(90deg, transparent, rgba(201,168,76,0.15), transparent)`, margin: "0 48px" }} />

      {/* ── FOOTER ── */}
      <footer style={{ padding: "40px 48px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 20, marginBottom: 28 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 32, height: 32, borderRadius: 9, background: `linear-gradient(135deg, ${GOLD}, #e8c96a)`, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: `0 3px 12px rgba(201,168,76,0.32)` }}><Atom size={15} color="#0b1120" /></div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 15, color: "rgba(180,195,230,0.45)", fontWeight: 600 }}>PhysicsPro</div>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <button className="btn" onClick={() => openWA()} style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 13, padding: "9px 18px", background: "rgba(52,211,153,0.06)", border: "1px solid rgba(52,211,153,0.18)", borderRadius: 9, color: "#34d399" }}><MessageSquare size={13} /> WhatsApp</button>
            <button className="btn" onClick={openMail} style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 13, padding: "9px 18px", background: GOLD_DIM, border: `1px solid rgba(201,168,76,0.2)`, borderRadius: 9, color: GOLD }}><Mail size={13} /> Email</button>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 14, paddingTop: 20, borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <span style={{ fontSize: 12.5, color: "rgba(180,195,230,0.2)" }}>© 2026 PhysicsPro. All rights reserved.</span>
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
            {["Privacy", "Terms", "Refund Policy", "Contact"].map((l) => (
              <span key={l} style={{ fontSize: 12.5, color: "rgba(180,195,230,0.22)", cursor: "pointer", transition: "color 0.15s" }}
                onMouseEnter={(e) => (e.target.style.color = "rgba(180,195,230,0.6)")}
                onMouseLeave={(e) => (e.target.style.color = "rgba(180,195,230,0.22)")}
              >{l}</span>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}