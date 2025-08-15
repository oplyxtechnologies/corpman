"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  // Refs to avoid re-renders on every scroll tick
  const lastY = useRef(0);
  const ticking = useRef(false);

  const links = [
    { href: "#features", label: "Features" },
    { href: "#solutions", label: "Solutions" },
    { href: "#pricing", label: "Pricing" },
    { href: "#resources", label: "Resources" },
  ];

  useEffect(() => {
    const onScroll = () => {
      // Don't hide the bar while the mobile menu is open
      if (mobileOpen) return;

      const y = window.scrollY;
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const delta = y - lastY.current; // +down / -up
          const threshold = 6; // small movement filter

          setScrolled(y > 8);

          if (y < 80) {
            // Always show near the top
            setShowNav(true);
          } else if (delta > threshold) {
            // scrolling down
            setShowNav(false);
          } else if (delta < -threshold) {
            // scrolling up
            setShowNav(true);
          }

          lastY.current = y;
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [mobileOpen]);

  return (
    <AnimatePresence>
      {showNav && (
        <motion.header
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.26, ease: "easeOut" }}
          className={[
            "sticky top-0 z-50  overflow-x-clip",
            "backdrop-blur-md",
            "bg-[#0B0F12]/70", // dark glass
            scrolled
              ? "border-b border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.35)]"
              : "",
          ].join(" ")}
        >
          <div className="relative mx-auto max-w-7xl px-4 h-14 md:h-16 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/Logo/Logo.svg" // put file under /public/Logo/Logo.svg
                alt="Corp Man"
                width={120}
                height={32}
                priority
                className="h-8 w-auto md:h-10"
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex gap-6">
              {links.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm text-neutral-300/70 hover:text-purple-400 transition-colors"
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="hidden md:flex gap-2">
              <Link
                href="/signin"
                className="px-3 py-1.5 text-sm rounded-md text-neutral-300 hover:bg-white/5 hover:text-white transition-colors"
              >
                Sign in
              </Link>
              <Link
                href="/demo"
                className="px-4 py-1.5 text-sm rounded-md bg-purple-400 text-black hover:bg-purple-300 transition-colors shadow-[0_0_10px_#c27aff]"
              >
                Book a demo
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              className="md:hidden p-2 rounded-md hover:bg-white/5"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <X className="h-5 w-5 text-white" />
              ) : (
                <Menu className="h-5 w-5 text-white" />
              )}
            </button>
          </div>

          {/* Mobile menu */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="md:hidden border-t border-white/10 bg-[#0B0F12]/95 backdrop-blur-md"
              >
                <nav className="px-4 py-4 flex flex-col gap-3">
                  {links.map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      onClick={() => setMobileOpen(false)}
                      className="text-sm text-neutral-300 hover:text-purple-400 transition-colors"
                    >
                      {label}
                    </Link>
                  ))}
                  <hr className="my-2 border-white/10" />
                  <Link
                    href="/signin"
                    onClick={() => setMobileOpen(false)}
                    className="px-3 py-2 rounded-md text-neutral-300 hover:bg-white/5 hover:text-white transition-colors"
                  >
                    Sign in
                  </Link>
                  <Link
                    href="/demo"
                    onClick={() => setMobileOpen(false)}
                    className="px-3 py-2 rounded-md bg-purple-400 text-black hover:bg-purple-300 transition-colors shadow-[0_0_10px_#c27aff]"
                  >
                    Book a demo
                  </Link>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
