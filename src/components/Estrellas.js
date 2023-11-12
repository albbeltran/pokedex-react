import { useState } from "react";

export default function Estrellas() {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    return (
        <div className="star-rating">
            {[...Array(5)].map((star, i) => {
                return (
                    <button
                        type="button"
                        className={i <= (rating || hover) ? "btnEstrella on" : "btnEstrella off"}
                        key={i}
                        onClick={() => {
                            setRating(i)
                        }}
                        onMouseEnter={() => setHover(i)}
                        onMouseLeave={() => setHover(rating)}
                    >
                        <span className="star">&#9733;</span>

                    </button>
                )
            })}
        </div >
    )
}