import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import SectionTitle from '../SectionTitle.js'
import TitledContent from '../ContentBlock.js'
import {ContentBlock, Image, ImageLibrary, Divider} from '../ContentBlock.js'

import '../../App.css';

class FlowformSpatula extends React.Component {
  render(){
    return (
        <div class='pt-5'>
            <SectionTitle name='Flowform wood spatula'></SectionTitle>
            <TitledContent title='Description'
                           body= 'Design and manufacture a beech wood spatula made from one 
                                  block of wood (dimensions: 12" x 4" x 2"). Use 4 cuts on 
                                  a band saw and then shape and smooth by sanding using various 
                                  sanders (belt, disc, spindle,) and by hand. Design a spatula 
                                  to fit your personal grip and function. This spatula is 
                                  designed to scrape, flip, and gently mix or incorporate food 
                                  while cooking in a pan. Intended use for stir-frying. 
                                  Designed to fit the right hand.'></TitledContent>

            <TitledContent title='Tools + Skills'
                           body='Beech wood, Band saw, Sanders'></TitledContent>

            <TitledContent title='Duration'
                           body='January 2020'></TitledContent>
            
            <TitledContent title='Course'
                           body='Product Design Studio II: Design for Interactions'></TitledContent>
            <div class='pt-3'>
            <Image image={require("../media/spatula_final_1.jpg")}
                   size={6}
                   caption={'3/4 view of flowform spatula'}
                   altText={'Wooden spatula lying flat on a white background'}/>
            <Image image={require("../media/spatula_final_2.jpg")}
                   size={6}
                   caption={'Flowform spatula on side'}
                   altText={'Wooden spatula lying sidewats on a white background'}/>
            <Image image={require("../media/spatula_final_3.jpg")}
                   size={6}
                   caption={'Spatula in use in hand'}
                   altText={'Wooden spatula held in a pan in a kitchen'}/>
            </div>

            <Divider size={8}/>
            <TitledContent title='Process'
                           body='I started by researching different types of spatulas, 
                                what they were used for, how they fit the hand and were 
                                gripped differently. I also took some time to familiarize
                                myself with beechwood and the block of wood we were given
                                for the project'/>
            <Image image={require("../media/spatula_process_1.jpg")}
                   size={4}
                   caption={'Sketchbook page'}
                   altText={''}/>

            <ContentBlock body='Initially, I worked with the profiles or orthographic views
                                of the spatula. This allowed me to get ideas down quickly and
                                visualize how I would cut the shape using the band saw.
                                I enjoyed working quickly, sketching out curves to get a feel
                                for how the object would "move". I tried to let smooth
                                drawing motions guide my curves so that they felt organic.
                                After some experimentation with profiles, I returned to thinking
                                about the purpose and grip of my spatula. In the end, I decided
                                on something to help flip and stir stir-fry. I also wanted the handle
                                to be large and thick for gripping.'/>

            <ImageLibrary imageList={[ require("../media/spatula_process_2.jpg"),
                                   require("../media/spatula_process_3.jpg") ]}
                          size={6}
                          captionList={[ 'Spatula side profiles', 'Sketchbook page' ]}
                          altTextList={[ '8 figures constructed from roughly drawn curves representing the side view of a spatula', 
                                         'Drawing of a hand gripping the spatula, and doing motions such as flipping and stirring']}/>
            
            <ContentBlock body=''/>

            <ImageLibrary imageList={[ require("../media/spatula_process_4.JPG"),
                                   require("../media/spatula_process_5.JPG") ]}
                          size={4}
                          captionList={[ '', '' ]}
                          altTextList={[ 'Three quarter view of first foam prototype', 
                                         'Orthographic view of first foam prototype']}/>

            <ImageLibrary imageList={[ require("../media/spatula_process_7.JPG"),
                                   require("../media/spatula_process_8.JPG") ]}
                          size={4}
                          captionList={[ '', '' ]}
                          altTextList={[ 'Three quarter view of second foam prototype', 
                                         'Orthographic view of second foam prototype']}/>

        </div>
    )
  }
}

export default FlowformSpatula;
