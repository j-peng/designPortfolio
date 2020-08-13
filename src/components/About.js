import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import '../App.css';

class About extends React.Component {
  render(){
    return (
        <div class='pt-5'>
            <Container>
                <Row>
                    <Col md={4}>
                        <p class='align-right'> hi </p>
                    </Col>
                    
                    <Col>
                        <h1>hi </h1>
                    </Col>
                </Row>
            </Container>
        </div>
    )
  }
}

export default About;