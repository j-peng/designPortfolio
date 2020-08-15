import React from 'react';
import Home from './components/Home.js';
import Play from './components/Play.js';
import About from './components/About.js';

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import Footer from './components/Footer.js'

import CSAcademy from './components/pages/CSAcademy.js'
import FlowformSpatula from './components/pages/Flowform.js'
import PyProjects from './components/pages/Python.js'
import Semantics from './components/pages/Semantics.js'

import ScrollToTop from './components/ScrollToTop.js'

import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar bg="light" variant="light" sticky="top" className='pl-4'>
        <Navbar.Brand href="#home"><h3>Janet Peng</h3></Navbar.Brand>
        <Nav className="justify-content-end">
          <Nav.Link href='/' ><h6>Home</h6></Nav.Link>
          <Nav.Link href='/play'><h6>Play</h6></Nav.Link>
          <Nav.Link href='/about'><h6>About</h6></Nav.Link>
        </Nav>
      </Navbar>

      <Switch>
          <Route exact path="/">
            <ScrollToTop/>
            <Home/>
          </Route>
          <Route path="/play">
            <ScrollToTop/>
            <Play/>
          </Route>
          <Route path="/about">
            <ScrollToTop/>
            <About/>
          </Route>
          
          {/* work */}
          <Route path="/csacademy">
            <ScrollToTop/>
            <CSAcademy/>
          </Route>
          <Route path="/flowform">
            <ScrollToTop/>
            <FlowformSpatula/>
          </Route>
          <Route path="/semantics">
            <ScrollToTop/>
            <Semantics/>
          </Route>

          {/* play */}
          <Route path="/python">
            <ScrollToTop/>
            <PyProjects/>
          </Route>

      </Switch>

    <Footer/>
    </Router>
  );
}

export default App;
