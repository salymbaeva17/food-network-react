import React from "react"
import Catalog from "./Catalog";


const Menu = () => {
    return (
        <section className="menu">
            <div className="menu__container">
                <p className="menu__subtitle">MENU</p>
                <h1 className="menu__title">Food Full of treaty Love</h1>
                <p className="menu__desc">There are many things are needed to start the Fast Food Business. You need not
                    only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers, </p>
                <Catalog/>
            </div>
        </section>
    )
}
export default Menu