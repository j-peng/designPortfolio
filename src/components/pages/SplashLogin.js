import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import SectionTitle from '../SectionTitle.js'
import TitledContent from '../ContentBlock.js'
import {ContentBlock, Image, Divider} from '../ContentBlock.js'

import '../../App.css';

class CSASplashLogin extends React.Component {
  render(){
    return (
        <div>
            <SectionTitle name='Splash Page + Login'></SectionTitle>
            <TitledContent title='Team'
                           body= 'Monica Chang, Se Eun Park, V Shiau'/>

            <TitledContent title='Team Role'
                           body='Helped currate and assemble (visual and written) 
                                 content, content flow, layout design, illustrations'/>

            <TitledContent title='Description'
                           body='Spring 2020, the UX Design Team at CMU CS Academy started 
                                 working on redesigning the color system and style of the website. 
                                 Because of the low contrast of the previous colors, the site 
                                 needed a new set of colors with high contrast and distinct 
                                 hues to assist students and teachers with visual impairments. 
                                 Further, the interface did not have a cohesive voice or style. 
                                 We set out to better unify the website’s experience and 
                                 how we would expose new users to our company’s unique personality.'/>
            <ContentBlock body='The first interface we began designing to reinvent the color system 
                                and the style was the splash page and other related sign up/login interfaces. 
                                To see the live site vist: https://academy.cs.cmu.edu/splash'/>
            {/* <CustomContent content={<p>hi</p>}/> */}
            <Image image={require("../media/splash_1.png")}
                   size={8}
                   caption={'Dektop and mobile splash page above the fold'}
                   altText={'Mock up images of the above the fold section of the desktop and mobile splash page'}/>
             <Image image={require("../media/splash_2.png")}
                   size={8}
                   caption={'Overview of parts of the splash page'}
                   altText={'Various sections of the splash page laid out as diagonally tilted frames'}/>
            <Image image={require("../media/splash_3.png")}
                   size={8}
                   caption={'UI designs for select login pieces'}
                   altText={'Login, sign up, forgot password modals'}/>

            <Divider size={6}/>

            <TitledContent title='Process'
                           body='We started by brainstorming the content we wanted to include 
                                 on the splash page. We considered what kinds of information 
                                 our users, specifically teachers, school administrators, 
                                 and students, wanted to see and know once they visited the 
                                 site. We also reviewed the old site splash page to better 
                                 understand what infomration we were currently offering and 
                                 the gaps in the infomration. After talking to the project 
                                 manager to get her input and vision of the splash page content, 
                                 we narrowed it down to six broad content categories: 
                                 basic information,  hooks that “make a statement”, 
                                 humanizing CS Academy, showing credibility, explaining the 
                                 logisitcs of using our product, and how we are engaging 
                                 and creative. We decided that some of these content cateogries 
                                 needed more space on the splash than others since 
                                 “showing credibility” came a lot through being 
                                 Carnegie Mellon University Computer Science Academy.'/>

            <ContentBlock body='With general content brainstormed, we worked on possible 
                                flows to help organize the content we wanted to 
                                include that would cover all our content categories.'/>
            <Image image={require("../media/splash_4.png")}
                   size={8}
                   caption={'Splash page content and content flows ideation'}
                   altText={'Sticky note style ideation for content ideas and page flow ideas.'}/>

            <ContentBlock body='After settling on a content stucture, we began to visualize 
                                what individual pieces of the page would look like. We paid 
                                close attention to content and wording during these iterations. 
                                Next, we roughly assembled these individual pieces into our 
                                splash page flow plan. From there, we were prepared to begin to 
                                add color and more deliberate styling to the page to better 
                                reflect the CMU CS Academy voice.'/>
            <ContentBlock body='Before stylizing, we put together a list of words that helped us 
                                all understand our company: playful, professional, incluzive, 
                                engaging, confident'/>
            <Image image={require("../media/splash_5.png")}
                   size={8}
                   caption={'Style iterations for the splash page'}
                   altText={'Six frames showing a variety of styling choices applied to the same page content'}/>
            
            <ContentBlock body='After style, we worked on fializing colors. We had tried a 
                                lot of color palettes before formally working on the splash 
                                page so we had some sort of direction to go in. We were also 
                                drawn towards purple/blue as a main color since they had 
                                been the main colors used on the site in the past. To compare 
                                colors, we added them to the styalized splash page layouts. 
                                We intentionally chose to pick colors last so we could compare 
                                them in the context of the page’s content.'/>
            <Image image={require("../media/splash_6.png")}
                   size={6}
                   caption={'Selection or color palette exploration'}
                   altText={'15 color palette variations many consisting of the color purple'}/>
            <ContentBlock body='After Finishing up the splash page, we began to build out 
                                styled components for other related pages, such as the login 
                                and sign up pages. To make the login and sign up experience 
                                more integrated with the newly stalized and colored splash page, 
                                we decided to make them modals. We also applied our new color 
                                scheme to the various buttons and input boxes. Finally, 
                                we updated the tabbing strucutre for the different account 
                                types and made the account descriptions more readable.'/>                 
            
        </div>
    )
  }
}

export default CSASplashLogin;