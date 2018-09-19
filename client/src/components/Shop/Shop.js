import React from "react";
import NavHeader from "../NavHeader";
import "./Shop.css";

class Shop extends React.Component {
    
    state = {

    }

    render() {
        return (
            <div>
                <NavHeader />
                <div className="container">
                    <h1>THIS IS THE SHOPPING PAGE</h1>
                </div>
            </div>
        )
    }
}

export default Shop;