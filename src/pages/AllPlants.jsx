import React from "react";
import { Helmet } from "react-helmet";
import { useLoaderData, Link } from "react-router-dom";

const AllPlants = () => {
  const plants = useLoaderData();

  return (
    <section className="min-h-screen px-4 py-12 bg-green-50">
      <Helmet>
        <title>All Plant Table Data</title>
      </Helmet>
      <div className="max-w-6xl mx-auto">
        <h1 className="mb-10 text-4xl font-extrabold text-center text-green-800">
          🌿 All Plants
        </h1>

        <div className="overflow-x-auto bg-white shadow-lg rounded-xl">
          <table className="min-w-full divide-y divide-green-200">
            <thead className="text-sm text-green-800 uppercase bg-green-100">
              <tr>
                <th scope="col" className="px-6 py-4 text-center">Plant Image</th>
                <th scope="col" className="px-6 py-4 text-left">Plant Name</th>
                <th scope="col" className="px-6 py-4 text-left">Category</th>
                <th scope="col" className="px-6 py-4 text-left">Watering Frequency</th>
                <th scope="col" className="px-6 py-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 bg-white divide-y divide-green-100">
              {plants && plants.length > 0 ? (
                plants.map(({ _id,image, name, category, wateringFrequency }) => (
                  <tr key={_id} className="transition hover:bg-green-50">
                    <td className="px-6 py-4 font-medium"><img className="w-12 mx-auto" src={image} alt="" /></td>
                    <td className="px-6 py-4 font-medium">{name}</td>
                    <td className="px-6 py-4">{category}</td>
                    <td className="px-6 py-4">{wateringFrequency}</td>
                    <td className="px-6 py-4 text-center">
                      <Link
                        to={`/plants/${_id}`}
                        className="inline-block px-4 py-2 text-sm font-semibold text-white transition bg-green-600 rounded-full hover:bg-green-700"
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
                    className="px-6 py-10 italic text-center text-gray-500"
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