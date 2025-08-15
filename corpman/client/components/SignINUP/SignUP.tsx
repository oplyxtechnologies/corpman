export default function SignUP() {
  return (
    <main className="flex items-center justify-center min-h-screen ">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent  via-purple-400/5 to-transparent blur-3xl pointer-events-none" />
      <div className="bg-gradient-to-br from-purple-600/00 to-purple-800/40 border-2 border-white/10 p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 ">Sign In</h1>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-white/40 mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full px-3 py-2 border border-white/40 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-white/40 mb-2">
              Password
            </label>
            <input
              type="password"
              className="w-full px-3 py-2 border border-white/40 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition duration-200"
          >
            Sign In
          </button>
          <p className="mt-4 text-sm text-white/40">
            Don't have an account?{" "}
            <a href="/signup" className="text-purple-600 hover:underline">
              Sign Up
            </a>
          </p>
        </form>
        <hr />
        <h3>SSO</h3>
      </div>
    </main>
  );
}
