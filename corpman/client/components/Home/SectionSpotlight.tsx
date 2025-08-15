"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Users, Clock3, CalendarCheck, Workflow } from "lucide-react";

const spotlightFeatures = [
  { icon: Users, text: "Smart onboarding & employee profiles" },
  { icon: Clock3, text: "Attendance tracking & timesheets" },
  { icon: CalendarCheck, text: "Leave policies & holiday calendars" },
  { icon: Workflow, text: "Custom approval workflows" },
];

export default function SectionSpotlight() {
  return (
    <section className="relative overflow-hidden bg-[#0B0F12] py-20 ">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent  via-purple-400/5 to-transparent blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Left - Product Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-[4/3] w-full rounded-xl bg-white/5 border border-white/10 backdrop-blur-md overflow-hidden shadow-lg">
            <Image
              src="/corpman-dashboard.png" // Replace with actual image
              alt="Corp Man Dashboard Preview"
              fill
              className="object-fill"
            />
          </div>
        </motion.div>

        {/* Right - Text & Features */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-5">
            From Onboarding to Payroll in{" "}
            <span className="text-purple-400">One Flow</span>
          </h2>
          <p className="text-neutral-400 mb-8">
            Automate new hire processes, manage attendance & leave, track
            approvals, and sync with payroll — all while keeping data secure and
            compliant.
          </p>
          <ul className="space-y-4">
            {spotlightFeatures.map((f, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <f.icon className="size-5 text-purple-400 " />
                <span className="text-neutral-300">{f.text}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
