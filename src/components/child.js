import React from 'react';

class Child extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
        <div>
            <button onClick = {this.props.handleClick}>
                peng
            </button>
        </div>
    )
  }
}

export default Child;