import React from 'react';
import { View, TouchableOpacity } from 'react-native';

const Card = ({children}) => {
    return(
        <TouchableOpacity style={styles.containerStyle}>
            {children}
        </TouchableOpacity>
    );
};

const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        elevation: 1,
        marginRight: 5,
        marginLeft: 5,
        marginBottom: 40
    }
}

export default Card