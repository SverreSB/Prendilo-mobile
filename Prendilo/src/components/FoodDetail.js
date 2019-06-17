import React, { Component } from 'react';
import { Text, View } from 'react-native';

const FoodDetail = ({food}) => {
    return(
        <View>
            <Text>{food.title}</Text>
        </View>
    );
}

export default FoodDetail