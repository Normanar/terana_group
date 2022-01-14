import React, {useState} from "react";
import s from "./MyGallery.module.css"
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from "react-icons/all";
import slide1 from "../../images/slider/1.jpg";
import slide2 from "../../images/slider/2.jpg";
import slide3 from "../../images/slider/3.jpg";
import slide4 from "../../images/slider/4.jpg"

// const images = [
//     {
//         image: "https://media.istockphoto.com/photos/high-voltage-electric-power-lines-at-sunset-picture-id1332858442?b=1&k=20&m=1332858442&s=170667a&w=0&h=Gum61c44DNO5nSjdXSdltbKWprgx0AuKG-KWKOpG8x8="
//     },
//     {
//         image: "https://media.istockphoto.com/photos/wind-farm-at-sunset-picture-id1301243910?b=1&k=20&m=1301243910&s=170667a&w=0&h=M6Nbb_aF5BfmxxGfvuvWhbjByNNdKc6qFmxvdrOnfVI="
//     },
//     {
//         image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZW5lcmd5fGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
//     },
//     {
//         image: "https://images.unsplash.com/photo-1413882353314-73389f63b6fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGVuZXJneXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60"
//     }
// ]

const images = [
    {
        image: slide1
    },
    {
        image: slide2
    },
    {
        image: slide3
    },
    {
        image: slide4
    }
]

export function MyGallery() {

    const [current, setCurrent] = useState<number>(0)

    const nextSlide = () => {
        current === images.length - 1 ? setCurrent(0) : setCurrent(current + 1)
    }

    const prevSlide = () => {
        current === 0 ? setCurrent(images.length - 1) : setCurrent(current - 1)
    }

    return (
        <div className={s.slider_container}>
            <section className={s.slider}>
                <FaArrowAltCircleLeft className={s.left_arrow} onClick={prevSlide}/>
                <FaArrowAltCircleRight className={s.right_arrow} onClick={nextSlide}/>
                {images.map((slide, index) => {
                    return (
                        <div className={index === current ? s.slide_active : s.slide} key={index}>
                            {index === current && <img src={slide.image} alt={"energy"} className={s.image}/>}

                        </div>
                    )
                })}

            </section>
        </div>
    )
}