"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Thompson",
    role: "HR Manager, FinTech Co.",
    quote:
      "Corp Man transformed our HR operations. We’ve cut manual work by 40% and approvals are 3x faster.",
  },
  {
    name: "David Li",
    role: "Operations Lead, Retail Group",
    quote:
      "Attendance and leave tracking across branches has never been this smooth. The dashboard is a game-changer.",
  },
  {
    name: "Maria Gonzalez",
    role: "CEO, Creative Agency",
    quote:
      "Corp Man gives me real-time visibility into projects and team performance — essential for scaling our business.",
  },
];

export default function SectionTestimonials() {
  return (
    <section className="relative  overflow-hidden bg-[#0B0F12] py-20 ">
      <div className="relative max-w-7xl mx-auto overflow-hidden bg-[#0B0F12] py-20 ">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent  via-purple-400/5 to-transparent blur-3xl pointer-events-none" />
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="text-purple-400">Users</span> Say
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Hear from real users about
          </p>
        </motion.div>
        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg hover:bg-white/10 transition-colors"
            >
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-4 text-purple-400" />
                ))}
              </div>
              <p className="text-neutral-300 text-sm leading-relaxed mb-4">
                “{t.quote}”
              </p>
              <div>
                <p className="font-medium text-white">{t.name}</p>
                <p className="text-xs text-neutral-400">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
