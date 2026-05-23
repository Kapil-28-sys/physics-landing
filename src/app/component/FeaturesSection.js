"use client";

import {
  BookOpen,
  Video,
  FileText,
  Brain,
  Trophy,
  Clock3,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: Video,
      title: "Live Interactive Classes",
      desc: "Attend high-quality live classes with real-time doubt solving and concept visualization.",
    },
    {
      icon: FileText,
      title: "Premium Notes & PDFs",
      desc: "Get handwritten notes, chapter-wise PDFs, formulas, and revision sheets.",
    },
    {
      icon: Brain,
      title: "Concept Based Learning",
      desc: "Understand physics visually with animations, experiments, and practical examples.",
    },
    {
      icon: Trophy,
      title: "JEE & NEET Preparation",
      desc: "Complete preparation with tests, PYQs, DPPs, and performance analysis.",
    },
    {
      icon: Clock3,
      title: "24×7 Recorded Lectures",
      desc: "Watch recorded classes anytime and revise concepts at your own speed.",
    },
    {
      icon: BookOpen,
      title: "Weekly Practice Tests",
      desc: "Improve speed and accuracy with regular tests and detailed solutions.",
    },
  ];

  return (
    <section className="relative py-28 bg-[#020617] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        {/* Glow */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[140px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/10 blur-[140px] rounded-full"></div>

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
              Why Students Love PhysicsPro
            </span>
          </div>

          {/* Title */}
          <h2 className="mt-7 text-4xl md:text-5xl font-black text-white leading-tight">
            Everything You Need
            <br />

            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              To Master Physics
            </span>
          </h2>

          {/* Desc */}
          <p className="mt-6 text-lg text-gray-400 leading-relaxed">
            Premium learning experience specially designed for Class 10th,
            11th, 12th, JEE & NEET aspirants.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-7 hover:-translate-y-2 transition-all duration-500"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              {/* Border Glow */}
              <div className="absolute inset-0 rounded-[32px] border border-cyan-400/0 group-hover:border-cyan-400/20 transition-all duration-500"></div>

              {/* Icon */}
              <div className="relative w-16 h-16 rounded-3xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-[0_10px_30px_rgba(0,255,255,0.2)]">
                <feature.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <div className="relative mt-7">
                <h3 className="text-2xl font-bold text-white">
                  {feature.title}
                </h3>

                <p className="mt-4 text-gray-400 leading-relaxed">
                  {feature.desc}
                </p>
              </div>

              {/* Arrow */}
              <div className="relative mt-8 flex items-center gap-2 text-cyan-300 font-medium">
                Learn More

                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-all duration-300" />
              </div>

              {/* Blur */}
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-cyan-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="relative mt-24 overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-sky-500/10 backdrop-blur-2xl p-10 lg:p-14">
          {/* Glow */}
          <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-cyan-500/20 blur-[120px] rounded-full"></div>

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* Left */}
            <div className="max-w-2xl">
              <h2 className="text-4xl font-black text-white leading-tight">
                Start Your Physics Journey
                <br />

                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  With India’s Best Mentors
                </span>
              </h2>

              <p className="mt-5 text-lg text-gray-300 leading-relaxed">
                Join thousands of students preparing for Boards, JEE & NEET with
                premium physics learning experience.
              </p>
            </div>

            {/* Button */}
            <button className="group relative overflow-hidden px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 text-white font-semibold text-lg shadow-[0_10px_40px_rgba(0,255,255,0.25)] hover:scale-105 transition-all duration-300">
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>

              <span className="relative flex items-center gap-2">
                Join Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-all duration-300" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}