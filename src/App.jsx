import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Code2,
  Cpu,
  ShieldCheck,
  Menu,
} from "lucide-react";

export default function App() {
  const services = [
    {
      icon: <Code2 className="h-6 w-6" />,
      title: "Software Development",
      text: "Custom web systems, business portals, dashboards and digital workflow tools built around your needs.",
    },
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "Engineering & Technology",
      text: "Smart, scalable solutions that connect engineering, technology and practical business growth.",
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "Reliable Digital Support",
      text: "Affordable, high-quality delivery with long-term client relationships and dependable support.",
    },
  ];

  const advantages = [
    "Affordable, high-quality products tailored to client needs",
    "Agile development process for faster delivery",
    "Multidisciplinary expertise across various sectors",
    "Dedicated to building long-term client relationships",
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.35),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.25),_transparent_35%)]" />
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:48px_48px]" />

        <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-3">
            <img
              src="/khula-logo-2.png"
              alt="Khula Mhlobo Holdings logo"
              className="h-14 w-14 rounded-2xl object-cover shadow-lg shadow-blue-500/20"
            />
            <div>
              <p className="text-lg font-black tracking-wide">KHULA MHLOBO</p>
              <p className="text-xs uppercase tracking-[0.35em] text-blue-200">
                Holdings (Pty) Ltd
              </p>
            </div>
          </div>

          <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#advantage" className="hover:text-white">Advantages</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>

          <a
            href="#contact"
            className="hidden rounded-full bg-white px-6 py-3 font-semibold text-slate-950 transition hover:bg-blue-100 md:inline-flex"
          >
            Get Started
          </a>
          <Menu className="h-7 w-7 md:hidden" />
        </nav>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 pb-24 pt-12 md:grid-cols-2 md:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-blue-100 backdrop-blur">
              <Sparkles className="h-4 w-4" />
              Founded in 2026 • Built for modern business
            </div>

            <h1 className="max-w-3xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
              Smart, scalable and reliable digital solutions.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Khula Mhlobo Holdings (Pty) Ltd empowers businesses, startups and
              organizations to thrive in the digital era through engineering,
              technology and science-driven solutions.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-blue-500 px-8 py-4 text-base font-semibold text-white transition hover:bg-blue-400"
              >
                Start a Project <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/10"
              >
                View Services
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            <div className="rounded-[2rem] border border-white/10 bg-white/10 p-5 shadow-2xl shadow-blue-950/50 backdrop-blur-xl md:p-8">
              <div className="rounded-[1.5rem] bg-slate-950/80 p-6 md:p-8">
                <img
                  src="/khula-logo.png"
                  alt="Khula Mhlobo Holdings logo"
                  className="mx-auto w-full max-w-md rounded-3xl object-cover ring-1 ring-white/10"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.4em] text-blue-400">
              Company Overview
            </p>
            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              A bridge to greater heights and new opportunities.
            </h2>
          </div>
          <p className="text-lg leading-9 text-slate-300">
            We believe engineering, technology and science should create
            practical milestones for businesses and communities. Our mission is
            to deliver modern work environments, reliable systems and brand-new
            ideas that help clients grow with confidence.
          </p>
        </div>
      </section>

      <section id="services" className="bg-white py-24 text-slate-950">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.4em] text-blue-600">
              What We Do
            </p>
            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              Services designed for growth.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-black">{service.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="advantage" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.4em] text-blue-400">
              Competitive Advantage
            </p>
            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              Why clients choose Khula Mhlobo.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              We combine affordability, speed, quality and sector-wide expertise
              to build solutions that remain useful beyond launch day.
            </p>
          </div>

          <div className="space-y-4">
            {advantages.map((item) => (
              <div
                key={item}
                className="flex gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur"
              >
                <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-blue-400" />
                <p className="text-lg font-semibold text-slate-100">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-slate-900 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-blue-600 to-indigo-900 p-8 shadow-2xl md:p-12">
            <div className="grid gap-10 md:grid-cols-2 md:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.4em] text-blue-100">
                  Contact Details
                </p>
                <h2 className="mt-4 text-4xl font-black md:text-5xl">
                  Let’s build your next digital milestone.
                </h2>
                <p className="mt-6 text-lg leading-8 text-blue-50">
                  Reach out to Khula Mhlobo Holdings for business systems,
                  digital tools and technology-driven solutions.
                </p>
              </div>

              <div className="space-y-5 rounded-[1.5rem] bg-white p-6 text-slate-950">
                <div className="flex gap-4">
                  <MapPin className="h-6 w-6 text-blue-600" />
                  <div>
                    <p className="font-black">Address</p>
                    <p className="text-slate-600">Elandshoek 19, Mbombela</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="h-6 w-6 text-blue-600" />
                  <div>
                    <p className="font-black">Phone</p>
                    <p className="text-slate-600">079 083 7213 / 076 824 8801</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Mail className="h-6 w-6 text-blue-600" />
                  <div>
                    <p className="font-black">Email</p>
                    <p className="text-slate-600">info@khulamhlobo.co.za</p>
                  </div>
                </div>

                <a
                  href="tel:0790837213"
                  className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-6 py-4 font-semibold text-white transition hover:bg-slate-800"
                >
                  Contact Us Today
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
