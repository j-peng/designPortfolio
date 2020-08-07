import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class GalleryCard extends React.Component {
    render(){
        return (
            <Card border="light" style={{ width: '24rem' }}>
                <Card.Img src={require("./media/test.jpg")} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                        {this.props.type}
                        {this.props.tools}
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
        types : [ 'body1', 'body2'],
        tools: [ 'body1.1', 'body2.1']
    }
  }

  render() {
    return (
        <div class = 'pt-5'>
        <div data-spy="scroll" data-target="#list-example" data-offset="0" class="scrollspy-example"
             name={this.props.section}>
            <Container id={this.props.section}>
            <Row>

              <Col>
              <button onClick = {this.props.handleClick}>
                <GalleryCard 
                    title={this.state.titles[1]} 
                    type={this.state.types[1]} 
                    tools={this.state.tools[1]} 
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
        </div>
    )
  }
}

export default Gallery;