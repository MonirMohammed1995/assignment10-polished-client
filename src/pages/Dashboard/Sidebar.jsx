import { Link, NavLink } from 'react-router-dom';
import { LayoutDashboard, PlusCircle, Leaf, List, Home } from 'lucide-react';

const Sidebar = () => {
  const links = [
    { name: 'Dashboard', to: '/dashboard', icon: <LayoutDashboard size={20} /> },
    { name: 'My Plants', to: '/dashboard/my-plants', icon: <Leaf size={20} /> },
    { name: 'Add Plant', to: '/dashboard/add-plant', icon: <PlusCircle size={20} /> },
    { name: 'All Plants', to: '/dashboard/all-plants', icon: <List size={20} /> },
    { name: 'Home', to: '/', icon: <Home size={20} /> },
  ];

  return (
    <div className="h-full p-4 text-white bg-green-900">
      <h2 className="mb-6 text-2xl font-bold">🌱 PlantCare</h2>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-2 rounded hover:bg-green-700 ${
                  isActive ? 'bg-green-700 font-semibold' : ''
                }`
              }
            >
              {link.icon}
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
