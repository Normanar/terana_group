import React from "react";
import s from "./MyServices.module.css"
import image1 from "./../../images/for services/111.jpg"
import image2 from "./../../images/for services/222.jpg"
import image3 from "./../../images/for services/333.jpg"
import image4 from "./../../images/for services/444.jpg"


export function MyServices() {
    return (
        <div className={s.services_container}>
            <div className={s.main_text}>
                <div>ТОО "TERANA GROUP" предоставляет широкий профиль услуг и работ по следующим направлениям:</div>
                <div>- проектирование электрических и слаботочных сетей</div>
                <div>- система умный дом</div>
                <div>- электромонтажные и слаботоные работы</div>
                <div>- сборка электрощитового оборудования</div>
            </div>
            <div className={s.block1}>
                <img src={image1}/>
                <div className={s.block1_text}>
                    {/*<div style={ {fontWeight : "bold"} }>Проектирование воздушных и кабельных линий (ВЛ и КЛ)</div>*/}
                    <h3>Проектирование воздушных и кабельных линий (ВЛ и КЛ)</h3>
                    <div>
                        Воздушные и кабельные линии являются связывающим звеном между трансформаторными подстанциями и вводными устройствами зданий для передачи электрической энергии по проводам и кабелям.
                    </div>
                </div>
            </div>
            <div className={s.block2}>
                <img src={image2}/>
                <div className={s.block2_text}>
                    {/*<div style={ {fontWeight : "bold"} }>Проектирование воздушных и кабельных линий (ВЛ и КЛ)</div>*/}
                    <h3>Проектирование трансформаторных подстанций 10/0,4 кВ</h3>
                    <div>
                        Трансформаторные подстанции - это электроустановки предназначенные для преобразования, понижения или повышения напряжения, в сетях переменного тока и распределения электрической энергии. Составляющими ТП являются: силовые трансформаторы, распределительные устройства, устройства автоматической защиты и управления, а также вспомогательные сооружения.
                    </div>
                </div>
            </div>
            <div className={s.block1}>
                <img src={image3}/>
                <div className={s.block1_text}>
                    {/*<div style={ {fontWeight : "bold"} }>Проектирование воздушных и кабельных линий (ВЛ и КЛ)</div>*/}
                    <h3>Проектирование наружного электроосвещения (ЭНО)</h3>
                    <div>
                        Цель проекта внешнего освещения – выполнение грамотного и квалифицированного расчета для определения рационального расположения осветительных приборов, их количества, типа и мощности.
                    </div>
                </div>
            </div>
            <div className={s.block2}>
                <img src={image4}/>
                <div className={s.block2_text}>
                    {/*<div style={ {fontWeight : "bold"} }>Проектирование воздушных и кабельных линий (ВЛ и КЛ)</div>*/}
                    <h3>Проектирование силового электрооборудования (ЭМ)В</h3>
                    <div>
                        Под силовым электрооборудованием в проектной практике понимается комплекс устройств, состоящий из всех приемников электрической энергии, кроме ламп электрического освещения, с относящимися к ним сетями и аппаратурой управления, защиты и измерений.
                    </div>
                </div>
            </div>
        </div>
    )
}