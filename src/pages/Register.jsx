import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import { Helmet } from "react-helmet";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { name, email, password, photo } = data;

    const passwordValid =
      /[A-Z]/.test(password) &&
      /[a-z]/.test(password) &&
      password.length >= 6;

    if (!passwordValid) {
      toast.error("Password must include uppercase, lowercase, and be at least 6 characters.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, {
        displayName: name,
        photoURL: photo,
      });

      toast.success("Registration successful!");
      reset();
      navigate("/");
    } catch (err) {
      toast.error(err.message || "Registration failed");
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      toast.success(`Welcome, ${user.displayName}`);
      navigate("/");
    } catch (error) {
      toast.error(error.message || "Google sign-in failed");
    }
  };

  return (
    <section className="flex items-center justify-center min-h-screen px-4 py-12 bg-gradient-to-br from-lime-50 to-green-100 dark:from-green-900 dark:to-green-800">
      <Helmet>
        <title>Register</title>
      </Helmet>

      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-xl dark:bg-green-950 rounded-xl">
        <h2 className="text-2xl font-bold text-center text-green-700 dark:text-lime-200">Create an Account</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              placeholder="Your full name"
              className="w-full px-4 py-2 border rounded-md shadow-sm dark:bg-green-900 dark:border-green-700 focus:outline-none focus:ring-2 focus:ring-lime-500"
            />
            {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded-md shadow-sm dark:bg-green-900 dark:border-green-700 focus:outline-none focus:ring-2 focus:ring-lime-500"
            />
            {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
          </div>

          {/* Photo URL */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Photo URL</label>
            <input
              type="url"
              {...register("photo", { required: "Photo URL is required" })}
              placeholder="https://..."
              className="w-full px-4 py-2 border rounded-md shadow-sm dark:bg-green-900 dark:border-green-700 focus:outline-none focus:ring-2 focus:ring-lime-500"
            />
            {errors.photo && <p className="text-sm text-red-500">{errors.photo.message}</p>}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                {...register("password", { required: "Password is required" })}
                placeholder="••••••••"
                className="w-full px-4 py-2 pr-10 border rounded-md shadow-sm dark:bg-green-900 dark:border-green-700 focus:outline-none focus:ring-2 focus:ring-lime-500"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 cursor-pointer text-gray-500"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full px-4 py-2 font-semibold text-white transition rounded-full bg-lime-600 hover:bg-lime-700"
          >
            Register
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-2 text-gray-500 dark:text-gray-300">
          <hr className="flex-grow border-gray-300" />
          <span className="text-sm">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Google Button */}
        <button
          onClick={handleGoogleSignUp}
          className="flex items-center justify-center w-full gap-2 px-4 py-2 text-gray-700 transition bg-white border rounded-full hover:bg-gray-100 dark:bg-green-900 dark:text-white dark:border-green-700"
        >
          <FaGoogle />
          Continue with Google
        </button>

        {/* Login link */}
        <p className="mt-4 text-sm text-center text-gray-600 dark:text-gray-400">
          Already have an account?{" "}
          <a href="/login" className="text-lime-600 hover:underline">Login</a>
        </p>
      </div>
    </section>
  );
};

export default Register;