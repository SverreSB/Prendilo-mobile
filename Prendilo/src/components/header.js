import React from 'react';
import {Text, View} from 'react-native';

const Header = () => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>Prendilo</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#8cb709',
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        paddingTop: 50
    },
    textStyle: {
        fontSize: 35
    }
}

export default Header;