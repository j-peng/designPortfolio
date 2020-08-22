import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import SectionTitle from '../SectionTitle.js'
import TitledContent from '../ContentBlock.js'
import {ContentBlock, Image, ImageLibrary, Divider, YTVid, Spacer, MultiImages} from '../ContentBlock.js'
import Toggle from '../InPageToggle.js'

import { Link, animateScroll as scroll } from "react-scroll";

import '../../App.css';

class Semantics extends React.Component {
  constructor(props){
        super(props)
        this.state = {
          tabs: ['Wood and rubber', 'Water vessel', 'Similar but different'],
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
                <Spacer size={2}/>
                <ImageLibrary imageList={[ require("../media/woodnrubber_final_1.JPG"),
                                           require("../media/woodnrubber_final_2.JPG"),
                                           require("../media/woodnrubber_final_3.JPG"),
                                           require("../media/woodnrubber_final_4.JPG") ]}
                          size={6}
                          captionList={[ 'Working and form models', 
                                         'Form model front 3/4 view', 'Form model back 3/4 view', 
                                         'Wood and rubber working model and grip' ]}
                          altTextList={[ '', '', '', '' ]}/>

                <YTVid ytid='rsh5FJ4np0E' size={4} caption='Form model interaction'/>
                <YTVid ytid='_ADMnL9W-Ek' size={4} caption='Working model interaction'/>

                <Divider size={6}/>
                <TitledContent title='Process'
                               body= 'I started by familiarizing myself with the different
                               amounts of stretch and tension different rubber bands
                               afforded. With more information about the behaviors of the 
                               rubber bands provided, I began exploring some possible 
                               interactions throuh sketching and rapid prototyping with 
                               foam core. I considered pushing, pulling, squeezing, twisting,
                               slapping, chopping, and a combination of them.
                               After, I began making models out of wood to familiarize
                               myself with the material. The interaction I chose
                               was one of the simplist of all the interactions I experimented with.
                               This was because it game the most satisfying effect when completed.
                               I then finalized my working model and began sketching plans for the
                               form. Most of my initial ideation was based off of a piece of clay
                               I squeezed in my deisred grip. That form was inspired by
                               the proportions of the clay and the dimensions of my fingers.
                               From sketches I made quick physical models out of blue foam
                               and floral foam. I finished multiple blue foam models with paint
                               and spackle to get a better sense of how long the process took
                               and how it effected the form of the model.'/>
                <Spacer size={2}/>
                <YTVid ytid='jgTWmM7sVBc' size={4} caption='Process models'/>
                <ContentBlock body='One decision I struggled with a lot was the design of the 
                "buttons", or where the fingers gripped the artifact.
                I wanted to keep them subtle so that the focused was kept on the triangular
                body but I also wanted them to call enough attention to tell the user to
                hold the object in that way. I also struggled with visual cues to show which
                side was the "top" and the "bottom". Ultimately, the buttons became soft indents
                on the sides that followed the curve of the form and the roundedness and flatness
                of the largest surfaces demonstrated which was the top and bottom.'/>
                <MultiImages imageList={[ require("../media/woodnrubber_process_1.jpg"), 
                                          require("../media/woodnrubber_process_2.jpg") ]}
                             size={8}
                             caption='Illustrator drawings of the form model'
                             altTextList={ ['', '', ''] }/>
            </div>
        )
    }
}

class WaterVessel extends React.Component {
    render(){
        return(
            <div>
                <SectionTitle name='Water Vessel'></SectionTitle>
                <TitledContent title='Description'
                               body= 'Design a container to hold at most 1.5L of liquid
                                      inspired by three randomly selected words:
                                      heavy, soft, dynamic. Consider how liquid is collected, 
                                      moved, and dispensed from the vessel.
                                      Liquid enters from the top and is dispensed using the pump.'/>
                <TitledContent title='Duration'
                               body= '3 weeks'/>

                <ImageLibrary imageList={[ require("../media/watervessel_final_1.JPG"),
                                           require("../media/watervessel_final_2.JPG"),
                                           require("../media/watervessel_final_3.JPG") ]}
                          size={6}
                          captionList={[ '3/4 view from front', 
                                         '3/4 view from back', 'Vessel in use' ]}
                          altTextList={[ '', '', '' ]}/>

                <Spacer size={2}/>
                <YTVid ytid='knT_hYtd51E' size={4} caption='Vessel form and interactions'/>

                <Divider size={6}/>

                <TitledContent title='Process'
                               body= 'I started the process by brainstorming the kinds of interactions
                               I associated with my words. From there, I began turning the interactions
                               into forms that I thought would encourage those interactions. Through
                               sketching and rough rapid prototyping with scaled down foam models, I
                               planned out my final design. Using illustrator, I made templates
                               to help me cut and shape my water vessel model.'/>

                <MultiImages imageList={[ require("../media/watervessel_process_1.jpg"), 
                                          require("../media/watervessel_process_2.jpg"),
                                          require("../media/watervessel_process_3.jpg") ]}
                             size={9}
                             caption='Sketchbook pages'
                             altTextList={ ['', '', ''] }/>

                <Spacer size={2}/>
                <YTVid ytid='3sbLJrb2fJQ' size={4}/>

                <MultiImages imageList={[ require("../media/watervessel_process_4.jpg"), 
                                          require("../media/watervessel_process_5.jpg") ]}
                             size={8}
                             caption='Illustrator drawings of form and interaction'
                             altTextList={ ['', ''] }/>

            </div>
        )
    }
}

class SimNDiff extends React.Component {
    render(){
        return(
            <div>
                <SectionTitle name='Similar but Different'></SectionTitle>
                <TitledContent title='Description'
                               body= 'Craft primitive forms with various materials that assist 
                                      the same interaction. 
                                      Adapt the proportions and size of the different shapes 
                                      and material so that the interaction is similar
                                      slightly different.'/>
                <TitledContent title='Duration'
                               body= '2 weeks'/>
                
                <MultiImages imageList={[ require("../media/simbutdiff_final_1.JPG"), 
                                          require("../media/simbutdiff_final_2.JPG") ]}
                             size={8}
                             caption='Left to Right: squeezed clay, foam core rectangular prism, blue foam cylinder, clay ellipsoid'
                             altTextList={ ['', ''] }/>
                <Spacer size={3}/>
                <YTVid ytid='nYtxseaR3SU' size={4} caption='Interactions with models'/>
            </div>
        )
    }
}

export default Semantics;