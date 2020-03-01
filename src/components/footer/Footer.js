import React, { Component } from 'react';
import { FooterWrapper } from './Footer.style';


export default class Footer extends Component {
    render() {
        return (
            <FooterWrapper>
                    <a href="https://www.linkedin.com/in/kelly-watson-40817031/"><i className="fab fa-linkedin-in fa-2x"></i></a>
                    <a href="https://github.com/Kellz2812"><i className="fab fa-github fa-2x"></i></a>
                    <a href="mailto:kellz.watson.kw@gmail.com"><i className="far fa-envelope fa-2x"></i></a>

            </FooterWrapper>
        )
    }
}
