import { Link, NavLink  } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav className="bg-white dark:bg-transparent w-full p-4 flex flex-wrap items-center justify-between mx-auto">
      <Link
        to="/"
        className="text-2xl font-semibold whitespace-nowrap dark:text-white"
      >
        Context App
      </Link>

      <div className="w-auto" id="navbar-default">
        <ul className="font-medium flex flex-row gap-8">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:underline ${
                  isActive
                    ? 'text-zinc-900 dark:text-zinc-50 underline'
                    : 'text-zinc-400'
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `hover:underline ${
                  isActive
                    ? 'text-zinc-900 dark:text-zinc-50 underline'
                    : 'text-zinc-400'
                }`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `hover:underline ${
                  isActive
                    ? 'text-zinc-900 dark:text-zinc-50 underline'
                    : 'text-zinc-400'
                }`
              }
            >
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
