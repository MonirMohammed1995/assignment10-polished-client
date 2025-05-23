import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const UpdatePlant = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [plant, setPlant] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5500/plants/${id}`)
      .then((res) => res.json())
      .then((data) => setPlant(data));
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedPlant = Object.fromEntries(formData.entries());

    try {
      const res = await fetch(`http://localhost:5500/plants/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedPlant),
      });

      const data = await res.json();

      if (data.modifiedCount > 0) {
        MySwal.fire({
          toast: true,
          position: "top-end",
          icon: "success",
          title: "Plant updated successfully!",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
        });
        navigate("/my-plants");
      } else {
        MySwal.fire({
          title: "No changes made.",
          icon: "info",
        });
      }
    } catch (error) {
      MySwal.fire({
        title: "Update failed!",
        text: "Something went wrong.",
        icon: "error",
      });
    }
  };

  const handleDelete = async () => {
    const result = await MySwal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        const res = await fetch(`http://localhost:5500/plants/${id}`, {
          method: "DELETE",
        });

        const data = await res.json();

        if (data.deletedCount > 0) {
          MySwal.fire("Deleted!", "Your plant has been deleted.", "success");
          navigate("/my-plants");
        }
      } catch (error) {
        MySwal.fire("Error!", "Something went wrong.", "error");
      }
    }
  };

  if (!plant) {
    return (
      <div className="p-6 font-semibold text-center text-green-800">
        Loading plant data...
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 bg-green-100">
      <div className="max-w-3xl p-6 mx-auto bg-green-800 shadow-lg rounded-xl">
        <h2 className="mb-6 text-3xl font-bold text-center text-white">
          🌿 Update Plant Information
        </h2>
        <form onSubmit={handleUpdate} className="space-y-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <input
              type="text"
              name="image"
              defaultValue={plant.image}
              placeholder="Image URL"
              required
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              name="name"
              defaultValue={plant.name}
              placeholder="Plant Name"
              required
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <select
              name="category"
              defaultValue={plant.category}
              required
              className="w-full p-2 text-white bg-green-600 border rounded"
            >
              <option value="">Select Category</option>
              <option value="Succulent">Succulent</option>
              <option value="Fern">Fern</option>
              <option value="Flowering">Flowering</option>
              <option value="Bonsai">Bonsai</option>
              <option value="Tropical">Tropical</option>
            </select>

            <select
              name="careLevel"
              defaultValue={plant.careLevel}
              required
              className="w-full p-2 text-white bg-green-600 border rounded"
            >
              <option value="">Select Care Level</option>
              <option value="Easy">Easy</option>
              <option value="Moderate">Moderate</option>
              <option value="Difficult">Difficult</option>
            </select>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <textarea
              name="description"
              rows="3"
              defaultValue={plant.description}
              placeholder="Plant Description"
              required
              className="w-full p-2 border rounded"
            />

            <textarea
              name="wateringFrequency"
              rows="3"
              defaultValue={plant.wateringFrequency}
              placeholder="Watering Frequency"
              required
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="flex flex-col">
              <label className="mb-1 font-medium">Last Watered Date</label>
              <input
                type="date"
                name="lastWateredDate"
                defaultValue={plant.lastWateredDate}
                required
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1 font-medium">Next Watering Date</label>
              <input
                type="date"
                name="nextWateringDate"
                defaultValue={plant.nextWateringDate}
                required
                className="w-full p-2 border rounded"
              />
            </div>
          </div>

          <input
            type="text"
            name="healthStatus"
            defaultValue={plant.healthStatus}
            placeholder="Health Status"
            required
            className="w-full p-2 border rounded"
          />

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <input
              type="email"
              name="userEmail"
              value={plant.userEmail}
              readOnly
              className="w-full p-2 text-white bg-gray-600 border rounded cursor-not-allowed"
            />
            <input
              type="text"
              name="userName"
              value={plant.userName}
              readOnly
              className="w-full p-2 text-white bg-gray-600 border rounded cursor-not-allowed"
            />
          </div>

          <div className="flex justify-between">
            <button
              type="submit"
              className="px-6 py-2 font-semibold text-white transition rounded-full bg-lime-600 hover:bg-lime-700"
            >
              Update Plant
            </button>

            <button
              type="button"
              onClick={handleDelete}
              className="px-6 py-2 font-semibold text-white transition bg-red-600 rounded-full hover:bg-red-700"
            >
              Delete Plant
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdatePlant;