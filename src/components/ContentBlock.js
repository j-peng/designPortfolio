import React from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Figure from 'react-bootstrap/Figure'

import { RViewer, RViewerTrigger } from 'react-viewerjs'

import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

import { Link } from "react-router-dom";

// import { Document, Page } from 'react-pdf';

class TitledContent extends React.Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
    };
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
  
  render() {
    const width = this.state.width
    const isMobile = width <= 700

    if (isMobile) {
      return(
        <div>
          <Container>
            <h5>{this.props.title}</h5>
            <p>{this.props.body}</p>
          </Container>
        </div>
      )
    } else {

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
}

class ContentBlock extends React.Component {
  render(){
    return (
      <div class='py-2'>
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
                    <Figure class='pb-3 pointer'>
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
      let imgList = this.props.imageList.slice()
      let firstImg = imgList[0]
      imgList = imgList.slice(1)
      imgList.push(firstImg)
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
                      imageUrls={imgList}>
              <RViewerTrigger>
                <Figure class='pb-2 pointer'>
                  <Figure.Image alt={this.props.altTextList[1]}
                                src={this.props.imageList[1]}/>
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
      } else if (numImages === 3) {
        let imgList2 = this.props.imageList.slice()
        let imgList3 = this.props.imageList.slice()
        let firstImg = imgList2[0]
        let secondImg = imgList2[1]
        imgList2 = imgList2.slice(1)
        imgList3 = imgList3.slice(2)
        imgList2.push(firstImg)
        imgList3.push(firstImg, secondImg)
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
                          imageUrls={imgList2}>
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
                          imageUrls={imgList3}>
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
                        <Figure class='pb-3 pointer'>
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
      <div class='pb-3'>
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
          <p class='pl-3'><span class='h6'>{this.props.title}</span> {this.props.body}</p>
      </Row>
    )
  }
}

class YTVid extends React.Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
    };
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
  
  render() {
    const width = this.state.width
    const isMobile = width <= 700
    let source = "https://www.youtube.com/embed/"  + this.props.ytid

    if (isMobile) {
      let w = this.state.width * 0.9
      let h = w * 0.6
      return(
        <div>
          <Container>
            <iframe id="ytplayer" type="text/html"
                        src={source}
                        frameborder="0"
                        allowfullscreen="allowfullscreen"
                        width = {w}
                        height = {h}></iframe>
            <p class='caption'>{this.props.caption}</p>
          </Container>
        </div>
      )
    } else {
      let margin = Math.floor((12 - this.props.size) / 2)
      let w = Math.floor(this.state.width/12) * this.props.size
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
      </div>)
    }
  }
}

class Spacer extends React.Component {
  render(){
    return (
    <div class={'py-' + this.props.size}>
    </div>
    )
  }
}

class PDF extends React.Component {
  render(){
    let margin = Math.floor((12 - this.props.size) / 2)
    let w = Math.floor(window.innerWidth/12) * this.props.size
    let h = w * this.props.ratio
    return(
      <Container>
        <Row>
          <Col md={margin}/>
          <Col md={this.props.size}>
            <embed class='pb-3' src= {this.props.file} width={w} height={h}></embed>
            <p class='caption'>{this.props.caption}</p>
          </Col>
        </Row>
      </Container>
    )
  }
}

// class PDFViewer extends React.Component {
//   render(){
//     const numPages = this.props.numPages
//     const setNumPages = null;
//     const pageNumber = 1
//     const setPageNumber = 1;
   
//     function onDocumentLoadSuccess({ numPages }) {
//       setNumPages(numPages);
//     }
//     return (
//       <div>
//         <Document
//           file={this.props.file}
//           onLoadSuccess={onDocumentLoadSuccess}>
//           <Page pageNumber={pageNumber} />
//         </Document>
//         <p>Page {pageNumber} of {numPages}</p>
//       </div>
//     )
//   }
// }


class ImgWithDesc extends React.Component {
  render(){
    return(
      <OverlayTrigger
        placement={this.props.placement}
        overlay={<Tooltip>
                  {this.props.text}
                  </Tooltip>}>
        <a>{this.props.image}</a>
      </OverlayTrigger>
    )
  }
}

class SectionTitle extends React.Component {
  render(){
    return (
      <div class='py-2'>
        <Container name="top" fluid="md">
            <Row>
              <Col md = {2}>
              </Col>
              <Col md = {4}>
                <h1>{this.props.name}</h1>
              </Col>
            </Row>
        </Container>
      </div>
    )
  }
}

class SectionTitleWithBack extends React.Component {
  render(){
    return (
      <div class='py-2'>
        <Container name="top" fluid="md">
            <Row>
              <Col md = {1}/>
              <Col md = {1}>
                <Link to={this.props.page} 
                      class='p-link'>
                  <a>back</a>
                </Link>
              </Col>
              <Col md = {4}>
                <h1>{this.props.name}</h1>
              </Col>
            </Row>
        </Container>
      </div>
    )
  }
}

class BackButton extends React.Component {
  render(){
    return(
      <Container>
        <Row>
          <Col md={1}/>
          <Col>
              <Link to={this.props.page} class='p-link'>
                <a>back</a>
              </Link>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default TitledContent;
export { ContentBlock, CustomContent, Image, ImageLibrary, Divider, SmallContentBlock, 
         YTVid, MultiImages, Spacer, PDF, ImgWithDesc, BackButton, SectionTitle, 
         SectionTitleWithBack };