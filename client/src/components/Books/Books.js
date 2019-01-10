import React from "react";
import NavBar from "../Navbar";
import NavHeader from "../NavHeader";
import { Container } from 'reactstrap';
import "./Books.css";

class Books extends React.Component {

    state = {

    }

    render() {
        return ( 
        <div>
            <NavBar />
            <NavHeader />
            <Container>
            <h1>Recommended Books</h1> 
            </Container>
            </div>
        )
    }
}

export default Books;