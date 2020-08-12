import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { Link, animateScroll as scroll } from "react-scroll";

class NavBar extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            nameIsJanet : true,
            currSection: null,
            navActive: [ false, false, false ]
          }
        this.handleNavClick = this.handleNavClick.bind(this)
        this.handleScroll = this.handleScroll.bind(this)
      }

    handleNavClick(i){
        let newActiveList = [ false, false, false ]
        newActiveList[i] = true
        this.setState ({
            navActive: newActiveList
        })
    }

    handleScroll(){
        console.log(window.pageYOffset)
    }

    render(){
        let workClass = this.state.navActive[1] === true ? '' : ' lo-opacity'
        let playClass = this.state.navActive[2] === true ? '' : ' lo-opacity'
        let aboutClass = this.state.navActive[3] === true ? '' : ' lo-opacity'

        return(
            <div>
                <div class="list-group side-nav">
                    <div id='name-logo'>
                        <a class="list-group-item list-group-item-action no-border-important">
                            <Link activeClass="active" 
                                  to="top" 
                                  spy={true} 
                                  smooth={true} 
                                  duration={800}> 
                                Janet Peng
                            </Link>
                        </a>
                    </div>

                    <div class={'border side-nav' + workClass}>
                        <a class="list-group-item list-group-item-action no-border-important">
                            <Link activeClass="active" 
                                  to="work" 
                                  spy={true} 
                                  smooth={true} 
                                  duration={800}
                                  onClick = {()=>this.handleNavClick(1)}> 
                                Work
                            </Link>
                        </a>
                    </div>

                    <div class={'border side-nav' + playClass}>
                        <a class="list-group-item list-group-item-action no-border-important">
                            <Link activeClass="active" 
                                  to="play" 
                                  spy={true} 
                                  smooth={true} 
                                  duration={800}
                                  onClick = {()=>this.handleNavClick(2)}> 
                                Play
                            </Link>
                        </a>
                    </div>

                    <div class={'border side-nav' + aboutClass}>
                        <a class="list-group-item list-group-item-action no-border-important" >
                            <Link activeClass="active" 
                                  to="about" 
                                  spy={true} 
                                  smooth={true} 
                                  duration={800}
                                  onClick = {()=>this.handleNavClick(3)}> 
                                About Me 
                            </Link>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NavBar;