import React from "react";
import Swal from "sweetalert2";
const AddPlant = () => {
    const handleSubmit=e=>{
        e.preventDefault();
        const form=e.target;
        const formData=new FormData(form);
        const newPlant= Object.fromEntries(formData.entries())
        console.log(newPlant);
        // send coffee data to the db
        fetch('http://localhost:5500/plants',{
            method:'POST',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(newPlant)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.inserted){
                Swal.fire({
  position: "center",
  icon: "success",
  title: "Plant has been Added",
  showConfirmButton: false,
  timer: 1500
});
            }
        })
    }
  return (
    <div className="bg-green-200 p-6">
      <div className="max-w-3xl mx-auto p-6 bg-white dark:bg-green-700 shadow-lg rounded-xl">
        <h2 className="text-3xl font-bold mb-6 text-center">🌱 Plant Entry Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" name="image" placeholder="Image URL" required className="input" />
                    <input type="text" name="name"  placeholder="Plant Name" required className="input" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <select name="category" required className="input">
                        <option value="">Select Category</option>
                        <option value="Succulent">Succulent</option>
                        <option value="Fern">Fern</option>
                        <option value="Flowering">Flowering</option>
                        <option value="Bonsai">Bonsai</option>
                        <option value="Tropical">Tropical</option>
                    </select>

                    <select name="careLevel" required className="input">
                        <option value="">Select Care Level</option>
                        <option value="Easy">Easy</option>
                        <option value="Moderate">Moderate</option>
                        <option value="Difficult">Difficult</option>
                    </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <textarea name="description" rows="3" placeholder="Plant Description" required className="input" />

                    <textarea type="text" name="wateringFrequency" rows="3" placeholder="Watering Frequency (e.g., every 3 days)" required className="input" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col">
                        <label>Last Watered Date</label>
                        <input type="date" name="lastWateredDate" required className="input" />
                    </div>
                    <div className="flex flex-col">
                        <label>Next Watering Date</label>
                        <input type="date" name="nextWateringDate" required className="input" />
                    </div>
                </div>

                <input type="text" name="healthStatus" placeholder="Health Status (e.g., Good, Wilting)" required className="input" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="email" name="userEmail" placeholder="Your Email" required className="input" />
                    <input type="text" name="userName" placeholder="Your Name" required className="input" />
                </div>

                <button type="submit" className="bg-lime-600 hover:bg-lime-700 text-white font-semibold py-2 px-6 rounded-full transition">
                    Add Plant
                </button>
            </form>
      </div>
    </div>
  );
};

export default AddPlant;
