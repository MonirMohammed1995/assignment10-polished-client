import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import app from '../firebase/firebase.config';
import { Helmet } from 'react-helmet';

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';

  const [showPassword, setShowPassword] = useState(false);

  // Email/Password Login
  const onSubmit = async (data) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      toast.success('Login successful!');
      navigate(from, { replace: true });
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Google Sign-in
  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      toast.success('Google login successful!');
      navigate(from, { replace: true });
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <section className="flex items-center justify-center min-h-screen px-4 py-12 bg-lime-50 dark:bg-green-900">
      <Helmet>
        <title>Login Page</title>
      </Helmet>
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-xl dark:bg-green-950 rounded-xl">
        <h2 className="text-2xl font-bold text-center text-green-700 dark:text-lime-200">Login to Your Account</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
            <input
              type="email"
              {...register('email', { required: 'Email is required' })}
              className={`input w-full ${errors.email ? 'border-red-500' : ''}`}
              placeholder="you@example.com"
            />
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
          </div>

          {/* Password with eye toggle */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                {...register('password', {
                  required: 'Password is required',
                  minLength: { value: 6, message: 'Minimum 6 characters required' },
                })}
                className={`input w-full pr-10 ${errors.password ? 'border-red-500' : ''}`}
                placeholder="••••••••"
              />
              <span
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute top-2.5 right-3 text-gray-500 cursor-pointer"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 font-semibold text-white transition rounded-full bg-lime-600 hover:bg-lime-700"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-2 my-4">
          <hr className="flex-grow border-gray-300 dark:border-green-700" />
          <span className="text-sm text-gray-500 dark:text-gray-400">OR</span>
          <hr className="flex-grow border-gray-300 dark:border-green-700" />
        </div>

        {/* Google Login */}
        <button
          onClick={handleGoogleLogin}
          className="flex items-center justify-center w-full gap-2 px-4 py-2 text-sm font-medium transition border border-gray-300 rounded-full dark:border-green-700 hover:border-lime-600 dark:hover:border-lime-500"
        >
          <FaGoogle className="text-red-500" />
          Sign in with Google
        </button>

        <p className="mt-4 text-sm text-center text-gray-600 dark:text-gray-400">
          Don't have an account?
          <a href="/register" className="ml-1 text-lime-600 hover:underline">
            Register
          </a>
        </p>
      </div>
    </section>
  );
};

export default Login;
