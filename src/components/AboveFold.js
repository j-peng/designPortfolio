import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


class AboveFold extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div class='py-5'>
      <Container name="top" fluid="md">
        <Row>
          <Col md = {2}></Col>
          <Col> <h5 class='pb-2'>Hey there, I’m Janet Peng</h5> </Col>
        </Row>
            <Row>
              <Col md = {2}>
              </Col>
              <Col>
                <h2 class='pb-2'>Junior studying Product Design @ 
                  <a href='https://www.design.cmu.edu/' target="_blank" class='link'>CMU</a>
                </h2>
                <h2>Content Developer and UX Design Team Lead @ 
                  <a href='https://academy.cs.cmu.edu/' target="_blank" class='link'>CMU CS Academy</a>
                </h2>
              </Col>
              <Col>
                <p>I love designing experiences, especially if they are 
                   supported by physical products. When designing, I like to consider 
                   how my designs may complement the larger system. I believe in 
                   user-centered design and user testing + research so I make
                   it a large part of my design process.
                </p>
                <p>
                  Besides design, I enjoy exploring new skills such as programming, 
                  illustration, photography, and baking. I am interested in technology and 
                  am persuing a minor in Computer Science.
                </p>
              </Col>
        </Row>
      </Container>

      </div>
    )
  }
}

export default AboveFold;