import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-green-50 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-green-700 mb-4">404</h1>
        <p className="text-2xl font-semibold text-gray-800 mb-2">
          Page Not Found
        </p>
        <p className="text-gray-600 mb-6">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-block bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition"
        >
          Go Back to Home
        </Link>
      </div>
    </section>
  );
};

export default Error404;
