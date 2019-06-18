import React from 'react';
import { View, Text, Image } from 'react-native'
import Card from './Card/Card'
import CardSection from './Card/CardSection'


const FoodDetail = ({food}) => {
    return(
        <Card>
            <CardSection>
                <Image
                    style={style.imageStyle}
                    source={{ uri: food.thumbnail_image }}
                />
                <View style={style.headerContentStyle}>
                    <Text>{food.title}</Text>
                    <Text>{food.artist}</Text>
                </View>
            </CardSection>
        </Card>
    );
};

const style = {
    headerContentStyle:  {
        justifyContent: 'space-around',
        flexDirection: 'column',
    },
    imageStyle: {
        width: 50,
        height: 50
    }
}

export default FoodDetail