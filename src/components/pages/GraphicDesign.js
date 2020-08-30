import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import TitledContent from '../ContentBlock.js'
import {SectionTitle, ContentBlock, Image, ImageLibrary, Divider, MultiImages, PDF,
        Spacer, SectionTitleWithBack} from '../ContentBlock.js'

import '../../App.css';

class GraphicDesign extends React.Component {
  render(){
    return (
        <div class='pt-4'>
            <SectionTitleWithBack name='Graphic Design' page='/play'/>
            <TitledContent title='Description'
                           body= "This page contains a selection of graphic design projects
                           I've worked on ranging from layout design to illustration."></TitledContent>

            <Divider size={8}/>

            <SectionTitle name='in:cite journal'></SectionTitle>
            <TitledContent title='Description'
                           body= "in:cite journal is a social-justice centered 
                                  research journal from the University of Toronto 
                                  powered by youths for youths. They focus on 
                                  critical race, decolonial, feminist, queer, 
                                  disability justice, and intersectional approaches.
                                  in:cite currently has three volumes published in
                                  2018, 2019, and 2020. Visit their website:"/>
            <ContentBlock body=<a href='https://incitejournal.org/index.php/incite/about'
                                  target='_blank'
                                  class='link'>https://incitejournal.org/index.php/incite/about</a>/>
            <ContentBlock body="I've worked as their layout designer for all three issues. 
            From around May to August from 2018 to 2020 I've worked
            with the journal's editors to design and layout all the journal's pieces."/>
            <TitledContent title='Tools + Skills'
                           body= "InDesign, Illustrator"/>

            <ImageLibrary imageList={[ require("../media/incite_1.jpg"),
                                       require("../media/incite_2.jpg"),
                                       require("../media/incite_3.jpg"),
                                       require("../media/incite_4.jpg") ]}
                          size={6}
                          captionList={[ 'Table of contents (volume 3)', 'Cover (volume 3)', 
                                         'Editorial (volume 3)', 'Piece from in:cite volume 3' ]}
                          altTextList={[ '', '', '', '' ]}/>

            <Divider size={8}/>

            <SectionTitle name='Hand Mixer Book'/>
            <TitledContent title='Description'
                           body= "Book explaining and illustrating how a Hamilton Beach Hand
                           Mixer works. Research sources for book content include
                           online readings and websites, dismantling the hand mixer to 
                           study the wiring, and analyzing the sound and speeds of the hand mixer
                           through video and audio recordings. "/>
            <TitledContent title='Team'
                           body= "Franklin Guttman, Emily Spooner, Wenqing Yin"></TitledContent>
            <TitledContent title='Team Role'
                           body= "Layout (pages 1, 4, 8, 12), illustrations (pages 1, 2, 4, 8, 12, 14), compiling book, proof reading,
                                  participated in research, page and content ordering."></TitledContent>
            <TitledContent title='Tools + Skills'
                           body= "Research, InDesign, Illustrator"></TitledContent>
            <TitledContent title='Course'
                           body= "How Things Work"></TitledContent>
            <PDF file={require("../media/HandMixerBook.pdf")}
                 size={6} ratio={8.5/11} caption='Book illustrating how a hand mixer works'/>

            <Divider size={8}/>

            <SectionTitle name='Homelessness in Pittsburgh Systems Map'></SectionTitle>
            <TitledContent title='Description'
                           body= "Research a wicked problem and present your research and proposed
                           intervention strategies through a systems map poster."></TitledContent>
            <ContentBlock body="Displayed at RSD8's Poster and Prototypes Gallery Exhibition."/>
            <TitledContent title='Team'
                           body= "Franklin Guttman, Ashley Burbano, Deklin Versace, Langston Wells, Miso Dem"></TitledContent>
            <TitledContent title='Team Role'
                           body= "Helped research, brainstorm poster layout, possible interventions, write content for poster"></TitledContent>
            <TitledContent title='Tools + Skills'
                           body= "Systems thinking, Research, Illustrator"></TitledContent>
            <TitledContent title='Course'
                           body= "Systems"></TitledContent>

            <Image image={require("../media/systemsmap_2.jpg")}
                   caption= 'Homelessness in Pittsburhg Systems Map'
                   size={4}
                   altText=''/>

            <MultiImages imageList={ [ require("../media/systemsmap_detail_1.jpg"), 
                                       require("../media/systemsmap_detail_2.jpg") ] }
                         caption= 'Zoomed in images of parts of the poster'
                         size={8}
                         altTextList={ ['', ''] }/>
            <Spacer size={2}/>
            <ImageLibrary imageList={[ require("../media/systemsmap_detail_3.jpg"),
                                       require("../media/systemsmap_detail_4.jpg"),
                                       require("../media/systemsmap_detail_5.jpg") ]}
                          size={6}
                          captionList={[ 'Intervention strategy 1', 'Intervention strategy 2', 'Intervention strategy 3' ]}
                          altTextList={[ '', '', '' ]}/>

            {/* <Divider size={8}/>

            <SectionTitle name='UPMC Urgent Care Systems Map'></SectionTitle>
            <TitledContent title='Description'
                           body= "Choose a system in Pittsburgh and explain how it works through
                           a systems map."></TitledContent>
            <TitledContent title='Team'
                           body= ""></TitledContent>
            <TitledContent title='Team Role'
                           body= ""></TitledContent>
            <TitledContent title='Tools + Skills'
                           body= "Systems thinking, Research, Illustrator"></TitledContent>
            <TitledContent title='Course'
                           body= "Systems"></TitledContent>
            <Image image={require("../media/systemsmap_1.jpg")}
                   caption= 'UPMC Urgent Care Systems Map'
                   size={6}
                   altText=''/>
             */}
        </div>
    )
  }
}

export default GraphicDesign;