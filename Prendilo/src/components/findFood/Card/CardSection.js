import React from 'react';
import { View } from 'react-native';
import Card from './Card';

const CardSection = ({children}) => {
    return(
        <View style={style.containerStyle}>
            {children}
        </View>
    )
}

const style = {
    containerStyle:  {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
}

export default CardSection