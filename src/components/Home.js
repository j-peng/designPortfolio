import React from 'react';

import AboveFold from './AboveFold.js'
import GalleryRow from './GalleryRow.js'
import SectionTitle from './SectionTitle.js'
import TitledContent from './ContentBlock.js'

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'

import '../App.css';

class Home extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
        <div>
          <div class='pt-5'>
            <AboveFold></AboveFold>
              
              <SectionTitle name='Work'></SectionTitle>
              
              <div>
              <Container name="top" fluid="md">
                <GalleryRow card1Info={Array('Flowform wood spatula' , 
                                        'Product Design',
                                          require("./media/cover_spatula.jpg"),
                                          '/flowform' )}
                            card2Info={Array('Book table' , 
                                        'Product Design',
                                          require("./media/cover_booktable.jpg"),
                                        '/booktable' )}>
                                        
                </GalleryRow>

                <GalleryRow card1Info={Array('Single slice toaster' , 
                                        'Product Design',
                                          require("./media/cover_toaster.jpg"),
                                        '/toaster' )}
                            card2Info={Array('Semantics of form exploration' , 
                                        'Product Design',
                                          require("./media/cover_semantics.jpg"),
                                        '/semantics' )}>
                                        
                </GalleryRow>

                <GalleryRow card1Info={Array('CMU CS Academy' , 
                                        'UI/UX + Design Research',
                                          require("./media/cover_csa.jpg"),
                                        '/csacademy' )}
                            card2Info={Array('Nourishing our communities + Scheduling our Socials' , 
                                        'Design Research',
                                          require("./media/cover_nocsos.jpg"),
                                        '/NOC+SOS' )}>
                                        
                </GalleryRow>
                </Container>
              </div>
            </div>
          </div>
    )
  }
}

export default Home;