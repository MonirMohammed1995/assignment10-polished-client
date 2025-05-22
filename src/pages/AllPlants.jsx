import React from "react";
import { useLoaderData, Link } from "react-router-dom";

const AllPlants = () => {
  const plants = useLoaderData();

  return (
    <section className="bg-green-50 min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-green-800 mb-10">
          🌿 All Plants
        </h1>

        <div className="overflow-x-auto bg-white shadow-lg rounded-xl">
          <table className="min-w-full divide-y divide-green-200">
            <thead className="bg-green-100 text-green-800 text-sm uppercase">
              <tr>
                <th scope="col" className="py-4 px-6 text-center">Plant Image</th>
                <th scope="col" className="py-4 px-6 text-left">Plant Name</th>
                <th scope="col" className="py-4 px-6 text-left">Category</th>
                <th scope="col" className="py-4 px-6 text-left">Watering Frequency</th>
                <th scope="col" className="py-4 px-6 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-green-100 text-gray-700">
              {plants && plants.length > 0 ? (
                plants.map(({ _id,image, name, category, wateringFrequency }) => (
                  <tr key={_id} className="hover:bg-green-50 transition">
                    <td className="py-4 px-6 font-medium"><img className="mx-auto w-12" src={image} alt="" /></td>
                    <td className="py-4 px-6 font-medium">{name}</td>
                    <td className="py-4 px-6">{category}</td>
                    <td className="py-4 px-6">{wateringFrequency}</td>
                    <td className="py-4 px-6 text-center">
                      <Link
                        to={`/plants/${_id}`}
                        className="inline-block bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-green-700 transition"
                      >
                        View Details
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="4"
                    className="py-10 px-6 text-center text-gray-500 italic"
                  >
                    No plants found. Please add new plant entries.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default AllPlants;