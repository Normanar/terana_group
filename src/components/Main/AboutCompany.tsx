import React from "react";
import s from "./AboutCompany.module.css"
import photo from "../../images/111.jpg"

export function AboutCompany() {
    return (
        <div className={s.container}>
            <div className={s.name_company}>
                Наша компания
            </div>
            <div className={s.description}>
                <div className={s.text_block}>
                    <div>
                        Компания TERANA GROUP оказывает услуги в сферах проектирования электрических сетей и слаботочных
                        систем,
                        внутренних электромонтажных и слаботочных работах, проектированию и монтажу системы "Умный дом
                        TELETASK", а также поставке электрощитов (ЩО70, ВРУ, ЩРС-1, ЩР-11, АВР, ЩЭ, ЩК, Я5000, ЯУО9600).
                    </div>
                    <div>
                        За десять лет работы нами выполнены электромонтажные работы на восьми крупных жилых комплексах,
                        а также на
                        пяти торговых центрах.
                    </div>
                    <div>
                        На выполненные работы предоставляется весь пакет документов и гарантийные обязательства.
                    </div>
                </div>
                <div>
                    <img src={photo} className={s.photo}/>
                </div>
            </div>
        </div>
    )
}