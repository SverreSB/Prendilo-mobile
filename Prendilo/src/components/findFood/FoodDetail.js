import React from 'react';
import { Text } from 'react-native';
import Card from './Card/Card'
import CardSection from './Card/CardSection'

const FoodDetail = ({food}) => {
    return(
        <Card>
            <CardSection>
                <CardImage/>
                <CardText>
                    {food.title}
                    {food.name}
                </CardText>
            </CardSection>
        </Card>
    );
};

export default FoodDetail