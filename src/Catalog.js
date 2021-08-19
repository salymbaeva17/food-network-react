import React, {useState} from "react"
import dishes from "./dishes";
import Rating from "./Rating";

const Catalog = () => {
    const [catalog, setCatalog] = useState(dishes)
    return (
        <div className="row">
            {
                catalog.map(el =>
                    <div className="col-4" key={el.id}>
                        <div className="dish__box">
                            <img src={el.image} className="dish__image" alt="dish"/>
                            <div className="dish__info-box">
                                <div className="dish__info">
                                    <h2 className="dish__title">{el.title}</h2>
                                    <h2 className="dish__price">{el.price}</h2>
                                </div>
                                <p className="dish__desc">{el.desc}</p>
                                <div className="dish__info">
                                    <span className="dish__plus-sign">
                                         <i className="fas fa-plus"/>
                                    </span>
                                    <Rating rating={el.rating}/>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Catalog