import { useEffect, useState } from 'react';
import { Leaf, List, PlusCircle } from 'lucide-react';
import { Helmet } from 'react-helmet';

const Overview = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch(`https://plantcare-tracker-server.vercel.app/plants`)
      .then((res) => res.json())
      .then((data) => setPlants(data));
  }, []);

  const totalPlants = plants.length;

  return (
    <section>
      <Helmet>
        <title>Dashboard | Overview</title>
      </Helmet>
      <h1 className="mb-6 text-3xl font-bold text-green-800">Dashboard Overview</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="flex items-center p-4 bg-white rounded-lg shadow">
          <Leaf className="w-10 h-10 p-2 text-white bg-green-600 rounded-full" />
          <div className="ml-4">
            <h2 className="text-2xl font-bold">{totalPlants}</h2>
            <p>Total Plants</p>
          </div>
        </div>
        <div className="flex items-center p-4 bg-white rounded-lg shadow">
          <PlusCircle className="w-10 h-10 p-2 text-white bg-green-600 rounded-full" />
          <div className="ml-4">
            <h2 className="text-2xl font-bold">5</h2>
            <p>Plants Added This Week</p>
          </div>
        </div>
        <div className="flex items-center p-4 bg-white rounded-lg shadow">
          <List className="w-10 h-10 p-2 text-white bg-green-600 rounded-full" />
          <div className="ml-4">
            <h2 className="text-2xl font-bold">3</h2>
            <p>Needs Watering Soon</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;