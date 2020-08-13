import React from 'react';
import { SocialIcon } from 'react-social-icons';

class SocialLinks extends React.Component {
  render() {
    return (
        <div class = 'pt-3'>
            <span class='px-2'>
                <SocialIcon url='https://www.linkedin.com/in/janet-peng-348198133/'
                            style={{ height: 30, width: 30 }} 
                            bgColor="#777873"
                            target="_blank"/>
            </span>

            <span class='px-2'>
                <SocialIcon url="https://medium.com/@jjpeng" 
                            style={{ height: 30, width: 30 }} 
                            bgColor="#777873"
                            target="_blank"/>
            </span>

            <span class='px-2'>
                <SocialIcon url='https://www.behance.net/jjpeng'
                            style={{ height: 30, width: 30 }} 
                            bgColor="#777873"
                            target="_blank"/>
            </span>

            <span class='px-2'>
                <SocialIcon url='https://github.com/j-peng'
                            style={{ height: 30, width: 30 }} 
                            bgColor="#777873"
                            target="_blank"/>
            </span>

            <span class='px-2'>
                <SocialIcon url='mailto: jjpeng@andrew.cmu.edu'
                            style={{ height: 30, width: 30 }} 
                            bgColor="#777873"
                            target="_blank"/>
            </span>
        </div>
    )
  }
}

export default SocialLinks;