import React from "react";
import Banner from "../components/Banner";
import { useLoaderData } from "react-router-dom";
import PlantCard from "../components/PlantCard";

const Home = () => {
  const plants = useLoaderData();

  return (
    <div className="bg-green-50 min-h-screen">
      <Banner />

      {/* Section Header */}
      <section className="text-center py-10 px-4">
        <h2 className="text-4xl font-bold text-green-800">
          🌿 New Arrivals
        </h2>
        <p className="text-gray-600 mt-2 text-lg">
          Explore our latest healthy and beautiful plants
        </p>
      </section>

      {/* Plant Cards Grid */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {plants.map((plant) => (
            <PlantCard key={plant._id} plant={plant} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;