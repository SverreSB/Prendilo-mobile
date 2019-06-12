import React, { Component } from 'react';
import { Text, View } from 'react-native';

class FoodList extends Component {
    componentWillMount() {
        console.log('Test')
    }

    render() {
        return (
            <View>
                <Text>Food</Text>
            </View>
        );
    }
}

export default FoodList;