import React from "react";
import { Container } from 'reactstrap';
import NavBar from "../../components/Navbar";
import NavHeader from "../../components/NavHeader";
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