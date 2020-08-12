import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

class AboveFold extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div data-spy="scroll" data-target="#list-example" data-offset="0" class="scrollspy-example">
      <Jumbotron id="intro">
            <h1>Hey there, I’m Janet</h1>
            <h3>
                I’m a Junior studying&nbsp;  
                <span class = 'h3highlight'>Product Design</span> @
                  <a href='https://www.design.cmu.edu/' 
                     class='big-link'
                     target="_blank">CMU </a>
                
            </h3>
            <h3>
                I’m a Content Developer and the&nbsp;
                <span class = 'h3highlight'>UX Design Team Lead</span> @
                  <a href='https://academy.cs.cmu.edu/' 
                     class='big-link'
                     target="_blank">CMU CS Academy </a>
            </h3>
        </Jumbotron>

      </div>
    )
  }
}

export default AboveFold;