import React from "react";
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav className={s.navbar}>
      <div className={s.item}>
        <NavLink
          to="/profile"
          className={({ isActive }) => (isActive ? "active-link" : " ")}
        >
          Profile
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="/dialogs"
          className={({ isActive }) => (isActive ? "active-link" : " ")}
        >
          Messages
        </NavLink>
      </div>
      <div className={s.item}>
        <a href="#">News</a>
      </div>
      <div className={s.item}>
        <a href="#">Music</a>
      </div>
      <div className={`${s.item} ${s.settings}`}>
        <a href="#">Settings</a>
      </div>
    </nav>
  );
};

export default Navbar;
