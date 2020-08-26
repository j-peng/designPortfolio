import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Card from 'react-bootstrap/Card';

import { Link } from "react-router-dom";


class UIUXGallery extends React.Component {
  render(){
    return(
      <Container>
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
                      category={'UI/UX + Design Research'}
                      img={require("./media/cover_nocsos.jpg")}
                      path={'/NOC+SOS'}>
            </GalleryCard>
          </Col>
        </Row>
      </Container>
    )
  }
}

class ProductsGallery extends React.Component {
  render() {
    return (
      <Container>
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
      </Container>
    )
  }
}


class GalleryCard extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  render() {
    return (
        <div class = 'pt-2 pb-5'>
        <div class='border-0 project-card'>
            <Link to={this.props.path} class='card'>
              <Card.Img variant="top rounded-sm" src={this.props.img} alt="Card image"/>
            </Link>
            <Card.Body class = 'pl-0 pt-2 pr-5 mr-5'>
                <h3>{this.props.title}</h3>
                <h6>{this.props.category}</h6>
            </Card.Body>
        </div>
        </div>
    )
  }
}

export default GalleryCard;
export { ProductsGallery, UIUXGallery }