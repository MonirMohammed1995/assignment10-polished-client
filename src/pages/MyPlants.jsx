import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthProvider"; // Update path as needed
import Loader from "../components/Loader";

const MyPlants = () => {
  const { user } = useContext(AuthContext);
  const [myPlants, setMyPlants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5500/plants?userName=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setMyPlants(data);
          setLoading(false);
        });
    }
  }, [user?.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
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

  if (loading) return <Loader></Loader> ;

  return (
    <section className="min-h-screen bg-green-50 p-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-green-800 mb-6">My Plants</h2>
        {myPlants.length === 0 ? (
          <p className="text-gray-600">You haven’t added any plants yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {myPlants.map((plant) => (
              <div
                key={plant._id}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <img
                  src={plant.image}
                  alt={plant.name}
                  className="h-48 w-full object-cover"
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
                  <div className="flex gap-2 pt-3">
                    <Link
                      to={`/update-plant/${plant._id}`}
                      className="px-3 py-1 rounded bg-green-600 text-white hover:bg-green-700 text-sm"
                    >
                      Update
                    </Link>
                    <button
                      onClick={() => handleDelete(plant._id)}
                      className="px-3 py-1 rounded bg-red-600 text-white hover:bg-red-700 text-sm"
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