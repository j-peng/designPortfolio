import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import SectionTitle from '../SectionTitle.js'
import TitledContent from '../ContentBlock.js'
import {ContentBlock, Image, ImageLibrary, Divider, YTVid} from '../ContentBlock.js'

import { Link, animateScroll as scroll } from "react-scroll";

import '../../App.css';

class Semantics extends React.Component {
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
    let page = <WoodNRubber/>
    if (this.state.tabStates[1]) {
        page = <WaterVessel/>
    } else if (this.state.tabStates[2]) {
        page = <SimNDiff/>
    }

    return (
        <div class='pt-5'>
            <SectionTitle name='Semantics of Form'></SectionTitle>
            <TitledContent title='Description'
                           body= 'Explore the semantics of form and how they encourage 
                                  interaction through hand crafted models and various 
                                  foam, clay, wood explorations. Projects include a 
                                  working wood and rubber mechanism and relating form, 
                                  and a water vessel designed inspired by the randomly 
                                  chosen words “heavy, soft, and dynamic”.'></TitledContent>

            <TitledContent title='Tools + Skills'
                           body='Foam, gesso, spackle, paint'></TitledContent>

            <TitledContent title='Duration'
                           body='November - December 2019'></TitledContent>
            
            <TitledContent title='Course'
                           body= 'Product Studio I:  Understanding Form & Context'/>
            
            <div class='pt-5' name='top-tabs'>
            <SemToggle onClick={i => this.handleClick(i)}
                       break={2}
                       tabStates={this.state.tabStates}/>
            {page}
            <SemToggle onClick={i => this.handleClick(i)}
                       break={1}
                       tabStates={this.state.tabStates}/>
            
        </div>       
        </div>
    )
  }
}

class WoodNRubber extends React.Component {
    render(){
        return(
            <div>
                <SectionTitle name='Wood and Rubber'></SectionTitle>
                <TitledContent title='Description'
                               body="Design a working wood and rubber mechanism and accompanying 
                                    form. Both models are intended to be held, gripped, 
                                    and moved in the same way. The working model 
                                    (wood and rubber) shows how the mechanism would work, 
                                    the form model (foam) shows how the object would look and 
                                    feel. My mechanism's interaction is a subtle squeezing 
                                    motion, potentially for a handheld alert system. 
                                    The working model is made out of balsa wood, 
                                    rubber bands, and tacky glue. 
                                    Form model is made with foam and finished with 
                                    gesso and spackle. Both completely hand crafted, 
                                    shaped, and smoothed using sandpaper."/>
                <TitledContent title='Duration'
                               body= '4 weeks'/>

                <ImageLibrary imageList={[ require("../media/woodnrubber_final_1.JPG"),
                                           require("../media/woodnrubber_final_2.JPG"),
                                           require("../media/woodnrubber_final_3.JPG"),
                                           require("../media/woodnrubber_final_4.JPG") ]}
                          size={6}
                          captionList={[ 'Working and form models', 
                                         'Form model front 3/4 view', 'Form model back 3/4 view', 
                                         'Wood and rubber working model and grip' ]}
                          altTextList={[ '', '', '', '' ]}/>

                <YTVid ytid='rsh5FJ4np0E' size={6} caption='Form model interaction'/>
                <YTVid ytid='_ADMnL9W-Ek' size={6} caption='Working model interaction'/>

                <Divider size={6}/>
                <TitledContent title='Process'
                               body= ''/>
                <YTVid ytid='jgTWmM7sVBc' size={6} caption='Process models'/>
                
            </div>
        )
    }
}

class WaterVessel extends React.Component {
    render(){
        return(
            <div>
                <SectionTitle name='1.5L Water Vessel'></SectionTitle>
                <TitledContent title='Description'
                               body= 'Design a container to hold at most 1.5L of liquid
                                      inspired by three randomly selected words. Consider
                                      how liquid is collected, moved, and dispensed from
                                      the vessel. The words used are heavy, soft, dynamic.
                                      Liquid enters from the top and is dispensed using the pump.'/>
                <TitledContent title='Duration'
                               body= '3 weeks'/>

                <YTVid ytid='knT_hYtd51E' size={6}/>

                <Divider size={6}/>

                <TitledContent title='Process'
                               body= ''/>
                <YTVid ytid='3sbLJrb2fJQ' size={6}/>
            </div>
        )
    }
}

class SimNDiff extends React.Component {
    render(){
        return(
            <div>
                <SectionTitle name='Similar But Different'></SectionTitle>
                <TitledContent title='Description'
                               body= 'Craft primitive forms with various materials that assist 
                                      the same interaction. 
                                      Adapt the proportions and size of the different shapes 
                                      and material so that the interaction is similar
                                      slightly different.'/>
                <TitledContent title='Duration'
                               body= '2 weeks'/>

                <Divider size={6}/>

                <TitledContent title='Process'
                               body= ''/>
            </div>
        )
    }
}

class SemToggle extends React.Component {
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
                                    variant={var1}>Wood and Rubber</Button>
                        </Link>

                        <Link activeClass="active" to="top-tabs" spy={true} smooth={true} duration={1000}> 
                            <Button onClick = {() => this.props.onClick(1)} 
                                    className='tab-button'
                                    variant={var2}>Water Vessel</Button>
                        </Link>

                        <Link activeClass="active" to="top-tabs" spy={true} smooth={true} duration={800}> 
                            <Button onClick = {() => this.props.onClick(2)}
                                    className='tab-button'
                                    variant={var3}>Similar but Different</Button>
                        </Link>

                        {bottom}
                    </Col>
                </Row>
            </Container>
        </div>
        )
    }
}

export default Semantics;