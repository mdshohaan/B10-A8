import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="w-11/12  flex flex-col rounded-xl items-center text-center p-2 z-50 fixed backdrop-blur-xl bg-white/30 ">
        {/* Navbar */}
        <nav className="w-full  flex justify-between items-center text-black py-4 px-5">
          <h1 className="text-2xl font-bold">Gadget Heaven</h1>
          <ul className="flex space-x-6">
            <li>
              <NavLink
                className={({ isActive }) =>
                  `font-bold ${
                    isActive ? "text-warning" : "hover:text-warning"
                  }`
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `font-bold ${
                    isActive ? "text-warning" : "hover:text-warning"
                  }`
                }
                to="/gadgets"
              >
                Gadgets
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `font-bold ${
                    isActive ? "text-warning" : "hover:text-warning"
                  }`
                }
                to="/dashboard"
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `font-bold ${
                    isActive ? "text-warning" : "hover:text-warning"
                  }`
                }
                to="/statistics"
              >
                Statistics
              </NavLink>
            </li>
          </ul>
          <div className="flex space-x-4">
            <button className="p-2 rounded-lg bg-white hover:bg-blue-600">
              <FaShoppingCart />
            </button>
            <button className="p-2 rounded-lg bg-white hover:bg-blue-600">
              <IoIosHeartEmpty />
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
