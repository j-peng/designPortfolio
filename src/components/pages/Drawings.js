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
                            body= "i draw"></TitledContent>
            <TitledContent title='Tools + Skills'
                           body='SolidWorks, KeyShot'></TitledContent>

  
          </div>
      )
    }
}

export default Sketchbook;