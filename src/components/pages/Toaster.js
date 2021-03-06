import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import TitledContent from '../ContentBlock.js'
import {ContentBlock, Image, ImageLibrary, Divider, MultiImages, SectionTitleWithBack} from '../ContentBlock.js'

import '../../App.css';

class SingleSliceToaster extends React.Component {
  render(){
    return (
        <div class='pt-5'>
            <SectionTitleWithBack name='Single Slice Toaster'
                                  href='/#work'/>
            <TitledContent title='Description'
                           body= "Design a single slice toaster inside out. Consider
                                  the experience, interactions, mechanisms, and internal wiring
                                  that creates the action of toasting. Use renderings
                                  to communicate the design and interaction. Do not
                                  use any materials to represent the object."></TitledContent>
            <ContentBlock body="In this toaster design, bread enters through a 
                                slot at the top and is relseased 
                                from a door on the side of the toaster.
                                The user engages with the bread through the toasting process
                                by lowering the toast (by pressing the knob in and sliding it down),
                                deciding on the level of toast (by determining how far
                                to drag the knob down), and releasing the toast (by twisting the knob).
                                Since the user is actively involved in many steps of the toasting
                                process, this single slice toaster is designed to embrace the process
                                and experience of toasting. "/>

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
                          caption='Before and after toasting is finished. Bread enters from top, pops out the side. Knob must be twisted to release the bread.'
                          altTextList={ ['', ''] }/>

            <Divider size={8}/>

            <TitledContent title='Process'
                           body='I began the project by learning about the history of toasting
                           and how modern toasters work. From there, I explored how a toaster could
                           hold toast in different ways as well as different internal wiring structures
                           that could complement or effect the form of the toaster. I decided
                           a feature I wanted to include in my single slice toaster was to
                           have the toast be "presented" to the user at the end. I also
                           wanted the toaster to highlight the transformation that
                           it was doing to the toast by having the bread enter and exit
                           from different parts.'></TitledContent>

            <MultiImages imageList={[ require("../media/toaster_process_1.jpg"), 
                                      require("../media/toaster_process_2.jpg") ]}
                          size={8}
                          caption='Sketchbook pages'
                          altTextList={ ['', ''] }/>
            
            <ContentBlock body='From there, I began roughly sketching ortographic views and
                          projecting the designs into a perspective drawing.
                          I moved back and forth between orthographic and perspective sketching until
                          I settled on a design. I then modeled the design in SolidWorks
                          to get a better sense of its volume. When my design concept was finalized, 
                          I played around with the sizing and proportions of the toster 
                          so that a piece of bread and wiring
                          could fit inside.'/>

            <ImageLibrary imageList={[ require("../media/toaster_process_3.jpg"),
                                       require("../media/toaster_process_4.jpg") ]}
                          size={4}
                          captionList={[ 'Orthographic sketches', 'Proportions and sizing' ]}
                          altTextList={[ '', '' ]}/>

            <ContentBlock body='With the finalized concept, I continued moving between drawing
                                and modeling in SolidWorks. Seeing the
                                form in three dimensions (and not just perspective drawings) gave me 
                                more insight on the form as it allowed me to rotate the
                                object freely and see it from all angles. I continued to make 
                                tweaks to my design, relying more heavily on my model.'/>

            <ImageLibrary imageList={[ require("../media/toaster_process_5.jpg"),
                                       require("../media/toaster_process_6.jpg") ]}
                          size={6}
                          captionList={[ 'Perspective sketches', 'Orthographic sketches' ]}
                          altTextList={[ '', '' ]}/>

            <ContentBlock body='Once I finished designing the form, I documented some of my decisions
                              through sketching a wiring diagram and a storyboard about 
                              the interactions a user would have with my toaster.'/>

            <ImageLibrary imageList={[ require("../media/toaster_process_7.jpg"),
                                       require("../media/toaster_process_8.jpg")  ]}
                          size={6}
                          captionList={[ 'Wiring and internal mechanisms',
                                         'Storyboard' ]}
                          altTextList={[ '', '' ]}/>

            <Image image={require("../media/toaster_process_9.jpg")}
                    size={6}
                    caption={'All SolidWorks form model iterations'}
                    altText={'8 toaster forms from a back three quarter view'}/>


        </div>
    )
  }
}

export default SingleSliceToaster;
