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
      return (
          <Dropdown style={{display: 'flex', justifyContent: 'flex-end'}} className='my-dropdown'>
            <Dropdown.Toggle variant='light'>
                {'Showing: ' + this.props.currCategory}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item onClick = {() => this.props.onClick('All')}>All</Dropdown.Item>
                <Dropdown.Item onClick = {() => this.props.onClick('Products')}>Products</Dropdown.Item>
                <Dropdown.Item onClick = {() => this.props.onClick('UI/UX')}>UI/UX</Dropdown.Item>
            </Dropdown.Menu>
           </Dropdown>
      )
    }
  }
  
  export default MyDropdown;