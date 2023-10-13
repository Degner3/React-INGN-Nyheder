import style from "./Nav.module.scss"
import { MobileNavigation } from "./MobileNavigation";
import { Navigation } from "./Navigation";
import { NavLink } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs"


export const NavBar = () => {
    return (
        <div className={style.navBar}>
            <MobileNavigation/>
            <Navigation/>
            <NavLink className={style.person} to="/login"><BsFillPersonFill/></NavLink>
        </div>
    )
}