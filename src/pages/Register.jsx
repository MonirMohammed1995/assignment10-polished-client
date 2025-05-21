import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import app from "../firebase/firebase.config"; // Make sure this is your Firebase initialization

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const Register = () => {
  const navigate = useNavigate();

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
      toast.error("Password must contain uppercase, lowercase and be 6+ characters.");
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
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-lime-50 to-green-100 dark:from-green-900 dark:to-green-800 px-4 py-12">
      <div className="w-full max-w-md bg-white dark:bg-green-950 shadow-xl rounded-xl p-8 space-y-6">
        <h2 className="text-2xl font-bold text-center text-green-700 dark:text-lime-200">Create an Account</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
            <input
              id="name"
              type="text"
              {...register("name", { required: "Name is required" })}
              className="input w-full"
              placeholder="Your name"
            />
            {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
            <input
              id="email"
              type="email"
              {...register("email", { required: "Email is required" })}
              className="input w-full"
              placeholder="you@example.com"
            />
            {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>}
          </div>

          {/* Photo URL */}
          <div>
            <label htmlFor="photo" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Photo URL</label>
            <input
              id="photo"
              type="url"
              {...register("photo", { required: "Photo URL is required" })}
              className="input w-full"
              placeholder="https://..."
            />
            {errors.photo && <p className="text-sm text-red-500 mt-1">{errors.photo.message}</p>}
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
            <input
              id="password"
              type="password"
              {...register("password", { required: "Password is required" })}
              className="input w-full"
              placeholder="••••••••"
            />
            {errors.password && <p className="text-sm text-red-500 mt-1">{errors.password.message}</p>}
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-lime-600 hover:bg-lime-700 text-white font-semibold py-2 px-4 rounded-full transition"
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

        {/* Google Sign-Up */}
        <button
          onClick={handleGoogleSignUp}
          className="w-full flex items-center justify-center gap-2 bg-white border text-gray-700 hover:bg-gray-100 hover:text-gray-950 dark:bg-green-900 dark:text-white dark:border-green-700 py-2 px-4 rounded-full transition"
        >
          <FaGoogle />
          Continue with Google
        </button>

        <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-lime-600 hover:underline">Login</a>
        </p>
      </div>
    </section>
  );
};

export default Register;
