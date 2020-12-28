import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Image from 'react-bootstrap/Image'

import {SmallContentBlock, Divider, Spacer, ImgWithDesc  } from './ContentBlock.js'

import '../App.css';

class About extends React.Component {
    constructor(props){
        super(props)
        let facts = [ 
            'When taking a break from the design studio you can find me working on coding projects or baking some cookies.',
            'I programmed this website to learn react. I learn best by doing.',
            "This website's color scheme is based off of warm grey copics.",
            'My favorite YouTube channels include Kurzgesagt, CGP Grey, and SORTEDfood.',
            'My favorite singers include Quinn XCII, and Ed Sheeran.',
            'My favorite ice cream flavor is Ben and Jerry’s Red Velvet.',
            'I went to University of Toronto School for high school. It is not a university (I get asked a lot).',
            'I grew up in Richmond Hill, a suburb right outside of Toronto, Canada.',
            'In high school I wanted to be a mechanical engineer. I then realized what I thought was a mechanical engineering was closer to industrial design.',
            'I played chess competitively. I got to represent Canada at the World Youth Under 16 Chess Olympiad. My USCF rating is 1859.',
            'Favorite design quote: "Always design a thing by considering it in its next larger context - a chair in a room, a room in a house, a house in an environment, an environment in a city plan" - Eero Saarinen',
            'My favorite cookie to bake is the snickerdoodle.',
            'I like cooking (probably because I like eating...)',
            "I've been to 15 countries. I traveled to play chess a lot growing up.",
            "I've been to 13 states. I don't know if that's considered 'a lot'.",
            "I'm a proud Canadian. My typical Tims (Tim Hortons) order is an Old Fashioned Plain donut and a small English Breakfast (1 milk).",
            "My friends used to call be penguin because my last name is Peng. I like penguins.",
            'I believe that veggies make a meal a meal. Thus, pizza is not a meal. My friends disagree.',
            <a href='https://www.npr.org/2012/08/24/159975466/corrections-and-comments-to-stories' target='_blank' class='p-link'>https://www.npr.org/2012/08/24/159975466/corrections-and-comments-to-stories</a>,
            <a href='https://youtu.be/r06zrQ2mP34' target='_blank' class='p-link'>https://youtu.be/r06zrQ2mP34</a>,
            <a href='https://www.youtube.com/watch?v=JWfULMcFikI' target='_blank' class='p-link'>https://www.youtube.com/watch?v=JWfULMcFikI</a>,
            <p>My photo on this page was taken by my roommate (
                <a href='https://zhihuil.myportfolio.com/' target='_blank' class='p-link'>CeCe</a>. She is also a product designer.</p>,
            <p>“things get broken, and sometimes they get repaired, and in most cases, you realize that no matter what gets damaged, life rearranges itself to compensate for your loss, sometimes wonderfully.” <i>― Hanya Yanagihara, A Little Life</i></p>,

        ]
        this.state = {
          funFacts: facts,
          currFact: facts[0],
          width: window.innerWidth,
        }
        this.handleClick = this.handleClick.bind(this)
        
      }
  
    handleClick(){
        let fact = this.state.funFacts[Math.floor(Math.random() * this.state.funFacts.length)]
        this.setState({
            currFact: fact
        })
    }

    componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange)
      }
    
      componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange)
      }
      
      handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth })
      };

   render(){
    const width = this.state.width
    const isMobile = width <= 700
    
    if (isMobile) {
        return( 
        <div class='pt-2'>
            <Container>
                <Image src={require("./media/jjpeng_square.jpg")} rounded fluid/> 

                <div class='pt-3'>
                    <h4 class='pb-2 darknbold'>Hi All! <span class='px-1'/></h4>
                    <p class='increaseSpacing sixteenfont'>
                        I'm Janet, a junior majoring in&nbsp;
                            <a class='midlight' target='_blank' href='https://design.cmu.edu/'>Product Design</a>&nbsp;
                        and minoring in&nbsp;
                        <a class='midlight' target='_blank' href='https://www.scs.cmu.edu/'>Computer Science</a>&nbsp;
                        at Carnegie Mellon University. 
                    </p>
                    <p class='increaseSpacing sixteenfont'>
                        I am also the UX Design Lead and a Content Developer at&nbsp;
                        <a class='midlight' target='_blank' href='https://academy.cs.cmu.edu'>CMU CS Academy</a>.
                    </p>
                    <p class='pt-2'><a href={require("./media/resume.pdf")} 
                            target='_blank' 
                            class='link'>Resume</a></p>
                </div>

                <p class='pt-4'>
                I design experiences through physical and digital products. 
                I believe intentional design is key to bringing delightful and equitable experiences. 
                When designing, I like to consider how the design fits into the larger system. 
                I believe it is a designer's responsibility to create postive impact through 
                user centered, researched, and accessible design.
                </p>

                <p>
                Thank you for visiting my website and if you're interested in my work 
                feel free to contact me by email:&nbsp;
                    <a href='mailto: jjpeng@andrew.cmu.edu' class='p-link'> 
                        jjpeng@andrew.cmu.edu
                    </a>. 
                I'd love to talk and I'm currently looking for an opportunity summer 2021.
                </p>

                <div class='align-right'>
                    <img src={require("./media/jdark.png")} 
                        alt="From Janet"
                        width="32"/>
                </div>


                <div class='pt-5'>
                <Row>
                    <Col><h6 class='pt-2'>Fun Fact</h6></Col>
                    <Col><Button onClick={() => this.handleClick()} 
                                    size='sm' 
                                    block='false' 
                                    variant='light'><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-dice-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M13 1H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/>
                                    <circle cx="4" cy="4" r="1.5"/>
                                    <circle cx="12" cy="4" r="1.5"/>
                                    <circle cx="12" cy="12" r="1.5"/>
                                    <circle cx="4" cy="12" r="1.5"/>
                                    <circle cx="8" cy="8" r="1.5"/>
                                </svg></Button></Col>
                </Row> 
                <p class='pt-1'>{this.state.currFact}</p>
                </div>
            </Container>
        </div>
        )
    } else {
    return (
        <div class='pt-5'>
            <Container>
                <Row>
                    <Col md={2}></Col>
                    <Col md={4}>
                        <Image src={require("./media/jjpeng_square.jpg")} rounded fluid/> 
                    </Col>

                    <Col md={5}>
                        <div class='vertical-center'>
                            <h4 class='pb-2 darknbold'>Hi All! <span class='px-1'/></h4>
                            <p class='increaseSpacing sixteenfont'>
                                I'm Janet, a junior majoring in&nbsp;
                                 <a class='midlight' target='_blank' href='https://design.cmu.edu/'>Product Design</a>&nbsp;
                                and minoring in&nbsp;
                                <a class='midlight' target='_blank' href='https://www.scs.cmu.edu/'>Computer Science</a>&nbsp;
                                at Carnegie Mellon University. 
                            </p>
                            <p class='increaseSpacing sixteenfont'>
                                I am also the UX Design Lead and a Content Developer at&nbsp;
                                <a class='midlight' target='_blank' href='https://academy.cs.cmu.edu'>CMU CS Academy</a>.
                            </p>
                            <p class='pt-4'><a href={require("./media/resume.pdf")} 
                                  target='_blank' 
                                  class='link'>Resume</a></p>
                        </div>
                    </Col>
                </Row>
                
                <Row>
                    <Col md={2}/>
                    <Col md={4}>

                        <div class='pt-3'>
                            <Row>
                                <Col md={9}><h6 class='pt-2'>Fun Fact</h6></Col>
                                <Col md={3}>
                                    <OverlayTrigger
                                        placement='top'
                                        overlay={<Tooltip>reroll</Tooltip>}>
                                        <Button onClick={() => this.handleClick()} 
                                            size='sm' 
                                            block='false' 
                                            variant='light'><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-dice-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M13 1H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/>
                                            <circle cx="4" cy="4" r="1.5"/>
                                            <circle cx="12" cy="4" r="1.5"/>
                                            <circle cx="12" cy="12" r="1.5"/>
                                            <circle cx="4" cy="12" r="1.5"/>
                                            <circle cx="8" cy="8" r="1.5"/></svg>
                                        </Button>
                                    </OverlayTrigger>
                                </Col>
                            </Row> 
                            
                            <p class='pt-1'>{this.state.currFact}</p>
                        </div>
                    </Col>


                    <Col md={5}>
                        <p class='pt-3'>
                        I design experiences through physical and digital products. 
                        I believe intentional design is key to bringing delightful and equitable experiences. 
                        When designing, I like to consider how the design fits into the larger system. 
                        I believe it is a designer's responsibility to create postive impact through 
                        user centered, researched, and accessible design.
                        </p>

                        <p>
                        Thank you for visiting my website and if you're interested in my work 
                        feel free to contact me by email:&nbsp;
                            <a href='mailto: jjpeng@andrew.cmu.edu' class='p-link'> 
                                jjpeng@andrew.cmu.edu
                            </a>. 
                        I'd love to talk and I'm currently looking for an opportunity summer 2021.
                        </p>

                        <div class='align-right'>
                            <img src={require("./media/jdark.png")} 
                                alt="From Janet"
                                width="32"/>
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    )
  }
}
}

export default About;