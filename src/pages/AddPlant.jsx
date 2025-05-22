import React from "react";
import Swal from "sweetalert2";

const AddPlant = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newPlant = Object.fromEntries(formData.entries());
    console.log(newPlant);

    try {
      const res = await fetch("http://localhost:5500/plants", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPlant),
      });

      const data = await res.json();

      if (data.insertedId) {
        Swal.fire({
          title: "Added Plant Successfully!",
          icon: "success",
        });
        form.reset();
      } else {
        Swal.fire({
          title: "Failed to add plant!",
          text: "Something went wrong.",
          icon: "error",
        });
      }
    } catch (err) {
      console.error("Error:", err);
      Swal.fire({
        title: "Network Error!",
        text: "Failed to connect to the server.",
        icon: "error",
      });
    }
  };

  return (
    <div className="p-6 bg-green-200">
      <div className="max-w-3xl p-6 mx-auto shadow-lg dark:bg-green-800 rounded-xl">
        <h2 className="mb-6 text-3xl font-bold text-center">
          🌱 Plant Entry Form
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <input
              type="text"
              name="image"
              placeholder="Image URL"
              required
              className="p-2 border rounded w-full"
            />
            <input
              type="text"
              name="name"
              placeholder="Plant Name"
              required
              className="p-2 border rounded w-full"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <select name="category" required className="p-2 border bg-green-600 rounded w-full">
              <option value="">Select Category</option>
              <option value="Succulent">Succulent</option>
              <option value="Fern">Fern</option>
              <option value="Flowering">Flowering</option>
              <option value="Bonsai">Bonsai</option>
              <option value="Tropical">Tropical</option>
            </select>

            <select name="careLevel" required className="p-2 border bg-green-600 rounded w-full">
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
              placeholder="Plant Description"
              required
              className="p-2 border rounded w-full"
            />

            <textarea
              name="wateringFrequency"
              rows="3"
              placeholder="Watering Frequency (e.g., every 3 days)"
              required
              className="p-2 border rounded w-full"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="flex flex-col">
              <label className="mb-1 font-medium">Last Watered Date</label>
              <input
                type="date"
                name="lastWateredDate"
                required
                className="p-2 border rounded w-full"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1 font-medium">Next Watering Date</label>
              <input
                type="date"
                name="nextWateringDate"
                required
                className="p-2 border rounded w-full"
              />
            </div>
          </div>

          <input
            type="text"
            name="healthStatus"
            placeholder="Health Status (e.g., Good, Wilting)"
            required
            className="p-2 border rounded w-full"
          />

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <input
              type="email"
              name="userEmail"
              placeholder="Your Email"
              required
              className="p-2 border rounded w-full"
            />
            <input
              type="text"
              name="userName"
              placeholder="Your Name"
              required
              className="p-2 border rounded w-full"
            />
          </div>

          <button
            type="submit"
            className="px-6 py-2 font-semibold text-white transition rounded-full bg-lime-600 hover:bg-lime-700"
          >
            Add Plant
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPlant;