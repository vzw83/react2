import React from "react";
import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <img
        src="https://www.svgrepo.com/show/354264/react-styleguidist.svg"
        alt="icon"
      />
    </header>
  );
};

export default Header;
