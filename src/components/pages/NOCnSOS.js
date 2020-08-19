import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import SectionTitle from '../SectionTitle.js'
import TitledContent from '../ContentBlock.js'
import {ContentBlock, Image, ImageLibrary, Divider} from '../ContentBlock.js'

import '../../App.css';

class SingleSliceToaster extends React.Component {
  render(){
    return (
        <div class='pt-5'>
            <SectionTitle name='Nourishing Our Communities + Scheduling Our Socials'></SectionTitle>
            <TitledContent title='Description'
                           body= 'design research'></TitledContent>

            <TitledContent title='Tools + Skills'
                           body='SolidWorks, KeyShot'></TitledContent>

            <TitledContent title='Duration'
                           body='November 2019 - February 2020'></TitledContent>
            
            <TitledContent title='Course'
                           body='How Peole Work, Research Methods'></TitledContent>
        </div>
    )
  }
}

export default SingleSliceToaster;
