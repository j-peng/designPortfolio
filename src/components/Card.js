import React from 'react';
import Card from 'react-bootstrap/Card';

import { Link } from "react-router-dom";

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