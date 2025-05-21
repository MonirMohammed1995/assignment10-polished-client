import React, { useState, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import { getAuth, signOut } from 'firebase/auth';
import app from '../firebase/firebase.config';
import { toast } from 'react-hot-toast';
import { Menu, X, Sun, Moon } from 'lucide-react';
import useTheme from '../hooks/useTheme'; // 🧠 Import the custom hook

const auth = getAuth(app);

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme(); // 🧠 Use the hook

  const handleLogout = () => {
    signOut(auth)
      .then(() => toast.success('Logged out successfully'))
      .catch(() => toast.error('Logout failed'));
  };

  const navLinks = (
  <>
    <NavLink
      to="/"
      className={({ isActive }) =>
        `px-4 py-2 block rounded ${
          isActive
            ? 'bg-green-100 dark:bg-green-800 font-semibold'
            : 'hover:bg-green-100 dark:hover:bg-green-800'
        }`
      }
    >
      Home
    </NavLink>

    <NavLink
      to="/all-plants"
      className={({ isActive }) =>
        `px-4 py-2 block rounded ${
          isActive
            ? 'bg-green-100 dark:bg-green-800 font-semibold'
            : 'hover:bg-green-100 dark:hover:bg-green-800'
        }`
      }
    >
      All Plants
    </NavLink>

    {user && (
      <>
        <NavLink
          to="/add-plant"
          className={({ isActive }) =>
            `px-4 py-2 block rounded ${
              isActive
                ? 'bg-green-100 dark:bg-green-800 font-semibold'
                : 'hover:bg-green-100 dark:hover:bg-green-800'
            }`
          }
        >
          Add Plant
        </NavLink>

        <NavLink
          to="/my-plants"
          className={({ isActive }) =>
            `px-4 py-2 block rounded ${
              isActive
                ? 'bg-green-100 dark:bg-green-800 font-semibold'
                : 'hover:bg-green-100 dark:hover:bg-green-800'
            }`
          }
        >
          My Plants
        </NavLink>
      </>
    )}
  </>
);


  return (
    <nav className="bg-white dark:bg-gray-900 shadow sticky top-0 z-50 text-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-green-600 dark:text-green-400">
          🌱 PlantCare
        </Link>

        <div className="hidden md:flex items-center gap-4">
          {navLinks}
          {/* Theme Toggle */}
          <button onClick={toggleTheme} className="hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded">
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          {user ? (
            <div className="flex items-center gap-2">
              <img src={user.photoURL} alt="user" className="w-8 h-8 rounded-full" title={user.displayName} />
              <button onClick={handleLogout} className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 text-sm">
                LogOut
              </button>
            </div>
          ) : (
            <>
              <Link to="/login" className="text-sm px-3 py-1 rounded hover:bg-green-100 dark:hover:bg-green-800">Login</Link>
              <Link to="/register" className="text-sm px-3 py-1 rounded hover:bg-green-100 dark:hover:bg-green-800">Register</Link>
            </>
          )}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <button onClick={toggleTheme} className="hover:bg-gray-200 dark:hover:bg-gray-700 p-1 rounded">
            {theme === 'light' ? <Moon size={22} /> : <Sun size={22} />}
          </button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {navLinks}
          {user ? (
            <div className="flex items-center gap-2">
              <img src={user.photoURL} alt="user" className="w-8 h-8 rounded-full" title={user.displayName} />
              <button onClick={handleLogout} className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 text-sm">
                LogOut
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              <Link to="/login" className="text-sm px-3 py-1 rounded hover:bg-green-100 dark:hover:bg-green-800">Login</Link>
              <Link to="/register" className="text-sm px-3 py-1 rounded hover:bg-green-100 dark:hover:bg-green-800">Register</Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;