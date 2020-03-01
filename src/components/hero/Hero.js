import React, { Component } from 'react'
import { HeroWrapper } from './Hero.style';
import { Col } from 'reactstrap'; 

export default class Hero extends Component {
    render() {
        return (
                <HeroWrapper>
                    <Col md="6">
                        <img src={require('../../images/capetown.jpg')} alt='capetownimage'/>
                    </Col>
                    <Col md="6">
                         <h4>This is me.</h4>
                         <p>Hi! My name is Kelly... I am a self taught front end web developer from Cape Town. Im passionate about creating great looking and functional websites, by using the most relevant technologies. As a front end developer, my specialties are HTML, CSS and Javascript. I code mostly in React. Im also comfortable with Typescript, Next.js, Git and source control software, as well As Mongo. I can also incorporate style frameworks such as Bootstrap and Material UI. Check out some of my work on Github and via the below links. Feel free to hit me up with any questions by email or LinkedIn!</p>
                    </Col>               
                </HeroWrapper>
        )
    }
}
