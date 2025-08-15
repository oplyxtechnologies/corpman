"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, User, Briefcase, Clock3, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-x-clip overflow-hidden bg-gradient-to-r from-black via-transparent to-transparent text-white">
      {/* Animated Glow Grid */}
      <div
        className="absolute inset-0 opacity-50 -z-1
        [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
        [background-size:40px_40px] animate-[moveGrid_20s_linear_infinite] pointer-events-none"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-purple-400/10 via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-sm font-medium border border-white/10 backdrop-blur-md">
            <span className="inline-block size-2 rounded-full bg-purple-400 shadow-[0_0_8px_#c27aff]" />
            Corp Man Overview
          </span>

          <h1 className="mb-5 text-4xl md:text-5xl font-bold leading-tight">
            Manage Your <span className="text-purple-400">Corporate</span>{" "}
            Operations With Clarity.
          </h1>

          <p className="mb-8 text-lg text-neutral-400">
            Automate HR, attendance, leave, approvals, projects, and reporting —
            all from one secure workspace.
          </p>

          <ul className="mb-10 space-y-3">
            <li className="flex items-center gap-3">
              <CheckCircle className="text-purple-400 size-5 drop-shadow-[0_0_6px_#c27aff]" />
              <span className="text-neutral-300">
                Create and manage workflows easily
              </span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle className="text-purple-400 size-5 drop-shadow-[0_0_6px_#c27aff]" />
              <span className="text-neutral-300">
                Real-time analytics for better decisions
              </span>
            </li>
          </ul>

          <Link
            href="/demo"
            className="inline-block rounded-full bg-purple-400 px-6 py-3 text-black font-medium hover:bg-purple-300 transition-colors group"
          >
            See How it Works{" "}
            <ArrowRight className="inline size-4 ml-2 group-hover:translate-x-2 transition-all duration-300" />
          </Link>
        </motion.div>

        {/* Right Content - Corp Man Themed Floating Cards (mobile-safe) */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="relative grid gap-5"
        >
          <div className="flex flex-col items-stretch gap-5 md:gap-10">
            {/* Employee Overview Card */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="
                p-5 w-full sm:max-w-sm
                rounded-xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg
                rotate-0 md:-rotate-2
                translate-x-0 translate-y-0 md:translate-x-0 md:translate-y-0
              "
            >
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-purple-400 flex items-center justify-center text-black font-bold">
                  A
                </div>
                <div>
                  <p className="font-medium text-white">Alex Carter</p>
                  <p className="text-xs text-neutral-400">Product Manager</p>
                </div>
              </div>
              <div className="mt-4 space-y-2 text-sm text-neutral-300">
                <p className="flex items-center gap-2">
                  <User className="size-4 text-purple-400" /> Employee ID:
                  EMP-1024
                </p>
                <p className="flex items-center gap-2">
                  <Briefcase className="size-4 text-purple-400" /> Department:
                  Operations
                </p>
                <p className="flex items-center gap-2">
                  <Clock3 className="size-4 text-purple-400" /> Status: Active
                </p>
              </div>
            </motion.div>

            {/* Quick Stats Card */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="
                p-5 w-full sm:max-w-sm
                rounded-xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg
                rotate-0 md:rotate-3
                translate-x-0 translate-y-0 md:translate-x-6 md:-translate-y-2
              "
            >
              <h3 className="text-sm text-neutral-400 mb-3">Quick Stats</h3>
              <div className="flex items-center justify-between text-neutral-300 mb-2">
                <span>Approvals Pending</span>
                <span className="text-purple-400 font-medium">5</span>
              </div>
              <div className="flex items-center justify-between text-neutral-300 mb-2">
                <span>Leave Balance</span>
                <span className="text-purple-400 font-medium">12 days</span>
              </div>
              <div className="flex items-center justify-between text-neutral-300">
                <span>Tasks Due Today</span>
                <span className="text-purple-400 font-medium">3</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Stats Row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="relative bg-gradient-to-b from-transparent  to-[#0f1117] backdrop-blur-md"
      >
        <div className="mx-auto max-w-7xl px-4 py-10 grid grid-cols-1 sm:grid-cols-3 text-center gap-8">
          <div>
            <p className="text-purple-400 text-2xl font-bold">+22k</p>
            <p className="text-neutral-400 text-sm">Active Users</p>
          </div>
          <div>
            <p className="text-purple-400 text-2xl font-bold">+33k</p>
            <p className="text-neutral-400 text-sm">Reports Generated</p>
          </div>
          <div>
            <p className="text-purple-400 text-2xl font-bold">+44k</p>
            <p className="text-neutral-400 text-sm">Tasks Completed</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
