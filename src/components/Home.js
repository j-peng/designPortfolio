import React from 'react';

import AboveFold from './AboveFold.js'
// import GalleryRow from './GalleryRow.js'
import GalleryCard from './Card.js'
import SectionTitle from './SectionTitle.js'
import TitledContent from './ContentBlock.js'

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

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
                  <Row>
                    <Col md={2}></Col>
                    <Col md={5}>
                      <GalleryCard title={'Flowform wood spatula'}
                                  category={'Product Design'}
                                  img={require("./media/cover_spatula.jpg")}
                                  path={'/flowform'}>
                      </GalleryCard>
                    </Col>
                    <Col md={5}>
                      <GalleryCard title={'Book table'}
                                category={'Product Design'}
                                img={require("./media/cover_booktable.jpg")}
                                path={'/booktable'}>
                      </GalleryCard>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={2}></Col>
                    <Col md={5}>
                      <GalleryCard title={'Single slice toaster'}
                                  category={'Product Design'}
                                  img={require("./media/cover_toaster.jpg")}
                                  path={'/toaster'}>
                      </GalleryCard>
                    </Col>
                    <Col md={5}>
                      <GalleryCard title={'Semantics of form exploration'}
                                category={'Product Design'}
                                img={require("./media/cover_semantics.jpg")}
                                path={'/semantics'}>
                      </GalleryCard>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={2}></Col>
                    <Col md={5}>
                      <GalleryCard title={'CMU CS Academy'}
                                  category={'UI/UX + Design Research'}
                                  img={require("./media/cover_csa.jpg")}
                                  path={'/csacademy'}>
                      </GalleryCard>
                    </Col>
                    <Col>
                      <GalleryCard title={'Nourishing our communities + Scheduling our Socials'}
                                category={'Design Research'}
                                img={require("./media/cover_nocsos.jpg")}
                                path={'/NOC+SOS'}>
                      </GalleryCard>
                    </Col>
                  </Row>

                </Container>

              </div>
            </div>
          </div>
    )
  }
}

export default Home;