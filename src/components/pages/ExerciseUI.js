import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import SectionTitle from '../SectionTitle.js'
import TitledContent from '../ContentBlock.js'
import {ContentBlock, Image, ImageLibrary, Divider, MultiImages, Spacer} from '../ContentBlock.js'

import '../../App.css';

class ExerciseUI extends React.Component {
  render(){
    return (
        <div>
            <SectionTitle name='Exercise Interface'></SectionTitle>
            <TitledContent title='Team'
                           body= 'Monica Chang, V Shiau, Michelle Lee, Isabel Yi, Angela Chen'></TitledContent>

            <TitledContent title='Team Role'
                           body='Ideate new exercise interactions and layout including
                           test cases and checklist, interview teachers for user testing, 
                           create surveys for teachers and students, user testing synthesis, 
                           refine and clean up final design, deliver and explain to development team'></TitledContent>

            <TitledContent title='Description'
                           body='A large part of the CS Academy curriculum revolves around
                           completing autograded exercises through our interface. Thus, it is
                           essential that our exercise interface is easy to use and understand
                           so that students can focus on learning to code instead of learning
                           how to opperate their "IDE". We found through teacher training and our
                           support line that many teachers were struggling to understand the use of
                           our test cases and the exercise checklist. We also saw the need to better
                           reference notes and course material through the exercise interface through 
                           observation from previous visits to high schools. Therefore, we set out to
                           create interactions that better reflected the actions and use cases of the
                           test cases.'></TitledContent>
            <ImageLibrary imageList={[ require("../media/exerciseUI_final_1.png"),
                                      require("../media/exerciseUI_final_2.png"),
                                      require("../media/exerciseUI_final_3.png"),
                                      require("../media/exerciseUI_final_4.png") ]}
                                      size={6}
                                      captionList={[ 'Before coding',
                                                     'Initially no test cases selected',
                                                     'Hovering on a test case, showing shortcuts',
                                                     'Test case added to code, showing shortcuts' ]}
                                      altTextList={[ '', '', '' ]}/>

            <Divider size={6}/>
            <TitledContent title='Process'
                           body= 'The begining of our design process was inspired by
                           teacher comments we recieved during teacher training
                           and support tickets we recieved. It was apparent through 
                           these conversations with our users that the current interface
                           had a few problems: students were not reading the checklist
                           to get hints and understand the coding problems,
                           and both students and teachers struggled to understand
                           the use of our test cases on a deeper level.'></TitledContent>

            <MultiImages imageList={[ require("../media/exerciseUI_process_1.png"), 
                                      require("../media/exerciseUI_process_2.png"),
                                      require("../media/exerciseUI_process_3.png") ]}
                          size={6}
                          caption='Initial iterations'
                          altTextList={ ['', '', ''] }/>

            <ContentBlock body='Our initial iterations focused on ways we could highlight the checklist
            more so that students would want to engage with it more meaningfully.
            we experimented with ideas such as having it as a draggable modal, seperating our
            checklist items (introduction and instructions) and test cases (to run to test
            the code) and making other helpful pages more accessible from the coding
            editor screen.'/>
            <ContentBlock body="From our initial iterations, discussions with our program
            manager, and with the entire design team, we settled on two different designs
            for user testing. We wanted to test the design with both students and teachers
            but since this work was done during the summer and most students were out of class,
            we were only able to talk to teachers. To help get around this, we also created
            a user survey to get both students and teacher's opinions on the new designs
            as well as our old interface. This way, we were able to reach a few students
            to get their feedback."/>

            <MultiImages imageList={[ require("../media/exerciseUI_process_4.png"), 
                                      require("../media/exerciseUI_process_5.png") ]}
                          size={6}
                          caption='Design for user testing 1'
                          altTextList={ ['', ''] }/>
            <MultiImages imageList={[ require("../media/exerciseUI_process_6.png"), 
                                      require("../media/exerciseUI_process_7.png") ]}
                          size={6}
                          caption='Design for user testing 2'
                          altTextList={ ['', ''] }/>

            <ContentBlock body='After user testing and collecting data from our survey, 
            we took our findings and made an affinity map to help synthesize the information.
            Some of our key take aways were that teachers strongly prefered simplicity
            and familiarity with interfaces. Students on the other hand enjoyed many new
            features if they allowed them to work faster or reference key information
            more quickly.'/>

            <Image image={require("../media/exerciseUI_process_8.png")}
                   size={6}
                   caption='Affinity mapping after user testing with teachers and students'
                   altText={''}/>

            <ContentBlock body='With more insight on our designs from our user testing,
            we made some more iterations on our design. From there, we showed it to the
            software development team to get their input on implementation. With their
            feedback and help in developing an intial draft of the design, we were able
            to test our interactions more throughly to refine and expand upon them.
            This lead to our final design.'/>

            <MultiImages imageList={[ require("../media/exerciseUI_process_9.png"), 
                                      require("../media/exerciseUI_process_10.png") ]}
                          size={6}
                          caption='Refinement after user testing'
                          altTextList={ ['', ''] }/>
            
            
            <Divider size={6}/>
            <TitledContent title='Interaction Details'
                           body= 'These are the four general states of the checklist
                           and test case section of the exercise screen interface'></TitledContent>

            <MultiImages imageList={[ require("../media/exerciseUI_interactions_1.png"), 
                                      require("../media/exerciseUI_interactions_2.png") ]}
                          size={6}
                          caption='Initial checklist and test cases'
                          altTextList={ ['', ''] }/>
            <MultiImages imageList={[ require("../media/exerciseUI_interactions_3.png"), 
                                      require("../media/exerciseUI_interactions_4.png") ]}
                          size={6}
                          caption='Failing and passing test cases'
                          altTextList={ ['', ''] }/>
            
            <Divider size={6}/>
            <TitledContent title='All test case states'
                           body= 'These are all the cards and states that can be
                           seen in the test case side of the checklist and test case
                           interface.'></TitledContent>
            <ImageLibrary imageList={[ require("../media/exerciseUI_card_1.png"),
                                      require("../media/exerciseUI_card_2.png"),
                                      require("../media/exerciseUI_card_3.png"),
                                      require("../media/exerciseUI_card_4.png"),
                                      require("../media/exerciseUI_card_5.png"),
                                      require("../media/exerciseUI_card_6.png"),
                                      require("../media/exerciseUI_card_7.png"),
                                      require("../media/exerciseUI_card_8.png"),
                                      require("../media/exerciseUI_card_9.png"),
                                      require("../media/exerciseUI_card_10.png") ]}
                                      size={2}
                                      captionList={[ 'Initial unactive state', 'On card hover', 
                                      'On (+) hover', 'On click', 'Active state', 
                                      'Test case selected but not running (was paused or edited)',
                                      'Test case removed', 'Failed a test case', 'On (x) hover',
                                      'Test cases passed (exercise successfully autograded)' ]}
                                      altTextList={[ '', '', '' ]}/>



            
        </div>
    )
  }
}

export default ExerciseUI;