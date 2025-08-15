"use client";

import { motion } from "framer-motion";
import { Shield, BarChart3, Users } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Unified Workspace",
    desc: "Manage HR, attendance, leave, approvals, and projects in one secure hub.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    desc: "Role-based access control, audit logs, and data encryption for peace of mind.",
  },
  {
    icon: BarChart3,
    title: "Clear Insights",
    desc: "Real-time dashboards and automated reports for smarter decisions.",
  },
];

export default function SectionFeatures() {
  return (
    <section className="relative overflow-hidden bg-[#0B0F12] py-20 ">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-400/5 via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="text-purple-400">Corp Man</span>
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Our platform is designed to streamline your corporate operations
            with powerful tools, secure infrastructure, and actionable insights.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors shadow-lg"
            >
              <feature.icon className="size-6 text-purple-400 mb-4 " />
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
