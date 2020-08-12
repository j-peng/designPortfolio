import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Jumbotron from 'react-bootstrap/Jumbotron';

import { SocialIcon } from 'react-social-icons';

class AboutMe extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div data-spy="scroll" data-target="#list-example" data-offset="0" class="scrollspy-example pt-5">
      <Jumbotron id="about">
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
              <div class = 'pt-3'>
                <span class='social-pad'>
                <SocialIcon url='https://www.linkedin.com/in/janet-peng-348198133/'
                            style={{ height: 40, width: 40 }} 
                            bgColor="#404040"
                            target="_blank"/>
                </span>

                <span class='social-pad'>
                <SocialIcon url="https://medium.com/@jjpeng" 
                            style={{ height: 40, width: 40 }} 
                            bgColor="#404040"
                            target="_blank"/>
                </span>

                <span class='social-pad'>
                <SocialIcon url='https://www.behance.net/jjpeng'
                            style={{ height: 40, width: 40 }} 
                            bgColor="#404040"
                            target="_blank"/>
                </span>

                <span class='social-pad'>
                <SocialIcon url='https://github.com/j-peng'
                            style={{ height: 40, width: 40 }} 
                            bgColor="#404040"
                            target="_blank"/>
                </span>
                
                <a href={require("./media/resume.pdf")} class='social-pad link' target='blank'>
                  Resume
                </a>
                
              </div>
            </Col>
          </Row>
        </Container>
      </Jumbotron>

      </div>
    )
  }
}

export default AboutMe;