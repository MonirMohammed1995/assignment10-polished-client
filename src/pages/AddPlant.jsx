import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../firebase/firebase.config";
import { Helmet } from "react-helmet";

const auth = getAuth(app);

const AddPlant = () => {
  const [userInfo, setUserInfo] = useState({ email: "", displayName: "" });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserInfo({
          email: user.email || "",
          displayName: user.displayName || "",
        });
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newPlant = Object.fromEntries(formData.entries());
    console.log(newPlant);

    try {
      const res = await fetch("https://plantcare-tracker-server.vercel.app/plants", {
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
      <Helmet>
        <title>Add Plant Data</title>
      </Helmet>
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
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              name="name"
              placeholder="Plant Name"
              required
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <select name="category" required className="w-full p-2 bg-green-600 border rounded">
              <option value="">Select Category</option>
              <option value="Succulent">Succulent</option>
              <option value="Fern">Fern</option>
              <option value="Flowering">Flowering</option>
              <option value="Bonsai">Bonsai</option>
              <option value="Tropical">Tropical</option>
            </select>

            <select name="careLevel" required className="w-full p-2 bg-green-600 border rounded">
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
              className="w-full p-2 border rounded"
            />

            <textarea
              name="wateringFrequency"
              rows="3"
              placeholder="Watering Frequency (e.g., every 3 days)"
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
                required
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1 font-medium">Next Watering Date</label>
              <input
                type="date"
                name="nextWateringDate"
                required
                className="w-full p-2 border rounded"
              />
            </div>
          </div>

          <input
            type="text"
            name="healthStatus"
            placeholder="Health Status (e.g., Good, Wilting)"
            required
            className="w-full p-2 border rounded"
          />

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <input
              type="email"
              name="userEmail"
              value={userInfo.email}
              readOnly
              className="w-full p-2 bg-gray-600 border rounded cursor-not-allowed"
            />
            <input
              type="text"
              name="userName"
              value={userInfo.displayName}
              readOnly
              className="w-full p-2 bg-gray-600 border rounded cursor-not-allowed"
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