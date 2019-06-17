import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

class FoodList extends Component {
    state = { foods: [] };
    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums') //using album api until I find better api or connect to backend
            .then(response => this.setState({ foods: response.data}));
    }

    renderFoods() {
        return this.state.foods.map(food => 
            <Text key={food.title}>{food.title}</Text>
        );
    }

    render() {
        console.log(this.state);
        return (
            <View>
                {this.renderFoods()}
            </View>
        );
    }
}

export default FoodList;