import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

class FoodList extends Component {
    state = { foods: [] };
    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums') //using album api until I find better api or connect to backend
            .then(response => this.setState({ foods: response.data}));
    }

    render() {
        console.log(this.state);
        return (
            <View>
                <Text>Food</Text>
            </View>
        );
    }
}

export default FoodList;