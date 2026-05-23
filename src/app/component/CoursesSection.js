"use client";

import {
  CheckCircle2,
  PlayCircle,
  Star,
  Users,
  Clock3,
  ArrowRight,
  Sparkles,
  GraduationCap,
} from "lucide-react";

export default function CoursesSection() {
  const courses = [
    {
      className: "Class 10th",
      title: "Foundation Physics",
      desc: "Build strong concepts with visual explanations, notes, and weekly tests.",
      students: "8K+ Students",
      duration: "12 Months",
      rating: "4.9",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    },
    {
      className: "Class 11th",
      title: "Advanced Physics",
      desc: "Master mechanics, thermodynamics, waves, and numerical problem solving.",
      students: "10K+ Students",
      duration: "14 Months",
      rating: "4.8",
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",
    },
    {
      className: "Class 12th",
      title: "Boards + JEE/NEET",
      desc: "Complete preparation with PYQs, DPPs, tests, and revision sessions.",
      students: "15K+ Students",
      duration: "16 Months",
      rating: "5.0",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <section className="relative py-28 bg-[#030712] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[140px] rounded-full"></div>

        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 blur-[140px] rounded-full"></div>

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:70px_70px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 backdrop-blur-xl">
            <Sparkles className="w-4 h-4 text-cyan-300" />

            <span className="text-sm text-cyan-200 font-medium tracking-wide">
              Explore Our Courses
            </span>
          </div>

          {/* Title */}
          <h2 className="mt-7 text-4xl md:text-5xl font-black text-white leading-tight">
            Courses Designed For
            <br />

            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              Every Physics Student
            </span>
          </h2>

          {/* Description */}
          <p className="mt-6 text-lg text-gray-400 leading-relaxed">
            Premium online batches for school boards, JEE, and NEET aspirants
            with live mentorship and concept-based learning.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid lg:grid-cols-3 gap-7 mt-20">
          {courses.map((course, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl hover:-translate-y-3 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-[260px] overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/30 to-transparent"></div>

                {/* Badge */}
                <div className="absolute top-5 left-5 px-4 py-2 rounded-full bg-cyan-400/20 border border-cyan-400/20 backdrop-blur-xl text-cyan-200 text-sm font-medium">
                  {course.className}
                </div>

                {/* Play Button */}
                <button className="absolute top-5 right-5 w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white hover:scale-110 transition-all duration-300">
                  <PlayCircle className="w-7 h-7" />
                </button>

                {/* Bottom Title */}
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-3xl font-black text-white">
                    {course.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                {/* Desc */}
                <p className="text-gray-400 leading-relaxed">
                  {course.desc}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 mt-7">
                  <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10">
                    <Users className="w-5 h-5 text-cyan-300 mb-2" />

                    <h4 className="text-white font-bold text-sm">
                      {course.students}
                    </h4>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10">
                    <Clock3 className="w-5 h-5 text-cyan-300 mb-2" />

                    <h4 className="text-white font-bold text-sm">
                      {course.duration}
                    </h4>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10">
                    <Star className="w-5 h-5 text-cyan-300 mb-2" />

                    <h4 className="text-white font-bold text-sm">
                      {course.rating}
                    </h4>
                  </div>
                </div>

                {/* Features */}
                <div className="mt-7 space-y-3">
                  {[
                    "Live Interactive Classes",
                    "Handwritten Notes",
                    "Weekly Practice Tests",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 text-gray-300"
                    >
                      <CheckCircle2 className="w-5 h-5 text-cyan-300" />

                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <button className="group mt-8 w-full relative overflow-hidden px-6 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 text-white font-semibold shadow-[0_10px_40px_rgba(0,255,255,0.25)] hover:scale-[1.02] transition-all duration-300">
                  <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>

                  <span className="relative flex items-center justify-center gap-2">
                    Explore Course
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-all duration-300" />
                  </span>
                </button>
              </div>

              {/* Hover Glow */}
              <div className="absolute -bottom-24 -right-24 w-52 h-52 bg-cyan-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="relative mt-24 overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-10 lg:p-14">
          {/* Glow */}
          <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-cyan-500/10 blur-[140px] rounded-full"></div>

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* Left */}
            <div className="max-w-2xl">
              <div className="w-20 h-20 rounded-[28px] bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-[0_10px_40px_rgba(0,255,255,0.25)]">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>

              <h2 className="mt-7 text-4xl font-black text-white leading-tight">
                Ready To Crack
                <br />

                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  JEE & NEET ?
                </span>
              </h2>

              <p className="mt-5 text-lg text-gray-400 leading-relaxed">
                Join thousands of successful students learning physics with
                modern visual teaching methods and expert mentorship.
              </p>
            </div>

            {/* Right */}
            <button className="group relative overflow-hidden px-8 py-5 rounded-2xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 text-white font-semibold text-lg shadow-[0_10px_40px_rgba(0,255,255,0.25)] hover:scale-105 transition-all duration-300">
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>

              <span className="relative flex items-center gap-2">
                Start Learning Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-all duration-300" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}