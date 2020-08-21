import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import SectionTitle from '../SectionTitle.js'
import TitledContent from '../ContentBlock.js'
import {ContentBlock, Image, ImageLibrary, Divider, MultiImages} from '../ContentBlock.js'

import '../../App.css';

class SingleSliceToaster extends React.Component {
  render(){
    return (
        <div class='pt-5'>
            <SectionTitle name='Single Slice Toaster'></SectionTitle>
            <TitledContent title='Description'
                           body= "Design a single slice toaster inside out. Consider
                                  the interactions, mechanisms, and internal wiring
                                  that creates the action of toasting. Use renderings
                                  to communicate the design and interaction. Do not
                                  use any materials to represent the object. This 
                                  single slice toaster causes the bread to move 
                                  with the user's actions through the knob. 
                                  The bread goes on a journey through the toaster,
                                  entering as bread and emerging as toast.
                                  The user is responisble to driving this evolution from
                                  bread into toast."></TitledContent>

            <TitledContent title='Tools + Skills'
                           body='SolidWorks, KeyShot'></TitledContent>

            <TitledContent title='Duration'
                           body='April 2020'></TitledContent>
            
            <TitledContent title='Course'
                           body='Product Design Studio II: Design for Interactions'></TitledContent>
            <ImageLibrary imageList={[ require("../media/toaster_final_1.jpg"),
                                       require("../media/toaster_final_2.jpg"),
                                       require("../media/toaster_final_3.jpg"),
                                       require("../media/toaster_final_4.jpg"),
                                       require("../media/toaster_final_5.jpg"),
                                       require("../media/toaster_final_8.jpg") ]}
                          size={6}
                          captionList={[ 'Side view', '3/4 front view',
                                         '3/4 back view', 'Front view', 'Top view', 'In context' ]}
                          altTextList={[ '', '', '', '', '', '' ]}/>

              <MultiImages imageList={[ require("../media/toaster_final_6.jpg"), 
                                      require("../media/toaster_final_7.jpg") ]}
                          size={8}
                          caption='Before and after toasting is finished'
                          altTextList={ ['', ''] }/>

            <Divider size={8}/>

            <TitledContent title='Process'
                           body='hi'></TitledContent>

            <MultiImages imageList={[ require("../media/toaster_process_1.jpg"), 
                                      require("../media/toaster_process_2.jpg") ]}
                          size={8}
                          caption='Sketchbook pages'
                          altTextList={ ['', ''] }/>
            
            <ContentBlock body='hello'/>

            <ImageLibrary imageList={[ require("../media/toaster_process_3.jpg"),
                                       require("../media/toaster_process_4.jpg") ]}
                          size={4}
                          captionList={[ 'Orthographic sketches', 'Proportions and sizing' ]}
                          altTextList={[ '', '' ]}/>

            <ContentBlock body='hello'/>

            <ImageLibrary imageList={[ require("../media/toaster_process_5.jpg"),
                                       require("../media/toaster_process_6.jpg"),
                                       require("../media/toaster_process_7.jpg"),
                                       require("../media/toaster_process_8.jpg")  ]}
                          size={6}
                          captionList={[ 'Perspective sketches', 'Orthographic sketches',
                                         'Wiring and internal mechanisms',
                                         'Storyboard' ]}
                          altTextList={[ '', '', '', '' ]}/>

            <ContentBlock body='hello'/>
            
            <Image image={require("../media/toaster_process_9.jpg")}
                    size={6}
                    caption={'Form model iterations'}
                    altText={'8 toaster forms from a back three quarter view'}/>


        </div>
    )
  }
}

export default SingleSliceToaster;
