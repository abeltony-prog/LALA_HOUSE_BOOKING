import { EyeOff, Eye } from "lucide-react";
import React, { useState } from "react";

export default function ContactUsPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [password, setPassword] = useState("")

  const hasNumber = /\d/.test(password)
  const hasMinLength = password.length >= 8
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
          <h2 className="text-3xl font-semibold">Join Now</h2>
        </div>

        <form className="space-y-6">
          <div className="space-y-4">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name*
              </label>
              <input
                type="text"
                id="name"
                placeholder="Courtney Henry"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black transition-colors"
              />
            </div>

            {/* Email Input */}
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

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2">
                Password*
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="px#Qszxza1"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black transition-colors pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              {/* Password Requirements */}
              <div className="mt-2 space-y-2">
                <p className="text-sm text-gray-500">Your password need to include:</p>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-sm">
                    <div
                      className={`w-4 h-4 rounded-full flex items-center justify-center ${hasNumber ? "bg-green-500" : "bg-gray-200"}`}
                    >
                      {hasNumber && <span className="text-white text-xs">✓</span>}
                    </div>
                    <span>Must contain one number</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div
                      className={`w-4 h-4 rounded-full flex items-center justify-center ${hasMinLength ? "bg-green-500" : "bg-gray-200"}`}
                    >
                      {hasMinLength && <span className="text-white text-xs">✓</span>}
                    </div>
                    <span>Min 8 characters</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="terms"
              className="w-4 h-4 rounded border-gray-300 text-black focus:ring-black"
            />
            <label htmlFor="terms" className="text-sm">
              I agree to the{" "}
              <a href="#" className="text-black hover:underline">
                Terms
              </a>
              &
              <a href="#" className="text-black hover:underline">
                Privacy
              </a>
            </label>
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-black/90 transition-colors"
          >
            SIGN ME UP!
          </button>

          {/* Login Link */}
          <div className="text-center">
            <p className="text-sm text-gray-500">
              Already have an account?{" "}
              <a href="#" className="text-black hover:underline">
                Log in
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
  );
}
