
import React from "react";
import style from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
const s = style;
import logo from "../../../../assets/logo.png";
const Navbar = () => {
  return (
    <div className={s.container}>
      <div className={s.logo}>
        <img src={logo} alt="" />
      </div>
      <div className={s.navbar}>
        <NavLink className={s.buttons} to="/">
          Home
        </NavLink>
        <NavLink className={s.buttons} to="/weather">
          Weather
        </NavLink>
        <NavLink className={s.buttons} to="/tournament">
          Tournaments
        </NavLink>
        <NavLink className={s.buttons} to="/contact">
          Contact Us
        </NavLink>
      </div>
      <div className={s.language}>
        <button>Urdu</button>
        <button>English</button>
      </div>
    </div>
  );
};

export default Navbar;
