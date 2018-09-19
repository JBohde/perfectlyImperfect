import React from "react";
import NavHeader from "../NavHeader";
import "./Home.css";

class Home extends React.Component {

    state = {

    }

    render() {
        return (
        <div>
            <NavHeader />
            <div className="video-display">
                <h1>THIS IS THE HOME PAGE</h1>
            </div>
        </div>
        )
    }
}

export default Home;