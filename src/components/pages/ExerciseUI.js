import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import SectionTitle from '../SectionTitle.js'
import TitledContent from '../ContentBlock.js'

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
            
        </div>
    )
  }
}

export default ExerciseUI;