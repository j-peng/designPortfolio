import React from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Figure from 'react-bootstrap/Figure'

import { RViewer, RViewerTrigger } from 'react-viewerjs'

class TitledContent extends React.Component {
  render(){
    return (
      <div>
        <Container>
            <Row>
                <Col md={2}></Col>
                <Col md={2}>
                    <h5 class='align-right'>{this.props.title}</h5>
                </Col>
                <Col md={5}>
                    <p>{this.props.body}</p>
                </Col>
            </Row>
        </Container>
      </div>
    )
  }
}

class ContentBlock extends React.Component {
  render(){
    return (
      <div>
        <Container>
            <Row>
                <Col md={4}></Col>
                <Col md={5}>
                    <p>{this.props.body}</p>
                </Col>
            </Row>
        </Container>
      </div>
    )
  }
}

class CustomContent extends React.Component {
  render(){
    return (
      <div>
        <Container>
            <Row>
                <Col md={4}></Col>
                <Col md={5}>
                    {this.props.content}
                    {console.log(this.props.content)}
                    {console.log('hi')}
                </Col>
            </Row>
        </Container>
      </div>
    )
  }
}

class Image extends React.Component {
  render(){
    let options = {navbar: 0, title: [ 1, (image) => this.props.caption ], 
                   toolbar: { prev: false, next: false, 
                              rotateLeft: false, rotateRight: false,
                              flipHorizontal: false, flipVertical: false,
                              reset: false, play: false}}

    let margin = Math.floor((12 - this.props.size) / 2)
    return (
      <div>
        <Container>
            <Row>
                <Col md={margin}></Col>
                <Col md={this.props.size}>

                <RViewer options={options} 
                         imageUrls={this.props.image}>
                  <RViewerTrigger>
                    <Figure class='pb-5'>
                      <Figure.Image
                        alt={this.props.altText}
                        src={this.props.image}
                      />
                      <Figure.Caption class='align-center caption'>
                        {this.props.caption}
                      </Figure.Caption>
                    </Figure>
                  </RViewerTrigger>
                </RViewer>


                </Col>
            </Row>
        </Container>
      </div>
    )
  }
}

class ImageLibrary extends React.Component {
  makeImage(){
    let result = []
    let myOptions = { transition: false, 
                      navbar: 0, 
                      title: 0, 
                      toolbar: { rotateLeft: false, rotateRight: false,
                                flipHorizontal: false, flipVertical: false,
                                reset: false, play: false}
                    }
    let margin = Math.floor((12 - this.props.size) / 2)

    for (var i=0; i < this.props.imageList.length; i++) {
      result.push(<Row>
                    <Col md={margin}></Col>
                    <Col md={this.props.size}>
                      <RViewer options={myOptions} 
                              imageUrls={this.props.imageList}>
                      <RViewerTrigger>
                        <Figure class='pb-5'>
                          <Figure.Image alt={this.props.altTextList[i]}
                                        src={this.props.imageList[i]}/>
                          <Figure.Caption class='align-center caption'>
                            {this.props.captionList[i]}
                          </Figure.Caption>
                        </Figure>
                      </RViewerTrigger>
                      </RViewer>
                    </Col>
                  </Row>)}
    
    return(
      <div>
        {result}
      </div>
    )
  }

  render(){
    
    let body = this.makeImage()

    return (
      <div>
        <Container>
          {body}
        </Container>
      </div>
    )
  }
}

class Divider extends React.Component {
  render(){
    let margin = Math.floor((12 - this.props.size) / 2)
    return (
      <div class='pb-5'>
        <Container>
            <Row>
                <Col md={margin}></Col>
                <Col md={this.props.size}>
                  <hr class='soft-break'></hr>
                </Col>
            </Row>
        </Container>
      </div>
    )
  }
}

class SmallContentBlock extends React.Component {
  render(){
    return (
      <Row class='pt-4'>
        <Col md={4}>
          <h6 class='align-right'>{this.props.title}</h6>
        </Col>
        <Col>
          <p>{this.props.body}</p>
        </Col>
      </Row>
    )
  }
}

export default TitledContent;
export {ContentBlock, CustomContent, Image, ImageLibrary, Divider, SmallContentBlock};