"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0B0F12] text-white border-t border-white/10">
      {/* Glow Grid */}

      <div className="absolute inset-0 bg-gradient-to-b from-purple-400/5 via-transparent to-transparent blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/Logo/SVG/Logo-White.svg"
                alt="Logo White CorpMan"
                width={1000}
                height={1000}
                className="h-16 w-auto"
              />
            </div>
            <p className="text-sm text-neutral-400">
              Your all‑in‑one corporate management platform for people,
              projects, and performance.
            </p>

            {/* Newsletter */}
            <form
              className="mt-4 flex items-center gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Work email"
                className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 text-sm placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-purple-400/60"
                required
              />
              <button className="rounded-md px-3 py-2 text-sm bg-purple-400 text-black font-medium hover:bg-purple-300 transition-colors">
                Subscribe
              </button>
            </form>

            {/* Social */}
            <div className="flex items-center gap-3 pt-2">
              <Link
                href="#"
                aria-label="Twitter"
                className="p-2 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition"
              >
                <Twitter className="w-4 h-4 text-purple-400" />
              </Link>
              <Link
                href="#"
                aria-label="LinkedIn"
                className="p-2 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition"
              >
                <Linkedin className="w-4 h-4 text-purple-400" />
              </Link>
              <Link
                href="#"
                aria-label="GitHub"
                className="p-2 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition"
              >
                <Github className="w-4 h-4 text-purple-400" />
              </Link>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold mb-3">Product</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>
                <Link
                  href="/product"
                  className="hover:text-purple-400 transition"
                >
                  Overview
                </Link>
              </li>
              <li>
                <Link
                  href="/product/hr"
                  className="hover:text-purple-400 transition"
                >
                  HR & People
                </Link>
              </li>
              <li>
                <Link
                  href="/product/attendance"
                  className="hover:text-purple-400 transition"
                >
                  Attendance
                </Link>
              </li>
              <li>
                <Link
                  href="/product/projects"
                  className="hover:text-purple-400 transition"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/security"
                  className="hover:text-purple-400 transition"
                >
                  Security
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>
                <Link
                  href="/about"
                  className="hover:text-purple-400 transition"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="hover:text-purple-400 transition"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-purple-400 transition"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/press"
                  className="hover:text-purple-400 transition"
                >
                  Press
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-purple-400" />
                support@corpman.app
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-purple-400" />
                +1 (555) 123‑4567
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-purple-400" />
                221B Enterprise Ave, NY
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-3 items-center justify-between border-t border-white/10 pt-6 text-xs text-neutral-500 md:flex-row">
          <span>
            © {new Date().getFullYear()} Corp Man. All rights reserved.
          </span>
          <span>
            Built with ❤️ a product by{" "}
            <a
              href="https://www.oplyx.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:text-white text-white/60"
            >
              Oplyx Technologies
            </a>
          </span>

          <div className="flex items-center gap-4">
            <Link href="/terms" className="hover:text-purple-400 transition">
              Terms
            </Link>
            <Link href="/privacy" className="hover:text-purple-400 transition">
              Privacy
            </Link>
            <Link href="/status" className="hover:text-purple-400 transition">
              Status
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
