import React from "react";
import { Link } from "react-router-dom";

const PlantCard = ({ plant }) => {
    const {_id,image,name,category,careLevel,healthStatus}=plant;
  return (
    <div className="flex flex-col overflow-hidden transition-transform duration-300 -translate-y-1 bg-white shadow-md rounded-2xl hover:shadow-xl hover: sm:flex-row">
      <img
        src={image}
        alt={name}
        className="object-cover w-full h-48 sm:w-48"
      />
      <div className="flex flex-col justify-between flex-1 p-4">
        <div>
          <h3 className="text-2xl font-bold text-green-800">{name}</h3>
          <p className="mt-1 text-gray-600">
            <span className="font-medium">Category:</span> {category}
          </p>
          <p className="mt-1 text-gray-600">
            <span className="font-medium">Care Level:</span> {careLevel}
          </p>
          <p className="mt-1 text-gray-600">
            <span className="font-medium">Health Status:</span>{" "}
            {healthStatus}
          </p>
        </div>
        <div className="mt-4">
          <Link to={`/plants/${_id}`}>
          <button className="px-5 py-2 text-white transition bg-green-600 rounded-full hover:bg-green-700">
             View Details
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;