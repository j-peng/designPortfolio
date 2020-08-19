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
                    <Figure class='pb-5 pointer'>
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

class MultiImages extends React.Component {
  render(){
    let options = { transition: false, 
                    navbar: 0, 
                    title: 0, 
                    toolbar: { rotateLeft: false, rotateRight: false,
                              flipHorizontal: false, flipVertical: false,
                              reset: false, play: false}
                  }

    let margin = Math.ceil((12 - this.props.size) / 2)
    let numImages = this.props.imageList.length
    let single = Math.floor(this.props.size/numImages)
    if (numImages === 2) {
    return (
      <div>
        <Container>
          <Row>
          <Col md={margin}></Col>
            <Col md={single}>
              <RViewer options={options} 
                      imageUrls={this.props.imageList}>
              <RViewerTrigger>
                <Figure class='pb-2 pointer'>
                  <Figure.Image alt={this.props.altTextList[0]}
                                src={this.props.imageList[0]}/>
                </Figure>
              </RViewerTrigger>
              </RViewer>
            </Col>
            <Col md={single}>
              <RViewer options={options} 
                      imageUrls={this.props.imageList}>
              <RViewerTrigger>
                <Figure class='pb-2 pointer'>
                  <Figure.Image alt={this.props.altTextList[1]}
                                src={this.props.imageList[1]}/>
                </Figure>
              </RViewerTrigger>
              </RViewer>
              <p class='align-center caption'>{this.props.caption}</p>
            </Col>
          </Row>
          <Row><Col md={margin}/>
                <Col md={this.props.size}>
                  <p class='align-center caption'>{this.props.caption}</p>
                </Col>
              </Row>
        </Container>
      </div>
      )
      } else if (numImages === 3) {
        return (
          <div>
            <Container>
              <Row>
              <Col md={margin}></Col>
                <Col md={single}>
                  <RViewer options={options} 
                          imageUrls={this.props.imageList}>
                  <RViewerTrigger>
                    <Figure class='pb-2 pointer'>
                      <Figure.Image alt={this.props.altTextList[0]}
                                    src={this.props.imageList[0]}/>
                    </Figure>
                  </RViewerTrigger>
                  </RViewer>
                </Col>
                <Col md={single}>
                  <RViewer options={options} 
                          imageUrls={this.props.imageList}>
                  <RViewerTrigger>
                    <Figure class='pb-2 pointer'>
                      <Figure.Image alt={this.props.altTextList[1]}
                                    src={this.props.imageList[1]}/>
                    </Figure>
                  </RViewerTrigger>
                  </RViewer>
                </Col>
                <Col md={single}>
                  <RViewer options={options} 
                          imageUrls={this.props.imageList}>
                  <RViewerTrigger>
                    <Figure class='pb-2 pointer'>
                      <Figure.Image alt={this.props.altTextList[2]}
                                    src={this.props.imageList[2]}/>
                    </Figure>
                  </RViewerTrigger>
                  </RViewer>
                </Col>
              </Row>
              <Row><Col md={margin}/>
                <Col md={this.props.size}>
                  <p class='align-center caption'>{this.props.caption}</p>
                </Col>
              </Row>
            </Container>
          </div>
        )
      }
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
    let imgList = this.props.imageList.slice()
    for (var i=0; i < this.props.imageList.length; i++) {
      result.push(<Row>
                    <Col md={margin}></Col>
                    <Col md={this.props.size}>
                      <RViewer options={myOptions} 
                              imageUrls={imgList}>
                      <RViewerTrigger>
                        <Figure class='pb-5 pointer'>
                          <Figure.Image alt={this.props.altTextList[i]}
                                        src={this.props.imageList[i]}/>
                          <Figure.Caption class='align-center caption'>
                            {this.props.captionList[i]}
                          </Figure.Caption>
                        </Figure>
                      </RViewerTrigger>
                      </RViewer>
                    </Col>
                  </Row>)
        let firstImg = imgList[0]
        imgList = imgList.slice(1)
        imgList.push(firstImg)
      }
    
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
          <p><span class='h6'>{this.props.title}</span> {this.props.body}</p>
      </Row>
    )
  }
}

class YTVid extends React.Component {
  render(){
    let margin = Math.floor((12 - this.props.size) / 2)
    let source = "https://www.youtube.com/embed/"  + this.props.ytid
    let w = Math.floor(window.innerWidth/12) * this.props.size
    let h = w * 0.6
    return (
    <div>
      <Container>
      <Row class='pt-4'>
        <Col md={margin}></Col>
        <Col md={this.props.size}>
          <iframe id="ytplayer" type="text/html"
                  src={source}
                  frameborder="0"
                  allowfullscreen="allowfullscreen"
                  width = {w}
                  height = {h}></iframe>
          <p class='caption'>{this.props.caption}</p>
        </Col>
        </Row>
        </Container>
    </div>
    )
  }
}

export default TitledContent;
export { ContentBlock, CustomContent, Image, ImageLibrary, Divider, SmallContentBlock, 
         YTVid, MultiImages };