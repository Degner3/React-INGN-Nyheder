import { NavLinks } from "./NavLinks";
import style from "./Nav.module.scss"
import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { FiMenu } from "react-icons/fi"







export const Navigation = () => {
  return (
    <nav className={style.navigation}>
      <h1><Link to="/">INGN</Link></h1>
      <NavLinks />
    </nav>
  );
};