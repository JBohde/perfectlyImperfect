import React from "react";
import NavBar from "../NavBar";
import NavHeader from "../NavHeader";
import "./Home.css";

class Home extends React.Component {

    state = {
        body: 'Lorem ipsum dolor amet actually fanny pack sustainable listicle freegan.Asymmetrical pork belly selvage, twee freegan sriracha pour - over.Squid pitchfork mustache vegan'
    }

    render() {
        return (
        <div>
            <NavBar />
            <NavHeader />
            <div className="video-display">
                <h1 id="home">THIS IS THE HOME PAGE</h1>
            </div>

        </div>
        )
    }
}

export default Home;