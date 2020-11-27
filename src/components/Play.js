import React from 'react';

import GalleryCard from './Card.js'
import SectionTitle from './SectionTitle.js'
import TitledContent from './ContentBlock.js'
import MyDropdown from './Dropdown.js'

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import '../App.css';

class Play extends React.Component {
  constructor(props){
    super(props)

    // THIS CONTAINS ALL THE CARDS
    // FOR ALL MY WORKS
    // IN ORDER
    let allCards = [
      // <GalleryCard title={'Heart Decisions'}
      //               category={'Illustration + Graphic Design'}
      //               img={require("./media/cover_bme.jpg")}
      //               path={'/HeartDecisions'}/>,

      <GalleryCard title={'Graphic and Layout Design'}
                    category={'Graphic Design'}
                    img={require("./media/cover_graphicdesign.jpg")}
                    path={'/graphics'}/>,

      <GalleryCard title={'Python Coding Projects'}
                    category={'Programming'}
                    img={require("./media/cover_python.png")}
                    path={'/python'}/>,

      <GalleryCard title={'CMU CS Academy Illustrations'}
                    category={'Illustration'}
                    img={require("./media/cover_csaillustration.png")}
                    path={'/CSAillustration'}/>,
      
      // <GalleryCard title={'CMU CS Academy Content Development'}
      //               category={'Programming'}
      //               img={require("./media/cover_contentdev.png")}
      //               path={'/CSAcontent'}/>,
    ]

    this.state = {
      filter: 'All',
      allCards: allCards.slice(),
      currCards: allCards.slice(),
    }

    this.handleClick = this.handleClick.bind(this)
  }

  createCardGallery(){
    let cards = this.state.currCards
    let gallery = [ ]
    for (let i = 0; i < cards.length; i++) {
      gallery.push(
        cards[i]
      )
    }
    return cards
  }

  handleClick(newCategory){
    this.setState({
      filter: newCategory,
      isAnimating: false
    })
    
    if (newCategory == 'All'){
      this.setState({
        currCards: this.state.allCards
      })
    } else {
      let cardsList = []

      for (let i = 0; i < this.state.allCards.length; i++){
        let card = this.state.allCards[i]
        if (card.props.category.includes(newCategory)){
          cardsList.push(
            card
          )
        }
      }
      this.setState({
        currCards: cardsList
      })
    }
  }

  render(){
    let cards = this.createCardGallery()
    return (
        <div>
            <Container>
              <Row>
                <Col md='3'/>
                <Col>
                  <h1>Play</h1>
                </Col>
                <Col>
                  <MyDropdown currCategory={this.state.filter} 
                                onClick={(i) => this.handleClick(i)}
                                categories={['All', 'Programming', 'Illustration', 'Graphic']}/>
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

export default Play;