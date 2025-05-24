import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const reviews = [
  {
    name: "Orakatul Zannath",
    comment: "This app completely transformed how I care for my indoor jungle. I never forget watering day anymore!",
    rating: 5,
    image: "https://i.postimg.cc/NFTMqd36/flower-6.jpg",
    contact: "sara.greenleaf@gmail.com",
  },
  {
    name: "Ishrat Jahan",
    comment: "Very useful tool! The reminders and health tips saved two of my succulents. UI is smooth and modern.",
    rating: 4.5,
    image: "https://i.postimg.cc/pr7d3gcX/plant-7.png",
    contact: "jahidroots@plantmail.com",
  },
  {
    name: "Manha",
    comment: "Simple but effective. I just wish it had a dark mode! Otherwise, love the features. 👏",
    rating: 4,
    image: "https://i.postimg.cc/VkPfM93T/succ-1.jpg",
    contact: "anika.bloom@example.com",
  },
];

const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={i} className="text-yellow-400" />);
  }
  if (halfStar) {
    stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />);
  }
  while (stars.length < 5) {
    stars.push(<FaRegStar key={`empty-${stars.length}`} className="text-yellow-300" />);
  }

  return <div className="flex gap-1">{stars}</div>;
};

const PlantReviewCards = () => {
  return (
    <section className="px-4 py-10 bg-green-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-8 text-3xl font-bold text-center text-green-800">
          🌟 User Reviews
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, idx) => (
            <div key={idx} className="p-6 bg-white shadow-md rounded-xl">
              <img
                src={review.image}
                alt={review.name}
                className="object-cover w-16 h-16 mx-auto mb-4 rounded-full"
              />
              <h3 className="text-xl font-semibold text-center text-green-700">{review.name}</h3>
              <p className="my-3 text-sm italic text-center text-gray-600">"{review.comment}"</p>
              <div className="flex justify-center mt-2 mb-3">{renderStars(review.rating)}</div>
              <p className="text-sm text-center text-gray-500">
                📧 <a href={`mailto:${review.contact}`} className="underline">{review.contact}</a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlantReviewCards;
