import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { FaGoogle } from 'react-icons/fa';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import app from '../firebase/firebase.config'; // Adjust path as needed

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Email/Password Login
  const onSubmit = async (data) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      toast.success('Login successful!');
      // navigate('/dashboard'); // Add navigation if using react-router
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Google Sign-in
  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      toast.success('Google login successful!');
      // navigate('/dashboard');
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-lime-50 dark:bg-green-900 px-4 py-12">
      <div className="w-full max-w-md bg-white dark:bg-green-950 shadow-xl rounded-xl p-8 space-y-6">
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
            {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
            <input
              type="password"
              {...register('password', {
                required: 'Password is required',
                minLength: { value: 6, message: 'Minimum 6 characters required' },
              })}
              className={`input w-full ${errors.password ? 'border-red-500' : ''}`}
              placeholder="••••••••"
            />
            {errors.password && <p className="text-sm text-red-500 mt-1">{errors.password.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-lime-600 hover:bg-lime-700 text-white font-semibold py-2 px-4 rounded-full transition"
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
          className="w-full flex items-center justify-center gap-2 border border-gray-300 dark:border-green-700 hover:border-lime-600 dark:hover:border-lime-500 text-sm font-medium py-2 px-4 rounded-full transition"
        >
          <FaGoogle className="text-red-500" />
          Sign in with Google
        </button>

        <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-4">
          Don’t have an account?
          <a href="/register" className="text-lime-600 hover:underline ml-1">
            Register
          </a>
        </p>
      </div>
    </section>
  );
};

export default Login;