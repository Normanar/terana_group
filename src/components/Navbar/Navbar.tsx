import s from "./Navbar.module.css"
import logo from "../../images/Terana_small_logo.png"

export function Navbar () {
    return (
        <div className={s.navbar_container}>
            <div className={s.navbar_text_block}>
                <div className={s.name_company}>
                    <img src={logo}/>
                    TERANA GROUP
                </div>
                <div className={s.navbar}>
                    <span>Главная</span>
                    <span>О компании</span>
                    <span>Услуги</span>
                    <span>Контакты</span>
                </div>
            </div>
        </div>
    )
}