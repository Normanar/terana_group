import React, {useState} from "react";
import a from "./MySlider.module.css"

const images = [
    <img
        src={"https://media.istockphoto.com/photos/high-voltage-electric-power-lines-at-sunset-picture-id1332858442?b=1&k=20&m=1332858442&s=170667a&w=0&h=Gum61c44DNO5nSjdXSdltbKWprgx0AuKG-KWKOpG8x8="}/>,
    <img
        src={"https://media.istockphoto.com/photos/electricity-transmission-towers-with-red-glowing-wires-picture-id1318476890?b=1&k=20&m=1318476890&s=170667a&w=0&h=1_K_h6nL0qzaMduQwbbuY-jgbZuKckyIyARUjFUFfG0="}/>,
    <img
        src={"https://media.istockphoto.com/photos/wind-farm-at-sunset-picture-id1301243910?b=1&k=20&m=1301243910&s=170667a&w=0&h=M6Nbb_aF5BfmxxGfvuvWhbjByNNdKc6qFmxvdrOnfVI="}/>,

]


export function MySlider() {

    const [page, setPage] = useState(0)

    const nextImage = () => page === images.length - 1 ? setPage(0) : setPage(page + 1)
    const prevImage = () => page === 0 ? setPage(images.length - 1) : setPage(page - 1)


    return <>
        <div className={a.images}>
            {images[page]}
        </div>
        <div>
            <button onClick={nextImage}>{'<'}</button>
            <button onClick={prevImage}>{'>'}</button>
        </div>
    </>
}