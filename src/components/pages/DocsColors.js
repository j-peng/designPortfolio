import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import SectionTitle from '../SectionTitle.js'
import TitledContent from '../ContentBlock.js'
import {ContentBlock, Image, ImageLibrary, Divider, MultiImages, Spacer} from '../ContentBlock.js'

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
                           body='After working on the splash page, we worked on updating
                           the designs of pages linked to the splash page. This included
                           our about page, FAQ page, and our framework documentation
                           page. The new Docs + Colors page replaced the Docs page and the
                           Colors page, both used to document pieces of the CMU
                           CS Academy graphics framework. Our main goals for this update
                           were to: make the page fit our new style, clear up the formatting
                           so that the page could be skimmed more easily, and provide
                           more diagram or image based documentation for visual learners.
                           To see the live site visit:'></TitledContent>
            <ContentBlock body=<a href='https://academy.cs.cmu.edu/docs'
            class='link' target='_blank'>https://academy.cs.cmu.edu/docs</a>/>

            <ImageLibrary imageList={[ require("../media/docs_final_1.png"),
                                      require("../media/docs_final_2.png") ]}
                                      size={6}
                                      captionList={[ 'Overview of new design and layout for desktop',
                                                     'Documentation search feature for desktop' ]}
                                      altTextList={[ '', '' ]}/>
            <MultiImages imageList={[ require("../media/docs_final_3.png"), 
                                      require("../media/docs_final_4.png") ]}
                          size={6}
                          caption='Page design for mobile'
                          altTextList={ ['', '' ] }/>
            <Image image={require("../media/docs_final_5.png")}
                   size={6}
                   caption='New diagrams created for the page'
                   altText={''}/>
            
        </div>
    )
  }
}

export default DocsColors;