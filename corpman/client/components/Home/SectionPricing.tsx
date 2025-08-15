"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const plans = [
  {
    name: "Starter",
    price: "$9",
    period: "/user/mo",
    features: [
      "Core HR & Attendance",
      "Basic Leave Management",
      "Project Tracking",
      "Email Support",
    ],
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$19",
    period: "/user/mo",
    features: [
      "Everything in Starter",
      "Advanced Reporting",
      "Custom Approvals",
      "Priority Support",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    features: [
      "Everything in Growth",
      "Dedicated Account Manager",
      "Custom Integrations",
      "SLA & Compliance Support",
    ],
    highlighted: false,
  },
];

export default function SectionPricing() {
  return (
    <section className="relative overflow-hidden bg-[#0B0F12] py-20 ">
      {/* Glow Grid */}

      <div className="absolute inset-0 bg-gradient-to-b from-transparent  to-purple-400/5  blur-3xl pointer-events-none" />

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
            Simple <span className="text-purple-400">Transparent</span> Pricing
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Choose the plan that fits your business. No hidden fees. Upgrade or
            downgrade anytime.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className={`p-6 rounded-xl border border-white/10 backdrop-blur-md bg-white/5 shadow-lg flex flex-col ${
                plan.highlighted ? "ring-1 ring-purple-400/20" : ""
              }`}
            >
              <h3 className="text-lg font-semibold mb-2 text-white">
                {plan.name}
              </h3>
              <div className="mb-6">
                <span className="text-3xl font-bold text-purple-400">
                  {plan.price}
                </span>
                <span className="text-neutral-400">{plan.period}</span>
              </div>
              <ul className="space-y-2 text-sm text-neutral-300 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="text-purple-400">•</span> {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/signup"
                className={`mt-6 block text-center rounded-md px-4 py-2 font-medium transition-colors ${
                  plan.highlighted
                    ? "bg-purple-400 text-black hover:bg-purple-300 "
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {plan.highlighted ? "Get Started" : "Choose Plan"}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
