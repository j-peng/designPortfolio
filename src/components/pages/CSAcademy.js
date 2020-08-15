import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import SectionTitle from '../SectionTitle.js'
import TitledContent from '../ContentBlock.js'

import CSASplashLogin from './SplashLogin.js'
import DocsColors from './DocsColors.js'
import ExerciseUI from './ExerciseUI.js'

import { Link, animateScroll as scroll } from "react-scroll";

import '../../App.css';

class CSAcademy extends React.Component {
  constructor(props){
        super(props)
        this.state = {
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
            
            <div class='pt-5' name='top-tabs'>
            <CSAToggle onClick={i => this.handleClick(i)}
                       break={2}
                       tabStates={this.state.tabStates}/>
            {page}
            <CSAToggle onClick={i => this.handleClick(i)}
                       break={1}
                       tabStates={this.state.tabStates}/>
            
        </div>       
        </div>
    )
  }
}


class CSAToggle extends React.Component {
    render(){
        const line = <hr class='soft-break'></hr>
        const empty = <div></div>
        let top = empty
        let bottom = empty
        if (this.props.break === 1) {top = line}
        else if (this.props.break === 2) {bottom = line}

        let var1 = 'light'
        let var2 = 'light'
        let var3 = 'light'

        if (this.props.tabStates[0]){ var1 = 'my-dark'}
        else if (this.props.tabStates[1]){ var2 = 'my-dark'}
        else { var3 = 'my-dark'}

        return (
        <div>
            <Container>
                <Row>
                    <Col md={2}></Col>

                    <Col md={8}>
                        {top}

                        <Link activeClass="active" to="top-tabs" spy={true} smooth={true} duration={800}> 
                            <Button onClick = {() => this.props.onClick(0)}
                                    className='tab-button'
                                    variant={var1}>Exercise Interface</Button>
                        </Link>

                        <Link activeClass="active" to="top-tabs" spy={true} smooth={true} duration={1000}> 
                            <Button onClick = {() => this.props.onClick(1)} 
                                    className='tab-button'
                                    variant={var2}>Splash Page + Login</Button>
                        </Link>

                        <Link activeClass="active" to="top-tabs" spy={true} smooth={true} duration={800}> 
                            <Button onClick = {() => this.props.onClick(2)}
                                    className='tab-button'
                                    variant={var3}>Docs + Colors</Button>
                        </Link>

                        {bottom}
                    </Col>
                </Row>
            </Container>
        </div>
        )
    }
}

export default CSAcademy;