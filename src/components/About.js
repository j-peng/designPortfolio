import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Figure from 'react-bootstrap/Figure'
import {SmallContentBlock, Divider} from './ContentBlock.js'
import '../App.css';

class About extends React.Component {
    constructor(props){
        super(props)
        let facts = [ 
            'I programmed this website to learn react. I learn best by doing.',
            "This website's color scheme is based off of warm grey copics.",
            'My favorite YouTube channels include Kurzgesagt, CGP Grey, and SORTEDfood.',
            'My favorite singers include Quinn XCII, Ed Sheeran, and Greyson Chance.',
            'My default answer for favorite ice cream flavor is Ben and Jerry’s red velvet although I’ve only had it once. I can’t find it in stores anymore :(',
            'I went to University of Toronto School for high school. It is not a university (I get asked a lot).',
            'In high school I wanted to be a mechanical engineer. I then realized what I thought was a mechanical engineering was closer to industrial design.',
            'I played chess completitivly. I got to represent Canada at the World Youth Under 16 Chess Olympiad. My USCF rating is 1859.',
            'I know how to glow string/ spin poi.',
            'Favorite design quote: "Always design a thing by considering it in its next larger context - a chair in a room, a room in a house, a house in an environment, an environment in a city plan" - Eero Saarinen'
 
        ]
        this.state = {
          funFacts: facts,
          currFact: facts[Math.floor(Math.random() * facts.length)]
        }
        this.handleClick = this.handleClick.bind(this)
        
      }
  
    handleClick(){
        let fact = this.state.funFacts[Math.floor(Math.random() * this.state.funFacts.length)]
        this.setState({
            currFact: fact
        })
   }

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
                    <h6 class='py-3'>My name is Janet Peng</h6>
                    
                    <SmallContentBlock title="I'm from" body='Toronto, Canada'/>
                    <SmallContentBlock title="Living in" body='Pittsburgh, PA'/>
                    <SmallContentBlock title="Going to" body='Carnegie Mellon University'/>
                    <SmallContentBlock title="Majoring in" body='Product Design'/>
                    <SmallContentBlock title="Minoring in" body='Computer Science'/>
                    <SmallContentBlock title="Working as" body='UX Designer @ CMU CS Academy'/>

                    </Col>

                    <Col md={1}></Col>

                    <Col md={5}>
                        <h4>Hello!</h4>
                        <p>
                        I’m a junior studying design at CMU. I like designing experiences 
                        through physical and digital products (and I’m currently wrestling with 
                        which I enjoy more). I believe design can create meaningful change and 
                        that it is our responsibility as designers to create postive impact through 
                        user tested, researched, and accessible design and to take ownership over 
                        the negative or positive impact our artifacts have.
                        </p>
                        <p>
                        I like experimenting with novel and unconventional ideas 
                        but understand that there is a place for practicality. 
                        I believe in working hard and either giving a project my all or 
                        putting it on pause until I can give it more attention. 
                        </p>
                        <p>
                        When taking a break from the design studio you can 
                        find me working on coding projects or baking some cookies.
                        </p>
                        <p>
                        If you're interested in my work feel free to contact me by email: 
                        jjpeng@andrew.cmu.edu. I'd love to talk an I'm currently looking for 
                        an opportunity summer 2021.
                        </p>

                        <a href={require("./media/resume.pdf")} 
                           target='_blank' class='link'>Resume</a>
                        <div class='pt-3'>
                        <Row>
                            <Col md={9}><h6 class='pt-2'>Fun Fact!</h6></Col>
                            <Col md={3}><Button onClick={() => this.handleClick()} 
                                         size='sm' 
                                         block='false' 
                                         variant='light'>reroll</Button></Col>
                        </Row> 
                        
                        <p class='pt-1'>{this.state.currFact}</p>
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    )
  }
}

export default About;