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
            nameIsJanet : true
          }
      }

    render(){
        return(
            <div>
                <div class="list-group side-nav">
                    <div id='name'>
                        <a class="list-group-item list-group-item-action no-border-important" 
                           href="#intro" onClick={scroll.scrollToTop()}>
                            Janet Peng
                        </a>
                    </div>

                    <div class="border-left border-dark">
                        <a class="list-group-item list-group-item-action no-border-important" 
                           href="#work">
                            Work
                        </a>
                    </div>

                    <div class="border-left border-dark">
                        <a class="list-group-item list-group-item-action no-border-important" 
                           href="#play">
                            Play
                        </a>
                    </div>

                    <div class="border-left border-dark">
                        <a class="list-group-item list-group-item-action no-border-important" 
                           href="#about">
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