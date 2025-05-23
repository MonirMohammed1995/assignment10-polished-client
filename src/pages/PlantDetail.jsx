import React from "react";
import { Helmet } from "react-helmet";
import { useLoaderData, Link, useParams } from "react-router-dom";

const PlantDetail = () => {
    const{id}=useParams();
  const plantData = useLoaderData();
  const singlePlantDetails=plantData.find(plant=>plant._id==id)
  const {
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
  } = singlePlantDetails;
  console.log(singlePlantDetails);

  return (
    <section className="min-h-screen px-4 py-10 bg-green-50">
      <Helmet>
        <title>Plant Details</title>
      </Helmet>
      <div className="max-w-4xl mx-auto overflow-hidden bg-white shadow-xl rounded-2xl">
        <div className="md:flex">
          <div className="bg-green-100 md:w-1/2">
            <img
              src={image}
              alt={name}
              className="object-cover w-full h-full rounded-l-2xl"
            />
          </div>
          <div className="p-6 space-y-4 md:w-1/2">
            <h2 className="text-3xl font-bold text-green-800">{name}</h2>
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
                className="inline-block px-4 py-2 text-white transition bg-green-600 rounded-full hover:bg-green-700"
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