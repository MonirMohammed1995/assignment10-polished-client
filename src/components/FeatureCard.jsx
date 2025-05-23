import React from 'react';

const FeatureCard = ({ feature }) => {
  const { title, description, image } = feature;

  return (
    <div className="flex flex-col justify-between p-6 transition-transform duration-300 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1">
      {/* Text Content */}
      <div>
        <h2 className="mb-3 text-2xl font-bold leading-snug text-gray-900 text-start">{title}</h2>
        <p className="text-base leading-relaxed text-gray-600 text-start">{description}</p>
      </div>

      {/* Image positioned bottom-right */}
      <div className="w-full overflow-hidden border border-gray-300 rounded-md shadow-sm w- bottom-6 right-6 bg-gray-50">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  );
};

export default FeatureCard;
