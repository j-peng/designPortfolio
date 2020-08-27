import React from 'react';

import AboveFold from './AboveFold.js'
// import GalleryRow from './GalleryRow.js'
import GalleryCard from './Card.js'
import { ProductsGallery, UIUXGallery } from './Card.js'
import SectionTitle from './SectionTitle.js'
import MyDropdown from './Dropdown.js'

import { Spacer } from './ContentBlock.js'

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import '../App.css';

class Home extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      filter: 'All',
      isAnimating: true,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(newCategory){
    this.setState({
      filter: newCategory
    })
    this.setState({isAnimating: false})
  }

  render(){
    let cards = [ <ProductsGallery/>, <UIUXGallery/> ]
    if (this.state.filter === 'Products'){
      cards = [ <ProductsGallery/> ]
    } else if (this.state.filter === 'UI/UX'){
      cards = [ <UIUXGallery/> ]
    }

    return (
        <div>
            <AboveFold isAnimating={this.state.isAnimating}></AboveFold>
              
            <div name='work' class='pb-5'/>
            <Spacer size={2}/>
            <Container>
              <Row>
                <Col md='2'/>
                <Col>
                  <h1>Work</h1>
                </Col>
                <Col>
                  <MyDropdown currCategory={this.state.filter} 
                                onClick={(i) => this.handleClick(i)}/>
                </Col>
              </Row>
            </Container>
            
            <div>
              <Container name="top" fluid="md">
                {cards}
              </Container>

            </div>
          </div>
    )
  }
}

export default Home;