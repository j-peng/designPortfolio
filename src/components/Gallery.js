import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class GalleryCard extends React.Component {
    render(){
        return (
            <Card border="light" style={{ width: '18rem' }}>
                <Card.Img src={require("./media/test.jpg")} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                        {this.props.desc}
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
        )
    }
}

class Gallery extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        titles : [ 'hi1', 'test2'],
        descriptions : [ 'body1', 'body2'],
    }
  }

  render() {
    return (
        <div>
        <div data-spy="scroll" data-target="#list-example" data-offset="0" class="scrollspy-example">
            <Container id="work">
            <Row>

              <Col>
              <button onClick = {this.props.handleClick}>
                <GalleryCard 
                    title={this.state.titles[1]} 
                    desc={this.state.descriptions[1]} 
                />

              </button>
              </Col>

              <Col>
              <button onClick = {this.props.handleClick}>
                <GalleryCard/>
              </button>
              </Col>
        
            </Row>
            </Container>
        </div>
            <div data-spy="scroll" data-target="#list-example" data-offset="0" class="scrollspy-example">
                <h4 id="play">Item 3</h4>
                    <p>...</p>
            </div>
        </div>
    )
  }
}

export default Gallery;