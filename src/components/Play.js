import React from 'react';

import GalleryCard from './Card.js'
import GalleryRow from './GalleryRow.js'
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
      <GalleryCard title={'Graphic and Layout Design'}
                  category={'Graphic Design'}
                  img={require("./media/cover_graphicdesign.jpg")}
                  path={'/graphics'}
                  align={'left'}/>,
      
      <GalleryCard title={'CAD Modeling and Rendering'}
                    category={'Product Design'}
                    img={require("./media/cover_cadmodelling.jpg")}
                    path={'/CAD'}
                    align={'left'}/>,

      <GalleryCard title={'Manufacturing and Assembly'}
                    category={'Product Design'}
                    img={require("./media/cover_htam.jpg")}
                    path={'/DFM+DFA'}
                    align={'left'}/>,
      
      <GalleryCard title={'Sketchbook'}
                    category={'Drawing + Illustration'}
                    img={require("./media/cover_sketchbook.jpg")}
                    path={'/drawing'}
                    align={'left'}/>,

      <GalleryCard title={'Python Coding Projects'}
                    category={'Programming'}
                    img={require("./media/cover_python.png")}
                    path={'/python'}
                    align={'left'}/>,

      <GalleryCard title={'CMU CS Academy Illustrations'}
                    category={'Illustration'}
                    img={require("./media/cover_csaillustration.png")}
                    path={'/CSAillustration'}
                    align={'left'}/>,
      
      // <GalleryCard title={'CMU CS Academy Content Development'}
      //               category={'Programming'}
      //               img={require("./media/cover_contentdev.png")}
      //               path={'/CSAcontent'}/>,
    ]

    this.state = {
      filter: 'All',
      allCards: allCards.slice(),
      currCards: allCards.slice(),
      width: window.innerWidth,
    }

    this.handleClick = this.handleClick.bind(this)
    
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange)
  }
  
  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth })
  };

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

    const width = this.state.width
    const isMobile = width <= 700
    
    if (isMobile) {
      return(
        <div>
          <h1 class='pt-3 pl-3'>Play</h1>
          {cards}
        </div>
      )
    } else {
      return (
        <div>
          <Container>
            <h1 class='pt-3 pl-3'>Play</h1>
            <GalleryRow card1={this.state.allCards[0]} card2={this.state.allCards[1]} card3={this.state.allCards[2]}></GalleryRow>
            <GalleryRow card1={this.state.allCards[3]} card2={this.state.allCards[4]} card3={this.state.allCards[5]}></GalleryRow>
          </Container>
        </div>
      )
    }
  }
}

export default Play;