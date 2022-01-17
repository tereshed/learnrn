import React from 'react';
import {View, Text, StyleSheet, Button, Alert} from 'react-native';
import Card from '../widgets/Card';

const GameOverScreen = props => {
    return <View style={styles.screen}>
        <Card>
        <Text>The Game is over!</Text>
        <Text>Number was: {props.gameNumber}</Text>
        <Text>Number of rounds: {props.roundCounter}</Text>
        <Button
          title="Start New Game"
          onPress={props.onStartNewGame}
        />
        </Card>
    </View>;
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default GameOverScreen;