import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import '../App.css';

class MyNav extends React.Component {
    render(){
        return (
            <Navbar bg="light" variant="light" sticky="top" className='pl-4' >
            <Navbar.Brand href='/'>
                <img src={require("./media/logo.png")} 
                     alt="Janet Peng"
                     width="25"/>

            </Navbar.Brand>
            <Nav className="pt-2">
            <Nav.Link href='/#work'>
                <h6 class={(this.props.currpath === '/') ? 'darknbold' : 'light'}>Work</h6></Nav.Link>
            <Nav.Link href='/play'>
                <h6 class={(this.props.currpath === '/play') ? 'darknbold' : 'light'}>Play</h6></Nav.Link>
            <Nav.Link href='/about'>
                <h6 class={(this.props.currpath === '/about') ? 'darknbold' : 'light'}>About</h6></Nav.Link>
            </Nav>
        </Navbar>
        )
  }
}

export default MyNav;
