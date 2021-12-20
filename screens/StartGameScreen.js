import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard,Alert} from 'react-native';
import Card from '../widgets/Card';
import Input from '../widgets/Input';
import NumberContainer from '../widgets/NumberContainer';
import Colors from '../constants/colors';

const StartGameScreen = props => {

    const [interedValue, setInteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();

    const numberInputHandler = inputText => {
        setInteredValue(inputText.replace(/[^0-9]/g, ''));
    };

    const resetInput = () => {
        setInteredValue('');
        setConfirmed(false);
    };

    const confirmInput = () => {
        const chosenNumber = parseInt(interedValue);

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
            Alert.alert(
                'Invalid Number', 
                'Number has to be between 1 and 99',
                [{text: 'Okey', style: 'destructive', onPress: resetInput}],
                );
            return;
        }
        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setInteredValue('');
        Keyboard.dismiss();
    };
    let confirmOutput;
    if (confirmed) {
        confirmOutput=(
            <Card style={styles.successCard}>
                <Text>You selected</Text>
                <NumberContainer>
                    {selectedNumber}
                </NumberContainer>
                <Button
                    title='START GAME' 
                    onPress={() => {}}
                />
            </Card>
        )
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
        <View style={styles.screen}>
            <Card style={styles.inputContainer}>
                <Text style={styles.titleScreen}>Select a Number</Text>

                <View>
                    <Input
                        style={styles.input}
                        blurOnSubmit
                        keyboardType="number-pad"
                        maxLength={2}
                        onChangeText={numberInputHandler}
                        value={interedValue}
                    />
                </View>

                <View style={styles.buttonContaiter}>
                    <View style={styles.button}>
                        <Button
                            title="Reset"
                            color={Colors.accent}
                            onPress={resetInput}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title="Confirm"
                            color={Colors.primary}
                            onPress={confirmInput}
                        />
                    </View>
                </View>
            </Card>
            {confirmOutput}
        </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    inputContainer: {
        width: "80%",
        maxWidth:320,
        alignItems: 'center',
    },
    buttonContaiter: {
        flexDirection: 'row',
        width: "100%",
        maxWidth: 300,
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    button: {
        width: 100
    },
    titleScreen: {
        fontSize: 20,
        marginVertical: 10
    },
    input: {
        width: 50,
        textAlign: 'center',

    },
    successCard: {
        alignItems: 'center',
        marginTop: 20,
    },

});

export default StartGameScreen;