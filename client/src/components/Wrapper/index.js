import React, { Component } from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Nav from "../Nav";
import Googmap from '../Googmap';

class Wrapper extends Component {

    render() {
        return (
        <Container style={{height: "50%"}}>
            <Row>
                <Col>
                    <Jumbotron>
                    <Nav />
                    <Googmap/>
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
        

        );

    }
}

export default Wrapper;