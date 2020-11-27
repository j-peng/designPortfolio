import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import TitledContent from '../ContentBlock.js'
import {ContentBlock, Image, ImageLibrary, Divider, MultiImages, SectionTitleWithBack, Spacer, YTVid} from '../ContentBlock.js'

import '../../App.css';

class ChessSet extends React.Component {
  render(){
    return (
        <div class='pt-5'>
            <SectionTitleWithBack name='3 Maple and Walnut Chess Sets'
                                  href='/#work'/>
            <TitledContent title='Description'
                           body= 'Three "identical" weighted maple and walnut chess sets on 10" x 10" laser engraved 
                                  slate tile. Designed to be durable and act as a heirloom to be passed down generations.
                                  Forms reflect how the game is played.'></TitledContent>
            <ContentBlock body="One set is mine to keep, one will be given away as a gift, and the final one will be sold."/>

            <TitledContent title='Materials'
                           body='Maple, walnut, linseed oil, slate, tile sealer, cork, lead, epoxy, wood glue'></TitledContent>

            <TitledContent title='Tools + Skills'
                           body='Wood shop (table saw, chop saw, drill press, milling machine)'></TitledContent>

            <TitledContent title='Duration'
                           body='October - November 2020'></TitledContent>
            
            <TitledContent title='Course'
                           body='Experimental Form'></TitledContent>

            <TitledContent title='Process'
                           body= <a href='https://jjpeng.medium.com/forever-fabricated-3-chess-sets-38341f979487'
                           target='_blank'
                           class='link'> Medium link </a>></TitledContent>

            <Spacer size={2}/>

            <MultiImages imageList={[ require("../media/chess_final_2.jpg"), 
                                      require("../media/chess_final_1.jpg") ]}
                          size={8}
                          caption='Three chess sets'
                          altTextList={ ['', ''] }/>

            <Spacer size={2}/>

            <ImageLibrary imageList={[ require("../media/chess_final_3.jpg"),
                                       require("../media/chess_final_4.jpg"),
                                       require("../media/chess_final_5.jpg"),
                                       require("../media/chess_final_6.jpg") ]}
                          size={8}
                          captionList={[ 'Detail shot', 'Side view', '3/4 view', 'Side view']}
                          altTextList={[ '', '', '', '' ]}/>

            <MultiImages imageList={[ require("../media/chess_final_7.jpg"), 
                                      require("../media/chess_final_8.jpg") ]}
                          size={8}
                          caption='Black and white pieces'
                          altTextList={ ['', ''] }/>

            <Spacer size={2}/>
            <YTVid ytid='zvrtRdVa_Gk' size={5} caption='Sounds from moving pieces'/>
            <Spacer size={2}/>
              
            <ImageLibrary imageList={[ require("../media/chess_final_9.jpg"),
                                      require("../media/chess_final_10.jpg"),
                                      require("../media/chess_final_11.jpg") ]}
                        size={8}
                        captionList={[ 'Chess set in use', 'Chess set in use', 'Chess set in use' ]}
                        altTextList={[ '', '', '' ]}/>
                        
            <Divider size={8}/>
            <TitledContent title='About the design'
                            body="I started playing chess when I was 8 years old and I stopped playing competitively 
                            around 2017. In that time, I had the honor and privilege of attending many tournaments around 
                            the world including the World Youth Chess Championships and the World Youth U16 
                            Chess Olympiad. It's a game that holds a lot of importance in my life and has
                            contributed greatly to my development and growth as a person."/>
            <ContentBlock body='I also appreciate the game because of its algorithmic complexity. As Claude Shannon noted,
                            “There are more possible games of Chess than atoms in the Universe”. So when tasked to create
                            an object meaningful enough to act as a "forever fabricated" heirloom, making chess sets was 
                            an obvious decision.'/>
            <Image image={require("../media/chess_final_diagram.jpg")}
                    size={8}
                    caption={'Dimensional drawing'}
                    altText={''}/>
            <ContentBlock body="The piece's designs reflect the way they move on the board. The slanted top piece 
            on the pawn represents how the pawn captures sideways. This mimics the design of the top of the queen
            as the pawn often promotes to a queen. The rook's wide cross at the top shows that it moves many squares 
            horizontally or vertically. Compare this to the king's smaller and thinner cross showing it moves
            only a square at a time. The cut in the top of the knight represents the L shape pattern knights move in.
            The top piece is thinner than the body since the (traditional) piece often tapers and I always 
            liked holding the piece
            by the thinned out head. The bishop's slanted cut at the top shows that it moves diagonally. Each set
            has a light squared bishop and a dark squared bishop as represented by the color of the insert."/>
            <ContentBlock body="The height and weight of the pieces correspond to the piece's value. Further,
            the cork under the slate board has one cut corner, marking the A1 square."/>
            <ContentBlock body='I very much consider this "a chess set made by a designer who plays chess."'/>


        </div>
    )
  }
}

export default ChessSet;
