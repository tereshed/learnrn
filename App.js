import React, {useState} from 'react';
import AppLoading from 'expo-app-loading';

import * as Font from 'expo-font';

import { StyleSheet, View } from 'react-native';
import Header from './widgets/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
}

export default function App() {

  const [initApp, setInitApp] = useState(false);
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  if(!initApp) {
    return <AppLoading 
      startAsync={fetchFonts} 
      onFinish={() => setInitApp(true)}
      onError={(error) => {console.log(error)}}
    />;
  }

  const startNewGame = () => {
    setGuessRounds(0);
    setUserNumber(null);
  }

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setGuessRounds(0);
  } 
  const gameOverHandler = numOfRounds => {
    setGuessRounds(numOfRounds);
  }
  let content = <StartGameScreen onStatrGame={startGameHandler}/>;

  if(userNumber && guessRounds <= 0) {
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler}/>;
  } else if (guessRounds > 0) {
    content = <GameOverScreen 
      roundCounter={guessRounds} 
      gameNumber={userNumber}
      onStartNewGame={startNewGame}
    />;
  }
  return (
    <View style={styles.screen}> 
      <Header
        title='Guess a Number'
      />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});