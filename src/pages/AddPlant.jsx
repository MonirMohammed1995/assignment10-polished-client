import React, { useState, useCallback } from 'react';
import { toast } from 'react-hot-toast';

const initialFormState = {
    image: '',
    name: '',
    category: '',
    description: '',
    careLevel: '',
    wateringFrequency: '',
    lastWateredDate: '',
    nextWateringDate: '',
    healthStatus: '',
    userEmail: '',
    userName: '',
};

const AddPlant = () => {
    const [formData, setFormData] = useState(initialFormState);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setIsSubmitting(true);

            // Simulate API call
            console.log('Submitted Data:', formData);
            // await axios.post('/api/plants', formData); // <-- Uncomment when using API

            toast.success('Plant added successfully!');
            setFormData(initialFormState);
        } catch (error) {
            toast.error('Failed to add plant. Try again.');
            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const renderInput = (name, placeholder, type = 'text') => (
        <input
            type={type}
            name={name}
            value={formData[name]}
            onChange={handleChange}
            placeholder={placeholder}
            required
            className="input"
        />
    );

    return (
        <div className="max-w-3xl mx-auto m-4 p-6 bg-white dark:bg-green-900 shadow-lg rounded-xl">
            <h2 className="text-2xl font-bold text-green-700 dark:text-lime-200 mb-6 text-center">
                Add a New Plant
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {renderInput('image', 'Image URL')}
                    {renderInput('name', 'Plant Name')}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        required
                        className="input"
                    >
                        <option value="">Select Category</option>
                        {['Succulent', 'Fern', 'Flowering', 'Bonsai', 'Tropical'].map((option) => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>

                    <select
                        name="careLevel"
                        value={formData.careLevel}
                        onChange={handleChange}
                        required
                        className="input"
                    >
                        <option value="">Select Care Level</option>
                        {['Easy', 'Moderate', 'Difficult'].map((level) => (
                            <option key={level} value={level}>{level}</option>
                        ))}
                    </select>
                </div>

                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows="3"
                    placeholder="Plant Description"
                    required
                    className="input gap-12"
                />

                {renderInput('wateringFrequency', 'Watering Frequency (e.g., every 3 days)')}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {renderInput('lastWateredDate', 'Last Watered Date', 'date')}
                    {renderInput('nextWateringDate', 'Next Watering Date', 'date')}
                </div>

                {renderInput('healthStatus', 'Health Status (e.g., Good, Wilting)')}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {renderInput('userEmail', 'Your Email', 'email')}
                    {renderInput('userName', 'Your Name')}
                </div>

                <button
                    type="submit"
                    className="bg-lime-600 hover:bg-lime-700 text-white font-semibold py-2 px-6 rounded-full transition"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Submitting...' : 'Add Plant'}
                </button>
            </form>
        </div>
    );
};

export default AddPlant;