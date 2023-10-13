import style from "./MainLayout.module.scss"
import { Outlet } from "react-router-dom"
import { Footer } from "../Components/Footer/Footer"
import { Nav } from "../Components/Navigation/Nav"
import { NavBar } from "../Components/Navigation/NavBar"




export const MainLayout = () => {


    return (
        <main className={style.layout}>
            <NavBar/>
                <Outlet/>
            <Footer/>
        </main>
    )

}