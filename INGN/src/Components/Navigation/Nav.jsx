import style from "./Nav.module.scss"
import { NavLink } from 'react-router-dom'
import { BsFillPersonFill } from "react-icons/bs"
import { FiMenu } from "react-icons/fi"
import { useState } from "react"



// Navigation bar
export const Nav = () => {

    const navArray = [
      { Link: "/", page: "Alle" },
      { Link: "/indland", page: "Indland" },
      { Link: "/udland", page: "Udland" },
      { Link: "/teknologi", page: "Teknologi" },
      { Link: "/sport", page: "Sport" },
      { Link: "/politik", page: "Politik" },
      { Link: "/samfund", page: "Samfund" },
    ];

    const randomColor = () => {
      let r = Math.floor(Math.random(0) * 255)
      let g = Math.floor(Math.random(0) * 255)
      let b = Math.floor(Math.random(0) * 255)
      let randomString = `rgb(${r},${g},${b})`
      return randomString
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false);




  return (
    <nav className={style.nav}>
      <div className={style.navwrapper}>
        <h1>
          <NavLink to="/">INGN</NavLink>
        </h1>
        <ul>
          {navArray.map((item, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={item.Link}
                  style={({ isActive }) => {
                    return {
                      color: isActive ? randomColor() : "#000000",
                    };
                  }}
                >
                  {item.page}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <div>
          <NavLink className={style.person} to="/login"><BsFillPersonFill/></NavLink>
          {/* <NavLink><FiMenu/></NavLink> */}
        </div>
      </div>
    </nav>
  );
}