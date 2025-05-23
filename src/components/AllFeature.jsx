import React, { useEffect, useState } from 'react';
import FeatureCard from './FeatureCard';

const AllFeature = () => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    fetch("features.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFeatures(data);
      })
      .catch((error) => {
        console.error("Failed to fetch features:", error);
      });
  }, []);

  return (
    <div className='p-6 text-center'>
      <h1 className='mb-6 text-3xl font-bold'>All Feature</h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <FeatureCard key={feature.id} feature={feature} />
        ))}
      </div>
    </div>
  );
};

export default AllFeature;