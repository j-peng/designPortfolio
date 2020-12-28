import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import TitledContent from '../ContentBlock.js'
import {SectionTitle, ContentBlock, Image, ImageLibrary, Divider, MultiImages, PDF,
        Spacer, SectionTitleWithBack} from '../ContentBlock.js'
import Toggle from '../InPageToggle.js'

import '../../App.css';

class Sketchbook extends React.Component {
  constructor(props){
        super(props)
        
      }  
    
    render(){

      return (
          <div class='pt-4'>
            <SectionTitleWithBack name='Drawings + Sketchbook'
                                  page='/play'/>
            <TitledContent title='Description'
                            body= "Miscellaneous drawings and doodles."></TitledContent>
            <TitledContent title='Tools + Skills'
                           body='Pen, Marker, Procreate, Photoshop'></TitledContent>

            <ImageLibrary imageList={[ require("../media/drawing_hands.jpg"),
                                       require("../media/drawing_3dprinter.jpg"),
                                       require("../media/drawing_drillpress.jpg"),
                                       require("../media/drawing_illustration_people.jpg"),
                                       require("../media/drawing_houses.jpg"),
                                      ]}
                                      size={6}
                                      captionList={[ 'hands', 
                                                     'spread about 3D printing', 
                                                     'spread about the drill press', 
                                                     'people illustrations', 
                                                     'houses']}
                                      altTextList={[ '', '', '' ]}/>

  
          </div>
      )
    }
}

export default Sketchbook;