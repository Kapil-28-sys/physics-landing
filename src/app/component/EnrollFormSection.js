"use client";

import { useState } from "react";
import {
  User,
  Phone,
  Mail,
  BookOpen,
  MessageSquare,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export default function EnrollFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    className: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* LEFT CONTENT */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 backdrop-blur-xl">
              <Sparkles className="w-4 h-4 text-cyan-300" />

              <span className="text-sm text-cyan-200 font-medium tracking-wide">
                Join PhysicsPro Today
              </span>
            </div>

            {/* Heading */}
            <h2 className="mt-7 text-4xl md:text-5xl font-black text-white leading-tight">
              Start Your
              <br />

              <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                Physics Journey
              </span>
            </h2>

            {/* Description */}
            <p className="mt-6 text-lg text-gray-400 leading-relaxed max-w-2xl">
              Fill out the form and our team will contact you with complete
              course details, demo lectures, fees, and batch timings.
            </p>

            {/* Features */}
            <div className="mt-10 space-y-5">
              {[
                "Live Interactive Classes",
                "Complete JEE & NEET Preparation",
                "Premium Notes & Test Series",
                "24×7 Recorded Lectures Access",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 text-gray-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-cyan-300" />
                  </div>

                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="relative">
            {/* Glow */}
            <div className="absolute inset-0 bg-cyan-500/10 blur-[120px] rounded-full"></div>

            {/* Form Card */}
            <div className="relative rounded-[40px] border border-white/10 bg-white/[0.05] backdrop-blur-2xl p-8 lg:p-10 shadow-[0_10px_60px_rgba(0,255,255,0.08)]">
              {/* Top */}
              <div className="mb-8">
                <h3 className="text-3xl font-black text-white">
                  Book Free Demo
                </h3>

                <p className="text-gray-400 mt-3">
                  Enter your details and get a free demo lecture instantly.
                </p>
              </div>

              {/* Form */}
              <form className="space-y-6">
                {/* Name */}
                <div>
                  <label className="text-sm text-gray-300 mb-3 block">
                    Full Name
                  </label>

                  <div className="relative">
                    <User className="absolute left-5 top-1/2 -translate-y-1/2 text-cyan-300 w-5 h-5" />

                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full h-16 rounded-2xl bg-white/[0.04] border border-white/10 pl-14 pr-5 text-white placeholder:text-gray-500 outline-none focus:border-cyan-400/40 transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="text-sm text-gray-300 mb-3 block">
                    Phone Number
                  </label>

                  <div className="relative">
                    <Phone className="absolute left-5 top-1/2 -translate-y-1/2 text-cyan-300 w-5 h-5" />

                    <input
                      type="text"
                      name="phone"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full h-16 rounded-2xl bg-white/[0.04] border border-white/10 pl-14 pr-5 text-white placeholder:text-gray-500 outline-none focus:border-cyan-400/40 transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="text-sm text-gray-300 mb-3 block">
                    Email Address
                  </label>

                  <div className="relative">
                    <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-cyan-300 w-5 h-5" />

                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full h-16 rounded-2xl bg-white/[0.04] border border-white/10 pl-14 pr-5 text-white placeholder:text-gray-500 outline-none focus:border-cyan-400/40 transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Class */}
                <div>
                  <label className="text-sm text-gray-300 mb-3 block">
                    Select Class
                  </label>

                  <div className="relative">
                    <BookOpen className="absolute left-5 top-1/2 -translate-y-1/2 text-cyan-300 w-5 h-5 z-10" />

                    <select
                      name="className"
                      value={formData.className}
                      onChange={handleChange}
                      className="w-full h-16 rounded-2xl bg-white/[0.04] border border-white/10 pl-14 pr-5 text-white outline-none focus:border-cyan-400/40 transition-all duration-300 appearance-none"
                    >
                      <option value="" className="bg-[#020617]">
                        Select Your Class
                      </option>

                      <option
                        value="10th"
                        className="bg-[#020617]"
                      >
                        Class 10th
                      </option>

                      <option
                        value="11th"
                        className="bg-[#020617]"
                      >
                        Class 11th
                      </option>

                      <option
                        value="12th"
                        className="bg-[#020617]"
                      >
                        Class 12th
                      </option>

                      <option
                        value="jee"
                        className="bg-[#020617]"
                      >
                        JEE Preparation
                      </option>

                      <option
                        value="neet"
                        className="bg-[#020617]"
                      >
                        NEET Preparation
                      </option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="text-sm text-gray-300 mb-3 block">
                    Message
                  </label>

                  <div className="relative">
                    <MessageSquare className="absolute left-5 top-5 text-cyan-300 w-5 h-5" />

                    <textarea
                      rows="5"
                      name="message"
                      placeholder="Write your message..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full rounded-2xl bg-white/[0.04] border border-white/10 pl-14 pr-5 py-5 text-white placeholder:text-gray-500 outline-none focus:border-cyan-400/40 transition-all duration-300 resize-none"
                    ></textarea>
                  </div>
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="group relative overflow-hidden w-full h-16 rounded-2xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 text-white font-semibold text-lg shadow-[0_10px_40px_rgba(0,255,255,0.25)] hover:scale-[1.02] transition-all duration-300"
                >
                  <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>

                  <span className="relative flex items-center justify-center gap-2">
                    Submit Now
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-all duration-300" />
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}