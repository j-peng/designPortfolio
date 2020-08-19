import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import SectionTitle from '../SectionTitle.js'
import TitledContent from '../ContentBlock.js'
import {ContentBlock, Image, ImageLibrary, Divider, YTVid} from '../ContentBlock.js'

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

            <SectionTitle name='Unfinished Duck Game (112)'></SectionTitle>
            <TitledContent title='About'
                           body='This game is inspired by Untitled Goose Game
                                 by House House. In Unfinished Duck Game, the player
                                 plays as a duck trying to complete a set of tasks to
                                 move on to the next area. Game includes procedurally
                                 generated backgrounds, player-object and player-npc 
                                 interactions,and npc behaviors such as chasing 
                                 the player and picking up items.'></TitledContent>
            <TitledContent title='Tools'
                           body='PyGame, Procreate'></TitledContent>
            <TitledContent title='Duration'
                           body='May 2020'></TitledContent>
            <TitledContent title='GitHub'
                           body=<a href='https://github.com/j-peng/112tp' 
                                   target='_blank'
                                   class='link'>
                                   https://github.com/j-peng/112tp</a>></TitledContent>
            
            <YTVid ytid='kA511VoScaY' size={6}/>

            <div class='pt-5'>
            <Image image={require("../media/py_1.jpg")}
                   size={6}
                   caption={'Game planning storyboard'}
                   altText={'Storyboard of game UI, keyboard interactions, and stages of the game.'}/>
            </div>

            <Divider size={8}/>
            <SectionTitle name='Simply Chess (110)'></SectionTitle>
            <TitledContent title='About'
                           body='This is a two player simplfied chess game. It includes
                           instructions on how to play, highlighting legal moves, telling
                           the player when they are in check or checkmate,
                           and a Fischer Random game mode. All original graphics done in
                           Tkinter.'></TitledContent>
            <TitledContent title='Tools'
                           body='Tkinter'></TitledContent>
            <TitledContent title='Duration'
                           body='May 2019'></TitledContent>
            <YTVid ytid='Ki3OCEXiId8' size={6}/>

        </div>
    )
  }
}

export default PyProjects;
