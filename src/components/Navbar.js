import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import '../App.css';

class MyNav extends React.Component {
    render(){
        return (
            <Navbar bg="light" variant="light" sticky="top" className='pl-4'>
            <Navbar.Brand href='/'><h3>Janet Peng</h3></Navbar.Brand>
            <Nav className="justify-content-end">
            <Nav.Link href='/'>
                <h6 class={(this.props.currpath === '/') ? 'darknbold' : ''}>Home</h6></Nav.Link>
            <Nav.Link href='/play'>
                <h6 class={(this.props.currpath === '/play') ? 'darknbold' : ''}>Play</h6></Nav.Link>
            <Nav.Link href='/about'>
                <h6 class={(this.props.currpath === '/about') ? 'darknbold' : ''}>About</h6></Nav.Link>
            </Nav>
        </Navbar>
        )
  }
}

export default MyNav;
