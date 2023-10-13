import { NavLinks } from "./NavLinks";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi"
import { AiOutlineClose } from "react-icons/ai";
import style from "./Nav.module.scss"

export const MobileNavigation = () => {
    const [open, setOpen] = useState(false);
  
    const burgerOpen = <FiMenu className={style.burger} onClick={() => setOpen(!open)} />
    const burgerClosed = <AiOutlineClose className={style.burger} onClick={() => setOpen(!open)} />
    return (
      <nav className={style.mobileNavigation}>
        <Link to="/">
          <h1>INGN</h1>
        </Link>
        {open ? burgerClosed : burgerOpen}
        {open && <NavLinks />}
      </nav>
    );
  };