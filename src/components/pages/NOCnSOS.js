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
        <Image image={require("../media/NOC_final_1.jpg")}
        size={6}
        caption={'Form model iterations'}
        altText={''}/>
      </div>
    )
  }
}

class SOS extends React.Component {
  render(){
    return(
      <div>
        <PDF file={require("../media/SOS_final_pdf.pdf")}
            size={6} ratio={8.5/11}/>
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
                           body= 'design research'></TitledContent>

            <TitledContent title='Tools + Skills'
                           body='InDesign, User Research, Interviews, Surveys'></TitledContent>

            <TitledContent title='Duration'
                           body='November 2019 - February 2020'></TitledContent>
            
            <TitledContent title='Course'
                           body='How Peole Work, Research Methods'></TitledContent>
            
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
