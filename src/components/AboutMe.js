import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Jumbotron from 'react-bootstrap/Jumbotron';

class AboutMe extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div data-spy="scroll" data-target="#list-example" data-offset="0" class="scrollspy-example pt-5">
      <Jumbotron id="about" class='bg-white'>
        <Container>
          <Row>
            <Col xs={4}>
              <div class = 'pt-3'>
              <img src={require("./media/janet.JPG")} alt='Janet Peng' class='fit-img'></img>
              </div>
            </Col>

            <Col>
              <h4>Thanks for stopping by!</h4>
              <p>
                My name is Janet Peng and I'm a junior studying Product Design and 
                minoring in Computer Science at Carnegie Mellon University. 
              </p>
              <p> 
                I'm also the UX Design team lead at CMU CS Academy, 
                an interactive online high school computer science curriculum. I've been
                working on the project for the past year and I'm dedicated to making
                world-class education more widely accessible and free to all. 
                Through the project, I’ve learned about the importance of accessible 
                design in creating inclusive products and the power of user-centered design.
                I'm interested in designing experiences that exist at the intersection 
                of design and technology, especially if they are supported by physical 
                products. I like working with design thinking and understanding how 
                artifacts I design may fit or complement a larger system.
              </p>
              <p>
                In my spare time, you can find me working on creative coding projects, 
                trying to learn new [programming] languages, drawing, or trying to bake 
                my next “greatest” masterpiece (probably bread). 
              </p>
              <p>
                If you're interested in my work feel free to contact me by email: 
                jjpeng@andrew.cmu.edu. I'd love to talk. I'm currently looking for 
                an opportunity in summer 2021.
              </p>
            </Col>
          </Row>
        </Container>
      </Jumbotron>

      </div>
    )
  }
}

export default AboutMe;