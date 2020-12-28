import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { Link, animateScroll as scroll } from "react-scroll";

import { Spacer } from './ContentBlock.js'

import Typing from 'react-typing-animation';

// import '../App.css';

class AboveFold extends React.Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
      introductions: [ 'Janet Peng', 'a Product Designer', 'a UX Designer', 'a programmer'],
      introIndex: 0,
      imageStyle: true,
      isAnimating: true,
    };
    this.handleImageClick = this.handleImageClick.bind(this)
  }

  changeIntro(){
    let temp = (this.state.introIndex + 1) % this.state.introductions.length
    this.setState({introIndex: temp})
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

  handleImageClick() {
    let temp = !this.state.imageStyle
    
    this.setState({ imageStyle: temp,
                    isAnimating: false })
  }

  render() {
    const width = this.state.width
    const isMobile = width <= 700

    if (isMobile) {
      return(
        <div>
          <Container name="top" fluid="md">
            <div>
              <div class='py-4'>
                <p class='pt-5 mid'>Hi all, my name is Janet Peng and I’m a </p>
                <h1 class='aboveFoldTitle'>Product Designer</h1>
                <h1 class='aboveFoldTitle light'>& Programmer</h1>
                <p class='pt-4 mid'>I'm a junior studying Product Design and Computer Science at CMU</p>
                <p class='mid'>I'm currently the UX Design Lead at <a class='midlight' target='_blank' href='https://academy.cs.cmu.edu'>CMU CS Academy</a></p>
              </div>
            
              <div class='pt-4'>
              <Link activeClass="active" to="projects" spy={true} smooth={true} duration={800}> 
                <a class='aboveFoldLink'>See my work <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                                </svg></a>
              </Link>
              </div>

              <div class='pt-2'>
                <a href='/about' class='aboveFoldLink'>
                  More about me 
                  <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                  </svg></a>
              </div>
            </div>

          </Container>
        </div>
      )
    } else {
      return (
        <div class='py-3'>
        <Spacer size={2}/>
        <Container name="top" fluid="md">
          <Row>
                <Col md={3}/>

                <Col>
                  <Spacer size={5}/>
                  <div class='py-4'>
                  <p class='pt-5 mid'>Hi all, my name is Janet Peng and I’m a </p>
                  <h1 class='aboveFoldTitle'>Product Designer</h1>
                  <h1 class='aboveFoldTitle light'>& Programmer</h1>
                  <p class='pt-4 mid'>I'm a junior studying Product Design and Computer Science at CMU</p>
                  <p class='mid'>I'm currently the UX Design Lead at <a class='midlight' target='_blank' href='https://academy.cs.cmu.edu'>CMU CS Academy</a></p>
                  </div>

                  <div class='pt-2'>
                    <Link activeClass="active" to="projects" spy={true} smooth={true} duration={800}> 
                      <a class='aboveFoldLink'>See my work <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                                    </svg></a>
                    </Link>
                    </div>

                    <div class='pt-1'>
                      <a href='/about' class='aboveFoldLink'>
                        More about me 
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                        </svg></a>
                    </div>
                    <Spacer size={5}/>
                </Col>
          </Row>
        </Container>

        </div>
      )
    }
  }
}

class TypingIntros extends React.Component {
  render(){
    return(
      <div>
        <Typing loop={true} onFinishedTyping={() => this.props.changeIntro()}>
                    <h2>{ this.props.phrase }</h2>
                    <Typing.Delay ms={1000}/>
                    <Typing.Backspace count={this.props.phrase.length}/>
                    <Typing.Delay ms={200}/>
        </Typing>
      </div>
    )
  }
}

export default AboveFold;