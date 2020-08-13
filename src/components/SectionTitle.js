import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class SectionTitle extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div class='py-3'>
        <Container name="top" fluid="md">
            <Row>
              <Col md = {2}>
              </Col>
              <Col md = {4}>
                <h1>{this.props.name}</h1>
              </Col>
            </Row>
        </Container>
      </div>
    )
  }
}

export default SectionTitle;