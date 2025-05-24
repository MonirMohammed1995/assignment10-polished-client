import React, { useState } from "react";
import Banner from "../components/Banner";
import { useLoaderData } from "react-router-dom";
import PlantCard from "../components/PlantCard";
import AllFeature from "../components/AllFeature";
import { Helmet } from "react-helmet";
import PlantReviewCards from "../components/PlantReviewCards";

const Home = () => {
  const plants = useLoaderData();
  const [showAll, setShowAll] = useState(false);

  // Display 6 initially or all if toggled
  const displayedPlants = showAll ? plants : plants.slice(0, 6);

  const handleToggle = () => {
    if (showAll) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setShowAll((prev) => !prev);
  };

  return (
    <div className="min-h-screen mx-auto bg-base-100 max-w-11/12">
      <Helmet>
        <title>Home</title>
      </Helmet>
      {/* Hero Banner */}
      <Banner />
      {/* All Feature */}
      <AllFeature></AllFeature>
      {/* Section Header */}
      <section className="px-4 py-10 text-center">
        <h2 className="text-4xl font-bold text-green-800">🌿 New Arrivals</h2>
        <p className="mt-2 text-lg text-gray-600">
          Explore our latest healthy and beautiful plants
        </p>
      </section>

      {/* Plant Cards */}
      <section className="px-8 pb-10 mx-auto max-w-8xl">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayedPlants.map((plant) => (
            <PlantCard key={plant._id} plant={plant} />
          ))}
        </div>

        {/* Toggle Button */}
        {plants.length > 6 && (
          <div className="mt-10 text-center">
            <button
              onClick={handleToggle}
              className="px-6 py-2 font-semibold text-white transition duration-200 rounded-full bg-lime-600 hover:bg-lime-700"
            >
              {showAll ? "Show Less" : "Show All"}
            </button>
          </div>
        )}
      </section>
      <div>
        <PlantReviewCards></PlantReviewCards>
      </div>
    </div>
  );
};

export default Home;