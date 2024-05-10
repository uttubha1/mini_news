import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ active, setActive }) => {
  return (
    <div className="bg-gray-200 w-48 p-4">
      <ul>
        <li>
          <Link
            to="/"
            className={`block p-2 ${active === 1 ? 'bg-gray-300' : ''}`}
            onClick={() => setActive(1)}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/sports"
            className={`block p-2 ${active === 2 ? 'bg-gray-300' : ''}`}
            onClick={() => setActive(2)}
          >
            Sports
          </Link>
        </li>
        <li>
          <Link
            to="/business"
            className={`block p-2 ${active === 3 ? 'bg-gray-300' : ''}`}
            onClick={() => setActive(3)}
          >
            Business
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
