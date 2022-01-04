import s from "./Navbar.module.css"
import logo from "../../images/Terana_small_logo.png"

export function Navbar () {
    return (
        <div className={s.navbar_container}>
            <div className={s.navbar_text_block}>
                <div className={s.name_company}>
                    <img src={logo} alt={"logo"}/>
                    TERANA GROUP
                </div>
                <div className={s.navbar}>
                    <span className={s.navbar_main}>Главная</span>
                    <span className={s.navbar_about}>О компании</span>
                    <span className={s.navbar_services}>Услуги</span>
                    <span className={s.navbar_contacts}>Контакты</span>
                </div>
            </div>
        </div>
    )
}