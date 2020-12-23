import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import TitledContent from '../ContentBlock.js'
import {ContentBlock, Image, ImageLibrary, Divider, YTVid, PDF, Spacer, MultiImages,
        SectionTitleWithBack, SectionTitle} from '../ContentBlock.js'
import Toggle from '../InPageToggle.js'

import { Link, animateScroll as scroll } from "react-scroll";

import '../../App.css';

class HTAM extends React.Component {
  constructor(props){
        super(props)
        this.state = {
          tabs: ['Tear Down', 'Visualizations'],
          tabStates: [ true, false ],
        }
        this.handleClick = this.handleClick.bind(this)
      }
      
  handleClick(i){
        let newTabStates = [ false, false ]
        newTabStates[i] = true
        this.setState({
            tabStates: newTabStates
        })
      }

  render(){
    let page = <TearDown/>
    if (this.state.tabStates[1]) {
        page = <Drawings/>
    }

    return (
        <div class='pt-4'>
            <SectionTitleWithBack name='Design for Manufacturing and Assembly'
                                  href='/play'/>

            <TitledContent title='Description'
                           body= 'Explanatory visualizations exploring the manufacturing
                           and assembly process of objects.'></TitledContent>

            <TitledContent title='Duration'
                           body='September - December 2020'></TitledContent>
            
            <TitledContent title='Course'
                           body= 'How Things Are Made'/>
            
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

class TearDown extends React.Component {
    render(){
        return(
            <div>
                <SectionTitle name='Kettle Tear Down'></SectionTitle>
                <TitledContent title='Description'
                               body="Tear down and analyze an object to explain how it was made and assembled, 
                               what materials it is made of, why it is the way it is, and how it can be improved. "/>
                <TitledContent title='Tools + Skills'
                                body='Procreate, InDesign, DFM + DFA'></TitledContent>
                <TitledContent title='Duration'
                               body= '3 weeks'/>
                <Spacer size={2}/>
                <Image image={require("../media/htam_teardown_parts.jpg")}
                          size={6}
                          caption={'Electric kettle part breakdown'}
                          altText={''}/>

                <PDF file={require("../media/htam_teardown.pdf")}
                     size={4} ratio={8.5/5.5} caption='Book explaining history, manufacturing, assembling, and material of an electric kettle'/>
            </div>
        )
    }
}

class Drawings extends React.Component {
    render(){
        return(
            <div>
                <SectionTitle name='Explanatory drawings'></SectionTitle>
                <TitledContent title='Description'
                               body= 'Visualizations explaning how various manufacturing processes work and the kinds 
                                        of products and geometries they make.'/>
                <TitledContent title='Tools + Skills'
                                body='Procreate'></TitledContent>
                
                <ImageLibrary imageList={[ require("../media/htam_bandsaw.jpg"),
                                           require("../media/htam_pressbraking.jpg"),
                                           require("../media/htam_forming.jpg"),
                                           require("../media/htam_casting.jpg") ]}
                          size={6}
                          captionList={[ 'Manufacturing and assembly of a bandsaw, collaborative project with CeCe Liu',
                                         'Explanatory drawing about press braking and how a locker is made',
                                         'Explanatory drawing about tube hydroforming and how a saxophone neck is made',
                                         'Explanatory drawing about investment casting and how a hip prothesis is made' ]}
                          altTextList={[ '', '', '', '' ]}/>

            </div>
        )
    }
}

export default HTAM;