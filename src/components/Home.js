import React from 'react';

import AboveFold from './AboveFold.js'
// import GalleryRow from './GalleryRow.js'
import GalleryCard from './Card.js'
// import { ProductsGallery, UIUXGallery } from './Card.js'
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

    // THIS CONTAINS ALL THE CARDS
    // FOR ALL MY WORKS
    // IN ORDER
    let allCards = [
      <GalleryCard title={'3 chess sets'}
                    category={'Product Design'}
                    img={require("./media/cover_chess.jpg")}
                    path={'/chesssets'}/>,
      <GalleryCard title={'CMU CS Academy'}
                    category={'UI/UX + Design Research'}
                    img={require("./media/cover_csa.jpg")}
                    path={'/csacademy'}/>,
      <GalleryCard title={'On-the-go food experience'}
                    category={'Product Design'}
                    img={require("./media/cover_mealexperience.jpg")}
                    path={'/snackexperience'}/>,
      <GalleryCard title={'Flowform wood spatula'}
                   category={'Product Design'}
                   img={require("./media/cover_spatula.jpg")}
                   path={'/flowform'}/>,
      <GalleryCard title={'Book table'}
                    category={'Product Design'}
                    img={require("./media/cover_booktable.jpg")}
                    path={'/booktable'}/>,
      <GalleryCard title={'Nourishing our communities + Scheduling our Socials'}
                      category={'UI/UX + Design Research'}
                      img={require("./media/cover_nocsos.jpg")}
                      path={'/NOC+SOS'}/>
    ]

    this.state = {
      filter: 'All',
      isAnimating: true,
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
    // let cards = [ <ProductsGallery/>, <UIUXGallery/> ]
    // if (this.state.filter === 'Products'){
    //   cards = [ <ProductsGallery/> ]
    // } else if (this.state.filter === 'UI/UX'){
    //   cards = [ <UIUXGallery/> ]
    // }

    return (
        <div>
            <AboveFold isAnimating={this.state.isAnimating}></AboveFold>
            <div name='work' class='pb-5' id='work'/>
            <Spacer size={2}/>
            <Container>
              <Row>
                <Col md='3'/>
                <Col>
                  <h1>Work</h1>
                </Col>
                <Col>
                  <MyDropdown currCategory={this.state.filter} 
                                onClick={(i) => this.handleClick(i)}
                                categories={['All', 'Product', 'UI/UX']}/>
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