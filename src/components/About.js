import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Figure from 'react-bootstrap/Figure'
import {SmallContentBlock, Divider} from './ContentBlock.js'
import '../App.css';

class About extends React.Component {
  render(){
    return (
        <div class='pt-5'>
            <Container>
                <Row>
                    <Col md={1}></Col>
                    <Col md={4}>
                    <Figure>
                        <Figure.Image
                            alt='A photograph of Janet Peng'
                            src={require("./media/janet_circle.jpg")}
                        />
                    </Figure>
                    <h6 class='py-3'>Hello again, my name is Janet Peng</h6>
                    
                    <SmallContentBlock title="I'm from" body='Toronto, Canada'/>
                    <SmallContentBlock title="Living in" body='Pittsburgh, PA'/>
                    <SmallContentBlock title="Going to" body='Carnegie Mellon University'/>
                    <SmallContentBlock title="Majoring in" body='Product Design'/>
                    <SmallContentBlock title="Minoring in" body='Computer Science'/>
                    <SmallContentBlock title="Working as" body='UX Designer @ CMU CS Academy'/>

                    </Col>

                    <Col md={1}></Col>

                    <Col md={4}>
                        <p>
                        I'm interested in designing experiences that exist at the 
                        intersection of design and technology, especially if they 
                        are supported by physical products. I like working with design 
                        thinking and understanding how artifacts I design may fit 
                        or complement a larger system.
                        </p>
                        <p>
                        Besides design, I love learning new exploring new 
                        skills such as programming and baking.
                        </p>
                        <p>
                        If you're interested in my work feel free to contact me 
                        by email: jjpeng@andrew.cmu.edu. I'd love to talk an 
                        I'm currently looking for an opportunity summer 2021.
                        </p>

                        <a href={require("./media/resume.pdf")} target='_blank'>Resume</a>
                        
                    </Col>
                </Row>
            </Container>
        </div>
    )
  }
}

export default About;