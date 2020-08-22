import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import SectionTitle from '../SectionTitle.js'
import TitledContent from '../ContentBlock.js'
import {ContentBlock, Image, ImageLibrary, Divider, MultiImages, Spacer} from '../ContentBlock.js'

import '../../App.css';

class CSAContent extends React.Component {
  render(){
    return (
        <div class='pt-5'>
            <SectionTitle name='Computer Science Academy Content'></SectionTitle>
            <TitledContent title='Description'
                           body= 'CMU CS Academy is an interactive online high school 
                           computer science curriculum. As a member of the content
                           development team, I have made many exercises for different curriculums
                           to teach students about programming, art, data visualization, and
                           other computer science applications. This page has a selection
                           of a few of my favorite.'></TitledContent>

            <TitledContent title='Tools + Skills'
                           body='Python'></TitledContent>

            <TitledContent title='Duration'
                           body='January 2020 - Present'></TitledContent>
            
            <MultiImages imageList={[ require("../media/csa_gum.gif"), 
                        require("../media/csa_sunset.gif"),
                        require("../media/csa_urban.gif") ]}
                        size={6}
                        caption="Procedural animations"
                        altTextList={ ['', '', ''] }/>
            <Spacer size={2}/>
            <MultiImages imageList={[ require("../media/csa_poly_1.png"), 
                        require("../media/csa_poly_2.png"),
                        require("../media/csa_poly_3.png") ]}
                        size={6}
                        caption="Procedurally generated geometric forms"
                        altTextList={ ['', '', ''] }/>
            <Spacer size={2}/>
            <MultiImages imageList={[ require("../media/csa_cells_1.png"), 
                        require("../media/csa_cells_2.png"),
                        require("../media/csa_cells_3.png") ]}
                        size={6}
                        caption="Procedurally generated cell pattern"
                        altTextList={ ['', '', ''] }/>
        </div>
    )
  }
}

export default CSAContent;
