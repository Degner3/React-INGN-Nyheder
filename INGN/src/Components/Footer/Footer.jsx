import style from "./Footer.module.scss"
import { NavLink } from 'react-router-dom'


export const Footer = () => {


    return (
        <footer className={style.footer}>
            <div className={style.footerwrapper}>
                <ul>
                    <li><p>Adresse:</p></li>
                    <li><p className={style.secp}>Intet nyt - Godt nyt ApS</p></li>
                    <li><p>Tulipanvej 232</p></li>
                    <li><p>7320</p></li>
                    <li><p>Valby Øster</p></li>
                </ul>
                <ul>
                    <li><p>Links</p></li>
                    <li><NavLink>vikanweb.dk</NavLink></li>
                    <li><NavLink>overpådenandenside.dk</NavLink></li>
                    <li><NavLink>retsinformation.dk</NavLink></li>
                    <li><NavLink>nogetmednews.dk</NavLink></li>
                </ul>
                <ul>
                    <li><p>Politik</p></li>
                    <li><NavLink>Privatlivspolitik</NavLink></li>
                    <li><NavLink>Cookiepolitik</NavLink></li>
                    <li><NavLink>Købsinformation</NavLink></li>
                    <li><NavLink>Delingspolitik</NavLink></li>
                </ul>
                <ul>
                    <li><p>Kontakt</p></li>
                    <li><NavLink>ingn@nyhed.dk</NavLink></li>
                    <li><NavLink>teletfon: 23232323</NavLink></li>
                    <li><NavLink>fax: 123123-333</NavLink></li>
                </ul>
            </div>
        </footer>
    )
}