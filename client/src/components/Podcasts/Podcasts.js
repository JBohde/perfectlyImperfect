import React from "react";
import NavBar from "../Navbar";
import NavHeader from "../NavHeader";
import { Container } from 'reactstrap';
import "./Podcasts.css";

class Podcasts extends React.Component {

    state = {

    }

    render() {
        return ( 
        <div>
            <NavBar />
            <NavHeader />
            <Container>
            <h1>Podcasts</h1> 
            </Container>
            </div>
        )
    }
}

export default Podcasts;