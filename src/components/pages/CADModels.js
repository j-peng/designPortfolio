import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import TitledContent from '../ContentBlock.js'
import {SectionTitle, ContentBlock, Image, ImageLibrary, Divider, MultiImages, PDF,
        Spacer, SectionTitleWithBack} from '../ContentBlock.js'
import Toggle from '../InPageToggle.js'

import '../../App.css';

class CAD extends React.Component {
  constructor(props){
        super(props)
        
      }  
    
    render(){

      return (
          <div class='pt-4'>
            <SectionTitleWithBack name='CAD Modelling and Rendering'
                                  page='/play'/>
            <TitledContent title='Description'
                            body= "This page contains a selection 3D models, prints, and renderings."></TitledContent>
            <TitledContent title='Tools + Skills'
                           body='SolidWorks, KeyShot, 3D Printing'></TitledContent>

            <Spacer size={2}/>
            <Divider size={8}/>

            <MultiImages imageList={ [ require("../media/chess_render_1.jpg"), 
                                       require("../media/chess_render_2.jpg") ] }
                                   caption= {<p>Rendering of design from <a class='link' target= '/blank' href='/chesssets'>this project</a></p>}
                                   size={9}
                                   altTextList={ ['', '' ] }/>

            <Spacer size={2}/>
            <Divider size={8}/>
            
            <MultiImages imageList={ [ require("../media/imager_0.jpg"), 
                                       require("../media/imager_4.jpg") ] }
                                   caption= 'Pin hole camera render'
                                   size={8}
                                   altTextList={ ['', '', ''] }/>

            <Image image={require("../media/imager_interaction.gif")}
                          size={6}
                          caption={'KeyShot animation of pin hole camera interaction'}
                          altText={''}/>


            <ImageLibrary imageList={[ require("../media/imager_2.JPG"),
                                           require("../media/imager_1.JPG") ]}
                          size={4}
                          captionList={[ 'Closed 3D printed imager hanging',
                                         'Imager open with brass pin hole inserted' ]}
                          altTextList={[ '', '' ]}/>

            <Spacer size={2}/>
            <Divider size={8}/>
            <Image image={require("../media/cover_cadmodelling.jpg")}
                          size={8}
                          caption={'Renders of designed artifacts'}
                          altText={''}/>
            <MultiImages imageList={ [ require("../media/afterlife_2.jpg"), 
                                       require("../media/afterlife_3.jpg"),
                                       require("../media/afterlife_4.jpg"), ] }
                                   caption= 'Individual renders of artifacts'
                                   size={6}
                                   altTextList={ ['', '', '' ] }/>

            <Spacer size={2}/>
            <Divider size={8}/>
            <MultiImages imageList={ [ require("../media/tube_1.jpg"), 
                                       require("../media/tube_2.jpg") ] }
                                   caption= 'Repaired dryer vent tube'
                                   size={8}
                                   altTextList={ ['', '' ] }/>
            <Image image={require("../media/tube_model_1.jpg")}
                          size={6}
                          caption={'KeyShot rendering of SolidWorks model used to print parts'}
                          altText={''}/>
  
          </div>
          
      )
    }
}

export default CAD;