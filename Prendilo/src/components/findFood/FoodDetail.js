import React from 'react';
import { View, Text, Image } from 'react-native'
import Card from './Card/Card'
import CardSection from './Card/CardSection'


const FoodDetail = ({food}) => {
    const { user_image, product, posted_by, food_image } = food 
    const { profileImageStyle, headerContentStyle, foodImageStyle, productStyle } = style
    return(
        <Card>
            <CardSection>
                <Image
                    style={profileImageStyle}
                    source={{ uri: user_image }}
                />
                <View style={headerContentStyle}>
                    <Text style={productStyle}>{product}</Text>
                    <Text>{posted_by}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image
                    style={foodImageStyle}
                    source={ {uri: food_image} }
                />
            </CardSection>
        </Card>
    );
};

const style = {
    profileImageStyle: {
        width: 50,
        height: 50,
        borderRadius: 50/2,
        opacity: 1
    },
    headerContentStyle:  {
        justifyContent: 'space-around',
        flexDirection: 'column',
        marginLeft: 15,
        opacity: 1
    },
    productStyle: {
        fontSize: 18
    },
    foodImageStyle: {
        width: 350,
        height: 200
    }
}

export default FoodDetail