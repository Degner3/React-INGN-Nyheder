import style from "./ErrorPage.module.scss"
import { Link } from "react-router-dom"
import errorpage from "../../assets/Image/errorpage.gif"


export const ErrorPage = () => {


  return (
    <section className={style.errpage}>
      <article className={style.errorwrapper} style={{
        backgroundImage: "url(" + errorpage + ")",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100%",
        width: "100%"
      }}>
        <h2>404</h2>
        <h3>Look like you're lost</h3>
        <p>the page you are looking for not avaible!</p>
        <Link to="/">Go to Home</Link>
      </article>
    </section>
  );
}