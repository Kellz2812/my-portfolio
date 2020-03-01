import React, { Component } from 'react';
import { LeftColWrapper } from './LeftCol.style';
import Card from '../../shared/card/Card';

export default class LeftCol extends Component {
    render() {
        
        return (
            <LeftColWrapper>
                <Card 
                title='Dice Roll' 
                description='Two rolling dice, coded in React' 
                link='https://react-dice-roll.herokuapp.com/'
                />
                <Card 
                title='Product Website' 
                description='Coding a dummy site design' 
                link='https://young-reef-52446.herokuapp.com/'
                />
            </LeftColWrapper>
        )
    }
}
