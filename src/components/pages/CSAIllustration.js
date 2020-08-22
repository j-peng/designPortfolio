import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import SectionTitle from '../SectionTitle.js'
import TitledContent from '../ContentBlock.js'
import {ContentBlock, Image, ImageLibrary, Divider, MultiImages, Spacer} from '../ContentBlock.js'

import '../../App.css';

class CSAIllustration extends React.Component {
  render(){
    return (
        <div class='pt-5'>
            <SectionTitle name='Computer Science Academy Illustrations'></SectionTitle>
            <TitledContent title='Description'
                           body= 'CMU CS Academy is an interactive online high school 
                           computer science curriculum. As a member of the UX Design team, 
                           I have made several illustrations for pages (mostly the splash page),
                           social media, and for company "swag".
                           This page has a selection of illustrations as well as
                           some of the process in devloping the CS Academy illustration
                           colors and style.'></TitledContent>

            <TitledContent title='Tools + Skills'
                           body='Procreate'></TitledContent>
            <Spacer size={2}/>
            <MultiImages imageList={[ require("../media/csaillustration_final_1.png"), 
                                      require("../media/csaillustration_final_2.png") ]}
                          size={6}
                          caption='Splash page images'
                          altTextList={ ['', ''] }/>

            <ImageLibrary imageList={[ require("../media/csaillustration_final_3.png"),
                                      require("../media/csaillustration_final_4.png"),
                                      require("../media/csaillustration_final_5.png") ]}
                          size={4}
                          captionList={[ '"Built by students, for students"',
                                         '"Problem solving that inspires"',
                                         '"Supporting teachers"' ]}
                          altTextList={[ '', '', '' ]}/>

            <Divider size={6}/>

            <TitledContent title='Process'
                           body= 'I began illustrating for CS Academy during the 
                           fall 2019 semester. Every year, the design team comes up
                           with a few new sticker and shirt designs to bring to conferences
                           and give to staff. These were the first CS Academy
                           illustrations to be used in our "swag".'></TitledContent>
            
            <Image image={require("../media/csaillustrationold_final_1.png")}
                   size={4}
                   caption='T shirt design'
                   altText={''}/>
            
            <MultiImages imageList={[ require("../media/csaillustrationold_final_2.jpg"), 
                                      require("../media/csaillustrationold_final_3.jpg"),
                                      require("../media/csaillustrationold_final_4.jpg") ]}
                          size={6}
                          caption='Sticker designs'
                          altTextList={ ['', '', ''] }/>

            <ContentBlock body='During the spring 2020 semester, 
                                we decided to add illustations to our splash page
                                design to add interest and excitement. We applied similar
                                key words (playful, inclusive, engaging) to
                                the illustrations which we had used to 
                                inspire the splash page. Many of the initial drawings were
                                done in grey scale because we had not created a color system yet.'/>

            <MultiImages imageList={[ require("../media/csaillustration_process_1.jpg"), 
                                      require("../media/csaillustration_process_2.jpg"),
                                      require("../media/csaillustration_process_3.jpg") ]}
                          size={6}
                          caption='Initial sketches'
                          altTextList={ [ '', '', '' ] }/>
              <ContentBlock body='I experimented a lot with style to get a better sense of
                            what fit the company the best. The team decided on a more hand drawn
                            feel rather than graphics done using the pen toll in Illustrator
                            because it help more natural and "playful".'/>
            <MultiImages imageList={[ require("../media/csaillustration_process_4.png"), 
                                      require("../media/csaillustration_process_5.png"),
                                      require("../media/csaillustration_process_6.png") ]}
                          size={6}
                          caption='Style iterations'
                          altTextList={ [ '', '', '' ] }/>
              <ContentBlock body='From there, I began to experiement more with the composition
              of each illustration as well as the colors used. We had developed a
              color system for the website by this point and we were working on a smaller,
              more limited color scheme for the illustrations. Through many iterations, we settled on
              a certain style and color system for all illustrations.'/>
            <ImageLibrary imageList={[ require("../media/csaillustration_process_7.jpg"),
                                      require("../media/csaillustration_process_8.png"),
                                      require("../media/csaillustration_process_9.png") ]}
                          size={4}
                          captionList={[ 'Splash page above the fold image first iterations',
                                         'Composition exploration',
                                         'Color exploration' ]}
                          altTextList={[ '', '', '' ]}/>


        </div>
    )
  }
}

export default CSAIllustration;
