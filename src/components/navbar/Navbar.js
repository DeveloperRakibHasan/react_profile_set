import React from "react";
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Navbar() {
  const { currentUser, logout } = useAuth();

  return (
    <>
      <div className="container">
        <nav className="flex fixed left-0 right-0 top-0 z-20 bg-white">
          <ul className="w-6/12 h-16 list-none flex justify-between items-center first:ml-8">
            <li>
              <Link to="/" className="flex justify-center items-center">
                <h4>LogO</h4>
              </Link>
            </li>
          </ul>
          <div className="w-6/12 flex gap-2 justify-end items-center mr-8">
            {currentUser ? (
              <>
                <Link className="mr-2" to="/profile">
                  Profile
                </Link>
                <Link to="/user">Users Info</Link>
                <span title="Account">
                  <CgProfile />
                </span>
                <span>{currentUser.displayName}</span>
                <Link to="/login">
                  <FiLogOut
                    className="cursor-pointer"
                    title="Log Out"
                    onClick={logout}
                  />
                </Link>
              </>
            ) : (
              <>
                <Link
                  className="bg-blue-500 px-4 py-2 rounded-md text-white mr-2"
                  to="/signup"
                >
                  Signup
                </Link>
                <Link
                  className="bg-green-500 px-4 py-2 rounded-md text-white"
                  to="/login"
                >
                  Login
                </Link>
              </>
            )}
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
