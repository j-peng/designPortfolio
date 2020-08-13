import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'

import SectionTitle from '../SectionTitle.js'
import TitledContent from '../ContentBlock.js'

import '../../App.css';

class CSAcademy extends React.Component {
  render(){
    return (
        <div class='pt-5'>
            <SectionTitle name='CMU CS Academy'></SectionTitle>
            <TitledContent title='Description'
                           body='CMU CS Academy is an interactive online high 
                                 school computer science curriculum. As a member 
                                 of the UX Design team and as the current team lead, 
                                 we have worked many areas of the interface ranging 
                                 from new accessibility features to new colors and 
                                 visual style. On this page you can find our work 
                                 on the splash page, coding library documentation, 
                                 and our user’s programming exercise interface.'></TitledContent>

            <TitledContent title='Tools + Skills'
                           body='Figma, Procreate, User Testing'></TitledContent>

            <TitledContent title='Duration'
                           body='July 2019 - Present'></TitledContent>
            <Container>
                <Row>
                    <Col md={2}></Col>

                    <Col md={8}>
                        <Tabs defaultActiveKey="Splash Page + Login">
                            <Tab eventKey="Splash Page + Login" title="Splash Page + Login">
                                <p>1</p>
                            </Tab>
                            <Tab eventKey="Docs + Colors" title="Docs + Colors">
                                <p>2</p>
                            </Tab>
                            <Tab eventKey="Exercise Interface" title="Exercise Interface">
                                <p>3</p>
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </Container>
                       
        </div>
    )
  }
}

export default CSAcademy;