import React, { useState, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import { getAuth, signOut } from 'firebase/auth';
import app from '../firebase/firebase.config';
import { toast } from 'react-hot-toast';
import { Menu, X, Sun, Moon } from 'lucide-react';
import useTheme from '../hooks/useTheme'; 

const auth = getAuth(app);

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme(); 

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
    <nav className="sticky top-0 z-50 text-gray-900 bg-white shadow dark:bg-gray-900 dark:text-white">
      <div className="flex items-center justify-between px-4 py-3 mx-auto max-w-7xl">
        <Link to="/" className="text-2xl font-bold text-green-600 dark:text-green-400">
          🌱 PlantCare
        </Link>

        <div className="items-center hidden gap-4 md:flex">
          {navLinks}
          {/* Theme Toggle */}
          <button onClick={toggleTheme} className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          {user ? (
            <div className="flex items-center gap-2">
              <img src={user.photoURL} alt="user" className="w-8 h-8 rounded-full" title={user.displayName} />
              <button onClick={handleLogout} className="px-3 py-1 text-sm text-white bg-green-600 rounded hover:bg-green-700">
                LogOut
              </button>
            </div>
          ) : (
            <>
              <Link to="/login" className="px-3 py-1 text-sm rounded hover:bg-green-100 dark:hover:bg-green-800">Login</Link>
              <Link to="/register" className="px-3 py-1 text-sm rounded hover:bg-green-100 dark:hover:bg-green-800">Register</Link>
            </>
          )}
        </div>

        {/* Mobile Hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          <button onClick={toggleTheme} className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
            {theme === 'light' ? <Moon size={22} /> : <Sun size={22} />}
          </button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="px-4 pb-4 space-y-2 md:hidden">
          {navLinks}
          {user ? (
            <div className="flex items-center gap-2">
              <img src={user.image} alt="user" className="w-8 h-8 rounded-full" title={user.name} />
              <button onClick={handleLogout} className="px-3 py-1 text-sm text-white bg-green-600 rounded hover:bg-green-700">
                LogOut
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              <Link to="/login" className="px-3 py-1 text-sm rounded hover:bg-green-100 dark:hover:bg-green-800">Login</Link>
              <Link to="/register" className="px-3 py-1 text-sm rounded hover:bg-green-100 dark:hover:bg-green-800">Register</Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;