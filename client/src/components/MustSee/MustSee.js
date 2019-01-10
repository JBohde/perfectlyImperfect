import React from "react";
import NavBar from "../Navbar";
import NavHeader from "../NavHeader";
import { Container } from 'reactstrap';
import "./MustSee.css";

class MustSee extends React.Component {

    state = {

    }

    render() {
        return ( 
        <div>
            <NavBar />
            <NavHeader />
            <Container>
            <h1>Must See</h1> 
            </Container>
            </div>
        )
    }
}

export default MustSee;