import React, { useState, useContext, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import { getAuth, signOut } from 'firebase/auth';
import app from '../firebase/firebase.config';
import { toast } from 'react-hot-toast';
import { Menu, X, Sun, Moon } from 'lucide-react';

const auth = getAuth(app);

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };


  useEffect(() => {
    if (user) {
      toast.success(`Welcome back, ${user.displayName || 'User'}!`);
    }
  }, [user]);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        toast.success('Logged out successfully');
      })
      .catch((error) => {
        toast.error(`Logout failed: ${error.message}`);
      });
  };

  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `px-4 py-2 block rounded ${
            isActive
              ? 'bg-green-100 dark:bg-green-200 font-semibold rounded-full'
              : 'hover:bg-green-100 dark:hover:bg-green-200 rounded-full'
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
              ? 'bg-green-100 dark:bg-green-200 font-semibold rounded-full'
              : 'hover:bg-green-100 dark:hover:bg-green-200 rounded-full'
          }`
        }
      >
        All Plants
      </NavLink>
      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          `px-4 py-2 block rounded ${
            isActive
              ? 'bg-green-100 dark:bg-green-200 font-semibold rounded-full'
              : 'hover:bg-green-100 dark:hover:bg-green-200 rounded-full'
          }`
        }
      >
        Dashboard
      </NavLink>

      {user && (
        <>
          <NavLink
            to="/add-plant"
            className={({ isActive }) =>
          `px-4 py-2 block rounded ${
            isActive
              ? 'bg-green-100 dark:bg-green-200 font-semibold rounded-full'
              : 'hover:bg-green-100 dark:hover:bg-green-200 rounded-full'
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
              ? 'bg-green-100 dark:bg-green-200 font-semibold rounded-full'
              : 'hover:bg-green-100 dark:hover:bg-green-200 rounded-full'
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
    <nav className="sticky z-50 max-w-full mx-auto text-gray-900 transition-colors duration-300 shadow rounded-b-4xl top-2 backdrop-blur">
      <div className="flex items-center justify-between px-3 py-3 mx-auto max-w-11/12">
        <Link to="/" className="text-2xl font-bold text-green-600 dark:text-green-400">
          🌱 PlantCare
        </Link>

        <div className="items-center hidden gap-4 text-lg text-green-400 md:flex">
          {navLinks}

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          {user ? (
            <div className="flex items-center gap-2">
              <img
                src={user.photoURL || 'https://via.placeholder.com/150'}
                alt="User"
                className="w-8 h-8 rounded-full"
                title={user.displayName || 'User'}
              />
              <button
                onClick={handleLogout}
                className="px-3 py-1 text-lg font-semibold text-white bg-green-600 rounded-full hover:bg-red-500 hover:font-bold"
              >
                LogOut
              </button>
            </div>
          ) : (
            <>
              <Link
                to="/login"
                className="text-xl text-white btn btn-info"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="text-xl font-semibold btn btn-neutral"
              >
                Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile Hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? <Moon size={22} /> : <Sun size={22} />}
          </button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="px-4 pb-4 space-y-2 font-semibold text-green-700 md:hidden">
          {navLinks}
          {user ? (
            <div className="flex items-center gap-2">
              <img
                src={user.photoURL || 'https://via.placeholder.com/150'}
                alt="User"
                className="w-8 h-8 rounded-full"
                title={user.displayName || 'User'}
              />
              <button
                onClick={handleLogout}
                className="px-3 py-1 text-lg font-semibold text-white bg-green-600 rounded-full hover:bg-red-500"
              >
                LogOut
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              <Link
                to="/login"
                className="text-xl text-white btn btn-info"
              >
                Login
              </Link>
              <Link
                to="/register"
                 className="text-xl font-semibold btn btn-neutral"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
