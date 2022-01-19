import s from "./Navbar.module.css"
import logo from "../../images/Terana_small_logo.png"
import {NavLink} from "react-router-dom";

export function Navbar () {
    return (
        <div className={s.navbar_container}>
            <div className={s.navbar_text_block}>
                <div className={s.name_company}>
                    <img src={logo} alt={"logo"}/>
                    TERANA GROUP
                </div>
                <nav className={s.navbar}>
                    <span className={s.navbar_main}><NavLink to={"/"} className={({ isActive }) => (isActive ? s.link_active : s.link)}>Главная</NavLink></span>
                    <span className={s.navbar_about}>О компании</span>
                    <span className={s.navbar_services}>Услуги</span>
                    <span className={s.navbar_contacts}><NavLink to={"/contacts"} className={({ isActive }) => (isActive ? s.link_active : s.link)}>Контакты</NavLink></span>
                </nav>
            </div>
        </div>
    )
}


// return (
//     <div className={s.navbar_container}>
//         <div className={s.navbar_text_block}>
//             <div className={s.name_company}>
//                 <img src={logo} alt={"logo"}/>
//                 TERANA GROUP
//             </div>
//             <div className={s.navbar}>
//                 <span className={s.navbar_main}>Главная</span>
//                 <span className={s.navbar_about}>О компании</span>
//                 <span className={s.navbar_services}>Услуги</span>
//                 <span className={s.navbar_contacts}>Контакты</span>
//             </div>
//         </div>
//     </div>
// )