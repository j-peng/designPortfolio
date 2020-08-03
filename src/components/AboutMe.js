import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

class AboutMe extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div data-spy="scroll" data-target="#list-example" data-offset="0" class="scrollspy-example">
      <Jumbotron id="about" name="about">
            <h3>Thanks for stopping by!</h3>
            <p>
              My name is Janet Peng and I'm a junior studying Product Design at 
              Carnegie Mellon University. 
              I've also been a part of the UX Design team at CMU CS Academy, 
              an interactive online high school computer science curriculum for 
              the past year. I’m passionate about this project because I believe 
              world-class education should be widely accessible and free to all. 
              Through the project, I’ve learned about the importance of accessible 
              design in creating inclusive products and the power of user-centered design.
              I'm interested in designing experiences that exist at the intersection 
              of design and technology, especially if they are supported by physical 
              products. I like working with design thinking and understanding how 
              artifacts I design may fit or complement a larger system.
              In my spare time, you can find me working on creative coding projects, 
              trying to learn new [programming] languages, drawing, or trying to bake 
              my next “greatest” masterpiece (probably bread). 
              If you're interested in my work feel free to contact me by email: 
              jjpeng@andrew.cmu.edu. I'd love to talk. I'm currently looking for 
              an opportunity in summer 2021.
            </p>
        </Jumbotron>

      </div>
    )
  }
}

export default AboutMe;