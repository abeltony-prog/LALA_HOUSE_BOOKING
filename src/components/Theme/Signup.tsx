import bcrypt from "bcryptjs";
import { EyeOff, Eye } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { useAddNewUserMutation } from "src/graphql/generated/graphql";

export default function Signup() {
  const { mutate: addUser } = useAddNewUserMutation();
  const [showPassword, setShowPassword] = useState(false);
  const [NewUserInputs, setNewUserInputs] = useState({
    name: "",
    email: "",
    gender: "",
    password: "",
  });

  const handleChanges = (e: any) => {
    setNewUserInputs({
      ...NewUserInputs,
      [e.target.id]: e.target.value,
    });
  };

  const hasNumber = /\d/.test(NewUserInputs?.password);
  const hasMinLength = NewUserInputs?.password.length >= 8;

  const RegisterUserAccount = async () => {
    const hashedPassword = await bcrypt.hash(NewUserInputs?.password, 10);
    try {
      addUser({
        name: NewUserInputs?.name,
        gender: NewUserInputs?.gender,
        email: NewUserInputs?.email,
        role: "Renter",
        password: hashedPassword,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={RegisterUserAccount} className="space-y-6">
      <div className="space-y-4">
        {/* Name Input */}
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Name*
          </label>
          <input
            type="text"
            id="name"
            value={NewUserInputs?.name}
            onChange={handleChanges}
            placeholder="Courtney Henry"
            className="w-full rounded-lg border border-gray-300 px-4 py-2 transition-colors focus:border-black focus:ring-2 focus:ring-black"
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium">Gender*</label>
          <select
            name=""
            id="gender"
            value={NewUserInputs?.gender}
            onChange={handleChanges}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 transition-colors focus:border-black focus:ring-2 focus:ring-black"
          >
            <option value=""></option>
            <option value="male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        {/* Email Input */}
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Email*
          </label>
          <input
            type="email"
            id="email"
            value={NewUserInputs?.email}
            onChange={handleChanges}
            placeholder="courtneyhenry11@gmail.com"
            className="w-full rounded-lg border border-gray-300 px-4 py-2 transition-colors focus:border-black focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Password Input */}
        <div>
          <label htmlFor="password" className="mb-2 block text-sm font-medium">
            Password*
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={NewUserInputs?.password}
              onChange={handleChanges}
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
                  {hasNumber && <span className="text-xs text-white">✓</span>}
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
          <Link href={"/signin"} passHref>
            <span className="cursor-pointer text-black hover:underline">
              Login
            </span>
          </Link>
        </p>
      </div>
    </form>
  );
}
