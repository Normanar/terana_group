import React from "react";
import s from "./Footer.module.css"

export function Footer() {
    return (
        <div className={s.footer_container}>
            <div className={s.footer_text}>
                <span>© 2015 TERANA GROUP. Делаем на года. И точка.</span>
            </div>
        </div>
    )
}