"use client";

import {
  ArrowRight,
  Play,
  Sparkles,
  Star,
  Users,
  Trophy,
  BookOpen,
  ChevronRight,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#030712] overflow-hidden pt-32 lg:pt-40 pb-20">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Glow */}
        <div className="absolute top-[-120px] left-[-120px] w-[450px] h-[450px] bg-cyan-500/20 blur-[140px] rounded-full"></div>

        <div className="absolute bottom-[-150px] right-[-150px] w-[450px] h-[450px] bg-blue-600/20 blur-[140px] rounded-full"></div>

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px]"></div>

        {/* Blur Circle */}
        <div className="absolute top-[30%] left-[50%] -translate-x-1/2 w-[600px] h-[600px] bg-cyan-400/10 blur-[150px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 backdrop-blur-xl mb-8">
              <Sparkles className="w-4 h-4 text-cyan-300" />

              <span className="text-sm text-cyan-200 font-medium tracking-wide">
                India’s Most Advanced Physics Learning Platform
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-black leading-[1.05] text-white">
              Learn Physics
              <br />

              <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                Visually & Smartly
              </span>
            </h1>

            {/* Description */}
            <p className="mt-8 text-lg text-gray-400 leading-relaxed max-w-2xl">
              Premium online classes for Class 10th, 11th & 12th students with
              live sessions, 3D concept visualization, handwritten notes, DPPs,
              test series, and complete JEE/NEET preparation.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 mt-10">
              {/* Primary */}
              <button className="group relative overflow-hidden px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 text-white font-semibold text-lg shadow-[0_10px_40px_rgba(0,255,255,0.25)] hover:scale-105 transition-all duration-300">
                <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>

                <span className="relative flex items-center justify-center gap-2">
                  Enroll Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-all duration-300" />
                </span>
              </button>

              {/* Secondary */}
              <button className="group px-7 py-4 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl text-white hover:bg-white/[0.08] transition-all duration-300">
                <span className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center border border-white/10">
                    <Play className="w-4 h-4 fill-white ml-0.5" />
                  </div>

                  <div className="text-left">
                    <p className="text-sm text-gray-400">Watch</p>

                    <p className="font-semibold">Demo Lecture</p>
                  </div>
                </span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14">
              {[
                {
                  icon: Users,
                  title: "25K+",
                  subtitle: "Students",
                },
                {
                  icon: Star,
                  title: "4.9",
                  subtitle: "Ratings",
                },
                {
                  icon: Trophy,
                  title: "95%",
                  subtitle: "Results",
                },
                {
                  icon: BookOpen,
                  title: "500+",
                  subtitle: "Lectures",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group relative p-5 rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300"
                >
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

                  <div className="relative">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20 mb-4">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>

                    <h3 className="text-2xl font-black text-white">
                      {item.title}
                    </h3>

                    <p className="text-sm text-gray-400 mt-1">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative flex justify-center">
            {/* Glow */}
            <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full"></div>

            {/* Main Hero Card */}
            <div className="relative w-full max-w-[560px]">
              {/* Floating Card */}
              <div className="absolute -top-8 -left-8 z-20 p-4 rounded-3xl bg-white/[0.06] backdrop-blur-2xl border border-white/10 shadow-2xl">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
                    <Trophy className="text-white w-6 h-6" />
                  </div>

                  <div>
                    <p className="text-sm text-gray-400">Top Results</p>

                    <h3 className="text-white font-bold text-lg">
                      AIR 245 in JEE
                    </h3>
                  </div>
                </div>
              </div>

              {/* Main Screen */}
              <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.05] backdrop-blur-2xl p-5 shadow-[0_10px_60px_rgba(0,255,255,0.1)]">
                {/* Top */}
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className="text-cyan-300 text-sm font-medium">
                      LIVE CLASS
                    </p>

                    <h2 className="text-white text-2xl font-bold mt-1">
                      Electrostatics
                    </h2>
                  </div>

                  <div className="px-4 py-2 rounded-full bg-red-500/20 border border-red-500/20 text-red-300 text-sm font-semibold animate-pulse">
                    LIVE
                  </div>
                </div>

                {/* Video Area */}
                <div className="relative h-[360px] rounded-[32px] overflow-hidden border border-white/10 bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-sky-500/20">
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/20"></div>

                  {/* Physics Elements */}
                  <div className="absolute top-10 left-10 text-cyan-300 font-bold opacity-60 text-xl">
                    F = ma
                  </div>

                  <div className="absolute bottom-10 right-10 text-sky-300 font-bold opacity-60 text-xl">
                    V = IR
                  </div>

                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <button className="group relative">
                      <div className="absolute inset-0 bg-cyan-400 blur-3xl opacity-70 group-hover:opacity-100 transition-all duration-300 rounded-full"></div>

                      <div className="relative w-24 h-24 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 flex items-center justify-center shadow-[0_0_50px_rgba(0,255,255,0.5)] hover:scale-110 transition-all duration-300">
                        <Play className="w-9 h-9 text-white fill-white ml-1" />
                      </div>
                    </button>
                  </div>
                </div>

                {/* Bottom */}
                <div className="grid grid-cols-2 gap-4 mt-5">
                  <div className="p-5 rounded-3xl border border-white/10 bg-white/[0.04]">
                    <p className="text-gray-400 text-sm">Next Batch</p>

                    <h3 className="text-white text-xl font-bold mt-2">
                      15 June
                    </h3>
                  </div>

                  <div className="p-5 rounded-3xl border border-white/10 bg-white/[0.04]">
                    <p className="text-gray-400 text-sm">Class Timing</p>

                    <h3 className="text-white text-xl font-bold mt-2">
                      7:00 PM
                    </h3>
                  </div>
                </div>
              </div>

              {/* Bottom Floating */}
              <div className="absolute -bottom-8 -right-5 p-5 rounded-3xl bg-white/[0.06] backdrop-blur-2xl border border-white/10 shadow-2xl">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {["A", "K", "R"].map((item, index) => (
                      <div
                        key={index}
                        className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 border-2 border-[#030712] flex items-center justify-center text-white font-bold"
                      >
                        {item}
                      </div>
                    ))}
                  </div>

                  <div>
                    <h3 className="text-white font-bold">
                      10K+ Active Learners
                    </h3>

                    <p className="text-sm text-gray-400 mt-1 flex items-center gap-1">
                      Join Now
                      <ChevronRight className="w-4 h-4" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}