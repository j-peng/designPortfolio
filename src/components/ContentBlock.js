import React from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class TitledContent extends React.Component {
  render(){
    return (
      <div>
        <Container>
            <Row>
                <Col md={2}></Col>
                <Col md={2}>
                    <h5 class='align-right'>{this.props.title}</h5>
                </Col>
                <Col md={5}>
                    <p>{this.props.body}</p>
                </Col>
            </Row>
        </Container>
      </div>
    )
  }
}

export default TitledContent;