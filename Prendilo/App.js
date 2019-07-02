/**
 *	Prendilo: A food sharing application
 * 	@author Sverre Broen
 *	Color pallette: https://www.color-hex.com/color-palette/62853
 */
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Header from './src/components/findFood/Header'
import FoodList from './src/components/findFood/FoodList'

const instructions = Platform.select({
  	ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  	android:
		'Double tap R on your keyboard to reload,\n' +
		'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  	render() {
    	return (
			<View style={{ flex: 1 }}> 
				<Header headerText={'Prendilo'}/>	
				<FoodList />
			</View>
    	);
  	};
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});
