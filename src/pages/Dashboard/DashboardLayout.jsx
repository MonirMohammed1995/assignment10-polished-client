import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Profile Card */}
        <div className="p-6 bg-white shadow">
          <div className="flex items-center gap-6">
            <img
              src={user?.photoURL || 'https://i.ibb.co/sFjq0gP/avatar.png'}
              alt="User"
              className="w-20 h-20 border-4 border-green-600 rounded-full"
            />
            <div>
              <h2 className="text-2xl font-bold text-green-800">
                {user?.displayName || 'Anonymous User'}
              </h2>
              <p className="text-gray-600">{user?.email}</p>
              <p className="text-sm text-green-700">🌿 Welcome to your dashboard</p>
            </div>
          </div>
        </div>

        {/* Main content outlet */}
        <div className="p-6 bg-green-50 min-h-[calc(100vh-120px)]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
