import { faDatabase, faUsersGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import React from "react";

const Account_sidebar = () => {
  return (
    <aside className="w-1/4 bg-white p-6 shadow-md">
      <nav>
        <ul className="space-y-4">
          <li>
            <NavLink
              to="/account"
              className={({ isActive }) =>
                `flex items-center font-semibold px-3 py-2 rounded-md transition ${
                  isActive ? "text-themeBlue bg-gray-100" : "text-gray-600"
                }`
              }
            >
              <FontAwesomeIcon icon={faUsersGear} className="mr-2" />
              Account
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/billing"
              className={({ isActive }) =>
                `flex items-center font-semibold px-3 py-2 rounded-md transition ${
                  isActive ? "text-themeBlue bg-gray-100" : "text-gray-600"
                }`
              }
            >
              <FontAwesomeIcon icon={faDatabase} className="mr-2" />
              Billing
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Account_sidebar;
