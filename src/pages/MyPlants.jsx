import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthProvider";
import Loader from "../components/Loader";

const MyPlants = () => {
  const { user } = useContext(AuthContext);
  const [myPlants, setMyPlants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5500/plants?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setMyPlants(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Failed to fetch user's plants:", error);
          setLoading(false);
        });
    }
  }, [user?.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won’t be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#16a34a",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5500/plants/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              setMyPlants(myPlants.filter((plant) => plant._id !== id));
              Swal.fire("Deleted!", "Your plant has been deleted.", "success");
            }
          });
      }
    });
  };

  if (loading) return <Loader />;

  return (
    <section className="min-h-screen p-6 bg-green-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-6 text-3xl font-bold text-green-800">My Plants</h2>

        {myPlants.length === 0 ? (
          <p className="text-gray-600">No plants found.</p>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {myPlants.map((plant) => (
              <div
                key={plant._id}
                className="overflow-hidden bg-white shadow-md rounded-xl"
              >
                <img
                  src={plant.image}
                  alt={plant.name}
                  className="object-cover w-full h-48"
                />
                <div className="p-4 space-y-2">
                  <h3 className="text-xl font-semibold text-green-700">
                    {plant.name}
                  </h3>
                  <p className="text-gray-600">
                    <strong>Category:</strong> {plant.category}
                  </p>
                  <p className="text-gray-600">
                    <strong>Health:</strong> {plant.healthStatus}
                  </p>
                  <p className="text-sm italic text-gray-600">
                    Added by: {plant.userName} ({plant.userEmail})
                  </p>

                  <div className="flex gap-2 pt-3">
                    <Link
                      to={`/update-plant/${plant._id}`}
                      className="px-3 py-1 text-sm text-white bg-green-600 rounded hover:bg-green-700"
                    >
                      Update
                    </Link>
                    <button
                      onClick={() => handleDelete(plant._id)}
                      className="px-3 py-1 text-sm text-white bg-red-600 rounded hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default MyPlants;
