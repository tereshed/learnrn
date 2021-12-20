import React from 'react';
import {View, Text, StyleSheet, Button, TextInput} from 'react-native';

const Card = props => {
    return (
    <View style={{...styles.card, ...props.style}}>{props.children}</View>
    );
};

const styles = StyleSheet.create({
    card : {
        shadowColor: 'rgba(0,0,0,50)',
        shadowOffset: {width: 0, height: 4},
        shadowRadius: 12.0,
        shadowOpacity: 0.26,
        backgroundColor: 'white',
        elevation: 12,
        padding: 20,
        borderRadius: 20

    }

});

export default Card;