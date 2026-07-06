"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import {
  Atom, ArrowRight, BookOpen, School, Video, MessageCircle,
  FileText, Check, X, Clock, Users, Mail,
  MessageSquare, Zap, Award, Target, ChevronLeft, ChevronRight,
  Home, BookOpen as BookIcon, BarChart2, CreditCard, Phone,
  GraduationCap, Sun, Moon, Brain, Trophy, Lightbulb,
  Shield, ExternalLink, CalendarDays, BadgeIndianRupee, AlertCircle,
} from "lucide-react";

const WHATSAPP_NUMBER = "919582219246";
const CONTACT_EMAIL = "suniraphysicsacademy@gmail.com";
const TEACHER_PHOTO_URL = "/physicmam.png";
const LOGO_URL = "/phys-logo.png";
const API_BASE_URL = "https://backend.sunirascienceacademy.com";
const API_ENDPOINT = `${API_BASE_URL}/api/create-enquiry`;

const mkC = (dark) => ({
  bg:           dark ? "#08090F" : "#F5F8FF",
  bgAlt:        dark ? "#0D1018" : "#EAF0FB",
  bgCard:       dark ? "#111520" : "#FFFFFF",
  bgCardHov:    dark ? "#161B2A" : "#F0F6FF",
  ink:          dark ? "#EEF2FF" : "#0D1018",
  inkMid:       dark ? "rgba(220,228,255,0.62)" : "rgba(13,16,40,0.65)",
  inkFaint:     dark ? "rgba(220,228,255,0.32)" : "rgba(13,16,40,0.38)",
  blue:         "#2B9FE8",
  blueDim:      dark ? "rgba(43,159,232,0.12)" : "rgba(43,159,232,0.08)",
  blueDimHov:   dark ? "rgba(43,159,232,0.22)" : "rgba(43,159,232,0.14)",
  blueBorder:   dark ? "rgba(43,159,232,0.3)"  : "rgba(43,159,232,0.35)",
  blueBorderHov:dark ? "rgba(43,159,232,0.55)" : "rgba(43,159,232,0.6)",
  orange:       "#F57C20",
  orangeDim:    dark ? "rgba(245,124,32,0.12)" : "rgba(245,124,32,0.08)",
  orangeDimHov: dark ? "rgba(245,124,32,0.22)" : "rgba(245,124,32,0.14)",
  orangeBorder: dark ? "rgba(245,124,32,0.35)" : "rgba(245,124,32,0.35)",
  border:       dark ? "rgba(220,228,255,0.08)" : "rgba(13,16,40,0.09)",
  borderMed:    dark ? "rgba(220,228,255,0.14)" : "rgba(13,16,40,0.16)",
  borderHov:    dark ? "rgba(220,228,255,0.26)" : "rgba(43,159,232,0.4)",
  inputBg:      dark ? "rgba(220,228,255,0.04)" : "#FFFFFF",
  inputBorder:  dark ? "rgba(220,228,255,0.12)" : "rgba(13,16,40,0.16)",
  blueGlow:     dark ? "0 0 28px rgba(43,159,232,0.22)" : "0 4px 20px rgba(43,159,232,0.18)",
  orangeGlow:   dark ? "0 0 24px rgba(245,124,32,0.22)" : "0 4px 20px rgba(245,124,32,0.18)",
  cardHovBg:    dark ? "#161B2A" : "#EFF6FF",
  navHovBg:     dark ? "rgba(43,159,232,0.1)" : "rgba(43,159,232,0.08)",
  btnSecHovBg:  dark ? "rgba(220,228,255,0.06)" : "rgba(43,159,232,0.06)",
  btnSecHovBdr: dark ? "rgba(220,228,255,0.28)" : "rgba(43,159,232,0.45)",
});

/* ── Logo — big rounded square like an app icon ── */
const Logo = ({ size = 70 }) => (
  <img
    src={LOGO_URL}
    alt="Sunira's Science Academy"
    style={{
      width: size, height: size,
      borderRadius: 0,
      objectFit: "contain",
      objectPosition: "center",
      display: "block", flexShrink: 0,
      background: "transparent",
    }}
    onError={(e) => {
      if (e.currentTarget.dataset.fb) return;
      e.currentTarget.dataset.fb = "1";
      e.currentTarget.style.display = "none";
    }}
  />
);

/* ── Orbit decoration ── */
const OrbitDeco = ({ size = 80, C }) => (
  <svg width={size} height={size} viewBox="0 0 80 80" style={{ opacity: 0.18 }}>
    <ellipse cx="40" cy="40" rx="38" ry="16" fill="none" stroke={C.blue} strokeWidth="1.2" />
    <circle cx="78" cy="40" r="4" fill={C.blue} />
    <circle cx="40" cy="12" r="3" fill={C.orange} />
  </svg>
);

/* ── Teacher photo ── */
const TeacherPhoto = ({ C }) => (
  <div style={{ position: "relative", width: "100%", height: "100%" }}>
    <div style={{
      position: "absolute", top: "50%", left: "50%",
      transform: "translate(-50%,-52%)",
      fontFamily: "'Exo 2','Inter',sans-serif",
      fontSize: "clamp(100px,18vw,180px)", fontWeight: 800,
      color: "transparent",
      WebkitTextStroke: `1px ${C.blue}12`,
      pointerEvents: "none", zIndex: 0, userSelect: "none", lineHeight: 1,
      letterSpacing: "-0.06em",
    }}>S</div>
    <div style={{ position: "relative", zIndex: 1, height: "100%", display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
      <img
        src={TEACHER_PHOTO_URL}
        alt="Sunira Agarwal"
        loading="eager" draggable={false}
        style={{ width: "100%", maxHeight: 560, objectFit: "contain", objectPosition: "bottom center", display: "block" }}
        onError={(e) => {
          if (e.currentTarget.dataset.fb) return;
          e.currentTarget.dataset.fb = "1";
          e.currentTarget.src = "https://static.vecteezy.com/system/resources/thumbnails/027/394/933/small_2x/teacher-lady-friendly-smiling-arms-crossed-png.png";
          e.currentTarget.style.borderRadius = "16px";
        }}
      />
    </div>
    <div style={{
      position: "absolute", bottom: 12, left: 0, zIndex: 2,
      background: C.bgCard, border: `1px solid ${C.blueBorder}`,
      borderRadius: 12, padding: "10px 16px",
      backdropFilter: "blur(12px)",
      boxShadow: C.blueGlow,
    }}>
      <div style={{ fontSize: 13.5, fontWeight: 700, color: C.ink, letterSpacing: "0.02em" }}>Sunira Agarwal</div>
      <div style={{ fontSize: 10.5, color: C.blue, marginTop: 2, letterSpacing: "0.04em" }}>22+ Yrs · DPS Faridabad · Author</div>
    </div>
    <div style={{ position: "absolute", top: 8, right: 0, zIndex: 2 }}>
      <OrbitDeco size={70} C={C} />
    </div>
  </div>
);

/* ── Modal ── */
const Modal = ({ open, onClose, title, children, C }) => {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);
  if (!open) return null;
  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, zIndex: 200, background: "rgba(0,0,0,0.65)", backdropFilter: "blur(6px)", display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
      <div onClick={e => e.stopPropagation()} style={{ background: C.bgCard, border: `1px solid ${C.blueBorder}`, borderRadius: "20px 20px 0 0", width: "100%", maxWidth: 560, maxHeight: "80vh", overflowY: "auto", padding: "32px 28px 48px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
          <h3 style={{ fontSize: 20, fontWeight: 700, color: C.ink }}>{title}</h3>
          <button onClick={onClose} style={{ width: 34, height: 34, borderRadius: "50%", background: C.bgAlt, border: `1px solid ${C.border}`, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: C.inkMid }}><X size={15} /></button>
        </div>
        <div style={{ color: C.inkMid, fontSize: 14, lineHeight: 1.8 }}>{children}</div>
      </div>
    </div>
  );
};

export default function PhysicsProLanding() {
  const [theme, setTheme] = useState("dark");
  const [activeNav, setActiveNav] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [vis, setVis] = useState({});
  const [form, setForm] = useState({ name: "", phone: "", email: "", course: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [apiError, setApiError] = useState("");
  const [aboutExp, setAboutExp] = useState(false);
  const [modal, setModal] = useState(null);
  const [hovPlan, setHovPlan] = useState(null);
  const secRefs = useRef({});
  const navRef = useRef(null);

  const isDark = theme === "dark";
  const C = mkC(isDark);

  const navLinks = [
    { label: "Home",     id: "hero",     Icon: Home },
    { label: "About",    id: "about",    Icon: GraduationCap },
    { label: "Courses",  id: "courses",  Icon: BookIcon },
    { label: "Pricing",  id: "pricing",  Icon: CreditCard },
    { label: "Contact",  id: "contact",  Icon: Phone },
  ];

  const reg = (id) => (el) => { if (el) secRefs.current[id] = el; };

  const scrollTo = useCallback((item) => {
    setActiveNav(item.label);
    const el = secRefs.current[item.id];
    if (el) {
      const navH = navRef.current?.offsetHeight || 72;
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - (window.innerWidth < 768 ? 0 : navH), behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const navH = navRef.current?.offsetHeight || 72;
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const el = secRefs.current[navLinks[i].id];
        if (el && el.getBoundingClientRect().top <= navH + 40) { setActiveNav(navLinks[i].label); break; }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) setVis(p => ({ ...p, [e.target.id]: true })); }),
      { threshold: 0.07 }
    );
    document.querySelectorAll("[data-obs]").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const fi = (id, delay = 0) => ({
    style: {
      opacity: vis[id] ? 1 : 0,
      transform: vis[id] ? "translateY(0)" : "translateY(22px)",
      transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
    },
  });

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.phone.trim()) e.phone = "Phone is required";
    else if (!/^[6-9]\d{9}$/.test(form.phone.trim())) e.phone = "Enter valid 10-digit number";
    if (form.email && !/\S+@\S+\.\S+/.test(form.email)) e.email = "Invalid email";
    return e;
  };

  // Posts the enquiry to the backend. Never blocks WhatsApp/email fallback —
  // if the API call fails, we still let the user reach out directly.
  const postEnquiry = async () => {
    setApiError("");
    try {
      const res = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          whatsapp: form.phone.trim(),
          email: form.email.trim() || undefined,
          course: form.course || undefined,
          message: form.message.trim() || undefined,
        }),
      });
      if (!res.ok) throw new Error(`Request failed with status ${res.status}`);
      const data = await res.json().catch(() => null);
      return { ok: true, data };
    } catch (err) {
      console.error("create-enquiry API error:", err);
      setApiError("Couldn't save your enquiry automatically, but you can still reach us below.");
      return { ok: false, data: null };
    }
  };

  const handleSubmit = async () => {
    const e = validate(); if (Object.keys(e).length) { setErrors(e); return; }
    setErrors({});
    setSubmitting(true);
    const result = await postEnquiry();
    setSubmitting(false);
    if (result.ok) setSubmitted(true);
  };

  const handleWA = async () => {
    const e = validate(); if (Object.keys(e).length) { setErrors(e); return; }
    setErrors({});
    setSubmitting(true);
    await postEnquiry();
    setSubmitting(false);
    const body = `Hi! 👋\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email || "—"}\nCourse: ${form.course || "—"}\nMessage: ${form.message || "—"}\n\nI'd like to know more about Sunira's Science Academy.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(body)}`, "_blank");
    setSubmitted(true);
  };

  const handleEmail = async () => {
    const e = validate(); if (Object.keys(e).length) { setErrors(e); return; }
    setErrors({});
    setSubmitting(true);
    await postEnquiry();
    setSubmitting(false);
    const subject = `New Enquiry from ${form.name}`;
    const body = `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email || "Not provided"}\nCourse: ${form.course || "Not specified"}\nMessage: ${form.message || "—"}`;
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT_EMAIL}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, "_blank");
    setSubmitted(true);
  };

  const openWA  = (msg = "Hi! I'd like to know more about Sunira's Science Academy.") =>
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
  const openMail = () =>
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT_EMAIL}`, "_blank");

  const inputSty = (field) => ({
    width: "100%", padding: "11px 14px", borderRadius: 8,
    background: C.inputBg,
    border: errors[field] ? "1.5px solid #e04040" : `1.5px solid ${C.inputBorder}`,
    color: C.ink, fontSize: 14, fontFamily: "inherit", outline: "none",
    transition: "border-color 0.18s, box-shadow 0.18s",
    boxShadow: isDark ? "none" : "0 1px 3px rgba(0,0,0,0.06)",
  });

  const inp = (field, placeholder, type = "text") => ({
    value: form[field], type, placeholder,
    onChange: (e) => setForm(p => ({ ...p, [field]: e.target.value })),
    style: inputSty(field),
    onFocus: (e) => { e.target.style.borderColor = C.blue; e.target.style.boxShadow = isDark ? "none" : "0 0 0 3px rgba(43,159,232,0.12)"; },
    onBlur:  (e) => { e.target.style.borderColor = errors[field] ? "#e04040" : C.inputBorder; e.target.style.boxShadow = isDark ? "none" : "0 1px 3px rgba(0,0,0,0.06)"; },
  });

  const footerLinks = [
    { label: "Privacy", content: (<><p style={{ marginBottom: 12 }}>All personal information — name, phone, email — is used solely to respond to your enquiry and coordinate enrollment. We do not sell or share your data with third parties.</p><p>Data submitted via our contact form is used only for communication with you.</p></>) },
    { label: "Terms",   content: (<><p style={{ marginBottom: 12 }}>By enrolling, you agree to:</p><ul style={{ paddingLeft: 20 }}><li style={{ marginBottom: 8 }}>Fees collected monthly in advance; non-refundable after first week.</li><li style={{ marginBottom: 8 }}>Class 9 & 10 (₹2,500/mo) & Class 11 (₹3,000/mo): 12 sessions, 3/week.</li><li style={{ marginBottom: 8 }}>Class 12 (₹3,000/mo): 12 sessions, 3/week.</li><li style={{ marginBottom: 8 }}>Recordings accessible 30 days. Sharing externally not permitted.</li></ul></>) },
    { label: "Refunds", content: (<><ul style={{ paddingLeft: 20 }}><li style={{ marginBottom: 8 }}>Free demo always available — no payment before trying.</li><li style={{ marginBottom: 8 }}>Within 7 days of payment: full refund if before 2nd class.</li><li style={{ marginBottom: 8 }}>After 7 days: no refund for current month.</li><li style={{ marginBottom: 8 }}>Technical failure on our end: makeup session or credit.</li></ul></>) },
    { label: "Contact", action: () => scrollTo(navLinks.find(n => n.id === "contact")) },
  ];

  const courses = [
    { Icon: School, accent: C.blue,   title: "Class 9 & 10 Science",  price: "₹2,500/mo", tag: "Most Popular", desc: "Complete CBSE Science with deep Science focus — board prep, Olympiad & NTSE training. 12 sessions/month, 3/week.", featured: true },
    { Icon: Atom,   accent: C.orange, title: "Class 11 & 12 Physics",  price: "₹3,000/mo", tag: "Board + JEE/NEET", desc: "In-depth Physics for CBSE boards and entrance exams — JEE, NEET foundation. Strong conceptual base guaranteed.", featured: false },
    { Icon: Award,  accent: C.blue,   title: "Olympiad & NTSE Prep",   price: "Ask us",  tag: "Competitive",    desc: "Specialised training for IMO, ISO, NTSE. Authored Mission NTSE Class 8 & 10 — the definitive prep resource.", featured: false },
  ];

  const features = [
    { Icon: Video,          title: "Live + Recorded Classes",   desc: "Attend live or rewatch anytime. Chapter-wise timestamps." },
    { Icon: MessageCircle,  title: "Personal Doubt Clearing",   desc: "No question left unanswered. Direct, individual attention." },
    { Icon: Brain,          title: "Conceptual Clarity",        desc: "Beyond marks — analytical thinking and real understanding." },
    { Icon: FileText,       title: "Mission NTSE Material",     desc: "Practice sheets and chapters from Mission NTSE Class 8 & 10." },
    { Icon: Target,         title: "All Levels Welcome",        desc: "Struggling learners and high achievers alike." },
    { Icon: Trophy,         title: "30+ Years Experience",      desc: "Including 22+ years at DPS Faridabad." },
  ];

  const plans = [
    {
      name: "Class 9 & 10", label: "Science", price: "₹2,500", period: "/month",
      accent: C.blue, popular: true, tag: "Most Popular",
      features: ["12 live sessions/month", "3 sessions every week", "Doubt clearing included", "Study material provided", "NTSE / Olympiad prep", "Full advance payment"],
      noFeats: [],
    },
    {
      name: "Class 11 & 12", label: "Physics", price: "₹3,000", period: "/month",
      accent: C.orange, popular: false, tag: "Board + JEE/NEET",
      features: ["12 live sessions/month", "3 sessions every week", "Doubt clearing included", "Study material provided", "JEE / NEET foundation", "Full advance payment"],
      noFeats: [],
    },
    {
      name: "Free Demo",       label: "First Class Free", price: "Free",   period: "first class",
      accent: isDark ? "#4A5568" : "#718096", popular: false, tag: "No Risk",
      features: ["1 free demo class", "Meet Sunira ma'am", "Experience the teaching", "No commitment needed"],
      noFeats: ["WhatsApp support", "Study material"],
    },
  ];

  const stats = [
    { n: "30+",  l: "Years Teaching", accent: C.blue },
    { n: "22+",  l: "Yrs at DPS",     accent: C.orange },
    { n: "1000s",l: "Students",        accent: C.blue },
    { n: "2",    l: "Books Authored",  accent: C.orange },
  ];

  const whyTrust = [
    "30+ Years of Teaching Experience", "22+ Years at DPS Faridabad",
    "Thousands of Successful Students", "Conceptual Understanding First",
    "Personalised Attention for Every Learner", "Weak & Top Students Both Welcome",
    "Olympiad & Competitive Exam Prep", "Author: Mission NTSE Class 8 & 10",
  ];

  return (
    <div style={{ fontFamily: "'Exo 2','Inter','DM Sans',sans-serif", background: C.bg, color: C.ink, overflowX: "hidden", minHeight: "100vh", transition: "background 0.3s, color 0.3s" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&family=Inter:wght@400;500;600&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}
        ::selection{background:rgba(43,159,232,0.22);}
        input::placeholder,textarea::placeholder{color:${C.inkFaint};}
        select option{background:${isDark?"#111520":"#fff"};color:${C.ink};}

        .btn{cursor:pointer;transition:all 0.18s ease;border:none;font-family:inherit;}
        .btn:hover{opacity:${isDark?"0.86":"1"};transform:translateY(-1px);}
        .btn:active{transform:scale(0.97);}

        .dnav{
          position:fixed;top:0;left:0;right:0;z-index:50;height:72px;
          display:flex;align-items:center;justify-content:space-between;padding:0 48px;
          background:${isDark?"rgba(8,9,15,0.95)":"rgba(245,248,255,0.97)"};
          backdrop-filter:blur(20px);
          border-bottom:1px solid ${C.border};
          transition:border-color 0.3s,box-shadow 0.3s;
        }
        .dnav.scrolled{
          border-bottom-color:${C.blueBorder};
          box-shadow:${isDark?"0 2px 24px rgba(43,159,232,0.1)":"0 2px 20px rgba(43,159,232,0.1)"};
        }

        .nav-link{
          font-size:13.5px;padding:6px 13px;border-radius:8px;display:block;cursor:pointer;
          transition:all 0.18s;
        }
        .nav-link:hover{background:${C.navHovBg};color:${C.blue}!important;}

        .bnav{display:none;position:fixed;bottom:0;left:0;right:0;z-index:90;
          background:${isDark?"rgba(8,9,15,0.97)":"rgba(245,248,255,0.98)"};
          backdrop-filter:blur(20px);
          border-top:1px solid ${C.blueBorder};
          padding:6px 0 calc(6px + env(safe-area-inset-bottom));}
        .bnav-inner{display:flex;justify-content:space-around;}
        .bni{display:flex;flex-direction:column;align-items:center;gap:3px;padding:7px 10px 5px;border:none;background:transparent;font-family:inherit;cursor:pointer;flex:1;transition:all 0.18s;}
        .bni:hover{background:${C.navHovBg};border-radius:8px;}
        .bni span{font-size:9.5px;font-weight:500;letter-spacing:0.03em;}

        .wa-float{position:fixed;bottom:90px;right:20px;z-index:80;width:50px;height:50px;border-radius:50%;background:linear-gradient(135deg,#25d366,#128c7e);display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 4px 20px rgba(37,211,102,0.4);transition:transform 0.2s,box-shadow 0.2s;border:none;}
        .wa-float:hover{transform:scale(1.1);box-shadow:0 6px 28px rgba(37,211,102,0.5);}
        .wa-float svg{width:22px;height:22px;fill:white;}

        .sec{padding:80px 48px;}
        .sec-alt{padding:80px 48px;background:${C.bgAlt};}
        .max{max-width:1140px;margin:0 auto;}
        .hr{height:1px;background:${C.border};margin:0 48px;}

        .eyebrow{font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:${C.blue};margin-bottom:14px;display:flex;align-items:center;gap:8px;}
        .eyebrow::before{content:'';width:24px;height:2px;background:${C.blue};}

        .sh{font-size:clamp(28px,3.5vw,42px);font-weight:800;color:${C.ink};line-height:1.1;margin-bottom:8px;letter-spacing:-0.01em;}
        .grad{background:linear-gradient(90deg,${C.blue},${C.orange});-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}

        .gcard{background:${C.bgCard};border:1px solid ${C.border};border-radius:14px;transition:border-color 0.22s,transform 0.22s,box-shadow 0.22s,background 0.22s;}
        .gcard:hover{border-color:${C.blueBorderHov};transform:translateY(-4px);box-shadow:${C.blueGlow};background:${C.cardHovBg};}

        .ccard{transition:border-color 0.22s,transform 0.22s,box-shadow 0.22s,background 0.22s;}
        .ccard:hover{transform:translateY(-5px);box-shadow:${C.blueGlow};border-color:${C.blueBorderHov}!important;background:${C.cardHovBg}!important;}

        .feat-cell{transition:background 0.2s,box-shadow 0.2s;}
        .feat-cell:hover{background:${isDark?"#161B2A":"#EEF6FF"}!important;box-shadow:${isDark?"none":"inset 0 0 0 1px rgba(43,159,232,0.18)"};}

        .contact-row{transition:border-color 0.18s,transform 0.18s,background 0.18s,box-shadow 0.18s;}
        .contact-row:hover{transform:translateX(5px);box-shadow:${isDark?"none":"0 2px 12px rgba(43,159,232,0.1)"};}

        .footer-link{background:none;border:none;cursor:pointer;font-size:13px;color:${C.inkFaint};text-align:left;padding:0;font-family:inherit;transition:color 0.16s;}
        .footer-link:hover{color:${C.blue};}

        .footer-pill{display:flex;align-items:center;gap:8px;padding:7px 13px;border-radius:9px;background:${C.bgCard};border:1px solid ${C.border};cursor:pointer;font-size:12.5px;color:${C.inkMid};font-weight:500;transition:border-color 0.18s,background 0.18s,transform 0.18s,box-shadow 0.18s;}
        .footer-pill:hover{transform:translateY(-2px);box-shadow:${isDark?"none":"0 3px 12px rgba(43,159,232,0.12)"};}

        .ferr{font-size:11.5px;color:#e04040;margin-top:4px;display:flex;align-items:center;gap:4px;}

        @keyframes spin{to{transform:rotate(360deg);}}

        .scan-lines{position:absolute;inset:0;pointer-events:none;z-index:0;
          background:repeating-linear-gradient(0deg,transparent,transparent 3px,${isDark?"rgba(43,159,232,0.012)":"transparent"} 3px,${isDark?"rgba(43,159,232,0.012)":"transparent"} 4px);}

        @media(max-width:768px){
          .bnav{display:block;} .dnav{display:none!important;}
          .sec,.sec-alt{padding:56px 20px!important;}
          .hr{margin:0 20px!important;}
          .hero-inner{flex-direction:column!important;}
          .hero-img{width:100%!important;max-width:300px!important;margin:0 auto!important;min-height:260px!important;}
          .g2{grid-template-columns:1fr!important;}
          .g3{grid-template-columns:1fr!important;}
          .stats-row{flex-wrap:wrap;}
          .stat-item{min-width:50%;}
          .wa-float{bottom:82px;right:14px;}
          .row2{grid-template-columns:1fr!important;}
          .feat-grid{grid-template-columns:1fr 1fr!important;}
          .footer-top{flex-direction:column!important;gap:32px!important;}
        }
        @media(max-width:480px){.feat-grid{grid-template-columns:1fr!important;}}
        @media(min-width:769px){.page-wrap{padding-top:72px;}.wa-float{bottom:28px;right:28px;}}
        @media(max-width:768px){.page-wrap{padding-bottom:68px;}}
      `}</style>

      {footerLinks.filter(l => l.content).map(l => (
        <Modal key={l.label} open={modal === l.label} onClose={() => setModal(null)} title={l.label} C={C}>{l.content}</Modal>
      ))}

      <button className="wa-float btn" onClick={() => openWA()}>
        <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
      </button>

      {/* ══ DESKTOP NAV ══ */}
      <nav ref={navRef} className={`dnav${scrolled ? " scrolled" : ""}`}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, cursor: "pointer" }} onClick={() => scrollTo(navLinks[0])}>
          <Logo size={90} />
        </div>
        <ul style={{ display: "flex", listStyle: "none", gap: 2, alignItems: "center" }}>
          {navLinks.map(n => (
            <li key={n.label}>
              <span
                className="nav-link"
                onClick={() => scrollTo(n)}
                style={{
                  color: activeNav === n.label ? C.blue : C.inkMid,
                  fontWeight: activeNav === n.label ? 600 : 400,
                  background: activeNav === n.label ? C.navHovBg : "transparent",
                  borderBottom: activeNav === n.label ? `2px solid ${C.blue}` : "2px solid transparent",
                }}
              >{n.label}</span>
            </li>
          ))}
        </ul>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <button
            className="btn"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            style={{ width: 38, height: 38, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", background: "transparent", border: `1.5px solid ${C.borderMed}`, color: C.inkMid, transition: "all 0.18s" }}
            onMouseEnter={e => { e.currentTarget.style.background = C.navHovBg; e.currentTarget.style.borderColor = C.blueBorder; e.currentTarget.style.color = C.blue; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = C.borderMed; e.currentTarget.style.color = C.inkMid; }}
          >
            {isDark ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <button
            className="btn"
            onClick={() => openWA()}
            style={{ fontSize: 13, color: "#1a9e4f", background: isDark ? "rgba(37,211,102,0.09)" : "rgba(37,211,102,0.1)", border: `1px solid ${isDark ? "rgba(37,211,102,0.25)" : "rgba(37,211,102,0.35)"}`, borderRadius: 8, padding: "8px 16px", display: "flex", alignItems: "center", gap: 6, transition: "all 0.18s" }}
            onMouseEnter={e => { e.currentTarget.style.background = isDark ? "rgba(37,211,102,0.16)" : "rgba(37,211,102,0.18)"; e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 3px 12px rgba(37,211,102,0.2)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = isDark ? "rgba(37,211,102,0.09)" : "rgba(37,211,102,0.1)"; e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}
          >
            <MessageSquare size={13} /> WhatsApp
          </button>
          <button
            className="btn"
            onClick={() => openWA("Hi! I'd like to enrol at Sunira's Science Academy.")}
            style={{ fontSize: 13, fontWeight: 700, color: "#fff", background: `linear-gradient(90deg,${C.blue},#1A7AC0)`, borderRadius: 8, padding: "8px 18px", display: "flex", alignItems: "center", gap: 6, boxShadow: C.blueGlow, transition: "all 0.18s" }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = isDark ? "0 0 32px rgba(43,159,232,0.4)" : "0 6px 24px rgba(43,159,232,0.35)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = C.blueGlow; }}
          >
            Enrol Now <ArrowRight size={13} />
          </button>
        </div>
      </nav>

      {/* ══ MOBILE BOTTOM NAV ══ */}
      <nav className="bnav">
        <div className="bnav-inner">
          {navLinks.map(n => (
            <button key={n.label} className="bni" onClick={() => scrollTo(n)}>
              <n.Icon size={20} color={activeNav === n.label ? C.blue : C.inkFaint} strokeWidth={activeNav === n.label ? 2 : 1.5} />
              <span style={{ color: activeNav === n.label ? C.blue : C.inkFaint }}>{n.label}</span>
            </button>
          ))}
        </div>
      </nav>

      <div className="page-wrap">

        {/* ══ HERO ══ */}
        <section id="hero" ref={reg("hero")} data-obs style={{ padding: "72px 48px 0", position: "relative", overflow: "hidden", minHeight: 580 }}>
          <div className="scan-lines" />
          <div style={{ position: "absolute", top: -80, right: "8%", width: 500, height: 500, borderRadius: "50%", background: `radial-gradient(circle,${C.blueDim} 0%,transparent 65%)`, pointerEvents: "none", zIndex: 0 }} />
          <div style={{ position: "absolute", bottom: 0, left: "5%", width: 360, height: 360, borderRadius: "50%", background: `radial-gradient(circle,${C.orangeDim} 0%,transparent 65%)`, pointerEvents: "none", zIndex: 0 }} />

          <div className="hero-inner max" style={{ display: "flex", alignItems: "flex-end", gap: 48, position: "relative", zIndex: 1, minHeight: 520 }}>
            <div style={{ flex: 1, minWidth: 0, maxWidth: 580, paddingBottom: 72 }}>
              <div {...fi("hero", 0)} style={{ marginBottom: 20 }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: C.blue, border: `1px solid ${C.blueBorder}`, borderRadius: 20, padding: "5px 14px", background: C.blueDim }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: C.blue, display: "inline-block" }} />
                  Online · Class 9–12 · Olympiad · NTSE — Now Enrolling
                </span>
              </div>
              <div {...fi("hero", 0.08)}>
                <h1 style={{ fontFamily: "'Exo 2',sans-serif", fontSize: "clamp(36px,5.5vw,66px)", fontWeight: 800, lineHeight: 1.07, letterSpacing: "-0.02em", marginBottom: 12, color: C.ink }}>
                  Science Simplified.{" "}<br /><span className="grad">Success Amplified.</span>
                </h1>
              </div>
              <div {...fi("hero", 0.14)}>
                <p style={{ fontSize: 11.5, color: C.inkFaint, fontStyle: "italic", marginBottom: 20, letterSpacing: "0.04em" }}>— Sunira Agarwal · Physics Educator · Author · 30+ Years</p>
              </div>
              <div {...fi("hero", 0.2)}>
                <p style={{ fontSize: 16, color: C.inkMid, maxWidth: 500, lineHeight: 1.8, marginBottom: 36, borderLeft: `3px solid ${C.blue}`, paddingLeft: 18 }}>
                  Live online classes, personalised doubt clearing, and 30+ years of expertise — helping Class 9–12 students overcome their fear of Physics and achieve results that reflect their true potential.
                </p>
              </div>
              <div {...fi("hero", 0.28)} style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 52 }}>
                <button className="btn" onClick={() => openWA("Hi! I want to enrol at Sunira's Science Academy.")}
                  style={{ fontSize: 14, fontWeight: 700, color: "#fff", background: `linear-gradient(90deg,${C.blue},#1A7AC0)`, borderRadius: 9, padding: "14px 28px", display: "inline-flex", alignItems: "center", gap: 8, boxShadow: C.blueGlow, transition: "all 0.18s" }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = isDark ? "0 0 32px rgba(43,159,232,0.4)" : "0 8px 28px rgba(43,159,232,0.32)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = C.blueGlow; }}>
                  Enrol on WhatsApp
                </button>
                <button className="btn" onClick={() => scrollTo(navLinks.find(n => n.id === "about"))}
                  style={{ fontSize: 14, fontWeight: 500, color: C.inkMid, background: C.btnSecHovBg, border: `1.5px solid ${C.borderMed}`, borderRadius: 9, padding: "14px 24px", display: "inline-flex", alignItems: "center", gap: 8, transition: "all 0.18s" }}
                  onMouseEnter={e => { e.currentTarget.style.background = isDark ? "rgba(220,228,255,0.08)" : "#EEF6FF"; e.currentTarget.style.borderColor = C.blueBorderHov; e.currentTarget.style.color = C.blue; }}
                  onMouseLeave={e => { e.currentTarget.style.background = C.btnSecHovBg; e.currentTarget.style.borderColor = C.borderMed; e.currentTarget.style.color = C.inkMid; }}>
                  Meet Sunira ma'am <ArrowRight size={14} />
                </button>
              </div>
              <div {...fi("hero", 0.36)} className="stats-row" style={{ display: "flex", gap: 36, flexWrap: "wrap" }}>
                {stats.map((s, i) => (
                  <div key={i} className="stat-item">
                    <div style={{ fontSize: 30, fontWeight: 800, color: s.accent, lineHeight: 1, fontFamily: "'Exo 2',sans-serif" }}>{s.n}</div>
                    <div style={{ fontSize: 11, color: C.inkFaint, textTransform: "uppercase", letterSpacing: "0.1em", marginTop: 5 }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="hero-img" style={{ flex: "0 0 400px", width: 400, alignSelf: "flex-end", minHeight: 460, position: "relative" }}>
              <TeacherPhoto C={C} />
            </div>
          </div>
        </section>

        {/* Banner */}
        <div style={{ background: `linear-gradient(90deg,${C.blue},#1A7AC0 40%,${C.orange})`, padding: "16px 48px", display: "flex", alignItems: "center", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
          <Zap size={15} color="rgba(255,255,255,0.9)" />
          <span style={{ fontSize: 13.5, fontWeight: 600, color: "#fff", letterSpacing: "0.04em" }}>Science Simplified · Success Amplified — Sunira's Science Academy</span>
          <Atom size={15} color="rgba(255,255,255,0.9)" />
        </div>
        <div className="hr" />

        {/* ══ ABOUT ══ */}
        <section id="about" ref={reg("about")} data-obs className="sec" style={{ position: "relative", overflow: "hidden" }}>
          <div className="scan-lines" />
          <div style={{ position: "absolute", top: 0, right: 0, width: 400, height: 400, borderRadius: "50%", background: `radial-gradient(circle,${C.orangeDim} 0%,transparent 65%)`, pointerEvents: "none", zIndex: 0 }} />
          <div className="max g2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start", position: "relative", zIndex: 1 }}>
            <div>
              <div {...fi("about", 0)}>
                <div className="eyebrow">About</div>
                <h2 className="sh">Meet <span className="grad">Sunira Agarwal</span></h2>
                <p style={{ fontSize: 13, color: C.inkFaint, fontStyle: "italic", marginBottom: 28, letterSpacing: "0.03em" }}>30+ Years of Inspiring Excellence in Physics</p>
              </div>
              <div {...fi("about", 0.1)}>
                <p style={{ fontSize: 15.5, color: C.inkMid, lineHeight: 1.82, marginBottom: 18 }}>
                  For over three decades, Sunira Agarwal has helped students overcome their fear of Physics and transform it into one of their strongest subjects. Having taught thousands across leading schools — including <strong style={{ color: C.ink, fontWeight: 700 }}>22+ years at DPS Faridabad</strong> — she is known for her unique ability to simplify complex concepts and make Physics genuinely interesting.
                </p>
                <p style={{ fontSize: 15.5, color: C.inkMid, lineHeight: 1.82, marginBottom: 18 }}>
                  Her students consistently appreciate her patient teaching style, conceptual clarity, and commitment to their success. She believes <em style={{ color: C.ink }}>every child can excel</em> when guided with the right approach, encouragement, and mentorship.
                </p>
                <div style={{ maxHeight: aboutExp ? 300 : 0, overflow: "hidden", transition: "max-height 0.5s ease" }}>
                  <p style={{ fontSize: 15.5, color: C.inkMid, lineHeight: 1.82, marginBottom: 18 }}>
                    Her teaching develops analytical thinking, logical reasoning, and the confidence to tackle challenging questions independently. As the author of <em style={{ color: C.blue }}>Mission NTSE Class 8 and Class 10</em>, she brings deep subject expertise and decades of classroom experience.
                  </p>
                </div>
                <button className="btn" onClick={() => setAboutExp(!aboutExp)}
                  style={{ fontSize: 13, color: C.blue, background: C.blueDim, border: `1px solid ${C.blueBorder}`, borderRadius: 7, padding: "7px 16px", marginBottom: 28, display: "inline-flex", alignItems: "center", gap: 6, transition: "all 0.18s" }}
                  onMouseEnter={e => { e.currentTarget.style.background = C.blueDimHov; e.currentTarget.style.borderColor = C.blueBorderHov; }}
                  onMouseLeave={e => { e.currentTarget.style.background = C.blueDim; e.currentTarget.style.borderColor = C.blueBorder; }}>
                  {aboutExp ? "Show less" : "Read more"} <ArrowRight size={12} style={{ transform: aboutExp ? "rotate(90deg)" : "none", transition: "transform 0.3s" }} />
                </button>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  {["Mission NTSE · Class 8", "Mission NTSE · Class 10"].map((book, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "11px 15px", borderRadius: 10, background: C.bgCard, border: `1px solid ${C.blueBorder}`, transition: "all 0.18s", cursor: "default" }}
                      onMouseEnter={e => { e.currentTarget.style.background = C.cardHovBg; e.currentTarget.style.borderColor = C.blueBorderHov; e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = C.blueGlow; }}
                      onMouseLeave={e => { e.currentTarget.style.background = C.bgCard; e.currentTarget.style.borderColor = C.blueBorder; e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}>
                      <BookOpen size={15} color={C.blue} />
                      <div>
                        <div style={{ fontSize: 10, color: C.inkFaint, textTransform: "uppercase", letterSpacing: "0.08em" }}>Authored</div>
                        <div style={{ fontSize: 13, fontWeight: 700, color: C.ink }}>{book}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div {...fi("about", 0.15)}>
              <div className="gcard" style={{ padding: "28px 24px", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg,${C.blue},${C.orange})` }} />
                <div style={{ fontSize: 16, fontWeight: 700, color: C.ink, marginBottom: 20, paddingTop: 6 }}>Why Parents & Students Trust Her</div>
                <div className="g2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 22 }}>
                  {whyTrust.map((item, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, padding: "9px 10px", borderRadius: 8, background: C.bgAlt, border: `1px solid ${C.border}`, transition: "all 0.16s" }}
                      onMouseEnter={e => { e.currentTarget.style.background = isDark ? "#161B2A" : "#E6F3FF"; e.currentTarget.style.borderColor = C.blueBorder; }}
                      onMouseLeave={e => { e.currentTarget.style.background = C.bgAlt; e.currentTarget.style.borderColor = C.border; }}>
                      <Check size={13} color={C.blue} style={{ marginTop: 2, flexShrink: 0 }} />
                      <span style={{ fontSize: 12.5, color: C.inkMid, lineHeight: 1.45 }}>{item}</span>
                    </div>
                  ))}
                </div>
                {/* Address */}
                <div style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: "13px 16px", borderRadius: 10, background: C.bgAlt, border: `1px solid ${C.blueBorder}`, marginBottom: 14 }}>
                  <School size={20} color={C.blue} style={{ flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <div style={{ fontSize: 13.5, fontWeight: 700, color: C.ink }}>Delhi Public School, Faridabad</div>
                    <div style={{ fontSize: 12, color: C.inkFaint, marginTop: 2 }}>22+ years — one of India's most reputed schools</div>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: "11px 16px", borderRadius: 10, background: C.bgAlt, border: `1px solid ${C.border}`, marginBottom: 18 }}>
                  <Target size={16} color={C.orange} style={{ flexShrink: 0, marginTop: 2 }} />
                  <div style={{ fontSize: 12.5, color: C.inkMid, lineHeight: 1.6 }}>
                    <span style={{ fontWeight: 700, color: C.ink }}>Address: </span>Sector 9, Faridabad, Haryana
                  </div>
                </div>
                <button className="btn" onClick={() => openWA("Hi! I'd like to book a free demo class at Sunira's Science Academy.")}
                  style={{ width: "100%", padding: 13, borderRadius: 10, fontSize: 14, fontWeight: 700, color: "#fff", background: `linear-gradient(90deg,${C.blue},#1A7AC0)`, border: "none", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, boxShadow: C.blueGlow, transition: "all 0.18s" }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = isDark ? "0 0 32px rgba(43,159,232,0.4)" : "0 8px 28px rgba(43,159,232,0.32)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = C.blueGlow; }}>
                  <MessageSquare size={15} /> Book a Free Demo Class
                </button>
              </div>
            </div>
          </div>
        </section>
        <div className="hr" />

        {/* ══ COURSES ══ */}
        <section id="courses" ref={reg("courses")} data-obs className="sec-alt">
          <div className="max">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 20, marginBottom: 48 }}>
              <div {...fi("courses", 0)}>
                <div className="eyebrow">Courses</div>
                <h2 className="sh">Physics classes for<br /><span className="grad">every stage of learning.</span></h2>
              </div>
              <div {...fi("courses", 0.1)} style={{ fontSize: 14, color: C.inkMid, maxWidth: 300, lineHeight: 1.72 }}>
                Class 9 to 12, boards, competitive prep — from ₹2,500/month. 12 sessions/month, 3/week.
              </div>
            </div>
            <div className="g3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }}>
              {courses.map((c, i) => (
                <div key={i} {...fi("courses", 0.1 + i * 0.08)} className="ccard"
                  style={{ background: C.bgCard, border: i === 0 ? `1.5px solid ${C.blueBorder}` : `1px solid ${C.border}`, borderRadius: 14, padding: "26px 22px", position: "relative", overflow: "hidden", cursor: "default" }}>
                  {i === 0 && <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg,${C.blue},${C.orange})` }} />}
                  <div style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: c.accent, marginBottom: 18, borderBottom: `1px solid ${C.border}`, paddingBottom: 12, paddingTop: i === 0 ? 6 : 0 }}>{c.tag}</div>
                  <c.Icon size={24} color={c.accent} style={{ marginBottom: 14 }} />
                  <div style={{ fontSize: 18, fontWeight: 700, color: C.ink, marginBottom: 4, lineHeight: 1.25 }}>{c.title}</div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: c.accent, marginBottom: 12 }}>{c.price}</div>
                  <div style={{ fontSize: 13.5, color: C.inkMid, lineHeight: 1.7, marginBottom: 22 }}>{c.desc}</div>
                  <button className="btn" onClick={() => openWA(`Hi! I'm interested in ${c.title} at Sunira's Science Academy.`)}
                    style={{ width: "100%", padding: "10px", borderRadius: 8, fontSize: 13, fontWeight: 600, background: i === 0 ? `linear-gradient(90deg,${C.blue},#1A7AC0)` : isDark ? "rgba(220,228,255,0.04)" : "#EEF6FF", color: i === 0 ? "#fff" : i === 1 ? C.orange : C.blue, border: i === 0 ? "none" : `1px solid ${i === 1 ? C.orangeBorder : C.blueBorder}`, display: "flex", alignItems: "center", justifyContent: "center", gap: 6, boxShadow: i === 0 ? C.blueGlow : "none", transition: "all 0.18s" }}
                    onMouseEnter={e => { if (i === 0) { e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = isDark ? "0 0 28px rgba(43,159,232,0.4)" : "0 6px 20px rgba(43,159,232,0.3)"; } else { e.currentTarget.style.background = isDark ? "rgba(220,228,255,0.1)" : "#DAEEFF"; e.currentTarget.style.transform = "translateY(-1px)"; } }}
                    onMouseLeave={e => { if (i === 0) { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = C.blueGlow; } else { e.currentTarget.style.background = isDark ? "rgba(220,228,255,0.04)" : "#EEF6FF"; e.currentTarget.style.transform = ""; } }}>
                    <MessageSquare size={13} /> Enquire
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
        <div className="hr" />

        {/* ══ FEATURES ══ */}
        <section id="features" data-obs className="sec" style={{ position: "relative", overflow: "hidden" }}>
          <div className="scan-lines" />
          <div className="max" style={{ position: "relative", zIndex: 1 }}>
            <div {...fi("features", 0)} style={{ marginBottom: 48 }}>
              <div className="eyebrow">What You Get</div>
              <h2 className="sh">Everything you need to<br /><span className="grad">succeed in Physics.</span></h2>
            </div>
            <div className="feat-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 0, border: `1px solid ${C.border}`, borderRadius: 14, overflow: "hidden" }}>
              {features.map((f, i) => (
                <div key={i} {...fi("features", 0.07 + i * 0.06)} className="feat-cell"
                  style={{ padding: "26px 24px", borderRight: (i + 1) % 3 !== 0 ? `1px solid ${C.border}` : "none", borderBottom: i < 3 ? `1px solid ${C.border}` : "none", background: "transparent" }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: i % 2 === 0 ? C.blueDim : C.orangeDim, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
                    <f.Icon size={20} color={i % 2 === 0 ? C.blue : C.orange} />
                  </div>
                  <div style={{ fontSize: 14.5, fontWeight: 700, color: C.ink, marginBottom: 8 }}>{f.title}</div>
                  <div style={{ fontSize: 13.5, color: C.inkMid, lineHeight: 1.7 }}>{f.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <div className="hr" />

        {/* ══ PRICING ══ */}
        <section id="pricing" ref={reg("pricing")} data-obs className="sec" style={{ position: "relative", overflow: "hidden" }}>
          <div className="scan-lines" />
          <div className="max" style={{ position: "relative", zIndex: 1 }}>
            <div {...fi("pricing", 0)} style={{ marginBottom: 16 }}>
              <div className="eyebrow">Pricing</div>
              <h2 className="sh">Simple, <span className="grad">honest pricing.</span></h2>
              <p style={{ fontSize: 14.5, color: C.inkMid, maxWidth: 520, lineHeight: 1.7, marginBottom: 28, marginTop: 8 }}>12 live sessions per month, 3 sessions every week. All fees paid in advance. Free demo — no commitment needed.</p>
            </div>
            <div {...fi("pricing", 0.08)} style={{ display: "flex", gap: 24, flexWrap: "wrap", padding: "14px 20px", borderRadius: 10, background: C.bgCard, border: `1px solid ${C.blueBorder}`, marginBottom: 28 }}>
              {[{ Icon: CalendarDays, text: "12 sessions / month" }, { Icon: Clock, text: "3 sessions / week" }, { Icon: BadgeIndianRupee, text: "Payment in advance" }].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: C.inkMid, fontWeight: 600 }}>
                  <item.Icon size={15} color={i % 2 === 0 ? C.blue : C.orange} /> {item.text}
                </div>
              ))}
              <div style={{ marginLeft: "auto", fontSize: 12, color: C.inkFaint, fontStyle: "italic" }}>All plans include doubt clearing & study material</div>
            </div>
            <div className="g3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
              {plans.map((plan, i) => (
                <div key={i} {...fi("pricing", 0.1 + i * 0.1)}
                  onMouseEnter={() => setHovPlan(i)} onMouseLeave={() => setHovPlan(null)}
                  className="ccard"
                  style={{ background: hovPlan === i ? C.cardHovBg : C.bgCard, border: plan.popular ? `2px solid ${C.blue}` : `1px solid ${C.border}`, borderRadius: 14, padding: "26px 22px", display: "flex", flexDirection: "column", position: "relative", overflow: "hidden", transform: hovPlan === i ? "translateY(-5px)" : "translateY(0)", transition: "transform 0.22s, box-shadow 0.22s, background 0.22s, border-color 0.22s", boxShadow: hovPlan === i ? C.blueGlow : "none" }}>
                  {plan.popular && <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg,${C.blue},${C.orange})` }} />}
                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: plan.accent, marginBottom: 14, paddingTop: plan.popular ? 6 : 0 }}>{plan.tag}</div>
                  <div style={{ fontSize: 12.5, color: C.inkFaint, marginBottom: 3 }}>{plan.name}</div>
                  <div style={{ fontSize: 13.5, fontWeight: 700, color: C.ink, marginBottom: 16 }}>{plan.label}</div>
                  <div style={{ marginBottom: 22 }}>
                    <span style={{ fontFamily: "'Exo 2',sans-serif", fontSize: 42, fontWeight: 800, color: C.ink, lineHeight: 1 }}>{plan.price}</span>
                    <span style={{ fontSize: 12.5, color: C.inkFaint, marginLeft: 6 }}>{plan.period}</span>
                  </div>
                  {plan.price !== "Free" && (
                    <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 14, padding: "10px 12px", borderRadius: 8, background: C.bgAlt, border: `1px solid ${C.border}` }}>
                      <span style={{ fontSize: 12, color: C.inkMid, display: "flex", alignItems: "center", gap: 5 }}><CalendarDays size={12} color={C.blue} /> 12 sessions/month</span>
                      <span style={{ fontSize: 12, color: C.inkFaint, display: "flex", alignItems: "center", gap: 5 }}><Clock size={12} color={C.inkFaint} /> 3/week</span>
                    </div>
                  )}
                  <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "8px 12px", borderRadius: 8, background: plan.price === "Free" ? C.bgAlt : C.blueDim, border: `1px solid ${plan.price === "Free" ? C.border : C.blueBorder}`, marginBottom: 20, fontSize: 12, color: plan.price === "Free" ? C.inkFaint : C.blue, fontWeight: 600 }}>
                    <BadgeIndianRupee size={13} /> {plan.price === "Free" ? "No payment required" : "Payment in advance"}
                  </div>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 9, marginBottom: 22, flex: 1 }}>
                    {plan.features.map((f, j) => (
                      <li key={j} style={{ fontSize: 13.5, color: C.inkMid, display: "flex", alignItems: "center", gap: 9 }}><Check size={13} color={C.blue} style={{ flexShrink: 0 }} /> {f}</li>
                    ))}
                    {plan.noFeats?.map((f, j) => (
                      <li key={"n" + j} style={{ fontSize: 13.5, color: C.inkFaint, display: "flex", alignItems: "center", gap: 9 }}><X size={13} color={C.inkFaint} style={{ flexShrink: 0 }} /> {f}</li>
                    ))}
                  </ul>
                  <button className="btn" onClick={() => openWA(`Hi! I'd like to join the ${plan.name} — ${plan.label} at Sunira's Science Academy.`)}
                    style={{ width: "100%", padding: 13, borderRadius: 9, fontSize: 14, fontWeight: 700, background: plan.popular ? `linear-gradient(90deg,${C.blue},#1A7AC0)` : plan.price === "Free" ? "#25d366" : isDark ? "transparent" : "#EEF6FF", color: (plan.popular || plan.price === "Free") ? "#fff" : C.blue, border: (plan.popular || plan.price === "Free") ? "none" : `1.5px solid ${C.blueBorder}`, display: "flex", alignItems: "center", justifyContent: "center", gap: 7, boxShadow: plan.popular ? C.blueGlow : "none", transition: "all 0.18s" }}
                    onMouseEnter={e => { if (plan.popular) { e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = isDark ? "0 0 28px rgba(43,159,232,0.4)" : "0 6px 20px rgba(43,159,232,0.3)"; } else if (plan.price === "Free") { e.currentTarget.style.background = "#1fbb5b"; e.currentTarget.style.transform = "translateY(-1px)"; } else { e.currentTarget.style.background = isDark ? "rgba(43,159,232,0.1)" : "#DAEEFF"; e.currentTarget.style.transform = "translateY(-1px)"; } }}
                    onMouseLeave={e => { if (plan.popular) { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = C.blueGlow; } else if (plan.price === "Free") { e.currentTarget.style.background = "#25d366"; e.currentTarget.style.transform = ""; } else { e.currentTarget.style.background = isDark ? "transparent" : "#EEF6FF"; e.currentTarget.style.transform = ""; } }}>
                    <MessageSquare size={14} /> {plan.price === "Free" ? "Book Free Demo" : "Enrol Now"}
                  </button>
                </div>
              ))}
            </div>
            <div {...fi("pricing", 0.4)} style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 20, padding: "14px 18px", borderRadius: 10, background: C.bgCard, border: `1px solid ${C.border}`, fontSize: 13, color: C.inkMid }}>
              <AlertCircle size={14} color={C.blue} style={{ flexShrink: 0 }} />
              All fees collected <strong style={{ color: C.ink, margin: "0 4px" }}>in advance</strong> at month start. A free demo is always available — no payment before your first session with Sunira ma'am.
            </div>
          </div>
        </section>
        <div className="hr" />

        {/* ══ CONTACT ══ */}
        <section id="contact" ref={reg("contact")} data-obs className="sec-alt" style={{ position: "relative", overflow: "hidden" }}>
          <div className="scan-lines" />
          <div className="max g2" style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: 64, alignItems: "start", position: "relative", zIndex: 1 }}>
            <div {...fi("contact", 0)}>
              <div className="eyebrow">Contact</div>
              <h2 className="sh">Got questions?<br /><span className="grad">We're one tap away.</span></h2>
              <p style={{ fontSize: 15, color: C.inkMid, lineHeight: 1.78, marginBottom: 36, marginTop: 8 }}>Fill the form and we'll reach you via WhatsApp or email — usually within the hour.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { Icon: MessageSquare, label: "WhatsApp", value: "+91 95822 19246", action: () => openWA(), accent: "#25d366" },
                  { Icon: Mail, label: "Email", value: CONTACT_EMAIL, action: openMail, accent: C.blue },
                ].map((c, i) => (
                  <div key={i} onClick={c.action} className="contact-row"
                    style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 18px", borderRadius: 11, background: C.bgCard, border: `1px solid ${C.border}`, cursor: "pointer" }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = c.accent; e.currentTarget.style.background = C.cardHovBg; e.currentTarget.style.boxShadow = isDark ? "none" : `0 4px 16px ${c.accent}20`; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.background = C.bgCard; e.currentTarget.style.boxShadow = "none"; }}>
                    <div style={{ width: 38, height: 38, borderRadius: 9, background: c.accent + "18", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <c.Icon size={16} color={c.accent} />
                    </div>
                    <div>
                      <div style={{ fontSize: 11, color: C.inkFaint, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 2 }}>{c.label}</div>
                      <div style={{ fontSize: 13.5, color: C.inkMid, fontWeight: 500 }}>{c.value}</div>
                    </div>
                    <ArrowRight size={14} color={C.inkFaint} style={{ marginLeft: "auto" }} />
                  </div>
                ))}
              </div>
            </div>
            <div {...fi("contact", 0.16)}>
              {submitted ? (
                <div style={{ background: C.bgCard, border: `1px solid ${C.blueBorder}`, borderRadius: 16, padding: "40px 28px", textAlign: "center", boxShadow: C.blueGlow }}>
                  <Check size={28} color={C.blue} style={{ marginBottom: 14 }} />
                  <div style={{ fontSize: 20, fontWeight: 800, color: C.ink, marginBottom: 8, fontFamily: "'Exo 2',sans-serif" }}>Message sent!</div>
                  <p style={{ fontSize: 13.5, color: C.inkMid, marginBottom: 20 }}>Sunira ma'am's team will reply shortly.</p>
                  <button className="btn" onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", course: "", message: "" }); }} style={{ fontSize: 13, color: C.inkMid, background: "transparent", border: `1px solid ${C.border}`, borderRadius: 8, padding: "9px 22px" }}>Send another</button>
                </div>
              ) : (
                <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: 16, padding: "26px 22px", boxShadow: isDark ? "none" : "0 2px 16px rgba(43,159,232,0.06)" }}>
                  <div style={{ fontSize: 17, fontWeight: 800, color: C.ink, marginBottom: 4, fontFamily: "'Exo 2',sans-serif" }}>Send an Enquiry</div>
                  <p style={{ fontSize: 12.5, color: C.inkFaint, marginBottom: 20 }}>We'll open WhatsApp or Gmail with your details pre-filled.</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
                    <div className="row2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                      <div>
                        <label style={{ fontSize: 11.5, color: C.inkMid, display: "block", marginBottom: 5, fontWeight: 600 }}>Name <span style={{ color: C.blue }}>*</span></label>
                        <input {...inp("name", "Full name")} />
                        {errors.name && <div className="ferr"><X size={10} />{errors.name}</div>}
                      </div>
                      <div>
                        <label style={{ fontSize: 11.5, color: C.inkMid, display: "block", marginBottom: 5, fontWeight: 600 }}>WhatsApp <span style={{ color: C.blue }}>*</span></label>
                        <input {...inp("phone", "10-digit", "tel")} />
                        {errors.phone && <div className="ferr"><X size={10} />{errors.phone}</div>}
                      </div>
                    </div>
                    <div className="row2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                      <div>
                        <label style={{ fontSize: 11.5, color: C.inkMid, display: "block", marginBottom: 5, fontWeight: 600 }}>Email <span style={{ color: C.inkFaint }}>(opt.)</span></label>
                        <input {...inp("email", "you@email.com", "email")} />
                        {errors.email && <div className="ferr"><X size={10} />{errors.email}</div>}
                      </div>
                      <div>
                        <label style={{ fontSize: 11.5, color: C.inkMid, display: "block", marginBottom: 5, fontWeight: 600 }}>Course</label>
                        <select value={form.course} onChange={e => setForm(p => ({ ...p, course: e.target.value }))} style={{ ...inputSty("course"), appearance: "none" }}>
                          <option value="">Select…</option>
                          <option value="Class 9 & 10 Science (₹2,500/mo)">Class 9 & 10 — ₹2,500/mo</option>
                          <option value="Class 11 Physics (₹3,000/mo)">Class 11 — ₹3,000/mo</option>
                          <option value="Class 12 Physics (₹3,000/mo)">Class 12 — ₹3,000/mo</option>
                          <option value="Olympiad / NTSE Prep">Olympiad / NTSE</option>
                          <option value="Free Demo Class">Free Demo</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label style={{ fontSize: 11.5, color: C.inkMid, display: "block", marginBottom: 5, fontWeight: 600 }}>Message <span style={{ color: C.inkFaint }}>(optional)</span></label>
                      <textarea {...inp("message", "Any specific questions…")} rows={2} style={{ ...inputSty("message"), resize: "vertical", minHeight: 64 }}
                        onFocus={e => { e.target.style.borderColor = C.blue; e.target.style.boxShadow = isDark ? "none" : "0 0 0 3px rgba(43,159,232,0.12)"; }}
                        onBlur={e => { e.target.style.borderColor = C.inputBorder; e.target.style.boxShadow = isDark ? "none" : "0 1px 3px rgba(0,0,0,0.06)"; }} />
                    </div>
                    <div className="row2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 4 }}>
                      <button className="btn" onClick={handleWA} disabled={submitting}
                        style={{ padding: "11px", borderRadius: 9, fontSize: 13, fontWeight: 700, background: "#25d366", color: "#fff", border: "none", display: "flex", alignItems: "center", justifyContent: "center", gap: 7, transition: "all 0.18s", opacity: submitting ? 0.7 : 1, cursor: submitting ? "wait" : "pointer" }}
                        onMouseEnter={e => { if (!submitting) { e.currentTarget.style.background = "#1fbb5b"; e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 6px 18px rgba(37,211,102,0.3)"; } }}
                        onMouseLeave={e => { e.currentTarget.style.background = "#25d366"; e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}>
                        <MessageSquare size={13} /> {submitting ? "Sending…" : "WhatsApp"}
                      </button>
                      <button className="btn" onClick={handleSubmit} disabled={submitting}
                        style={{ padding: "11px", borderRadius: 9, fontSize: 13, fontWeight: 700, background: `linear-gradient(90deg,${C.blue},#1A7AC0)`, color: "#fff", border: "none", display: "flex", alignItems: "center", justifyContent: "center", gap: 7, boxShadow: C.blueGlow, transition: "all 0.18s", opacity: submitting ? 0.7 : 1, cursor: submitting ? "wait" : "pointer" }}
                        onMouseEnter={e => { if (!submitting) { e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = isDark ? "0 0 24px rgba(43,159,232,0.4)" : "0 6px 20px rgba(43,159,232,0.3)"; } }}
                        onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = C.blueGlow; }}>
                        <Check size={13} /> {submitting ? "Submitting…" : "Submit"}
                      </button>
                    </div>
                    {apiError && <div className="ferr" style={{ justifyContent: "center" }}><AlertCircle size={11} />{apiError}</div>}
                    <p style={{ fontSize: 11, color: C.inkFaint, textAlign: "center" }}>WhatsApp opens a chat · Email opens Gmail to {CONTACT_EMAIL}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
        <div className="hr" />

        {/* ══ FOOTER ══ */}
        <footer style={{ padding: "48px 48px 40px", position: "relative", overflow: "hidden" }}>
          <div className="scan-lines" />
          <div style={{ position: "relative", zIndex: 1 }}>
            <div className="footer-top" style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 40, marginBottom: 40 }}>
              <div style={{ maxWidth: 320 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                  <Logo size={52} />
                  <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <div style={{ fontSize: 15, fontWeight: 800, color: C.ink, letterSpacing: "0.01em", fontFamily: "'Exo 2',sans-serif", lineHeight: 1.2 }}>
                      Sunira's <span style={{ color: C.blue }}>Science</span> Academy
                    </div>
                    <div style={{ fontSize: 10, color: C.inkFaint, letterSpacing: "0.08em", textTransform: "uppercase" }}>Science Simplified · Success Amplified</div>
                  </div>
                </div>
                <p style={{ fontSize: 13, color: C.inkMid, lineHeight: 1.72, marginBottom: 18 }}>
                  Helping Class 9–12 students master Physics with clarity and confidence. Online, 12 sessions/month. Starting at ₹2,500/month.
                </p>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  {[
                    { Icon: MessageSquare, label: "WhatsApp Us", action: () => openWA(), color: "#25d366" },
                    { Icon: Mail, label: "Send Email", action: openMail, color: C.blue },
                  ].map((c, i) => (
                    <div key={i} onClick={c.action} className="footer-pill"
                      onMouseEnter={e => { e.currentTarget.style.borderColor = c.color; e.currentTarget.style.color = c.color; e.currentTarget.style.background = isDark ? C.bgCard : `${c.color}0d`; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.color = C.inkMid; e.currentTarget.style.background = C.bgCard; }}>
                      <c.Icon size={14} color={c.color} /> {c.label} <ExternalLink size={10} color={C.inkFaint} />
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ display: "flex", gap: 48, flexWrap: "wrap" }}>
                {[
                  { title: "Navigation", items: navLinks.map(n => ({ label: n.label, action: () => scrollTo(n) })) },
                  { title: "Courses", items: ["Class 9 & 10 — ₹2,500/mo", "Class 11 — ₹3,000/mo", "Class 12 — ₹3,000/mo", "Olympiad & NTSE", "Free Demo"].map(c => ({ label: c, action: () => openWA(`Hi! I'm interested in ${c}.`) })) },
                  { title: "Legal", items: footerLinks.map(l => ({ label: l.label, action: l.action || (() => setModal(l.label)) })) },
                ].map((col, i) => (
                  <div key={i}>
                    <div style={{ fontSize: 10.5, color: C.inkFaint, textTransform: "uppercase", letterSpacing: "0.12em", fontWeight: 700, marginBottom: 16 }}>{col.title}</div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                      {col.items.map((item, j) => (
                        <button key={j} onClick={item.action} className="footer-link">{item.label}</button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 14, padding: "16px 0", borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`, marginBottom: 20 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: C.inkFaint }}>
                <Shield size={13} color={C.inkFaint} /> Your information is never shared with third parties.
              </div>
              <button className="btn" onClick={() => setTheme(isDark ? "light" : "dark")}
                style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 12.5, color: C.inkMid, background: "transparent", border: `1px solid ${C.border}`, borderRadius: 8, padding: "7px 14px", transition: "all 0.18s" }}
                onMouseEnter={e => { e.currentTarget.style.background = C.navHovBg; e.currentTarget.style.borderColor = C.blueBorder; e.currentTarget.style.color = C.blue; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = C.border; e.currentTarget.style.color = C.inkMid; }}>
                {isDark ? <><Sun size={13} /> Light mode</> : <><Moon size={13} /> Dark mode</>}
              </button>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
              <span style={{ fontSize: 12, color: C.inkFaint }}>© 2026 Sunira's Science Academy. All rights reserved.</span>
              <span style={{ fontSize: 12, color: C.inkFaint }}>Science Simplified · Success Amplified</span>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}