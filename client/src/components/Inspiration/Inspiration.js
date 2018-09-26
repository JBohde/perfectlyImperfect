import React from "react";
import NavBar from "../NavBar";
import NavHeader from "../NavHeader";
import "./Inspiration.css";

class Inspiration extends React.Component {

    state = {

    }

    render() {
        return (
        <div>
            <NavBar />
            <NavHeader />
            <div className="video-display">
                <h1 id="inspiration">THIS IS THE INSPIRATION PAGE</h1>
            </div>
        </div>
        )
    }
}

export default Inspiration;