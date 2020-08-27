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
                           body= 'Design and manufacture a spatula made from one 
                                  12" x 4" x 2" block of beech wood. Use 4 cuts on 
                                  a band saw and then shape and smooth by sanding using various 
                                  sanders (belt, disc, spindle) and by hand. Design a spatula 
                                  to fit your personal grip and function.'></TitledContent>
            <ContentBlock body='This spatula is designed to scrape, flip, gently mix, or 
                                incorporate food while cooking in a pan. Intended use 
                                for stir-frying. Designed to fit the right hand.'/>
            
            <TitledContent title='Tools + Skills'
                           body='Beech wood, Band saw, Sanders'></TitledContent>

            <TitledContent title='Duration'
                           body='January 2020'></TitledContent>
            
            <TitledContent title='Course'
                           body='Product Design Studio II: Design for Interactions'></TitledContent>
            
            <div class='pt-3'>
            <ImageLibrary imageList={[ require("../media/spatula_final_1.jpg"),
                                       require("../media/spatula_final_2.jpg"),
                                       require("../media/spatula_final_3.jpg") ]}
                          size={6}
                          captionList={[ '3/4 view of flowform spatula', 
                                         'Flowform spatula on side',
                                         'Spatula in use in hand' ]}
                          altTextList={[ 'Wooden spatula lying flat on a white background', 
                                         'Wooden spatula lying sideways on a white background',
                                         'Wooden spatula held in a pan in a kitchen' ]}/>
            </div>

            <Divider size={8}/>
            <TitledContent title='Process'
                           body='I started by researching different types of spatulas, 
                                 their use, how they fit the hand, and how they are
                                 gripped. I also took some time to familiarize
                                 myself with beech wood and the block of wood we were given
                                 for the project.'/>
            <Image image={require("../media/spatula_process_1.jpg")}
                   size={4}
                   caption={'Sketchbook page'}
                   altText={''}/>

            <ContentBlock body="Initially, I worked with the profiles or orthographic views
                                of the spatula. This allowed me to get ideas down and
                                visualize how I would cut the shape using the band saw.
                                I enjoyed working quickly, sketching out curves to feel
                                the object's movement. I let smooth
                                drawing motions guide my curves so that they felt organic.
                                After some experimentation with profiles, I returned to thinking
                                about the purpose and grip of my spatula. In the end, I decided
                                to make a spatula to help make stir-fry. I also wanted the handle
                                to be large and thick for gripping."/>

            <ImageLibrary imageList={[ require("../media/spatula_process_2.jpg"),
                                   require("../media/spatula_process_3.jpg") ]}
                          size={6}
                          captionList={[ 'Spatula side profiles', 'Sketchbook page' ]}
                          altTextList={[ '8 figures constructed from roughly drawn curves representing the side view of a spatula', 
                                         'Drawing of a hand gripping the spatula, and doing motions such as flipping and stirring']}/>
            
            <ContentBlock body='From orthographic views, I transitioned to visualizing 
                                my spatula design through perspctive sketching and 
                                physical prototyping. Using pink foam,
                                I cut out the shape I had designed. I used the band saw to 
                                get a better feel
                                of how cutting the curves felt. I then finished the model with sand paper.
                                From this first prototype, I realized that the neck of the spatula
                                had to be wider in order for the object to feel more stable. I also realized
                                that the head of the spatula could get a lot thinner without feeling
                                too delicate or brittle. I took the time to storyboard the
                                manufacturing process to record how I planned to make my cuts and 
                                which sanders I would use in the future.
                                '/>

            <ImageLibrary imageList={[ require("../media/spatula_process_4.JPG"),
                                   require("../media/spatula_process_5.JPG") ]}
                          size={4}
                          captionList={[ 'First foam prototype', 'First foam prototype' ]}
                          altTextList={[ 'Three quarter view of first foam prototype', 
                                         'Orthographic view of first foam prototype']}/>
              

            <Image image={require("../media/spatula_process_6.jpg")}
                            size={8}
                            caption={'Manufacturing process storyrboard'}
                            altText='Illustration showing the process of creating a 
                            spatula by staring with a block of wood, cutting a rough shape on a 
                            band saw, and sanding it down with various sanders.'/>

            <ImageLibrary imageList={[ require("../media/spatula_process_7.JPG"),
                                   require("../media/spatula_process_8.JPG") ]}
                          size={4}
                          captionList={[ 'Second foam prototype', 'Second foam prototype' ]}
                          altTextList={[ 'Three quarter view of second foam prototype', 
                                         'Orthographic view of second foam prototype']}/>

              <ContentBlock body='Using what I had discovered through my first prototype, I began
                                  sketching out adjustments I wanted to make to my curves. After some
                                  sketching as well as projecting my edits into perspective
                                  to better understand the form, I cut a final prototype. 
                                  From my final foam model to my
                                  wooden spatula, I wanted to exaggerate the curves further since I 
                                  thought the wood would be able to handle a more prominent 
                                  arc in the handle and neck. After making some final tweaks to the
                                  orthographic views, I used Illustrator and a laser cutter
                                  to create templates for the initial band saw cut lines. I transfered the lines
                                  onto the block of wood and began the manufacturing process.'/>

            <Image image={require("../media/spatula_process_9.jpg")}
                            size={4}
                            caption={'Final orthographic views used for templates'}
                            altText={''}/>

        </div>
    )
  }
}

export default FlowformSpatula;
