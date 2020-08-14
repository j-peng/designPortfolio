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
    this.state = {
      nameIsJanet : true,
    }
    this.handleClick = this.handleClick.bind(this)
  }
  
  handleClick(){
    this.setState({
      nameIsJanet : ! this.state.nameIsJanet,
    })
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
                                          '/play' )}
                            card2Info={Array('Book table' , 
                                        'Product Design',
                                          require("./media/cover_booktable.jpg"),
                                        'http://google.com/' )}>
                                        
                </GalleryRow>

                <GalleryRow card1Info={Array('Single slice toaster' , 
                                        'Product Design',
                                          require("./media/cover_toaster.jpg"),
                                        'http://google.com/' )}
                            card2Info={Array('Semantics of form exploration' , 
                                        'Product Design',
                                          require("./media/cover_semantics.jpg"),
                                        'http://google.com/' )}>
                                        
                </GalleryRow>

                <GalleryRow card1Info={Array('CMU CS Academy' , 
                                        'UI/UX + Design Research',
                                          require("./media/cover_csa.jpg"),
                                        '/csacademy' )}
                            card2Info={Array('Nourishing our communities + Scheduling our Socials' , 
                                        'Design Research',
                                          require("./media/cover_nocsos.jpg"),
                                        'http://google.com/' )}>
                                        
                </GalleryRow>
                </Container>
              </div>
            </div>
          </div>
    )
  }
}

export default Home;