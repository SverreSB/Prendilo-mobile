import React from 'react';
import { Text, View } from 'react-native';
//import { Fonts } from '../utils/Fonts'

const Header = ({headerText}) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#8cb709',
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        paddingTop: 50,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 15},
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative',
        marginBottom: 40
    },
    textStyle: {
        fontSize: 35,
        //fontFamily: Fonts.Pacifico
    }
}

export default Header;