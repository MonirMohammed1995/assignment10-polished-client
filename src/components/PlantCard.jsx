import React from "react";
import { Link } from "react-router-dom";

const PlantCard = ({ plant }) => {
    const {_id,image,name,category,careLevel,healthStatus}=plant;
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex flex-col sm:flex-row overflow-hidden">
      <img
        src={image}
        alt={name}
        className="w-full sm:w-48 h-48 object-cover"
      />
      <div className="flex-1 p-4 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-bold text-green-800">{name}</h3>
          <p className="text-gray-600 mt-1">
            <span className="font-medium">Category:</span> {category}
          </p>
          <p className="text-gray-600 mt-1">
            <span className="font-medium">Care Level:</span> {careLevel}
          </p>
          <p className="text-gray-600 mt-1">
            <span className="font-medium">Health Status:</span>{" "}
            {healthStatus}
          </p>
        </div>
        <div className="mt-4">
          <Link to={`/plants/${_id}`}>
          <button className="bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-700 transition">
             View Details
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;