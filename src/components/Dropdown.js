import React from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Dropdown from 'react-bootstrap/Dropdown'


class MyDropdown extends React.Component {
    constructor(props){
      super(props)
    }
    render(){
      let items = []
      for (let i=0; i < this.props.categories.length; i++){
        let category = this.props.categories[i]
        items.push(
          <Dropdown.Item onClick = {() => this.props.onClick(category)}>{category}</Dropdown.Item>
        )
      }
      return (
          <Dropdown style={{display: 'flex', justifyContent: 'flex-end'}} className='my-dropdown'>
            <Dropdown.Toggle variant='light'>
                {'Showing: ' + this.props.currCategory}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {items}
            </Dropdown.Menu>
           </Dropdown>
      )
    }
  }
  
  export default MyDropdown;