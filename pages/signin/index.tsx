import { EyeOff, Eye } from "lucide-react";
import React, { useState } from "react";

export default function ServicesPage() {
  const [showPassword, setShowPassword] = useState(false)


  return (
    <div className="flex min-h-screen">
    {/* Left Section */}
    <div className="hidden lg:flex lg:w-1/2 relative bg-black">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${"https://onekindesign.com/wp-content/uploads/2019/10/Traditional-English-Manor-House-Jauregui-Architect-01-1-Kindesign.jpg"})`,
        }}
      />
      <div className="relative z-10 p-12 text-white">
        <div className="w-8 h-8">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-2a8 8 0 100-16 8 8 0 000 16z" />
          </svg>
        </div>
        <div className="mt-auto">
          <h1 className="text-3xl font-mono mt-40">
            Discover the Future of Finance
            <br />
            from Mars <span className="inline-block w-6 h-6 mx-2">🚀</span> to Your Wallet
          </h1>
        </div>
      </div>
    </div>

    {/* Right Section */}
    <div className="flex-1 flex items-center justify-center p-6 lg:p-12">
      <div className="w-full max-w-md space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold">Signin</h2>
        </div>

        <form className="space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email*
              </label>
              <input
                type="email"
                id="email"
                placeholder="courtneyhenry11@gmail.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black transition-colors"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2">
                Password*
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="px#Qszxza1"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black transition-colors pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 mt-3 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-black/90 transition-colors"
          >
            SIGN ME IN
          </button>

          {/* Login Link */}
          <div className="text-center">
            <p className="text-sm text-gray-500">
              Already have an account?{" "}
              <a href="#" className="text-black hover:underline">
                Register
              </a>
            </p>
          </div>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or</span>
            </div>
          </div>

          {/* Social Login Buttons */}
          <div className="grid grid-cols-1 gap-4">
            <button
              type="button"
              className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Sign in with Google
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  );
}
