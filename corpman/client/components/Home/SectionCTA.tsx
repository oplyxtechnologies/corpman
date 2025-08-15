"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function SectionFinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#0B0F12] py-20 border-t border-white/10">
      {/* Glow Grid */}
      <div
        className="absolute inset-0 opacity-50 pointer-events-none
        [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
        [background-size:40px_40px] animate-[moveGrid_20s_linear_infinite]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-purple-400/5 via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Ready to <span className="text-purple-400">Streamline</span> Your
          Operations?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-neutral-400 mb-8"
        >
          Join thousands of teams already using Corp Man to manage their people,
          projects, and performance — all in one secure platform.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/signup"
            className="px-6 py-3 rounded-md bg-purple-400 text-black font-medium hover:bg-purple-300 transition-colors shadow-[0_0_15px_#c27aff]"
          >
            Get Started Free
          </Link>
          <Link
            href="/demo"
            className="px-6 py-3 rounded-md bg-white/10 text-white font-medium hover:bg-white/20 transition-colors"
          >
            Book a Demo
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
