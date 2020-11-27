import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import TitledContent from '../ContentBlock.js'
import {ContentBlock, Image, ImageLibrary, Divider, MultiImages, Spacer, PDF, SectionTitle} from '../ContentBlock.js'

import '../../App.css';

class HeartDecisions extends React.Component {
  render(){
    return (
        <div>
            <SectionTitle name='Heart Decisions'/>
            <TitledContent title='Description'
                           body= 'Heart Decisions is an outreach activity centered around 
                           a card game. It is designed to teach high school students 
                           about engineering solutions to heart failure. It helps build 
                           problem solving, collaboration, and communication skills in
                          participants while exploring the factors and considerations 
                          that drive biomedical engineering. The game is designed to be 
                          a one period activity that helps students explore these ideas 
                          and form a connection between what they are learning inside the 
                          classroom and the world outside. The activity fits best in the 
                          context of a science or biology class. '></TitledContent>
            <ContentBlock body='Students are randomly assigned people cards and device 
            cards. They are tasked with pairing patients with various heart conditions
            with different medical devices. They work in teams to come up with a pairing in 
            their scenario and share it with the class.'/>

            <TitledContent title='Tools + Skills'
                           body='Illustrator, Procreate'></TitledContent>

            <TitledContent title='Duration'
                           body='April 2020'></TitledContent>
            
            <TitledContent title='Course'
                           body='Biomedical Engineering in Everyday Life'></TitledContent>

            <ImageLibrary imageList={[ require("../media/heartdecisions_final_1.jpg"),
                                       require("../media/heartdecisions_final_2.jpg"),
                                       require("../media/heartdecisions_final_3.jpg")  ]}
                          size={6}
                          captionList={[ 'People and devices card sets',
                                         'People cards contain information about a patient', 
                                         'Device cards contain information about a heart technology' ]}
                          altTextList={[ '', '', '' ]}/>
            <Spacer size={2}/>
            <MultiImages imageList={[ require("../media/heartdecisions_final_4.jpg"), 
                                      require("../media/heartdecisions_final_5.jpg") ]}
                          size={6}
                          caption="Doctor's report - for notetaking and reflection"
                          altTextList={ ['', ''] }/>
            <Spacer size={2}/>
            <MultiImages imageList={[ require("../media/heartdecisions_final_6.jpg"), 
                        require("../media/heartdecisions_final_7.jpg"),
                        require("../media/heartdecisions_final_8.jpg") ]}
                        size={6}
                        caption="Doctor's guide - information to reference during the card game"
                        altTextList={ ['', '', ''] }/>
            <Spacer size={2}/>
            <Image image={require("../media/heartdecisions_final_9.jpg")}
                size={6}
                caption={'Game introduction presentation slides'}
                altText={''}/>
            {/* <PDF file={require("../media/heartdecisions_peoplecards.pdf")}
                 size={4} ratio={3/2.5} caption={'People card back and all people cards'}/>
            <Spacer size={2}/>
            <PDF file={require("../media/heartdecisions_devicecards.pdf")}
                 size={4} ratio={3/2.5} caption={'Device card back and all device cards'}/> */}

        </div>
    )
  }
}

export default HeartDecisions;
