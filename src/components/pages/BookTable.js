import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import TitledContent from '../ContentBlock.js'
import {ContentBlock, Image, ImageLibrary, Divider, YTVid, MultiImages, Spacer, PDF,
       SectionTitleWithBack} from '../ContentBlock.js'

import '../../App.css';

class BookTable extends React.Component {
  render(){
    return (
        <div class='pt-4'>
              <SectionTitleWithBack name='Book Table'
                                  page='/'/>
            <TitledContent title='Description'
                           body= 'Design a book table made from one 11" x 60 " x 1" 
                                  board of poplar wood. Join four perpendicular planes 
                                  together in order to celebrate, present, or display a 
                                  book.'></TitledContent>
            <ContentBlock body='This book table is designed for A4 sized sketchbooks. 
                          It can hold multiple sketchbooks in three different positions. 
                          The book table highlights the book at the front, designed to 
                          bring attention and interaction to that one sketchbook while storing 
                          others away.'/>

            <TitledContent title='Tools + Skills'
                           body='SolidWorks, KeyShot'></TitledContent>

            <TitledContent title='Duration'
                           body='March - April 2020'></TitledContent>
            
            <TitledContent title='Course'
                           body='Product Design Studio II: Design for Interactions'></TitledContent>

            <div class='pt-3'>
            
            <ImageLibrary imageList={[ require("../media/booktable_final_1.jpg"),
                                       require("../media/booktable_final_2.jpg") ]}
                          size={6}
                          captionList={[ 'Book table holding one sketchbook', 
                                         'Book table with a sketchbook in each of the three possible positions' ]}
                          altTextList={[ 'Wooden book table holding a sketchbook out in the front', 
                                         'Wooden book table with three black sketchbooks positioned inside, on top, and infront of the book table.' ]}/>

            <YTVid ytid='ISCL-W4kmII' size={6} caption='Animation depicting assembly process'/>

            </div>

            <Divider size={8}/>
            <TitledContent title='Process'
                           body='I started by sketching flat boards and compositions
                           as well as quickly mocking up designs using quarter scale
                           models constructed out of pins and foam core. This helped me experiment
                           with many different designs at the beginning of the project
                           to give me a better sense of the direction I wanted to go in. Making models
                           also helped me visualize how I would cut each board out of
                           the single wooden plank we were given.'/>

            <MultiImages imageList={[ require("../media/booktable_process_1.jpg"), 
                                      require("../media/booktable_process_2.jpg"), 
                                      require("../media/booktable_process_3.jpg") ]}
                          size={6}
                          caption='Sketchbook pages'
                          altTextList={ ['', '', ''] }/>
            <Spacer size={3}/>
            <MultiImages imageList={[ require("../media/booktable_process_4.jpg"), 
                                      require("../media/booktable_process_5.jpg") ]}
                          size={6}
                          caption='Quarter scale models'
                          altTextList={ ['', ''] }/>
            <Spacer size={1}/>
            <ContentBlock body='We also began shop training and learning how to use different
                               machines in the wood shop that would help produce our booktables.
                               I used sketching to help document the information we learned about
                               the manufacturing process.'/>
            <Spacer size={1}/>
            <Image image={require("../media/booktable_process_6.jpg")}
                              size={6}
                              caption={'Sketchbook page'}
                              altText={''}/>

            <ContentBlock body='Once I was settled on a design with my quarter scale model, 
                                I made a full scale cardboard model. To aid in the construction
                                of the full scale version, I constructued the model in 
                                SolidWorks and made a few technical drawings. A full scale
                                mode helped me realize
                                the structural vulnerability of the design and how it could tip
                                or be unstable. It also helped me visualize more clearly
                                where my joinery would go and how secure it would be.'/>

            <PDF file={require("../media/booktable_process_pdf.pdf")}
                 size={6} ratio={8.5/11} caption='Technical drawings from SoidWorks'/>
            <Spacer size={2}/>
            <MultiImages imageList={[ require("../media/booktable_process_7.jpg"), 
                                      require("../media/booktable_process_8.jpg"),
                                      require("../media/booktable_process_9.jpg") ]}
                          size={6}
                          caption='Full scale cardboard model'
                          altTextList={ ['', '', ''] }/>

            <ContentBlock body='After this, our classes went remote for the rest of the semester.
                                Thus, we had to transition from shop training and physically 
                                making our book tables to 3D modeling and rendering. I worked on
                                finalizing my technical drawings so that we could machine the boards
                                when we returned to in person classes. I also documented the
                                manufacturing and assembly process of the book table as I finished 
                                up the design so that I could remind myself how to construct my
                                book table in the future.'/>

            <Image image={require("../media/booktable_process_10.jpeg")}
                   size={6}
                   caption={'Sketchbook page showing assembly'}
                   altText={''}/>
            <Image image={require("../media/booktable_process_11.jpg")}
                   size={8}
                   caption={'Sketchbook page showing manufacturing process'}
                   altText={''}/>

            <ContentBlock body='I then began learning how to 
                                model objects in SolidsWorks, export them to KeyShot, and
                                finally render them. I focused a lot on getting realistic wood
                                textures and convincing lighting.'/>

            <MultiImages imageList={[ require("../media/booktable_process_12.jpg"), 
                                      require("../media/booktable_process_13.jpg") ]}
                          size={8}
                          caption='Rendering iterations'
                          altTextList={ ['', '', ''] }/>

        </div>
    )
  }
}

export default BookTable;
