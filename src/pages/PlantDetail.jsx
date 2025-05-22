import React from "react";
import { useLoaderData, Link } from "react-router-dom";

const PlantDetail = () => {
  const plant = useLoaderData();

  const {
    _id,
    image,
    name,
    category,
    careLevel,
    description,
    wateringFrequency,
    lastWateredDate,
    nextWateringDate,
    healthStatus,
    userName,
  } = plant;

  return (
    <section className="bg-green-50 min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">
        <div className="md:flex" key={_id}>
          <div className="md:w-1/2 bg-green-100">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded-l-2xl"
            />
          </div>
          <div className="md:w-1/2 p-6 space-y-4">
            <h2 className="text-3xl font-bold text-green-800">{plant.name}</h2>
            <p className="text-gray-700">
              <strong>Category:</strong> {category}
            </p>
            <p className="text-gray-700">
              <strong>Care Level:</strong> {careLevel}
            </p>
            <p className="text-gray-700">
              <strong>Description:</strong> {description}
            </p>
            <p className="text-gray-700">
              <strong>Watering Frequency:</strong> {wateringFrequency}
            </p>
            <p className="text-gray-700">
              <strong>Last Watered:</strong> {lastWateredDate}
            </p>
            <p className="text-gray-700">
              <strong>Next Watering:</strong> {nextWateringDate}
            </p>
            <p className="text-gray-700">
              <strong>Health Status:</strong> {healthStatus}
            </p>
            <p className="text-gray-700">
              <strong>Owner:</strong> {userName}
            </p>

            <div className="pt-4">
              <Link
                to="/all-plants"
                className="inline-block bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition"
              >
                Back to All Plants
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlantDetail;