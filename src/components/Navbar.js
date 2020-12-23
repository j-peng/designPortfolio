import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import '../App.css';

class MyNav extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            width: window.innerWidth,
          }
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
        let bgclass = "transparent"
        if (isMobile) {
            bgclass = "light"
        }

        return (
            <Navbar bg={bgclass} variant="light" sticky="top" className='pl-4' >
            <Navbar.Brand href='/'>
                <img src={require("./media/jmid.png")} 
                     alt="Janet Peng"
                     width="32"/>

            </Navbar.Brand>
            <Nav className="pt-2">
            <Nav.Link href='/#projects'>
                <h6 class={(this.props.currpath === '/') ? 'darknbold' : 'light'}>Projects</h6></Nav.Link>
            <Nav.Link href='/play'>
                <h6 class={(this.props.currpath === '/play') ? 'darknbold' : 'light'}>Play</h6></Nav.Link>
            <Nav.Link href='/about'>
                <h6 class={(this.props.currpath === '/about') ? 'darknbold' : 'light'}>Person</h6></Nav.Link>
            </Nav>
        </Navbar>
        )
  }
}

export default MyNav;
