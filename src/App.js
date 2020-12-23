import React from 'react';
import Home from './components/Home.js';
import Play from './components/Play.js';
import About from './components/About.js';

import Footer from './components/Footer.js'
import MyNav from './components/Navbar.js'

import FoodExperience from './components/pages/SnackExperience.js'
import ChessSet from './components/pages/ChessSets.js'
import PersonalSafety from './components/pages/PersonalSafety.js'
import CSAcademy from './components/pages/CSAcademy.js'
import FlowformSpatula from './components/pages/Flowform.js'
import NOCnSOS from './components/pages/NOCnSOS.js'
import BookTable from './components/pages/BookTable.js'

import Semantics from './components/pages/Semantics.js'
import SingleSliceToaster from './components/pages/Toaster.js'


import PyProjects from './components/pages/Python.js'
import CSAContent from './components/pages/CSAContent.js'
import CSAIllustration from './components/pages/CSAIllustration.js'
import HeartDecisions from './components/pages/HeartDecisions.js'
import GraphicDesign from './components/pages/GraphicDesign.js'
import CAD from './components/pages/CADModels.js'
import Sketchbook from './components/pages/Drawings.js'
import HTAM from './components/pages/HTAM.js'


import ScrollToTop from './components/ScrollToTop.js'

import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <MyNav currpath={window.location.pathname}/>
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
          <Route path="/flowform">
            <ScrollToTop/>
            <FlowformSpatula/>
          </Route>
          <Route path="/booktable">
            <ScrollToTop/>
            <BookTable/>
          </Route>
          <Route path="/chesssets">
            <ScrollToTop/>
            <ChessSet/>
          </Route>
          <Route path="/snackexperience">
            <ScrollToTop/>
            <FoodExperience/>
          </Route>
          <Route path="/safety">
            <ScrollToTop/>
            <PersonalSafety/>
          </Route>
          {/* <Route path="/toaster">
            <ScrollToTop/>
            <SingleSliceToaster/>
          </Route> */}
          {/* <Route path="/semantics">
            <ScrollToTop/>
            <Semantics/>
          </Route> */}
          <Route path="/csacademy">
            <ScrollToTop/>
            <CSAcademy/>
          </Route>
          <Route path="/NOC+SOS">
            <ScrollToTop/>
            <NOCnSOS/>
          </Route>

          {/* play */}
          <Route path="/python">
            <ScrollToTop/>
            <PyProjects/>
          </Route>
          <Route path="/CSAcontent">
            <ScrollToTop/>
            <CSAContent/>
          </Route>
          <Route path='/CSAillustration'>
            <ScrollToTop/>
            <CSAIllustration/>
          </Route>
          <Route path='/HeartDecisions'>
            <ScrollToTop/>
            <HeartDecisions/>
          </Route>
          <Route path='/CAD'>
            <ScrollToTop/>
            <CAD/>
          </Route>
          <Route path='/drawing'>
            <ScrollToTop/>
            <Sketchbook/>
          </Route>
          <Route path='/DFM+DFA'>
            <ScrollToTop/>
            <HTAM/>
          </Route>
          <Route path='/graphics'>
            <ScrollToTop/>
            <GraphicDesign/>
          </Route>

      </Switch>

    <Footer/>
    </Router>
  );
}

export default App;
