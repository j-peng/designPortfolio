import React from 'react';
import SocialLinks from './Socials.js'

class Footer extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div class='pt-5 align-center'>
        <hr class='soft-break'></hr>
        <SocialLinks></SocialLinks>
        <p class='caption pt-3'>© 2020 Janet Peng. All Rights Reserved. Designed and coded 
        myself with React.</p>
      </div>
    )
  }
}

export default Footer;