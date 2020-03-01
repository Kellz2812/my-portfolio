import React, { Component } from 'react';
import { RightColWrapper } from './RightCol.style';
import Card from '../../shared/card/Card';

export default class RightCol extends Component {
    render() {
        return (
            <RightColWrapper>
                <Card 
                title='Quote Of the Day' 
                description='A daily quote generator, coded in React' 
                link='https://quotes-generator-project.herokuapp.com/'
                />
                <Card 
                title='Pokemon Fight Game' 
                description='A game I made for my son, who is crazy about Pokemon, to battle his favorite Pokemon.' 
                link='https://poke-battle-react.herokuapp.com/'
                />
            </RightColWrapper>
        )
    }
}
