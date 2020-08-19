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
            <SectionTitle name='Single Slice Toaster'></SectionTitle>
            <TitledContent title='Description'
                           body= ''></TitledContent>

            <TitledContent title='Tools + Skills'
                           body='SolidWorks, KeyShot'></TitledContent>

            <TitledContent title='Duration'
                           body='April 2020'></TitledContent>
            
            <TitledContent title='Course'
                           body='Product Design Studio II: Design for Interactions'></TitledContent>
        </div>
    )
  }
}

export default SingleSliceToaster;
