import { EyeOff, Eye } from "lucide-react";
import React, { useState } from "react";

export default function ContactUsPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const hasNumber = /\d/.test(password);
  const hasMinLength = password.length >= 8;
  return (
    <div className="flex min-h-screen">
      {/* Left Section */}
      <div className="relative hidden bg-black lg:flex lg:w-1/2">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${"https://onekindesign.com/wp-content/uploads/2019/10/Traditional-English-Manor-House-Jauregui-Architect-01-1-Kindesign.jpg"})`,
          }}
        />
        <div className="relative z-10 p-12 text-white">
          <div className="h-8 w-8">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-2a8 8 0 100-16 8 8 0 000 16z" />
            </svg>
          </div>
          <div className="mt-auto">
            <h1 className="mt-40 font-mono text-3xl">
              Discover the Future of Finance
              <br />
              from Mars <span className="mx-2 inline-block h-6 w-6">🚀</span> to
              Your Wallet
            </h1>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-1 items-center justify-center p-6 lg:p-12">
        <div className="w-full max-w-md space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold">Join Now</h2>
          </div>

          <form className="space-y-6">
            <div className="space-y-4">
              {/* Name Input */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium"
                >
                  Name*
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Courtney Henry"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 transition-colors focus:border-black focus:ring-2 focus:ring-black"
                />
              </div>

              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium"
                >
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="courtneyhenry11@gmail.com"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 transition-colors focus:border-black focus:ring-2 focus:ring-black"
                />
              </div>

              {/* Password Input */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium"
                >
                  Password*
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="px#Qszxza1"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 pr-10 transition-colors focus:border-black focus:ring-2 focus:ring-black"
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
                  <p className="text-sm text-gray-500">
                    Your password need to include:
                  </p>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-sm">
                      <div
                        className={`flex h-4 w-4 items-center justify-center rounded-full ${
                          hasNumber ? "bg-green-500" : "bg-gray-200"
                        }`}
                      >
                        {hasNumber && (
                          <span className="text-xs text-white">✓</span>
                        )}
                      </div>
                      <span>Must contain one number</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div
                        className={`flex h-4 w-4 items-center justify-center rounded-full ${
                          hasMinLength ? "bg-green-500" : "bg-gray-200"
                        }`}
                      >
                        {hasMinLength && (
                          <span className="text-xs text-white">✓</span>
                        )}
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
                className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
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
              className="w-full rounded-lg bg-black py-2 px-4 text-white transition-colors hover:bg-black/90"
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
