import React from 'react';

import GalleryCard from './Card.js'
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
                  <Row>
                    <Col md={2}></Col>
                    <Col md={5}>
                      <GalleryCard title={'Python Coding Projects'}
                                  category={'Programming'}
                                  img={require("./media/cover_python.png")}
                                  path={'/python'}>
                      </GalleryCard>
                    </Col>
                    <Col md={5}>
                      <GalleryCard title={'CMU CS Academy Content Development'}
                                category={'Programming'}
                                img={require("./media/cover_contentdev.png")}
                                path={'/CSAcontent'}>
                      </GalleryCard>
                    </Col>
                  </Row>

                  <Row>
                  <Col md={2}></Col>
                  <Col md={5}>
                    <GalleryCard title={'CMU CS Academy Illustrations'}
                                category={'Illustration'}
                                img={require("./media/cover_csaillustration.png")}
                                path={'/CSAillustration'}>
                    </GalleryCard>
                  </Col>
                  <Col md={5}>
                    <GalleryCard title={'Heart Decisions'}
                              category={'Illustration + Graphic Design'}
                              img={require("./media/cover_bme.jpg")}
                              path={'/HeartDecisions'}>
                    </GalleryCard>
                  </Col>
                  </Row>
              </Container>
          </div>
    )
  }
}

export default Play;