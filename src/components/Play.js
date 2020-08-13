import React from 'react';

import GalleryCard from './Card.js'
import GalleryRow from './GalleryRow.js'
import SectionTitle from './SectionTitle.js'
import TitledContent from './ContentBlock.js'

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import '../App.css';

class Play extends React.Component {
  render(){
    return (
        <div>
              {/* gallery */}
              <SectionTitle name='Play'></SectionTitle>
              <Container name="top" fluid="md">
                <GalleryRow card1Info={Array('Python Coding Projects' , 
                                        'Programming',
                                          require("./media/cover_python.png"),
                                        'http://google.com/' )}
                            card2Info={Array('CMU CS Academy Content Development' , 
                                        'Programming',
                                          require("./media/cover_contentdev.png"),
                                        'http://google.com/' )}>
                                        
                </GalleryRow>

                <GalleryRow card1Info={Array('CMU CS Academy Illustrations' , 
                                        'Illustration',
                                          require("./media/cover_csaillustration.png"),
                                        'http://google.com/' )}
                            card2Info={Array('Heart Decisions' , 
                                        'Illustration + Graphic Design',
                                          require("./media/cover_bme.jpg"),
                                        'http://google.com/' )}>
                                        
                </GalleryRow>

              </Container>
          </div>
    )
  }
}

export default Play;