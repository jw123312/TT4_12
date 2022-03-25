import React from "react";
import { Link } from "react-router-dom";
import { isAuth, handleLogout } from "../utils/helpers";

export default function Navbar({ children }) {
  const nav = () => (
    <ul className="nav nav-tabs" style={{ backgroundColor: "#e3f2fd" }}>
      <Link to="/" className="navbar-brand text-dark">
        Loan Management
      </Link>
      <li className="nav-item">
        <Link to="/" className="text-dark nav-link">
          Home
        </Link>
      </li>
      {
        <li className="nav-item">
          <Link to="/login" className="text-dark nav-link">
            Login
          </Link>
        </li>
      }

      {
        <li className="nav-item">
          <Link to="/register" className="text-dark nav-link">
            Register
          </Link>
        </li>
      }

      {/* {!isAuth() && (
        <li className="nav-item">
          <Link to="/login" className="text-dark nav-link">
            Login
          </Link>
        </li>
      )} */}
      {
        <li className="nav-item">
          <Link to="/newloan" className="text-dark nav-link">
            Create New Loan
          </Link>
        </li>
      }
      {
        <li className="nav-item">
          <Link to="/profile" className="text-dark nav-link">
            Profile
          </Link>
        </li>
      }

      {
        <li className="nav-item">
          <span
            className="text-dark nav-link"
            style={{ cursor: "pointer", color: "black" }}
            onClick={handleLogout}
          >
            Signout
          </span>
        </li>
      }

      {/* {isAuth() && (
        <li className="nav-item">
          <span
            className="text-dark nav-link"
            style={{ cursor: "pointer", color: "black" }}
            onClick={handleLogout}
          >
            Signout
          </span>
        </li>
      )} */}
    </ul>
  );

  return (
    <React.Fragment>
      {nav()}
      <div className="container">{children}</div>
    </React.Fragment>
  );
}
