import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import SectionTitle from '../SectionTitle.js'
import TitledContent from '../ContentBlock.js'

import Toggle from '../InPageToggle.js'

import CSASplashLogin from './SplashLogin.js'
import DocsColors from './DocsColors.js'
import ExerciseUI from './ExerciseUI.js'

import { Link, animateScroll as scroll } from "react-scroll";

import '../../App.css';

class CSAcademy extends React.Component {
  constructor(props){
        super(props)
        this.state = {
          tabs: ['Exercise interface', 'Splash + login', 'Docs + colors'],
          tabStates: [ true, false, false ],
        }
        this.handleClick = this.handleClick.bind(this)
      }
      
  handleClick(i){
        let newTabStates = [ false, false, false ]
        newTabStates[i] = true
        this.setState({
            tabStates: newTabStates
        })
      }

  render(){
    let page = <ExerciseUI/>
    if (this.state.tabStates[1]) {
        page = <CSASplashLogin/>
    } else if (this.state.tabStates[2]) {
        page = <DocsColors/>
    }

    return (
        <div class='pt-5'>
            <SectionTitle name='CMU CS Academy'></SectionTitle>
            <TitledContent title='Description'
                           body= 'CMU CS Academy is an interactive online high 
                                 school computer science curriculum. As a member 
                                 of the UX Design team and as the current team lead, 
                                 we have worked many areas of the interface ranging 
                                 from new accessibility features to new colors and 
                                 visual style. On this page you can find our work 
                                 on the splash page, coding library documentation, 
                                 and our user’s programming exercise interface.'></TitledContent>

            <TitledContent title='Tools + Skills'
                           body='Figma, Procreate, User Testing'></TitledContent>

            <TitledContent title='Duration'
                           body='July 2019 - Present'></TitledContent>
            
            <div>
            <Toggle tabs = {this.state.tabs}
                    break={'bottom'}
                    tabStates={this.state.tabStates}
                    onClick={i => this.handleClick(i)}/>
            {page}
            <Toggle tabs = {this.state.tabs}
                    break={'top'}
                    tabStates={this.state.tabStates}
                    onClick={i => this.handleClick(i)}/>
            </div>       
        </div>
    )
  }
}

export default CSAcademy;