import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import SectionTitle from '../SectionTitle.js'
import TitledContent from '../ContentBlock.js'
import Toggle from '../InPageToggle.js'
import {ContentBlock, Image, ImageLibrary, Divider, PDF, MultiImages} from '../ContentBlock.js'

import '../../App.css';

class NOC extends React.Component {
  render(){
    return(
      <div>
        <SectionTitle name='Nourishing Our Communities'></SectionTitle>
        <TitledContent title='Team'
                        body= 'Emily Spooner, Langston Wells'/>
        <TitledContent title='Team Role'
                        body= 'Researcher (interviews, surveys, participatory observation,
                        site visits), helped create content (illustrations and written content)
                        for posters, helped plan and organize research, participated in group
                        brainstorming sessions'/>
        <TitledContent title='Description'
                        body='HomeCooked is a system (with a mobile app and 
                        physical meet up components) inspired by our research that helps 
                        build community through cooking and sharing home cooked meals, 
                        traditions, and cultural foods.'/>

        <Image image={require("../media/NOC_final_1.jpg")}
                size={6}
                caption={'Final design proposal poster'}
                altText={''}/>
        
        <Divider size={6}/>
        <TitledContent title='Process'
                        body= ''/>

        <Image image={require("../media/NOC_process_1.jpg")}
                size={4}
                caption={'Research proposal poster'}
                altText={''}/>

        <Image image={require("../media/NOC_process_2.jpg")}
                size={4}
                caption={'Research summary poster'}
                altText={''}/>

      </div>
    )
  }
}

class SOS extends React.Component {
  render(){
    return(
      <div>
        <SectionTitle name='Scheduling Our Socials'></SectionTitle>
        <TitledContent title='Team'
                        body= 'Emily Spooner, Langston Wells, Patricia Yu'/>
        <TitledContent title='Team Role'
                        body= 'Researcher (interviews, surveys), helped create content 
                          (illustrations, layout, and written content), 
                          helped plan and organize research and meetings'/>
        <TitledContent title='Description'
                        body='Researched how students planned casual get togethers
                        to uncover how HomeCooked could facilitate the process of hanging out.
                        Through research we uncovered information about user behavior, pain points,
                        and what features we could add to the HomeCooked system to make it a
                        better experience for students.'/>
        <PDF file={require("../media/SOS_final_pdf.pdf")}
            size={6} ratio={8.5/11} caption={'Final research report and summary'}/>

        <Divider size={6}/>
        <TitledContent title='Process'
                        body= ''/>
        <PDF file={require("../media/SOS_process_pdf.pdf")}
            size={6} ratio={8.5/11} caption={'Process report'}/>

      </div>
    )
  }
}

class NOCnSOS extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        tabs: ['Nourishing our communities', 'Scheduling our socials'],
        tabStates: [ true, false]
      }
      this.handleClick = this.handleClick.bind(this)
    }

  handleClick(i){
      let newTabStates = Array(this.state.tabStates.length).fill(false)
      newTabStates[i] = true
      this.setState({
          tabStates: newTabStates
      })
    }

  render(){
    let page = <NOC/>
    if (this.state.tabStates[1]) {
        page = <SOS/>
    }

    return (
        <div class='pt-5'>
            <SectionTitle name='Nourishing Our Communities + Scheduling Our Socials'></SectionTitle>
            <TitledContent title='Description'
                           body= 'Find a problem area on campus. Research 
                                  the problem and propose a design intervention.
                                  Nourishing Our Communities (NOC) and Scheduling
                                  Our Socials (SOS) tackle the lack of community at CMU and lonliness
                                  felt by students on campus. The project focused on how undergraduate 
                                  students at CMU schedule for food-related social events and the 
                                  planning process that goes into it. We posed the question:
                                  "How might we cultivate a stronger CMU campus community through casual 
                                  food-related social events and hangouts?"'></TitledContent>

            <TitledContent title='Tools + Skills'
                           body='InDesign, Photoshop, User Research, Interviews, Surveys'></TitledContent>

            <TitledContent title='Duration'
                           body='November 2019 - February 2020'></TitledContent>
            
            <TitledContent title='Courses'
                           body='How People Work, Research Methods'></TitledContent>
            
            <Toggle tabs = {this.state.tabs}
                    break={'bottom'}
                    tabStates={this.state.tabStates}
                    onClick={i => this.handleClick(i)}/>
            {page}
            <Toggle tabs = {this.state.tabs}
                    break={'top'}
                    tabStates={this.state.tabStates}
                    onClick={i => this.handleClick(i)}/>
        </div>
        )
    }
  }


export default NOCnSOS;
