import React from 'react';
import { View, Text, Image } from 'react-native'
import Card from './Card/Card'
import CardSection from './Card/CardSection'


const FoodDetail = ({food}) => {
    const { user_image, product, posted_by } = food 
    const { imageStyle, headerContentStyle } = style
    return(
        <Card>
            <CardSection>
                <Image
                    style={imageStyle}
                    source={{ uri: user_image }}
                />
                <View style={headerContentStyle}>
                    <Text>{product}</Text>
                    <Text>{posted_by}</Text>
                </View>
            </CardSection>

        </Card>
    );
};

const style = {
    imageStyle: {
        width: 50,
        height: 50,
        borderRadius: 50/2
    },
    headerContentStyle:  {
        justifyContent: 'space-around',
        flexDirection: 'column',
        marginLeft: 15
    }
}

export default FoodDetail