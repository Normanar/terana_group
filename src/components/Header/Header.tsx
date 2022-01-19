import React from "react";
import s from "./Header.module.css"

export function Header() {
    return (
        <div className={s.header_container}>
            <div className={s.header_text_block}>
                <span>ТОО "TERANA GROUP"</span>
                <span className={s.phone_company}>+7 771 099 65 69</span>
                <span className={s.mail_company}>office@teranagroup.com</span>
            </div>
        </div>
    )
}