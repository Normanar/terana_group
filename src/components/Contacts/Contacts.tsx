import React from "react";
import s from "./Contacts.module.css"

export function Contacts () {
    return (
        <div className={s.contacts_container}>
            <div>ТОО "TERANA GROUP"</div>
            <div>БИН 1507 4000 3851</div>
        </div>
    )
}