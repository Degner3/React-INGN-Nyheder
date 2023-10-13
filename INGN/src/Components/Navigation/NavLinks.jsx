import { NavLink } from "react-router-dom";



export const NavLinks = () => {

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


    return (
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
    )
}