import React, { Component } from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Nav from "../Nav";

class Wrapper extends Component {

    render() {
        return (<Container style={{height: "50%"}}>
            <Row>
                <Col>
                    <h1>im the col with the nav!</h1>
                    <Jumbotron>
                    <Nav />
                    </Jumbotron>
                </Col>
            </Row>
        </Container>);
    }
}

export default Wrapper;