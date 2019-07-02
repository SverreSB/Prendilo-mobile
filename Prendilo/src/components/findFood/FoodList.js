import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from '../../../node_modules/axios';
import FoodDetail from './FoodDetail'
import foodData from '../../../foodObjects.json'

class FoodList extends Component {
    state = { foods: [] };
    componentWillMount() {
        /*axios.get('https://rallycoding.herokuapp.com/api/music_albums') //using album api until I find better api or connect to backend
            .then(response => this.setState({ foods: response.data}));*/
        this.setState({foods: foodData})
    }

    renderFoods() {
        return this.state.foods.map(food => 
            <FoodDetail key={food.product} food={food}/>
        );
    }

    render() {
        return (
            <ScrollView>
                {this.renderFoods()}
            </ScrollView>
        );
    }
}

export default FoodList;