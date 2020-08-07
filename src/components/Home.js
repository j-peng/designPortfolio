import React from 'react';
import Child from './child.js'
import NavBar from './NavBar.js'
import AboveFold from './AboveFold.js'
import Gallery from './Gallery.js'
import AboutMe from './AboutMe.js'

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


import '../App.css';

class Home extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      nameIsJanet : true,
    }
    this.handleClick = this.handleClick.bind(this)
    this.handlePageChangeClick = this.handlePageChangeClick.bind(this)
  }
  
  handleClick(){
    this.setState({
      nameIsJanet : ! this.state.nameIsJanet,
    })
  }

  handlePageChangeClick(){

  }

  render(){
    return (
        <div class = 'pt-5'>
          <Container name="top">
            <Row>
              <Col xs={2}>
                  <div class = 'sticky-sidebar'>
                    <NavBar/>
                  </div>
              </Col>
              <Col>
                <AboveFold/>
                <Gallery section='work' />
                <Gallery section='play'/>
                <AboutMe/>
                <h1> Hello {this.state.nameIsJanet ? 'Janet' : 'Jackie'} </h1>
                <Child 
                  handleClick = {this.handleClick}
                />
              </Col>
            </Row>
          </Container>
            
        </div>
    )
  }
}

export default Home;