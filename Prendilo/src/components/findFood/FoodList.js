import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from '../../../node_modules/axios';
import FoodDetail from './FoodDetail'

class FoodList extends Component {
    state = { foods: [] };
    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums') //using album api until I find better api or connect to backend
            .then(response => this.setState({ foods: response.data}));
    }

    renderFoods() {
        return this.state.foods.map(food => 
            <FoodDetail key={food.title} food={food}/>
        );
    }

    render() {
        return (
            <View>
                {this.renderFoods()}
            </View>
        );
    }
}

export default FoodList;