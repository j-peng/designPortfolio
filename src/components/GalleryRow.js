import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Spinner from 'react-bootstrap/Spinner'

import GalleryCard from './Card.js'

class GalleryRow extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  render() {

    return (
        <div class = 'pt-2'>
            <Row>
                <Col>
                  {/* <GalleryCard title={this.props.card1Info[0]}
                               category={this.props.card1Info[1]}
                               img={this.props.card1Info[2]}
                               path={this.props.card1Info[3]}>
                  </GalleryCard> */}
                  {this.props.card1}
                </Col>
                <Col>
                  {/* <GalleryCard title={this.props.card2Info[0]}
                              category={this.props.card2Info[1]}
                              img={this.props.card2Info[2]}
                              path={this.props.card2Info[3]}>          
                  </GalleryCard> */}
                  {this.props.card2}
                </Col>
                <Col>
                  {this.props.card3}
                </Col>
            </Row>
        </div>
    )
  }
}

export default GalleryRow;