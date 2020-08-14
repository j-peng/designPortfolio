import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import SectionTitle from '../SectionTitle.js'
import TitledContent from '../ContentBlock.js'

import '../../App.css';

class DocsColors extends React.Component {
  render(){
    return (
        <div>
            <SectionTitle name='Docs + Colors'></SectionTitle>
            <TitledContent title='Team'
                           body= 'Monica Chang'></TitledContent>

            <TitledContent title='Team Role'
                           body='Helped create new visual content, edit voice of previous documentation, 
                                 content organization, layout and interface design'></TitledContent>

            <TitledContent title='Description'
                           body='After working on the splash page'></TitledContent>
            
        </div>
    )
  }
}

export default DocsColors;