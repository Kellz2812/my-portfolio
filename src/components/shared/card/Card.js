import React, { Component } from 'react';
import { CardWrapper } from './Card.style';

export default class Card extends Component {
    render() {

        const {
            title, description, link
       } = this.props;

        return (
            <CardWrapper>
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <a href={link}>Click here for this link</a>
            </CardWrapper>
        )
    }
}
