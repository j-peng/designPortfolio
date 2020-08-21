import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import {Spacer} from './ContentBlock.js'

import { Link, animateScroll as scroll } from "react-scroll";

import '../App.css';

class Toggle extends React.Component {
    render(){
        const line = <hr class='soft-break'></hr>
        const empty = <div></div>
        let top = empty
        let bottom = empty
        if (this.props.break === 'top') {top = line}
        else if (this.props.break === 'bottom') {bottom = line}

        let classList = Array(this.props.tabs.length).fill('')

        for (let i=0; i < this.props.tabs.length; i++) {
            if (this.props.tabStates[i]){ classList[i] = 'darknbold'}
        }
        
        let middle = Array()

        for (let i=0; i < this.props.tabs.length; i++) {
            middle.push(
                <Link activeClass="active" to="top-tabs" spy={true} smooth={true} duration={800}> 
                    <a onClick = {() => this.props.onClick(i)}
                       class ={'tab-button ' + classList[i]}>{this.props.tabs[i]}</a>
                </Link>
            )
          }

        return (
        <div>
            <Container>
                <Row>
                    <Col md={2}></Col>

                    <Col md={8}>
                        <div class='pt-5' name='top-tabs'>
                        <Spacer size={2}/>
                        {top}
                        {middle}
                        {bottom}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        )
    }
}

export default Toggle;