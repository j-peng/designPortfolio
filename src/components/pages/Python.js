import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import SectionTitle from '../SectionTitle.js'
import TitledContent from '../ContentBlock.js'
import {ContentBlock, Image, ImageLibrary, Divider} from '../ContentBlock.js'

import YouTube from 'react-youtube';

import '../../App.css';

class PyProjects extends React.Component {
  render(){
    return (
        <div class='pt-5'>
            <SectionTitle name='Python Coding Projects'></SectionTitle>
            <TitledContent title='Description'
                           body= 'At the end of some introductory programming courses
                                  at CMU, students complete a Term Project. This project
                                  can be anything and its purpose is to showcase and 
                                  apply the knowledge gained from
                                  a semester in a cumulative project.'></TitledContent>
            <TitledContent title='Course'
                           body='15-110 Principles of Computing, 15-112 
                                Fundamentals of Programming and Computer Science'></TitledContent>
            
            <Divider size={8}/>
            <SectionTitle name='Unfinished Duck Game'></SectionTitle>
            <Youtube videoID={'https://youtu.be/kA511VoScaY'}/>

            <Divider size={8}/>
            <SectionTitle name='Simply Chess'></SectionTitle>

            <div class='pt-3'>
            <Image image={require("../media/spatula_final_1.jpg")}
                   size={6}
                   caption={''}
                   altText={''}/>

            
            </div>
        </div>
    )
  }
}

export default PyProjects;
