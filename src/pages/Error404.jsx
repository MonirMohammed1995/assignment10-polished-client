import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <section className="flex items-center justify-center min-h-screen px-4 bg-green-50">
      <Helmet>
        <title>Error-404</title>
      </Helmet>
      <div className="max-w-md text-center">
        <h1 className="mb-4 text-6xl font-bold text-green-700">404</h1>
        <p className="mb-2 text-2xl font-semibold text-gray-800">
          Page Not Found
        </p>
        <p className="mb-6 text-gray-600">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-2 text-white transition bg-green-600 rounded-full hover:bg-green-700"
        >
          Go Back to Home
        </Link>
      </div>
    </section>
  );
};

export default Error404;
