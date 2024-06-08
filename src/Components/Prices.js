import React from "react";
import serviceTable from "../images/servicesTableNew (2).jpg";
export default Prices;

function Prices() {
    return (
        <div className="pricesSection" id="prices">
            <h1> Prices</h1>

            <div className="pricesContainer">
                <img className="pricesImage" src={serviceTable} />
            </div>

        </div>
    )
}

