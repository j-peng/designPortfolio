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
            currSection: null
          }
      }

    render(){
        return(
            <div>
                <div class="list-group side-nav">
                    <div id='name-logo'>
                        <a class="list-group-item list-group-item-action no-border-important">
                            <Link activeClass="active" to="top" spy={true} smooth={true} duration={800}> 
                                Janet Peng
                            </Link>
                        </a>
                    </div>

                    <div class="border side-nav-item">
                        <a class="list-group-item list-group-item-action no-border-important">
                            <Link activeClass="active" to="work" spy={true} smooth={true} duration={800}> 
                                Work
                            </Link>
                        </a>
                    </div>

                    <div class="border side-nav-item">
                        <a class="list-group-item list-group-item-action no-border-important">
                            <Link activeClass="active" to="play" spy={true} smooth={true} duration={800}> 
                                Play
                            </Link>
                        </a>
                    </div>

                    <div class="border side-nav-item">
                        <a class="list-group-item list-group-item-action no-border-important" >
                            <Link activeClass="active" to="about" spy={true} smooth={true} duration={800}> 
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