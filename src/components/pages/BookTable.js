import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import SectionTitle from '../SectionTitle.js'
import TitledContent from '../ContentBlock.js'
import {ContentBlock, Image, ImageLibrary, Divider, YTVid, MultiImages} from '../ContentBlock.js'

import '../../App.css';

class BookTable extends React.Component {
  render(){
    return (
        <div class='pt-5'>
            <SectionTitle name='Book Table'></SectionTitle>
            <TitledContent title='Description'
                           body= 'Design a book table made from one 11" x 60 " x 1" 
                                  board of poplar wood. Join four perpendicular planes 
                                  together in order to celebrate, present, or display a 
                                  book. This book table is designed for A4 sized sketchbooks. 
                                  It can hold multiple sketchbooks in three different positions. 
                                  The book table highlights the book at the front, designed to 
                                  bring attention and interaction to one sketchbook while storing 
                                  others away.'></TitledContent>

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
                                         'Book table with a sketchbook in the three possible positions' ]}
                          altTextList={[ 'Wooden book table holding a sketchbook out in the front', 
                                         'Wooden book table with three black sketchbooks positioned inside, on top, and infront of the book table.' ]}/>

            <YTVid ytid='ISCL-W4kmII' size={6}/>

            </div>

            <Divider size={8}/>
            <TitledContent title='Process'
                           body='I started by sketching'/>

            <MultiImages imageList={[ require("../media/booktable_process_1.jpg"), 
                                      require("../media/booktable_process_2.jpg"), 
                                      require("../media/booktable_process_3.jpg") ]}
                          size={9}
                          caption='Sketchbook pages'
                          altTextList={ ['', '', ''] }/>


            <Image image={require("../media/booktable_process_11.jpeg")}
                   size={6}
                   caption={'Sketchbook page'}
                   altText={''}/>
            <Image image={require("../media/booktable_process_13.jpg")}
                   size={8}
                   caption={'Sketchbook page'}
                   altText={''}/>


        </div>
    )
  }
}

export default BookTable;
