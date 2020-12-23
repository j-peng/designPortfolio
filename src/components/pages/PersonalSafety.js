import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import TitledContent from '../ContentBlock.js'
import {ContentBlock, Image, ImageLibrary, Divider, MultiImages, SectionTitleWithBack, PDF, Spacer} from '../ContentBlock.js'

import '../../App.css';

class PersonalSafety extends React.Component {
  render(){
    return (
        <div class='pt-5'>
            <SectionTitleWithBack name='HEMOATH'
                                  href='/#projects'/>
            <TitledContent title='Description'
                           body= "Design a food carrier that enhances the everyday experience of eating on-the-go.
                                  This snack container creates a tactile eating experience designed for students
                                  to snack while studying/working remotely. The product allows the user to feel
                                  for their food while eating so that concentration can be focused on other tasks."></TitledContent>

            <TitledContent title='Tools + Skills'
                           body='Prototyping, SolidWorks, KeyShot'></TitledContent>

            <TitledContent title='Duration'
                           body='August - October 2020'></TitledContent>
            
            <TitledContent title='Course'
                           body='Product Design Studio III: Designing for Complex Products Systems'></TitledContent>

            <TitledContent title='Process'
                           body= <a href='https://jjpeng.medium.com/the-on-the-go-meal-experience-afc283a43e8d'
                           target='_blank'
                           class='link'> Medium link </a>></TitledContent>

            <PDF file={require("../media/food_experience_presentation.pdf")}
                            size={6} ratio={11/17} caption='Final presentation'/>

            <Spacer size={2}/>

            <ImageLibrary imageList={[ require("../media/snack_1.jpg"),
                                       require("../media/snack_2.jpg"),
                                       require("../media/snack_3.jpg"),
                                       require("../media/snack_4.jpg"),
                                       require("../media/snack_5.jpg"),
                                       require("../media/snack_6.jpg") ]}
                          size={6}
                          captionList={[ 'Open', 'Closed',
                                         'Side view', 'Front view', 'Back view', 'Top view' ]}
                          altTextList={[ '', '', '', '', '', '' ]}/>

            <MultiImages imageList={[ require("../media/snack_foam_1.jpg"), 
                                      require("../media/snack_foam_2.jpg"),
                                      require("../media/snack_foam_3.jpg") ]}
                             size={9}
                             caption='Final foam form model'
                             altTextList={ ['', '', ''] }/>

        </div>
    )
  }
}

export default PersonalSafety;
