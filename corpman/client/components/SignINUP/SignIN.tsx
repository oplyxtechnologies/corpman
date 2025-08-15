"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";

type Mode = "signin" | "signup";

export default function AuthPage() {
  const [mode, setMode] = useState<Mode>("signin");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMsg(null);
    setLoading(true);

    const form = new FormData(e.currentTarget);
    const body: Record<string, any> = Object.fromEntries(form.entries());

    // basic client-side checks
    if (mode === "signup") {
      if (!body.name || !body.email || !body.password || !body.confirm) {
        setMsg("Please fill all fields.");
        setLoading(false);
        return;
      }
      if (String(body.password).length < 8) {
        setMsg("Password must be at least 8 characters.");
        setLoading(false);
        return;
      }
      if (body.password !== body.confirm) {
        setMsg("Passwords do not match.");
        setLoading(false);
        return;
      }
    } else {
      if (!body.email || !body.password) {
        setMsg("Email and password are required.");
        setLoading(false);
        return;
      }
    }

    try {
      const res = await fetch(`/api/auth/${mode}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data?.error || "Something went wrong");
      setMsg(
        mode === "signup"
          ? "Account created! You can sign in now."
          : "Signed in!"
      );
      // TODO: On signin success, redirect to dashboard
      // window.location.href = "/dashboard";
    } catch (err: any) {
      setMsg(err.message || "Request failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative overflow-hidden">
      {/* glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-400/5 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-purple-400/15 to-transparent blur-3xl pointer-events-none" />

      <div className="bg-gradient-to-br from-purple-600/0 to-purple-800/40 border-2 border-white/10 p-8 rounded-lg shadow-md w-full max-w-md mx-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm mb-8 text-white/40 hover:text-purple-100 transition"
        >
          <ArrowLeft />
          Back to Home
        </Link>

        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">
            {mode === "signin" ? "Sign In" : "Create Account"}
          </h1>
          <button
            onClick={() =>
              setMode((m) => (m === "signin" ? "signup" : "signin"))
            }
            className="text-xs text-white/60 hover:text-white underline"
          >
            {mode === "signin"
              ? "Need an account? Sign Up"
              : "Have an account? Sign In"}
          </button>
        </div>

        <form onSubmit={onSubmit}>
          {mode === "signup" && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-white/60 mb-2">
                Full Name
              </label>
              <input
                name="name"
                type="text"
                className="w-full px-3 py-2 border border-white/30 rounded bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Alex Carter"
              />
            </div>
          )}

          <div className="mb-4">
            <label className="block text-sm font-medium text-white/60 mb-2">
              Email
            </label>
            <input
              name="email"
              type="email"
              className="w-full px-3 py-2 border border-white/30 rounded bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="you@company.com"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-white/60 mb-2">
              Password
            </label>
            <input
              name="password"
              type="password"
              className="w-full px-3 py-2 border border-white/30 rounded bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="••••••••"
              required
            />
          </div>

          {mode === "signup" && (
            <div className="mb-6">
              <label className="block text-sm font-medium text-white/60 mb-2">
                Confirm Password
              </label>
              <input
                name="confirm"
                type="password"
                className="w-full px-3 py-2 border border-white/30 rounded bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="••••••••"
                required
              />
            </div>
          )}

          {mode === "signin" && (
            <div className="mb-6 text-right">
              <Link
                href="/forgot-password"
                className="text-xs text-white/60 hover:text-white underline"
              >
                Forgot password?
              </Link>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition disabled:opacity-60"
          >
            {loading
              ? "Please wait…"
              : mode === "signin"
              ? "Sign In"
              : "Create Account"}
          </button>

          {msg && <p className="mt-3 text-sm text-purple-200">{msg}</p>}
        </form>
      </div>
    </div>
  );
}
