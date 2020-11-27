import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Figure from 'react-bootstrap/Figure'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

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
            'My favorite singers include Quinn XCII, Ed Sheeran, and Greyson Chance.',
            'My favorite ice cream flavor is Ben and Jerry’s Red Velvet.',
            'I went to University of Toronto School for high school. It is not a university (I get asked a lot).',
            'In high school I wanted to be a mechanical engineer. I then realized what I thought was a mechanical engineering was closer to industrial design.',
            'I played chess competitively. I got to represent Canada at the World Youth Under 16 Chess Olympiad. My USCF rating is 1859.',
            'Favorite design quote: "Always design a thing by considering it in its next larger context - a chair in a room, a room in a house, a house in an environment, an environment in a city plan" - Eero Saarinen',
            'My favorite cookie to bake is the snickerdoodle.',
            "The image on the landing page is stickers of old projects I've done. I enjoy hand drawing stickers.",
            'Clicking the image on the landing page reveals an "easter egg".',
            'I like cooking (probably because I like eating...)',
            "I've been to 15 countries. I traveled to play chess a lot growing up.",
            "I've been to 13 states. I don't know if that's considered 'a lot'.",
            "I'm a proud Canadian. My typical Tims (Tim Hortons) order is an Old Fashioned Plain donut and a small English Breakfast (1 milk).",
            "My friends used to call be penguin because my last name is Peng. I like penguins.",
            'I believe that veggies make a meal a meal. Thus, pizza is not a meal. My friends disagree.',
            <a href='https://youtu.be/r06zrQ2mP34' target='_blank' class='p-link'>https://youtu.be/r06zrQ2mP34</a>,
            <a href='https://www.youtube.com/watch?v=JWfULMcFikI' target='_blank' class='p-link'>https://www.youtube.com/watch?v=JWfULMcFikI</a>,
            <p>My photo on this page was taken by my roommates (
                <a href='https://zhihuil.myportfolio.com/' target='_blank' class='p-link'>CeCe</a> and  
                <a href='https://espooner.myportfolio.com/' target='_blank' class='p-link'> Emily</a>). They are also product designers.</p>,

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
                <Figure>
                    <Figure.Image
                        alt='A photograph of Janet Peng'
                        src={require("./media/jjpeng.png")}/>
                </Figure>

                <h5 class='pb-3 align-center'>About me</h5>

                <p><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-house" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                </svg><span class='px-2'/>Toronto, Canada</p>

                <p><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-geo" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 4a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                <path d="M7.5 4h1v9a.5.5 0 0 1-1 0V4z"/>
                <path fill-rule="evenodd" d="M6.489 12.095a.5.5 0 0 1-.383.594c-.565.123-1.003.292-1.286.472-.302.192-.32.321-.32.339 0 .013.005.085.146.21.14.124.372.26.701.382.655.246 1.593.408 2.653.408s1.998-.162 2.653-.408c.329-.123.56-.258.701-.382.14-.125.146-.197.146-.21 0-.018-.018-.147-.32-.339-.283-.18-.721-.35-1.286-.472a.5.5 0 1 1 .212-.977c.63.137 1.193.34 1.61.606.4.253.784.645.784 1.182 0 .402-.219.724-.483.958-.264.235-.618.423-1.013.57-.793.298-1.855.472-3.004.472s-2.21-.174-3.004-.471c-.395-.148-.749-.336-1.013-.571-.264-.234-.483-.556-.483-.958 0-.537.384-.929.783-1.182.418-.266.98-.47 1.611-.606a.5.5 0 0 1 .595.383z"/>
                </svg><span class='px-2'/>Pittsburgh, PA</p>

                <p><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-journal-text" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 1h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1H2a2 2 0 0 1 2-2z"/>
                <path d="M2 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H2zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H2zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H2z"/>
                <path fill-rule="evenodd" d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
                </svg><span class='px-2'/>Carnegie Mellon University</p>

                <p><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-journal-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 1h5v1H4a1 1 0 0 0-1 1H2a2 2 0 0 1 2-2zm10 7v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V8h1zM2 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H2zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H2zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H2z"/>
                <path fill-rule="evenodd" d="M13.5 1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1H13V1.5a.5.5 0 0 1 .5-.5z"/>
                <path fill-rule="evenodd" d="M13 3.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0v-2z"/>
                </svg><span class='px-2'/>Product Design</p>

                <p><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-journal-minus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 1h5v1H4a1 1 0 0 0-1 1H2a2 2 0 0 1 2-2zm10 7v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V8h1zM2 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H2zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H2zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H2z"/>
                <path fill-rule="evenodd" d="M11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z"/>
                </svg><span class='px-2'/>Computer Science</p>
                
                <p><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-briefcase" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-6h-1v6a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-6H0v6z"/>
                <path fill-rule="evenodd" d="M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5v2.384l-7.614 2.03a1.5 1.5 0 0 1-.772 0L0 6.884V4.5zM1.5 4a.5.5 0 0 0-.5.5v1.616l6.871 1.832a.5.5 0 0 0 .258 0L15 6.116V4.5a.5.5 0 0 0-.5-.5h-13zM5 2.5A1.5 1.5 0 0 1 6.5 1h3A1.5 1.5 0 0 1 11 2.5V3h-1v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V3H5v-.5z"/>
                </svg><span class='px-2'/>UX Designer @ CMU CS Academy</p>

                <a href={require("./media/resume.pdf")} target='_blank' class='link-img'>
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-file-text" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M4 1h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H4z"/>
                    <path fill-rule="evenodd" d="M4.5 10.5A.5.5 0 0 1 5 10h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm0-2A.5.5 0 0 1 5 8h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm0-2A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm0-2A.5.5 0 0 1 5 4h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z"/>
                </svg><span class='px-2'/>Resume</a>
                <Spacer size={3}/>
                <h4 class='pb-2'>Hello! </h4>
                    <p>
                    My name is Janet and I’m a junior studying design at CMU.
                    I design exeriences. Whether that be with physical products 
                    or digital products, I believe intentional design is key to 
                    bringing delightful and equitable experiences. When designing, 
                    I consider how the design fits into the larger system.
                    </p>
                    <p>
                    I believe design can create meaningful change and that it 
                    is a designer's responsibility to create postive impact 
                    through user centered, researched, and accessible design.
                    </p>
                    <p>
                    I like experimenting with novel and unconventional ideas but 
                    understand that there is a place for practicality. I believe in 
                    working hard and dedicating time to my projects.
                    </p>
                    <p>
                    If you're interested in my work feel free to contact me by 
                    email:  
                    <a href='mailto: jjpeng@andrew.cmu.edu' 
                        class='p-link'> jjpeng@andrew.cmu.edu</a>. 
                    I'd love to talk and I'm currently 
                    looking for an opportunity summer 2021.
                    </p>

                    <div class='pt-3'>
                    <Row>
                        <Col><h6 class='pt-2'>Fun Fact!</h6></Col>
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
                    <Col md={1}></Col>
                    <Col md={4}>
                    <Figure>
                        <Figure.Image
                            alt='A photograph of Janet Peng'
                            src={require("./media/jjpeng.png")}/>
                    </Figure>

                    <h5 class='pb-3 align-center'>About me</h5>
                    

                    <p>
                        <ImgWithDesc placement='left'
                                 text="I'm from"
                                 image={<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-house" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                 <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                                 <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                                 </svg>}/>
                        <span class='px-2'/>
                        Toronto, Canada
                    </p>

                    <p>
                         <ImgWithDesc placement='left'
                                 text="Living in"
                                 image={<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-geo" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M11 4a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                 <path d="M7.5 4h1v9a.5.5 0 0 1-1 0V4z"/>
                                 <path fill-rule="evenodd" d="M6.489 12.095a.5.5 0 0 1-.383.594c-.565.123-1.003.292-1.286.472-.302.192-.32.321-.32.339 0 .013.005.085.146.21.14.124.372.26.701.382.655.246 1.593.408 2.653.408s1.998-.162 2.653-.408c.329-.123.56-.258.701-.382.14-.125.146-.197.146-.21 0-.018-.018-.147-.32-.339-.283-.18-.721-.35-1.286-.472a.5.5 0 1 1 .212-.977c.63.137 1.193.34 1.61.606.4.253.784.645.784 1.182 0 .402-.219.724-.483.958-.264.235-.618.423-1.013.57-.793.298-1.855.472-3.004.472s-2.21-.174-3.004-.471c-.395-.148-.749-.336-1.013-.571-.264-.234-.483-.556-.483-.958 0-.537.384-.929.783-1.182.418-.266.98-.47 1.611-.606a.5.5 0 0 1 .595.383z"/>
                                 </svg>}/>
                        <span class='px-2'/>
                        Pittsburgh, PA
                    </p>

                    <p>
                        <ImgWithDesc placement='left'
                                    text="Studying at"
                                    image={<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-journal-text" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 1h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1H2a2 2 0 0 1 2-2z"/>
                                    <path d="M2 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H2zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H2zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H2z"/>
                                    <path fill-rule="evenodd" d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
                                    </svg>}/>
                        <span class='px-2'/>
                        Carnegie Mellon University
                    </p>

                    <p>
                        <ImgWithDesc placement='left'
                                        text="Majoring in"
                                        image={<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-journal-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 1h5v1H4a1 1 0 0 0-1 1H2a2 2 0 0 1 2-2zm10 7v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V8h1zM2 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H2zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H2zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H2z"/>
                                        <path fill-rule="evenodd" d="M13.5 1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1H13V1.5a.5.5 0 0 1 .5-.5z"/>
                                        <path fill-rule="evenodd" d="M13 3.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0v-2z"/>
                                        </svg>}/>
                       <span class='px-2'/>
                       Product Design
                    </p>

                    <p>
                        <ImgWithDesc placement='left'
                                    text="Minoring in"
                                    image={<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-journal-minus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 1h5v1H4a1 1 0 0 0-1 1H2a2 2 0 0 1 2-2zm10 7v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V8h1zM2 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H2zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H2zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H2z"/>
                                    <path fill-rule="evenodd" d="M11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z"/>
                                    </svg>}/>
                        <span class='px-2'/>
                        Computer Science
                    </p>
                    
                    <p>
                        <ImgWithDesc placement='left'
                                    text="Working as"
                                    image={<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-briefcase" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-6h-1v6a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-6H0v6z"/>
                                    <path fill-rule="evenodd" d="M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5v2.384l-7.614 2.03a1.5 1.5 0 0 1-.772 0L0 6.884V4.5zM1.5 4a.5.5 0 0 0-.5.5v1.616l6.871 1.832a.5.5 0 0 0 .258 0L15 6.116V4.5a.5.5 0 0 0-.5-.5h-13zM5 2.5A1.5 1.5 0 0 1 6.5 1h3A1.5 1.5 0 0 1 11 2.5V3h-1v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V3H5v-.5z"/>
                                    </svg>}/>
                        <span class='px-2'/>
                        UX Designer @ CMU CS Academy
                    </p>

                    <a href={require("./media/resume.pdf")} target='_blank' class='link-img'>
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-file-text" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M4 1h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H4z"/>
                        <path fill-rule="evenodd" d="M4.5 10.5A.5.5 0 0 1 5 10h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm0-2A.5.5 0 0 1 5 8h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm0-2A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm0-2A.5.5 0 0 1 5 4h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z"/>
                    </svg><span class='px-2'/>Resume</a>

                    </Col>

                    <Col md={1}></Col>

                    <Col md={5}>
                        <h4 class='pb-2'>Hello! <span class='px-1'/></h4>
                        <p>
                        My name is Janet and I’m a junior studying design at CMU.
                        I design exeriences. Whether that be with physical products 
                        or digital products, I believe intentional design is key to 
                        bringing delightful and equitable experiences. When designing, 
                        I consider how the design fits into the larger system.
                        </p>
                        <p>
                        I believe design can create meaningful change and that it 
                        is a designer's responsibility to create postive impact 
                        through user centered, researched, and accessible design.
                        </p>
                        <p>
                        I like experimenting with novel and unconventional ideas but 
                        understand that there is a place for practicality. I believe in 
                        working hard and dedicating time to my projects.
                        </p>
                        <p>
                        If you're interested in my work feel free to contact me by 
                        email:  
                        <a href='mailto: jjpeng@andrew.cmu.edu' 
                           class='p-link'> jjpeng@andrew.cmu.edu</a>. 
                        I'd love to talk and I'm currently 
                        looking for an opportunity summer 2021.
                        </p>

                        <div class='pt-3'>
                            <Row>
                                <Col md={9}><h6 class='pt-2'>Fun Fact!</h6></Col>
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
                </Row>
            </Container>
        </div>
    )
  }
}
}

export default About;